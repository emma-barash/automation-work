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
            addStudent: false
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
                <FormTitle onClick={this.handleCheckbox}>Create A Student</FormTitle>
                { this.state.addStudent ?
                <Form
                    inputs={{ firstName: '', lastName: '', cohort: '', instructor: '', rentals: '', owing: '' }}
                    submit={ inputs => this.createStudent(inputs) }
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