import styled from 'styled-components';

export const AddStudent = styled.button`
    background-color: rgb(31, 29, 29);
    color: white;
    font-family: sans-serif;
    padding: 8px;
    border: none;
    font-size: 15px;
    &:hover{
        color: rgb(238, 119, 23);
        border: 2px solid goldenrod;
        cursor: pointer;
        padding: 4px;
    }
    &:focus{
        outline: none;
    }
`;

export const UpdateStudent = styled(AddStudent)`
    /* border: 1px solid rgb(238, 119, 23); */
    color: white;
    padding: 5px;
    display: inline-block;
    margin: 5px;
    width: 50px;
    &:hover{
        padding: 3px;
    }
    `;

export const DeleteStudent = styled(AddStudent)`
/* border: 1px solid rgb(238, 119, 23); */
color: white;
padding: 5px;
display: inline-block;
margin: 5px;
width: 50px;
&:hover{
        padding: 3px;
    }
`;