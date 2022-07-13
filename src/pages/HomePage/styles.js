import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BalanceContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 205px;
  width: 100%;
  height: 20%;
  border-radius: 10px;
  color: #ffffff;
  background-color: #000000;
  margin-bottom: 20px;
`;

export const CardsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 205px;
  width: 100%;
  height: 20%;
  border-radius: 10px;
`;

export const FirstContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  width: 220px;
  height: 100%;
  margin: 38px;
  
  h2{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin: 0;
    color: #FFFFFF;
  }
  
  h1{
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    span.bank{
        margin-left: 10px;
    }

    span{
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        color: #FFFFFF;
    }
  }
  
`;

export const SecondContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 100%;
  margin-right: 20px;
  margin-top: 36px;
`;

export const ButtonInSecondContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 171px;
    height: 50px;
    background: #FFFFFF;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    color: #000000;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 24%;
  height: 100%;
  min-height: 213px;
  border-radius: 10px;
  background-color: #EDEDFE;
  
  .iconContent{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0 30px 15px;
  }
  
  .descriptionContent{
    display: flex;
    flex-direction: column;
    padding: 0 0 0 15px;

    h1{
        margin: 0;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #171717;
    }

    span{
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        color: #171717;
        opacity: 0.6;
    }
  }  

  .bottomContent{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;

    h4{
        font-style: normal;
        margin: 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #171717;
    }
  }
`;