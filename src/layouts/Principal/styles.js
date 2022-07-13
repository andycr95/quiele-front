import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    background-color: #f5f5f5;`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width};
    height: 100%;
    padding: 20px;
    max-height: 95vh;
    overflow: scroll;
    background-color: #f5f5f5;`;