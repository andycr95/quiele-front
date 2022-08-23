import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding-top: 4rem;
`;

export const SkillsContent = styled.div`
  width: 33.333%;
  padding-right: 1rem;
  margin: 0px;
`;

export const InfoContent = styled.div`
  width: 66.666%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-wrap: break-word;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #EDEDFE;
  
  .card_header{
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const CardHeaderSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const CardHeaderSkillsAvatar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

    div{
        position: relative;

        img{
            vertical-align: middle;
            --tw-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
            box-shadow: 0 0 transparent,0 0 transparent,var(--tw-shadow);
            position: absolute;
            max-width: 150px;
            margin: -4rem;
            height: auto;
            border-style: none;
            border-radius: 9999px;
        };
    }
`;

export const CardHeaderSkillsInfo = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 5rem;
  flex-wrap: wrap;
  
  div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;

    div{
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
      padding: 0.75rem;
      text-align: center;

      span.number_tracking{
        letter-spacing: .025rem;
        text-transform: uppercase;
        color: rgba(71,85,105,1);
        font-size: 1.25rem;
        font-weight: 700;
        display: block;
      }

      span.text_tracking{
        color: rgba(148,163,184,1);
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.25rem;
      }
    }
  }
`;

export const CardHeaderInfo = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0;
  background-color: #fff;

  div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem;

    h6{
      color: rgba(51,65,85,1);
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.75rem;
      margin: 0;
    }

    button{
        transition-duration: .15s;
        transition-timing-function: linear;
        transition-property: all;
        text-transform: uppercase;
        color: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        padding: 0.5rem 1rem;
        outline: 2px solid transparent;
        outline-offset: 2px;
        margin-right: 0.25rem;
        font-size: .75rem;
        line-height: 1rem;
        font-weight: 700;
        border-radius: 0.25rem;
        border: none;
        box-sizing: border-box;
        border: 0 solid #e4e4e7;
        background-color: #000;
    }
  }
`;
