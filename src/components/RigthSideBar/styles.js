import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  width: 20%;
  padding: 20px 36px 20px 0px;

  .first{
    min-height: 30%;

    div.header{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      select{
        width: 101px;
        height: 23px;
        background: #D9D9D9;
        border-radius: 5px;
        border: none;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
      }
    }
  }

  .second{
    min-height: 40%;
  }

  .third{
    min-height: 20%;
  }
`;

export const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 298px;
  border: 3px solid #EDEDFE;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 23px 25px;
  
  h1{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
`;
