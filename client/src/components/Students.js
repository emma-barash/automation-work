import React, { Component } from 'react';
import Form from '../shared/Form.js';
import axios from 'axios';
import CreateStudent from './CreateStudent.js';
import AllStudents from './AllStudents.js';
import { StudentContainer } from '../elements/index.js';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents: [],
            isEdit: false
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

    componentDidMount() {
        this.getStudents();
    }

    render() {
        const mappedStudents = this.state.allStudents.map((student, i) => <AllStudents { ...student } key={ i } />)
        return (
            <div>
                <p>Display Students</p>
            <StudentContainer>
                { mappedStudents }
                </StudentContainer>
                <p>Add a Student:</p>
                <Form
                    inputs={{ firstName: '', lastName: '', cohort: '', instructor: '' }}
                    submit={ inputs => this.createStudent(inputs) }
                    render={ formProps => <CreateStudent { ...formProps } { ...this.state } />}
                />
            </div>
        );
    };
};

export default Students;