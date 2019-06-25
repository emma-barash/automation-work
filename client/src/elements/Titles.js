import styled from 'styled-components';

export const ToDetailName = styled.h3`
    color: white;
    font-family: sans-serif;
    &:hover{
        color: rgb(238, 119, 23);
        cursor: pointer;
    }
`;

export const FormTitle = styled(ToDetailName)`
    margin: 40px auto auto auto ;
`;

export const Rentals = styled.p`
    color: white;
    display: inline;
`;