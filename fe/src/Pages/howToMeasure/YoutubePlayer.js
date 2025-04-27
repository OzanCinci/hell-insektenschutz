import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative; 
    padding-bottom: 56.25%;
    height: 250px; 
    width: 400px;

    @media only screen and (max-width: 576px) {
        height: 250px;
        width: 100%;
    }
`;

const Iframer = styled.iframe`
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
`;

function YouTubePlayer({url}) {
    return (
        <Container>
            <Iframer
                src={url}
                frameBorder="0"
                width="1470" height="629"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="YouTube Video"
            />
        </Container>
    );
}

export default YouTubePlayer;
