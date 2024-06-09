import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CircularProgress from '@mui/material/CircularProgress';
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
    align-items: flex-start;
    margin-top: 10px;
    margin-bottom: 30px;
`;

const CustomImgWrapper = styled.div`
    position: relative;
    display: inline-block;

    &::after {
        content: ${props => (props.note ? `"${props.note}"` : "")};
        display: ${props => (props.note ? "block" : "none")};
        position: absolute;
        left: 0px;
        top: 0px;
        transform: translate(0,calc(3px - 100%));
        width: 100%;
        height: fit-content;
        z-index: 95;
        background-color: #f59f4c;
        background: linear-gradient(143deg, rgb(255, 171, 100) -1.15%, rgb(255, 125, 14) 100%);
        border-radius: 8px 8px 0px 0px;
        color: white;
        font-size: 14px;
        font-weight: bold; 
    }
`;
// sehr beliebt
// meist gewählt
const CustomImg = styled.img`
    height: 160px;
    width: auto;
    cursor: pointer;
    transition: all 0.1s ease;
    padding: 0px;

    border: ${props => props.isActive ? "3px solid #f59f4c" : "1px solid #e0e0e0"};
    
    &:hover {
        border: ${props => props.isActive ? "3px solid #f59f4c" : "1px solid #f59f4c"};
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
    margin-bottom: 20px;
    margin-top: 20px;
    margin-right: 30px;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    margin-top: 8px;
`;

function arraysEqual(arr1, arr2) {
    if (!arr1 || arr1.length !== arr2.length) {
      return false;
    }
  
    // Sort arrays based on the stringified version of the objects
    const sortedArr1 = arr1.slice().sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    const sortedArr2 = arr2.slice().sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
  
    for (let i = 0; i < sortedArr1.length; i++) {
      if (JSON.stringify(sortedArr1[i]) !== JSON.stringify(sortedArr2[i])) {
        return false;
      }
    }
    return true;
}

function Selection({ optionList, itemConfiguration, setItemConfiguration, setMoreDetailInfo }) {
    const [active, setActive] = useState(null);
    const [internalChoice, setInternalChoice] = useState(false);
    const [availableList, setAvailableList] = useState([]);
    const [prevAvailableList, setPrevAvailableList] = useState(null)

    useEffect(() => {
        if (!optionList.checkAllowList) {
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
        } 
    }, [optionList]);

    useEffect(() => {
        if (internalChoice) {
            setInternalChoice(false);
            return;
        }

        if (!optionList.checkAllowList) return;

        let tempAvailableList = [];

        optionList.options.forEach((item)=>{
            if (!item.allows || Object.keys(item.allows).length === 0) {
                tempAvailableList.push(item);
                return;
            }

            const itemsAllows = item.allows;
            if (itemsAllows.type==="single") {

                //console.log("itemsAllows: ", itemsAllows);

                let contains = false;
                for (let i=0; i<itemsAllows.dependecies.length;i++) {
                    const dependency = itemsAllows.dependecies[i];
                    const key = Object.keys(dependency)[0];
                    const value = Object.values(dependency)[0];

                    const currentSelectedDependency = itemConfiguration[key];
                    if (!currentSelectedDependency || currentSelectedDependency.length===0)
                        continue;

                    
                    for (let j=0; j<currentSelectedDependency.length;j++) {
                        const currentObj = currentSelectedDependency[j];
                        const currentObjKey = Object.keys(currentObj)[0];

                        //console.log("COMPARE THEM! ",currentObjKey,value);
                        if (currentObjKey===value) {
                            contains = true;
                            break;
                        }
                    }

                    if (contains) {
                        tempAvailableList.push(item);
                        break;
                    }
                }
            }

        });

        if (arraysEqual(availableList,tempAvailableList))
            return;

        console.log("prevAvailableList: ",prevAvailableList)
        console.log("tempAvailableList: ",tempAvailableList)

        setPrevAvailableList([...availableList]);
        setAvailableList([...tempAvailableList]);

        const availableListActive = [];
        let freeSelectionDone = false;
        let selectedItem = null;
        let selectedItemIndex = null;
        for(let k=0;k<tempAvailableList.length;k++) {
            if (freeSelectionDone)
                availableListActive.push(false);
            else {
                const currentElement = tempAvailableList[k];
                if (currentElement.price===0) {
                    availableListActive.push(true);
                    freeSelectionDone = true;
                    
                    // apply as selected!
                    selectedItem = currentElement;
                    selectedItemIndex = k;

                } else {
                    availableListActive.push(false);
                }
            }
        }

        setActive([...availableListActive]);
        console.log("GELDİĞ")

        if (selectedItem!==null && selectedItemIndex!==null) {
            console.log("FUNCTION CALL")
            handleSelectionAllowed(selectedItem,selectedItemIndex, false);
        }

    }, [itemConfiguration])

    const handleSelection = (index) => {
        if (!optionList.multichoice) {
            setActive(index);

            const configObj = {
                [optionList.options[index].title] : optionList.options[index].price
            };
            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [configObj]
            };

            console.log("updatedItemConfiguration: ",updatedItemConfiguration);
            setItemConfiguration(updatedItemConfiguration);
            return;
        } else {
            let arr = [...active];
            arr[index] = !arr[index];
            setActive([...arr]);

            // TODO: update global config object!!!
            const configObj = {
                [optionList.options[index].title] : optionList.options[index].price
            };

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [configObj, ...itemConfiguration[optionList.title]]
            };

            setItemConfiguration(updatedItemConfiguration);
            return;
        }
    }

    const handleSelectionAllowed = (item,index, updateArr = true) => {
        if (!optionList.multichoice) {
            if (updateArr) {
                const arr = active.map((item,i)=> i===index);
                setActive([...arr]);
            }

            const configObj = {
                [item.title] : item.price
            };

            console.log("ITEM: ", configObj);

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [configObj]
            };

            setInternalChoice(true);

            console.log("updatedItemConfiguration: ",updatedItemConfiguration);
            setItemConfiguration(updatedItemConfiguration);
            return;
        }
        
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

    const handleCancel = (currentItem, index) => {
        if (!optionList.multichoice) {
            setActive(null);
            let configArray = itemConfiguration[optionList.title];
            const tmp = configArray.filter(item=>{
                const key = Object.keys(item)[0];
                // TODO: test it well before publish!!!!
                //console.log("key, currentItem.title: ",key , currentItem.title);
                return key !== currentItem.title;
            })

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [...tmp]
            };

            setItemConfiguration(updatedItemConfiguration);
            return;
        } else {
            const title = currentItem.title;
            let arr = [...active];
            arr[index] = false;
            setActive([...arr]);

            let configArray = itemConfiguration[optionList.title];
            const tmp = configArray.filter(item=>{
                const key = Object.keys(item)[0];
                // TODO: test it well before publish!!!!
                //console.log("key, currentItem.title: ",key , currentItem.title);
                return key !== title;
            });

            console.log("configArray: ",configArray);
            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [...tmp]
            };
            setItemConfiguration(updatedItemConfiguration);
            return;
        }
    }

    const handleClick = (item,index,isActive, isAllowedSelection = false) => {
        if (isActive) {
            if (item.cancallable) {
                handleCancel(item,index);
            }
        } else {
            if (!isAllowedSelection)
                handleSelection(index);
            else
                handleSelectionAllowed(item,index);
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
                    <Title>
                        {optionList.title} 
                        <button onClick={()=>console.log("itemConfiguration: ",itemConfiguration)}>printconfig</button>
                    </Title>
                    <Body>
                        {
                            optionList.checkAllowList!==true ?
                            optionList.options.map((item, index) => {
                                const isActive = optionList.multichoice ? active && active[index] : active === index;
                                return (
                                    <SingleOptionWrapper key={index}>
                                        <CustomImgWrapper
                                                note={item.note}
                                                isActive={isActive}
                                            >
                                            <CustomImg
                                                onClick={() => handleClick(item,index,isActive)}
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
                                        {
                                            item.price === 0
                                            ? <div></div>
                                            : <div style={{textAlign: "left", fontWeight: "bold", marginLeft: "5px"}}>+{item.price}€</div>
                                        }
                                    </SingleOptionWrapper>
                                )
                            }):
                            availableList.map((item, index) => {
                                const isActive = active[index];
                                return (
                                    <SingleOptionWrapper key={index}>
                                        <CustomImgWrapper
                                                note={item.note}
                                                isActive={isActive}
                                            >
                                            <CustomImg
                                                onClick={() => handleClick(item,index,isActive,true)}
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
                                        {
                                            item.price === 0
                                            ? <div></div>
                                            : <div style={{textAlign: "left", fontWeight: "bold", marginLeft: "5px"}}>+{item.price}€</div>
                                        }
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
