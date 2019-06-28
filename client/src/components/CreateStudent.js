import React from 'react';
import { 
    AddStudent,
    RentalCheckbox,
    Rentals
 } from '../elements/index.js';

const CreateStudent = props => {
    // console.log(props)
    const { handleChange, handleSubmit, inputs, isEdit, checked } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>First Name:</p>
                <input onChange={handleChange} name="firstName"     value={inputs.firstName }   />
                <p>Last Name:</p>
                <input onChange={handleChange} name="lastName"      value={inputs.lastName }    />
                <p>Cohort:</p>
                <input onChange={handleChange} name="cohort"        value={inputs.cohort }      />
                <p>Instructor:</p>
                <input onChange={handleChange} name="instructor"    value={inputs.instructor }  />
                <Rentals>Rentals: </Rentals>    <RentalCheckbox  type="checkbox" name="rentals" value="rental" onChange={ handleChange }/><br/>
                <Rentals>Owing:   </Rentals>    <RentalCheckbox  type="checkbox" name="owing"   value="owing" onChange={ handleChange }/><br/>
                <AddStudent>{isEdit ? 'Update Info' : 'Create Student'}</AddStudent>
                {isEdit && <AddStudent>Cancel</AddStudent>}
            </form>
        </div>
    );
};

export default CreateStudent;