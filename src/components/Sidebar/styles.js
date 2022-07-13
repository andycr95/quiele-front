import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    min-width: 250px;
    width: 20%;
    height: 100vh;
    background-color: #EDEDFE;

    @media (max-width: 768px) {
        min-width: 80px;
    }
`;

export const LogoContent = styled.div`
    width: 160px;
    height: 46px;
    margin-top: 22px;
    margin-left: 30px;

    .logoMini{
        display: none;
    }

    .bigLogo{
        display: inline;
    }

    @media (max-width: 768px) {
        width: 50px;

        .bigLogo{
            display: none;
        }

        .logoMini{
            display: inline;
        }
    }
`;

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 100%;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: start;
    
    a{
        text-decoration: none;
    }
    
    .active{
        background-color: #000000;
        border-radius: 5px 0 0 5px;
        
        span{
            color: #FFFFFF;
        }

        img{
            filter: invert(100%);
        }
    }

    @media (max-width: 768px) {
        padding: 0;
        padding-left: 20px;

        span{
            display: none;
        }
    }
`;

export const MenuItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 10px;
    
    span{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        margin-left: 13px;
    }

    @media (max-width: 768px) {
        span{
            display: none;
        }
    }
`;

export const LogoutContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    bottom: 0;
    margin-bottom: 100px;
    
    a{
        display: flex;
        flex-direction: row;
        font-style: normal;
        text-decoration: none;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        margin-left: 13px;
    }

    @media (max-width: 768px) {
        margin-left: 20px;

        span{
            display: none;
        }
    }
`;

