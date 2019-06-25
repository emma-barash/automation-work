import React, { Component } from 'react';
import Form from '../shared/Form.js';
import axios from 'axios';
import CreateStudent from './CreateStudent.js';
import AllStudents from './AllStudents.js';
import { 
    StudentContainer,
    FormTitle
 } from '../elements/index.js';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents: [],
            isEdit: false,
            addStudent: false,
            updateStudent: {}
        }
    }

    getStudents = () => {
        axios.get('/student').then(res => {
            this.setState(ps => ({
                allStudents: res.data, ...ps.allStudents
            }));
        });
    };
    
    createStudent = student => {
        axios.post('/student', student).then(res => {
            console.log(res.data);
        });
        this.getStudents()
    };

    deleteStudent = id => {
        axios.delete(`/student/${id}`).then(res => {
            console.log(res.data)
            this.getStudents();
        });
    };

    handleCheckbox = () => {
        this.setState(ps => ({
            addStudent: !ps.addStudent
        }));
    };

    studentToUpdate = id => {
        const update = this.state.allStudents.find(student => id === student._id);
        this.setState(ps => ({ updateStudent: { ...update }, isEdit: !ps.isEdit }))
    }   
     
    updateStudent = updateThisStudent => {
        console.log(updateThisStudent)
        axios.put(`/student/${this.state.updateStudent._id}`, updateThisStudent)
        .then(res => {
            console.log(res.data);
            this.getStudents();
        })
        this.setState(ps => ({ isEdit: !ps.isEdit }))
    }

    componentDidMount() {
        this.getStudents();
    }

    render() {
        const mappedStudents = this.state.allStudents.map((student, i) => <AllStudents { ...student } key={ i } deleteStudent={ this.deleteStudent } studentToUpdate={ this.studentToUpdate }/>)
        return (
            <div style={{textAlign: 'center'}}>
            <p>All Students</p>
            <StudentContainer>
                { mappedStudents }
                </StudentContainer>
                <FormTitle onClick={this.handleCheckbox}>Create Student Form</FormTitle>
                { this.state.addStudent && !this.state.isEdit ?
                <Form
                    inputs={{ firstName: '', lastName: '', cohort: '', instructor: '', rentals: '', owing: '' }}
                    submit={ inputs => this.createStudent(inputs) }
                    render={ formProps => <CreateStudent { ...formProps } { ...this.state } />}
                />
                :
                null
                };
                {this.state.isEdit ?
                    <Form
                    inputs={{ firstName: this.state.updateStudent.firstName, lastName: this.state.updateStudent.lastName, cohort: this.state.updateStudent.cohort, instructor: this.state.updateStudent.instructor, rentals: this.state.updateStudent.rentals, owing: this.state.updateStudent.owing }}
                    submit={ inputs => this.updateStudent(inputs) }
                    render={ formProps => <CreateStudent { ...formProps } { ...this.state } />}
                />
                    :
                    null
                }
            </div>
        );
    };
};

export default Students;