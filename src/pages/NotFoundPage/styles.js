import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    
    h1{
        font-style: normal;
        font-weight: 700;
        text-align: center;
        font-size: 49px;
        line-height: 59px;
        margin: 0;
        color: #000000;
    }
    
    p{
        font-style: normal;
        text-align: center;
        font-weight: 400;
        margin: 0;
        font-size: 22px;
        line-height: 27px;
        color: #000000;
    }`;

export const ErrorContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;`;

export const PrincipalButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 14px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #000000;
    
    a{
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        color: #8284AA;
        text-decoration: none;
    }`;