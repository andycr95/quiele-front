import styled from "styled-components";


export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const FirstContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    background-color: #EDEDFE;

    h1{
        margin: 0;
    }
`;


export const SecondContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    width: 60%;

    h1{
        margin: 0;
        margin-bottom: 10px;
    }

    span{
        margin-bottom: 50px;
    }

    input{
        width: 100%;
        min-width: 355px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #D9D9D9;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        margin-bottom: 10px;
    }

    button{
        width: 100%;
        min-width: 360px;
        height: 40px;
        border-radius: 5px;
        border: none;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 15px;
        background-color: #000000;
        margin-bottom: 10px;
        color: #FFFFFF;
    }
`;
