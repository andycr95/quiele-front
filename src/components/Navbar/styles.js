import styled from 'styled-components';

export const Content = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin: 20px 0;`;

export const FirstContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 150px;
    height: 100%;
    
    h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        margin: 0;
        margin-bottom: 5px;
    }
    
    h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        margin: 0;
    }`;


export const SecondContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 115px;
    height: 100%;`;

export const Avatar = styled.img`
    width: 50px;
    height: 100%;
    border-radius: 50%;`;