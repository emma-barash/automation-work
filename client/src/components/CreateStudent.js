import React from 'react';

const CreateStudent = props => {
    // console.log(props)
    const { handleChange, handleSubmit, inputs } = props
    return (
        <div>
            <p>Student creation form here</p>
            <form onSubmit={handleSubmit}>
                <p>First Name:</p>
                <input onChange={handleChange} name="firstName"     value={inputs.firstName }   />
                <p>Last Name:</p>
                <input onChange={handleChange} name="lastName"      value={inputs.lastName }    />
                <p>Cohort:</p>
                <input onChange={handleChange} name="cohort"        value={inputs.cohort }      />
                <p>Instructor:</p>
                <input onChange={handleChange} name="instructor"    value={inputs.instructor }  />
                <button>Create Student</button>
            </form>
        </div>
    );
};

export default CreateStudent;