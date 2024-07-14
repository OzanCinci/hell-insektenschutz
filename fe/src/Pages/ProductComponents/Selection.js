import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    justify-content: flex-start;

    @media only screen and (max-width: 500px) {
       width: 105vw;
  }
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

    @media only screen and (max-width: 500px) {
       width: 40vw;
       height: auto;
       align-self: center;
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
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BodyColors = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0px; /* Adjust the gap as needed */
    justify-items: center; /* Align items horizontally center */
    align-items: flex-start; 
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    margin-top: 8px;
    text-align: center;
    width: min(160px, 100%);

    margin-bottom: 2px;

    @media only screen and (max-width: 500px) {
        width: ${props=>props.isColorTitle ? "100%" : "40vw"};
    }
`;


const ColorSelector = styled.div`
    border-radius: 50%;
    background: ${props => props.bg};
    border: 1px solid grey;
    width: 50px;
    height: 50px;
    cursor: pointer;
    position: relative;

    &::before, &::after {
        content: "";
        display: ${props => props.isSelected ? "block" : "none"};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%;
        height: 2px;
        background: ${props => props.bg==="rgb(30, 26, 26)" || props.bg==="rgb(90, 90, 90)"  ? "#f59f4c" : "#f59f4c"};
        transform-origin: center;
    }

    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;

const DropDownWrapper = styled.div`
    margin-top: 15px;
    display: ${props => props.hide ? "none" : "block"};
    max-width: 35vw;
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

function Selection({ optionList, itemConfiguration, setItemConfiguration, setMoreDetailInfo,index }) {
    const [active, setActive] = useState(null);
    const [internalChoice, setInternalChoice] = useState(false);
    const [availableList, setAvailableList] = useState([]);
    const [prevAvailableList, setPrevAvailableList] = useState(null)
    const [selectedPrice, setSelectedPrice] = useState({});


    // experimental //
    useEffect(()=>{
        if (Array.isArray(active)) {
            console.log("CHECKPOINT: 1 -> ", optionList.title);
            // detect if anything in is active
            // but not in the itemConfiguration list
            const currentSelectionArray = itemConfiguration[optionList.title];
            const keyArray = currentSelectionArray.map(obj=>Object.keys(obj)[0]);
            let finalActiveList = [];

            for (let x=0; x<availableList.length; x++) {
                const currentTitle = availableList[x].title;

                let isActive = false;
                for (let j=0; j<keyArray.length; j++) {
                    const currentKey = keyArray[j];
                    if (currentKey.startsWith(currentTitle)) {
                        isActive = true;
                        break;
                    }
                }

                finalActiveList.push(isActive);
            }

            const allFalse = finalActiveList.every(value => value === false);
            console.log("GGGGGGGGG: ", optionList.title, finalActiveList);
            setActive([...finalActiveList]);
            if (finalActiveList.length!==0 && allFalse) {
                const shouldSelect = availableList[0].defaultSelected;
                if (shouldSelect) {
                    finalActiveList[0] = true;
                    // get the button and click it
                    const btnId = `${optionList.title}-btn-0`;
                    const button = document.getElementById(btnId);
                    if (button) {
                        setTimeout(() => {
                            button.click();
                        }, 100);
                    }
                }
            } 

            //setActive([...finalActiveList]);
        } else if (optionList.multichoice===false && optionList.doNoDefaultSelection===false){ 
            console.log("CHECKPOINT: 2 -> ", optionList.title);
            let i = 0;
            let shouldClick = false;
            for (; i<availableList.length; i++) {
                if (availableList[i].defaultSelected) {
                    shouldClick = true;
                    break;
                }
            }

            if (shouldClick) {    
                const btnId = `${optionList.title}-btn-${i}`;
                setActive(null);
                const button = document.getElementById(btnId);
                if (button) {
                    setTimeout(() => {
                        button.click();
                    }, 100);
                }
                console.log("CLICKED: ", optionList.title);
            }
        } else {
            console.log("CHECKPOINT: 3 -> ", optionList.title);
        }

    },[availableList]);
    // experimental //

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
            } else if (itemsAllows.type==="allOfThem") {
                let counter = 0;
                for (let i=0; i<itemsAllows.dependecies.length;i++) {
                    const dependency = itemsAllows.dependecies[i];
                    const key = Object.keys(dependency)[0];
                    const value = Object.values(dependency)[0];

                    const currentSelectedDependency = itemConfiguration[key];
                    if (!currentSelectedDependency || currentSelectedDependency.length===0)
                        return; // mismatch found stop processing

                    for (let j=0; j<currentSelectedDependency.length;j++) {
                        const currentObj = currentSelectedDependency[j];
                        const currentObjKey = Object.keys(currentObj)[0];

                        console.log("currentObjKey: ",currentObjKey);
                        console.log("value: ",value);
                        if (currentObjKey===value || currentObjKey.includes(value + " ")) {
                            counter +=1;
                        }
                    }
                }

                if (counter===itemsAllows.dependecies.length)
                    tempAvailableList.push(item);
            }

        });

        if (arraysEqual(availableList,tempAvailableList))
            return;

        const tempPrevAvailableList = [...prevAvailableList || []];

        setPrevAvailableList([...availableList]);
        setAvailableList([...tempAvailableList]);

        const availableListActive = [];
        let freeSelectionDone = false;
        let selectedItem = null;
        let selectedItemIndex = null;
        console.log("AAAAAAAAAAAAAAAAAAAAAAA")
        const itemConfDictionary = itemConfiguration[optionList.title];
        const itemKeys = itemConfDictionary.map(item => Object.keys(item)[0]);
        for(let k=0;k<tempAvailableList.length;k++) {
            const currentElement = tempAvailableList[k];

            if (freeSelectionDone && !itemKeys.includes(currentElement.title))
                availableListActive.push(false);
            else {
                if (itemKeys.includes(currentElement.title) || currentElement.conditionalSelected || !optionList.doNoDefaultSelection || currentElement.price===0) {
                    console.log("currentElement: ",currentElement);
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

        console.log("IF ONCESSIIIIII!!!!!, tempAvailableList: ",optionList.title, tempAvailableList);
        if (tempAvailableList.length===0) {
            // if nothing to be shown then just delete everything!
            let localItemConfiguration = {...itemConfiguration};
            localItemConfiguration = {
                ...localItemConfiguration,
                [optionList.title]: []
            };
            setInternalChoice(true);
            setActive([]);
            setTimeout(()=>{
                setItemConfiguration(prev => ({
                    ...prev,
                    [optionList.title]: []
                }));
                console.log("localItemConfiguration: ",optionList.title,localItemConfiguration);
            },100*index)
            //setItemConfiguration({...localItemConfiguration});
            //console.log("localItemConfiguration: ",optionList.title,localItemConfiguration);

        } else if (selectedItem!==null && selectedItemIndex!==null) {
            handleSelectionAllowed(selectedItem,selectedItemIndex, false, true, tempAvailableList);
            console.log("IF ICINE GIRDIIIII!!!!!");
        } else {
            // eğer zoraki işaretlemem gereken bir şey yok ise:
            // ve hatta tam tersine silmem gereken bir şey var ise
            const conf = itemConfiguration[optionList.title];

            const newConf = conf.filter(obj=>{
                
                const currentKey = Object.keys(obj)[0];

                for (let x=0; x<tempAvailableList.length; x++) {
                    const currentItem = tempAvailableList[0];
                    if (currentKey.startsWith(currentItem.title)) {
                        return true;
                    }
                }

                return false;
            })

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [...newConf]
            };

            // set active list //
            let newActiveList = [];
            const keyArray = newConf.map(item => Object.keys(item)[0]);
            console.log("keyArray: ",keyArray);
            

            for(let x=0; x<tempAvailableList.length; x++) {
                let terminate = false;
                const currentItem = tempAvailableList[x];

                for(let j=0; j<keyArray.length ;j++) {
                    const currentKey = keyArray[j];
                    if (currentKey.startsWith(currentItem.title)) {
                        newActiveList.push(true);
                        terminate = true;
                        break;
                    }
                }

                if (terminate) continue;
                else {
                    newActiveList.push(false);
                }
            }
            console.log("newActiveList:",newActiveList)
            setActive([...newActiveList]);
            // set active list //

            setInternalChoice(false);

            console.log("setItemConfiguration:1 ", updatedItemConfiguration);
            setItemConfiguration(prev => ({
                ...prev,
                [optionList.title]: [...updatedItemConfiguration[optionList.title]]
            }));
            //setItemConfiguration(updatedItemConfiguration);
            return;
        }

    }, [itemConfiguration])

    const handleSelection = (index) => {
        if (!optionList.multichoice) {
            setActive(index);

            const item = optionList.options[index];
            let configObj;

            if (typeof item.price === 'object') {
                const selectedOption = selectedPrice[item.title] || Object.keys(item.price)[0];
                configObj = {
                    [`${item.title} ${selectedOption}`]: item.price[selectedOption]
                };
            } else {
                configObj = {
                    [item.title]: item.price
                };
            }

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [configObj]
            };

            console.log("setItemConfiguration:2 ", updatedItemConfiguration);
            setItemConfiguration(prev => ({
                ...prev,
                [optionList.title]: [...updatedItemConfiguration[optionList.title]]
            }));
            //setItemConfiguration(updatedItemConfiguration);
            return;
        } else {
            let arr = [...active];
            arr[index] = !arr[index];
            setActive([...arr]);

            const item = optionList.options[index];
            let configObj;

            if (typeof item.price === 'object') {
                const selectedOption = selectedPrice[item.title] || Object.keys(item.price)[0];
                configObj = {
                    [`${item.title} ${selectedOption}`]: item.price[selectedOption]
                };
            } else {
                configObj = {
                    [item.title]: item.price
                };
            }

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: arr[index] 
                    ? [configObj, ...itemConfiguration[optionList.title].filter(i => !Object.keys(i)[0].startsWith(item.title))]
                    : itemConfiguration[optionList.title].filter(i => !Object.keys(i)[0].startsWith(item.title))
            };

            console.log("setItemConfiguration:3 ", updatedItemConfiguration)
            setItemConfiguration(prev => ({
                ...prev,
                [optionList.title]: [...updatedItemConfiguration[optionList.title]]
            }));
            //setItemConfiguration(updatedItemConfiguration);
            return;
        }
    }

    const handleSelectionAllowed = (item,index, updateArr = true, activeNotNull = false, tempAvailableList=null) => {
        let localItemConfiguration = {...itemConfiguration};
        console.log("handleSelectionAllowed içine girdi: ", optionList.title);
        if (tempAvailableList!==null) {
            let tmp = [...itemConfiguration[optionList.title]];
            let finalTmp = [];

            tmp.forEach(obj=> {
                const key = Object.keys(obj)[0];

                let shouldPush = false;
                tempAvailableList.forEach(item=>{
                    if (item.title.startsWith(key))
                        shouldPush = true;
                })

                if (shouldPush)
                    finalTmp.push(obj);

            })

            console.log("finalTmp: ", optionList.title ,finalTmp)
            localItemConfiguration = {
                ...localItemConfiguration,
                [optionList.title]: [...finalTmp]
            }
        } else {
            console.log("çalışmadı: ", tempAvailableList);
        }


        if (activeNotNull===false && active===null) return;

        if (!optionList.multichoice) {
            console.log("GIRDI ICERI: ", item.title)
            if (updateArr) {
                const arr = active.map((item,i)=> i===index);
                setActive([...arr]);
            }

            let configObj;

            if (typeof item.price === 'object') {
                const selectedOption = selectedPrice[item.title] || Object.keys(item.price)[0];
                configObj = {
                    [`${item.title} ${selectedOption}`]: item.price[selectedOption]
                };
            } else {
                configObj = {
                    [item.title]: item.price
                };
            }

            const updatedItemConfiguration = {
                ...localItemConfiguration,
                [optionList.title]: [configObj]
            };

            //console.log("AGA BU: ",item.title,updatedItemConfiguration)
            setInternalChoice(true);

            console.log("setItemConfiguration:4 ", updatedItemConfiguration);
            setItemConfiguration(prev => ({
                ...prev,
                [optionList.title]: [...updatedItemConfiguration[optionList.title]]
            }));
            
            //setItemConfiguration(updatedItemConfiguration);
            return;
        } else {
            let arr; 
            if (active===null)
                arr = []
            else
                arr = [...active];

            if (updateArr) {
                arr = arr.map((item,i)=> {
                    if (i===index)
                        return true;
                    return item;
                });
                setActive([...arr]);
            }

            let configObj;

            if (typeof item.price === 'object') {
                const selectedOption = selectedPrice[item.title] || Object.keys(item.price)[0];
                configObj = {
                    [`${item.title} ${selectedOption}`]: item.price[selectedOption]
                };
            } else {
                configObj = {
                    [item.title]: item.price
                };
            }

            /*
            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [configObj]
            };
            */

            const updatedItemConfiguration = {
                ...localItemConfiguration,
                [optionList.title]: arr[index] 
                    ? [configObj, ...localItemConfiguration[optionList.title].filter(i => !Object.keys(i)[0].startsWith(item.title))]
                    : localItemConfiguration[optionList.title].filter(i => !Object.keys(i)[0].startsWith(item.title))
            };

            setInternalChoice(true);

            console.log("setItemConfiguration:5 ", updatedItemConfiguration)
            setItemConfiguration(prev => ({
                ...prev,
                [optionList.title]: [...updatedItemConfiguration[optionList.title]]
            }));
            //setItemConfiguration(updatedItemConfiguration);
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
        if (!currentItem.cancallable) return;

        if (!optionList.multichoice) {
            setActive(null);
            let configArray = itemConfiguration[optionList.title];
            const tmp = configArray.filter(item=>{
                const key = Object.keys(item)[0];
                return key !== currentItem.title;
            })

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [...tmp]
            };

            console.log("setItemConfiguration:6 ", updatedItemConfiguration)
            setItemConfiguration(prev => ({
                ...prev,
                [optionList.title]: [...updatedItemConfiguration[optionList.title]]
            }));
            //setItemConfiguration(updatedItemConfiguration);
            return;
        } else {
            const title = currentItem.title;
            let arr = [...active];
            arr[index] = false;
            setActive([...arr]);

            let configArray = itemConfiguration[optionList.title];
            const tmp = configArray.filter(item=>{
                const key = Object.keys(item)[0];
                return !key.startsWith(title);
            });

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [...tmp]
            };
            console.log("setItemConfiguration:7 ", updatedItemConfiguration)
            setItemConfiguration(prev => ({
                ...prev,
                [optionList.title]: [...updatedItemConfiguration[optionList.title]]
            }));
            //setItemConfiguration(updatedItemConfiguration);
            return;
        }
    }

    const handleDropdownChange = (item, index, event) => {
        const selectedOption = event.target.value;
        setSelectedPrice(prev => ({
            ...prev,
            [item.title]: selectedOption
        }));

        if (active[index]) {
            const configObj = {
                [`${item.title} ${selectedOption}`]: item.price[selectedOption]
            };

            const updatedItemConfiguration = {
                ...itemConfiguration,
                [optionList.title]: [
                    ...itemConfiguration[optionList.title].filter(i => !Object.keys(i)[0].startsWith(item.title)),
                    configObj
                ]
            };

            console.log("setItemConfiguration:8 ", updatedItemConfiguration);
            setItemConfiguration(prev => ({
                ...prev,
                [optionList.title]: [...updatedItemConfiguration[optionList.title]]
            }));
            //setItemConfiguration(updatedItemConfiguration);
        }
    }

    const handleClick = (item, index, isActive, isAllowedSelection = false) => {
        //console.log("HANDLE CLICK: ", item, index, isActive, isAllowedSelection);
        if (isActive) {
            handleCancel(item,index);
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
            :
                (optionList.checkAllowList!==true || availableList.length!==0) &&
             (
                (optionList.title !== "Schienenfarbe" && optionList.title !== "Oberkastenfarbe" && optionList.title !== "Träger-/Kassettenfarbe")?
                <div>
                    {
                        (optionList.checkAllowList!==true || availableList.length!==0) &&
                        <Title>
                            {optionList.title} 
                        </Title>
                    }
                    
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
                                            {
                                                item.explanation && 
                                                <div style={{ cursor: "pointer" }} onClick={() => handleMoreDetailSelection(item)}>
                                                    <HelpOutlineOutlinedIcon style={{ color: "grey" }} />
                                                </div>
                                            }
                                            
                                        </TitleWrapper>
                                        {
                                            typeof item.price === 'object' ? (
                                            <DropDownWrapper hide={isActive !== true}>
                                                <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#f59f4c' } } }}>
                                                <InputLabel
                                                    id="demo-simple-select-helper-label"
                                                    style={{ backgroundColor: 'white', padding: '0 4px' , color: "#f59f4c", fontWeight: "bold"}}
                                                >
                                                    {item.priceExplanation}
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-helper-label"
                                                    id="demo-simple-select-helper"
                                                    value={selectedPrice[item.title] || Object.keys(item.price)[0]}
                                                    onChange={(e) => handleDropdownChange(item, index, e)}
                                                    disabled={!isActive}
                                                    label={item.priceExplanation}
                                                    sx={{
                                                    '& .MuiSelect-select': {
                                                        '&:focus, &:hover': {
                                                        backgroundColor: 'transparent',
                                                        },
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: isActive ? '#f59f4c' : 'rgba(0, 0, 0, 0.23)',
                                                    },
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#f59f4c',
                                                        },
                                                    },
                                                    }}
                                                >
                                                    {Object.entries(item.price).map(([key, value]) => (
                                                    <MenuItem key={key} value={key} sx={{ '&.Mui-selected': { backgroundColor: '#f59f4c', color: 'white' }, '&.Mui-selected:hover': { backgroundColor: '#f59f4c' } }}>
                                                        {key}  (+{value}€)
                                                    </MenuItem>
                                                    ))}
                                                </Select>
                                                </FormControl>
                                            </DropDownWrapper>
                                            ) : (
                                                item.price === 0
                                                ? <div></div>
                                                : <div style={{textAlign: "left", fontWeight: "bold", marginLeft: "5px"}}>+{item.price}€</div>
                                            )
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
                                                id={`${optionList.title}-btn-${index}`}
                                                onClick={() => handleClick(item,index,isActive,true)}
                                                isActive={isActive}
                                                src={item.image}
                                            />
                                            {isActive && <SelectedIcon />}
                                        </CustomImgWrapper>
                                        <TitleWrapper>
                                            <div>{item.title}</div>
                                            {
                                                item.explanation && 
                                                <div style={{ cursor: "pointer" }} onClick={() => handleMoreDetailSelection(item)}>
                                                    <HelpOutlineOutlinedIcon style={{ color: "grey" }} />
                                                </div>
                                            }
                                        </TitleWrapper>
                                        {
                                            typeof item.price === 'object' ? (
                                            <DropDownWrapper hide={isActive !== true}>
                                                <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#f59f4c' } } }}>
                                                <InputLabel
                                                    id="demo-simple-select-helper-label"
                                                    style={{ backgroundColor: 'white', padding: '0 4px' }}
                                                >
                                                    {item.priceExplanation}
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-helper-label"
                                                    id="demo-simple-select-helper"
                                                    value={selectedPrice[item.title] || Object.keys(item.price)[0]}
                                                    onChange={(e) => handleDropdownChange(item, index, e)}
                                                    disabled={!isActive}
                                                    label={item.priceExplanation}
                                                    sx={{
                                                    '& .MuiSelect-select': {
                                                        '&:focus': {
                                                        backgroundColor: 'transparent',
                                                        },
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: isActive ? '#f59f4c' : 'rgba(0, 0, 0, 0.23)',
                                                    },
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#f59f4c',
                                                        },
                                                    },
                                                    }}
                                                >
                                                    {Object.entries(item.price).map(([key, value]) => (
                                                    <MenuItem key={key} value={key} sx={{ '&.Mui-selected': { backgroundColor: '#f59f4c', color: 'white' }, '&.Mui-selected:hover': { backgroundColor: '#f59f4c' } }}>
                                                        {key}  (+{value}€)
                                                    </MenuItem>
                                                    ))}
                                                </Select>
                                                </FormControl>

                                            </DropDownWrapper>
                                            ) : (
                                                item.price === 0
                                                ? <div></div>
                                                : <div style={{textAlign: "left", fontWeight: "bold", marginLeft: "5px"}}>+{item.price}€</div>
                                            )
                                        }
                                    </SingleOptionWrapper>
                                )
                            })
                        }
                    </Body>
                </div>
                :
                <div style={{marginBottom: "20px"}}>
                    <Title>
                        {optionList.title} 
                    </Title>
                    <BodyColors>
                        {
                            optionList.options.map((item, index) => {
                                const isActive = optionList.multichoice ? active && active[index] : active === index;
                                return (
                                    <SingleOptionWrapper key={index}>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center"}}>
                                            <div className='mx-1'>
                                                <ColorSelector 
                                                    className='my-1'
                                                    onClick={() => handleClick(item,index,isActive)}
                                                    isSelected={isActive} 
                                                    bg={item.image}
                                                />
                                            </div>
                                            <TitleWrapper isColorTitle={true}>
                                                <div>{item.price===0 ? item.title : `${item.title} (+${item.price} €)`}</div>
                                            </TitleWrapper>
                                        </div>
                                    </SingleOptionWrapper>
                                )
                            })
                        }
                    </BodyColors>
                </div>
            )
            
    )
}

export default Selection;
