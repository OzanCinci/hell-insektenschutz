import React from "react";
import styled from "styled-components";

const Splitter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
    margin-top: 40px;
`;

const Line = styled.div`
    border-bottom: 1px solid #696984;
    flex-grow: 1;
`;

const LineText = styled.h2`
    color: #696984;
    font-size: 25px;
    font-weight: 700;
    width: fit-content;
    
    @media only screen and (max-width: 550px) {
        font-size: 20px;
    }   
`;

export const SeoLineSeperatorTitleComponent = ({msg}) => {
    return (
        <Splitter>
            <Line></Line>
            <LineText>{msg}</LineText>
            <Line></Line>
        </Splitter>
    );
};

export const SeoPageTitle = styled.h1`
    text-align: center;
    font-size: 32px;
    color: #696984;
    font-weight: bold;
`;

export const SeoPageH2Title = styled.h2`
    text-align: center;
    font-size: 28px;
    color: #696984;
    font-weight: bold;
`;

export const SeoPageH3Title = styled.h3`
    text-align: left;
    font-size: 25px;
    color: #696984;
    font-weight: bold;
`;

