import React from 'react';

const AllStudents = props => {
    const { firstName, lastName, cohort, instructor } = props;
    return (
        <div>
            <p>{ firstName }</p>
            <p>{ lastName }</p>
            <p>{ cohort }</p>
            <p>{ instructor }</p>
        </div>
    );
};

export default AllStudents;