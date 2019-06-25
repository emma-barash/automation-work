import React from 'react';
import { 
    StudentCard,
    ToDetailName 
} from '../elements/index.js';

const AllStudents = props => {
    const { firstName, lastName, cohort, instructor } = props;
    return (
        <StudentCard>
            <ToDetailName>{ firstName } { lastName }</ToDetailName>
            <p>cohort: { cohort }</p>
            <p>instructor: { instructor }</p>
        </StudentCard>
    );
};

export default AllStudents;