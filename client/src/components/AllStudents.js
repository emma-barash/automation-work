import React from 'react';
import { Link } from 'react-router-dom'

import { 
    StudentCard,
    ToDetailName,
    UpdateStudent,
    DeleteStudent, 
} from '../elements/index.js';

const AllStudents = props => {
    const { firstName, lastName, cohort, instructor, studentToUpdate, deleteStudent, _id, rentals, owing } = props;
     console.log(rentals)
    return (
        <StudentCard>
            <ToDetailName><Link className="studentLink" to="studentDetail">{ firstName } { lastName }</Link></ToDetailName>
            <p>cohort: { cohort }</p>
            <p>instructor: { instructor }</p>
            <p>{rentals ? 
            'currently renting'
                :
            'not renting'
            }</p>
            <p>{owing ?
            'currently owing'
                :
            'not owing'
            }</p>
            <UpdateStudent onClick={() => studentToUpdate(_id)}>∆</UpdateStudent>
            <DeleteStudent onClick={() => deleteStudent(_id)}>X</DeleteStudent>
        </StudentCard>
    );
};

export default AllStudents;