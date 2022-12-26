import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:5px;

`
export const FormLabel = styled.label`
    color:blue;
    
`

export const FormInput = styled.input`
    display: flex;
    margin: 5px auto;
    font-size: large;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid blue;
`
export const Btn = styled.button`
    margin: 5px;
    background-color: blue;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    height: 40px;
    min-width: 120px;
    color: white;
    cursor: pointer;
    font-weight:500;

    &:hover {
        background-color: #4290f5;
    }


`
