import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    width: 80%;
    max-width: 1200px;
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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
`

const WrapperImage = styled.img`
    height: 100%;
    width: auto;
`

const ImageBox = styled.div`
    border: 1px solid red;
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

    &: hover {
        cursor: pointer;
    }
`;

function Animated({data}) {
    const { array } = data;
    const [selected,setSelected] = useState(array[0]);
    const [selectedIndex,setselectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState("original");

    const changeSelection = (selection) => {
        if (selectedIndex===selection) 
            return;

        setSelected(array[selection]);
        setselectedIndex(selection);
        console.log("selected index: ",selection);
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
                            +
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
        <InfoBox>
            <img height='240px' src={selected.image} />
            <InfoTitle>{selected.title}</InfoTitle>
            <InfoText>{selected.text}</InfoText>

        </InfoBox>
    </Container>
  )
}

export default Animated