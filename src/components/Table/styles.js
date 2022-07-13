import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    width: 100%;
    margin-top: 20px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;

    a{
        color: #000000;
    }
    
    span{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #171717;
    }`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #171717;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    
    table{
        width: 100%;

        tbody{
            tr{
                td{
                    .firstStep{
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        div.icon{
                            background-color: #000000;
                            width: 50px;
                            height: 50px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            margin-left: 0 !important;
        
                            img{
                                filter: invert(100%);
                            }
                        }

                        div.mount{
                            display: flex;
                            flex-direction: column;
                            margin-left: 8px;

                            h2{
                                font-style: normal;
                                font-weight: 700;
                                font-size: 20px;
                                line-height: 24px;
                                color: #171717;
                                margin: 0;
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
                    }
                }

                td{
                    .secondStep{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: center;
                        
                        h2{
                            font-style: normal;
                            font-weight: 700;
                            font-size: 20px;
                            line-height: 24px;
                            color: #171717;
                            margin: 0;
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
                }
            }
        }
    }
`;