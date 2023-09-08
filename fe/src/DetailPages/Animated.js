import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 800px) {
        width: 100%;
        padding: 0px;
    }
`;

const InfoTitle = styled.div`
    font-size: 22px;
    margin-top: 14px;
    margin-bottom: 2px;
    font-weight: bold;
`;

const InfoText = styled.div`
    font-size: 18px;
    color: rgb(82, 82, 102);

    @media only screen and (max-width: 780px) {
        text-align: left;
    }
`;

const InfoBox = styled.div`
    border-radius: 10px;
    -webkit-box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);
    -moz-box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);
    box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 400px;
    text-align: left;
    min-height: 430px;

    @media only screen and (max-width: 950px) {
        width: 320px;
    }
`

const WrapperImage = styled.img`
    height: 100%;
    width: auto;

    @media only screen and (max-width: 600px) {
        height: 450px;
        max-width: 100%;
    }
`

const ImageBox = styled.div`
    position: relative;

    & .not-selected {
        animation: shadow-animation 3s linear infinite;
        background: #f59f4c;
        color: white;
        font-weight: bold;
        font-size: 24px;
    }

    & .selected {
        background: white;
        color: #f59f4c;
        font-weight: bold;
        font-size: 24px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
    }

    @keyframes shadow-animation {
        0% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
        50% {
            transform: scale(1.2);
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
    }


`;

const Clickable = styled.div`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;

    position: absolute;

    top: ${props => props.top};
    left: ${props => props.left};

    &: hover {
        cursor: pointer;
    }
`;


const ImageChanderButton = styled.div`
    height: 13px;
    width: 13px;
    background-color: ${props => props.selected ? "#f59f4c" : "white"};
    margin: 8px;
    display: inline-block;
    border: 1px solid #f59f4c;
    transform: translateY(40px);

    &: hover {
        cursor: pointer;
    }

`;

const InfoImg = styled.img`
    height: 240px;

    @media only screen and (max-width: 950px) {
        height: 180px;
        margin: 0 auto;
    }

    @media only screen and (max-width: 780px) {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
`;

const DesktopInfoBox = styled.div`
    @media only screen and (max-width: 780px) {
        display: none;
    }
`;

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    padding: 20px;
`;

function Animated({data}) {
    const { array } = data;
    const [selected,setSelected] = useState(array[0]);
    const [selectedIndex,setselectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState("original");

    const changeSelection = (selection) => {
        if (selectedIndex===selection && window.innerWidth > 780) 
            return;

        setSelected(array[selection]);
        setselectedIndex(selection);

        if (window.innerWidth <= 780) {
            const button = document.getElementById("clickIfMobile");
            if (button)
                button.click();
        }
    }

    const changeImage = (val) => {
        if (selectedImage===val)
            return;
            setSelectedImage(val);
    }


  return (
    <Container>
        <ImageBox>
            <WrapperImage src={selectedImage==="original" ? data.img : data.alt_img}/>
            {
                data.array.map((item,index)=>{
                    return (
                        <Clickable className={selectedIndex===index ? "selected" : "not-selected"} top={item.top} left={item.left} onClick={()=>changeSelection(index)} key={index}>
                            <div>
                                X
                            </div>    
                        </Clickable>
                    )
                })
            }
            {
                data && data.alt_img && 
                <div>
                    <ImageChanderButton selected={selectedImage==="original"} onClick={()=>changeImage("original")}></ImageChanderButton>
                    <ImageChanderButton selected={selectedImage!=="original"} onClick={()=>changeImage("not-original")}></ImageChanderButton>
                </div>
            }
        </ImageBox>

        <button id="clickIfMobile" style={{display:"none"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            
        </button>
    
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Mehr Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <ModalBody class="modal-body">
                        <InfoImg alt='interactive insektenschutz image' src={selected.image} />
                        <InfoTitle>{selected.title}</InfoTitle>
                        <InfoText>{selected.text}</InfoText>
                </ModalBody>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">schließen</button>
                </div>
                </div>
            </div>
            </div>
        

        <DesktopInfoBox>
            <InfoBox>
                <InfoImg alt='interactive insektenschutz image' src={selected.image} />
                <InfoTitle>{selected.title}</InfoTitle>
                <InfoText>{selected.text}</InfoText>
            </InfoBox>
        </DesktopInfoBox>
    </Container>
  )
}

export default Animated