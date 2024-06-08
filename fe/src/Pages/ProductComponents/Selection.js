import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp';

const Title = styled.div`
    font-size: 18px;
    color: rgb(82, 82, 102);
    font-weight: bold;
    border-bottom: 2px solid rgb(82, 82, 102);
    text-align: left;
    padding-left: 15px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    gap: 10px;
`;

const CustomImgWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const CustomImg = styled.img`
    height: 160px;
    width: auto;
    cursor: pointer;
    transition: all 0.1s ease;
    padding: 0px;
    border: ${props => props.isActive ? "3px solid #f59f4c" : "1px solid #e0e0e0"};
    
    &:hover {
        border: ${props => props.isActive ? "3px solid #f59f4c" : "2px solid rgb(82, 82, 102)"};
    }
`;

const SelectedIcon = styled(GpsFixedSharpIcon)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f59f4c !important;
    font-size: 40px !important;
    pointer-events: none; /* Ensure the icon does not interfere with clicks */
`;

const SingleOptionWrapper = styled.div`
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
`;

const checkAllowed = () => {
    return true;
}

function Selection({ optionList, itemConfiguration, setItemConfiguration, setConfigPrice, setMoreDetailInfo }) {
    const [active, setActive] = useState(null);

    useEffect(() => {
        if (!optionList.multichoice) {
            for (let i = 0; i < optionList.options.length; i++) {
                if (optionList.options[i].defaultSelected) {
                    setActive(i);
                    break;
                }
            }
        } else {
            let arr = optionList.options.map(item => {
                return item?.defaultSelected || false;
            });
            setActive([...arr]);
        }
    }, [optionList]);

    useEffect(() => {
        // Your effect logic here if needed
    }, [itemConfiguration])

    const handleSelection = (index) => {
        if (!optionList.multichoice) {
            setActive(index);
            return;
        }

        let arr = [...active];
        arr[index] = !arr[index];
        setActive([...arr]);
    }

    const handleMoreDetailSelection = (item) => {
        const data = {
            title: item.explanation.title,
            img: item.explanationImg,
            body: item.explanation.text
        };
        setMoreDetailInfo(data);

        const button = document.getElementById("product-color-option-detail-btn");
        if (button) {
            setTimeout(() => {
                button.click();
            }, 0);
        }
    }

    return (
        itemConfiguration === null
            ? (
                <div>
                    <CircularProgress size='large' color='warning' />
                </div>
            )
            : (
                <div>
                    <Title>{optionList.title}</Title>
                    <Body>
                        {
                            optionList.options.map((item, index) => {
                                const isActive = optionList.multichoice ? active && active[index] : active === index;
                                return (
                                    <SingleOptionWrapper key={index}>
                                        <CustomImgWrapper>
                                            <CustomImg
                                                onClick={() => handleSelection(index)}
                                                isActive={isActive}
                                                src={item.image}
                                            />
                                            {isActive && <SelectedIcon />}
                                        </CustomImgWrapper>
                                        <TitleWrapper>
                                            <div>{item.title}</div>
                                            <div style={{ cursor: "pointer" }} onClick={() => handleMoreDetailSelection(item)}>
                                                <HelpOutlineOutlinedIcon style={{ color: "grey" }} />
                                            </div>
                                        </TitleWrapper>
                                    </SingleOptionWrapper>
                                )
                            })
                        }
                    </Body>
                </div>
            )
    )
}

export default Selection;
