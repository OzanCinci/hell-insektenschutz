import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Splitter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin: auto;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;

    @media only screen and (max-width: 550px) {
        width: 100vw;
        gap: 8px;
    }   
`;

const Line = styled.div`
    border-bottom: 1px solid #696984;
    flex-grow: 1;
`;

const LineText = styled.div`
    color: rgb(82, 82, 102);
    font-size: 25px;
    font-weight: 700;
    width: fit-content;
    
    @media only screen and (max-width: 550px) {
        font-size: 20px;
    }   
`;

const Container = styled.div`
    margin: auto;
    margin-top: 40px;
    max-width: 1400px;
`;

const Wrapper = styled.div`
    width: fit-content;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 3px;
    font-size: 18px;

    @media only screen and (max-width: 550px) {
        padding: 0px 15px;
    }   
`;

function HowToAssemble({assemblyInfo}) {
    const nav = useNavigate();

    if (assemblyInfo===null) {
        return (
            <></>
        );
    }

  return (
    <Container>
        <Splitter>
            <Line></Line>
            <LineText>Anleitung für die richtige Installation</LineText>
            <Line></Line>
        </Splitter>
        <Wrapper>
            <div>
                Sie können herausfinden, wie Sie {assemblyInfo?.name || "Plissee"} richtig zusammenbauen, indem Sie diesem 
            </div>
            <div onClick={()=>nav(assemblyInfo?.link)} style={{cursor: "pointer", textDecoration: "underline", color: "rgb(245, 159, 76)", fontWeight: 700}}>
                Link folgen.
            </div>
        </Wrapper>    
    </Container>
  )
}

export default HowToAssemble;
