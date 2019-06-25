import React, { Component } from 'react';
import Form from '../shared/Form.js';
import CreateStudent from './CreateStudent.js';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    createStudent = () => {

    };

    render() {
        return (
            <div>
                <p>Display Students</p>
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