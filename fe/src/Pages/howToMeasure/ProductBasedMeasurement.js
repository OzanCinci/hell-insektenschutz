import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {productBasedMeasurementData} from './productBasedMeasurementData';
import YouTubePlayer from "./YoutubePlayer";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-left: 10px;
  border: 1px solid #e9e9f2;
  background: white !important;
  border-radius: 10px;
  box-shadow: 2px 7px 13px 0px rgba(245,159,76,0.75);
  -webkit-box-shadow: 2px 7px 13px 0px rgba(245,159,76,0.55);
  -moz-box-shadow: 2px 7px 13px 0px rgba(245,159,76,0.75);

    @media only screen and (max-width: 800px) {
        border: 1px solid white;
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
    }
`;

const HTMLContentWrapper = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

// Component to render HTML content with dangerouslySetInnerHTML
const HTMLContent = ({ value }) => (
    <HTMLContentWrapper dangerouslySetInnerHTML={{ __html: value }} />
);

const SingleContent = styled.div`
    margin-bottom: 40px;

    @media only screen and (max-width: 800px) {
        margin-bottom: 70px;
    }
`;

const ContentBodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const ImgWrapper = styled.div`
    width: ${props=>props.noRightPart ? "80%" : "55%"};

    @media only screen and (max-width: 800px) {
        width: 90vw;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const BodyWrapper = styled.div`
    width: ${props=>props.noRightPart ? "0%" : "40%"};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (max-width: 800px) {
        width: 85vw;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const CustomImg = styled.img`
    height: auto;
    width: 100%;
    max-width: 500px;
    align-self: center;
`;

const ContentTitle = styled.div`
    font-size: 19px;
    text-align: left;
    padding-left: 50px;
    color: #696984;
    font-weight: bold;
    margin-top: 20px;

    @media only screen and (max-width: 800px) {
        padding-left: 0px;
    }
`;

const Description = styled.div`
    font-size: 17px;
    text-align: left;
    padding-left: 50px;
    margin-top: 10px;
    @media only screen and (max-width: 800px) {
        padding-left: 0px;
    }
`;

const RightPartImg = styled.img`
    height: auto;
    width: 100%;
    align-self: center;
    margin-top: 10px;
    min-height: 200px;
`;

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

function ProductBasedMeasurement({}) {
    const [localKey, setLocalKey] = useState(null);
    const [data, setData] = useState(null);
    const productBasedMeasurementKey = useSelector(state => state.productBasedMeasurement);

    useEffect(() => {
        if (localKey===productBasedMeasurementKey)
            return;

        setLocalKey(prevState => productBasedMeasurementKey);
        setData(prevState => productBasedMeasurementData[productBasedMeasurementKey]);
    }, [productBasedMeasurementKey]);

    if (!data) {
        return (<div></div>);
    }

    return (
        <>
            <br/>
            <br/>
            <Splitter>
                <Line></Line>
                <LineText>Richtig messen</LineText>
                <Line></Line>
            </Splitter>
            <Container>
                {data && data.map((content, contentIndex) => (
                    <SingleContent key={contentIndex}>
                        <ContentTitle>{content.title}</ContentTitle>
                        <Description>{content.description}</Description>
                        <ContentBodyWrapper>
                            <ImgWrapper noRightPart={content.noRightPart}>
                                <CustomImg alt='installation-image' src={content.image}/>
                            </ImgWrapper>
                            <BodyWrapper noRightPart={content.noRightPart}>
                                {
                                    content.noRightPart !== true &&
                                    content.rightPart.map((strHtml, i) => {
                                        if (strHtml.type === "html-content")
                                            return (<HTMLContent value={strHtml.value} key={i}/>);
                                        else if (strHtml.type === "img")
                                            return (<div key={i}>
                                                <RightPartImg src={strHtml.value}
                                                              alt={`description-image-for${content.title}`}/>
                                            </div>);
                                        else if (strHtml.type === "youtube-video")
                                            return (
                                                <>
                                                    <YouTubePlayer url={strHtml.value}/>
                                                </>
                                            );
                                    })
                                }
                            </BodyWrapper>
                        </ContentBodyWrapper>
                    </SingleContent>
                ))}
            </Container>
            <br/>
        </>
    );
}

export default ProductBasedMeasurement;
