import styled from "styled-components";

export const Header = styled.header`
    
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    width: 100%;
    background-color: #1976D2;    
`
export const HeaderContainer = styled.div`
    max-width: 1200px;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`