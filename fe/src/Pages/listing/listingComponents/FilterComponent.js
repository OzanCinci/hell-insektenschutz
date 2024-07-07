import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from '@mui/icons-material/Clear';
import FormControl from "@mui/material/FormControl";

const ColorSelector = styled.div`
    border-radius: 50%;
    background: ${props => props.bg};
    border: 1px solid grey;
    width: 35px;
    height: 35px;
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
        background: ${props => props.bg==="rgb(50, 50, 50)" ? "white" : "black"};
        transform-origin: center;
    }

    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;

const FilterContainer = styled.div`
    width: 300px;
    min-width: 300px;

    @media (max-width: 850px) {
        margin: auto;
        width: 85%;
        margin-bottom: 40px;
    }

    @media (max-width: 600px) {
        margin: auto;
        width: 85vw;
    }
`;

const DesktopFilter = styled.div`
    @media (max-width: 850px) {
        display: none;
    }
`;

const MobileFilterContainer = styled.div`
    @media (min-width: 850px) {
        display: none;
    }
`;

const CustomAccordionSummary = styled(AccordionSummary)`
    background: #f1f1f1 !important;
`;

const CustomAccordionDetails = styled(AccordionDetails)`
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: flex-start;
`;

const CustomExpandMoreIcon = styled(ExpandMoreIcon)`
    color: orange;
`;

const FilterComponent = ({ filterObj, handleFilterClick, clearAllFilters, selection, defaultExpandedPanels = {}, handleSearchChange }) => {
    const [expandedPanels, setExpandedPanels] = useState(defaultExpandedPanels);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            handleSearchChange(searchTerm);
        }, 500);

        return () => clearTimeout(debounceTimeout);
    }, [searchTerm, handleSearchChange]);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanels(prevExpanded => ({
            ...prevExpanded,
            [panel]: isExpanded
        }));
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [openPopoverId, setOpenPopoverId] = useState(null);

    const handlePopoverOpen = (event, id) => {
        setAnchorEl(event.currentTarget);
        setOpenPopoverId(id);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setOpenPopoverId(null);
    };

    const clearEverything = (e) => {
        e.preventDefault();
        setSearchTerm("");
        clearAllFilters();
    }

    return (
        <>
            <DesktopFilter>
                <FilterContainer>
                    <div className="d-flex flex-row justify-content-end">
                        <Button onClick={(e)=>clearEverything(e)} variant="outlined" color="warning">Filter zurücksetzen</Button>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <FormControl sx={{ width: "90%", marginLeft: "auto", marginTop: "10px" }} variant="outlined">
                            <OutlinedInput
                                type="text"
                                color="warning"
                                placeholder="Nummer, Farbe, Stichwort"
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        {
                                            searchTerm.trim()!==""
                                            ? <IconButton
                                            aria-label="toggle password visibility"
                                            edge="start"
                                            >
                                                <ClearIcon onClick={()=>setSearchTerm("")}/>
                                            </IconButton>
                                            : <SearchIcon/>
                                        }
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    {
                        Object.entries(filterObj).map(([filterType, { singleChoice, data }]) => {
                            if (filterType === "Farbton") {
                                return (
                                    <Accordion 
                                        className='my-2'
                                        key={filterType} 
                                        expanded={expandedPanels[filterType] || false} 
                                        onChange={handleAccordionChange(filterType)}
                                        TransitionProps={{ timeout: 500 }}
                                    >
                                        <CustomAccordionSummary
                                            expandIcon={<CustomExpandMoreIcon/>}
                                            aria-controls={`panel${filterType}-content`}
                                            id={`panel${filterType}-header`}
                                        >
                                            {filterType}
                                        </CustomAccordionSummary>
                                        <AccordionDetails>
                                            <div className="d-flex flex-row flex-wrap">
                                                {
                                                    data.map(({ name, image, extraInfo }) => {
                                                        return (
                                                            <div className='mx-1' key={name}>
                                                                <ColorSelector 
                                                                    className='my-1'
                                                                    onClick={() => handleFilterClick(name, singleChoice, filterType)} 
                                                                    isSelected={(selection.filters[filterType] || "") === name} 
                                                                    bg={image}
                                                                />
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            } else {
                                return (
                                    <Accordion 
                                        className='my-2'
                                        key={filterType} 
                                        expanded={expandedPanels[filterType] || false} 
                                        onChange={handleAccordionChange(filterType)}
                                        TransitionProps={{ timeout: 500 }}
                                    >
                                        <CustomAccordionSummary
                                            expandIcon={<CustomExpandMoreIcon />}
                                            aria-controls={`panel${filterType}-content`}
                                            id={`panel${filterType}-header`}
                                        >
                                            {filterType}
                                        </CustomAccordionSummary>
                                        <CustomAccordionDetails>
                                            {
                                                data.map(({ name, image, extraInfo, altName }) => {
                                                    return (
                                                        <div key={name} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems:"center", width: "100%"}}>
                                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems:"center"}}>
                                                                <div>
                                                                    <FormControlLabel
                                                                        control={
                                                                            <Checkbox
                                                                                color='warning'
                                                                                checked={selection.filters[filterType]?.includes(name) || false}
                                                                                onChange={() => handleFilterClick(name, singleChoice, filterType)}
                                                                            />
                                                                        }
                                                                    />
                                                                    {image!==null && <img src={image} alt={name} style={{ width: '25px', height: '25px', marginLeft: "-20%", marginRight: "10%" }} />}
                                                                </div>
                                                                <span>{altName? altName: name.replace('"','')}</span>
                                                            </div>
                                                            {extraInfo &&
                                                                    <div key={name}>
                                                                    <Typography
                                                                        aria-owns={openPopoverId === name ? `mouse-over-popover${name}` : undefined}
                                                                        aria-haspopup="true"
                                                                        onMouseEnter={(event) => handlePopoverOpen(event, name)}
                                                                        onMouseLeave={handlePopoverClose}
                                                                    >
                                                                        <HelpOutlineOutlinedIcon style={{ color: "grey" }} />
                                                                    </Typography>
                                                                    <Popover
                                                                        id={`mouse-over-popover${name}`}
                                                                        sx={{
                                                                            pointerEvents: 'none',
                                                                        }}
                                                                        open={openPopoverId === name}
                                                                        anchorEl={anchorEl}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'left',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                        onClose={handlePopoverClose}
                                                                        disableRestoreFocus
                                                                    >
                                                                        <Typography style={{ maxWidth: "400px", padding: "10px" }}>{extraInfo}</Typography>
                                                                    </Popover>
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </CustomAccordionDetails>
                                    </Accordion>
                                );
                            }
                        })
                    }
                </FilterContainer>
            </DesktopFilter>      
            <MobileFilterContainer>
                <button style={{display: "none"}} id="filter-modal-mobile-filter" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filterModal">
                </button>
                <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="filterModalLabel">Filter</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <FilterContainer>
                    <div className="d-flex flex-row justify-content-end">
                        <Button className='my-2' onClick={(e)=>clearAllFilters()} variant="outlined" color="warning">Filter zurücksetzen</Button>
                        <Button className='my-2 mx-3' data-bs-dismiss="modal" variant="outlined" color="warning">Anwenden</Button>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <FormControl sx={{ width: "100%", marginLeft: "auto", marginTop: "10px", marginBottom: "10px" }} variant="outlined">
                            <OutlinedInput
                                type="text"
                                color="warning"
                                placeholder="Nummer, Farbe, Stichwort"
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        {
                                            searchTerm.trim()!==""
                                            ? <IconButton
                                            aria-label="toggle password visibility"
                                            edge="start"
                                            >
                                                <ClearIcon onClick={()=>setSearchTerm("")}/>
                                            </IconButton>
                                            : <SearchIcon/>
                                        }
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    {
                        Object.entries(filterObj).map(([filterType, { singleChoice, data }]) => {
                            if (filterType === "Farbton") {
                                return (
                                    <Accordion 
                                        className='my-2'
                                        key={filterType} 
                                        expanded={expandedPanels[filterType] || false} 
                                        onChange={handleAccordionChange(filterType)}
                                        TransitionProps={{ timeout: 500 }}
                                    >
                                        <CustomAccordionSummary
                                            expandIcon={<CustomExpandMoreIcon/>}
                                            aria-controls={`panel${filterType}-content`}
                                            id={`panel${filterType}-header-mobile`}
                                        >
                                            {filterType}
                                        </CustomAccordionSummary>
                                        <AccordionDetails>
                                            <div className="d-flex flex-row flex-wrap">
                                                {
                                                    data.map(({ name, image, extraInfo }) => {
                                                        return (
                                                            <div className='mx-1' key={name}>
                                                                <ColorSelector 
                                                                    className='my-1'
                                                                    onClick={() => handleFilterClick(name, singleChoice, filterType)} 
                                                                    isSelected={(selection.filters[filterType] || "") === name} 
                                                                    bg={image}
                                                                />
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            } else {
                                return (
                                    <Accordion 
                                        className='my-2'
                                        key={filterType} 
                                        expanded={expandedPanels[filterType] || false} 
                                        onChange={handleAccordionChange(filterType)}
                                        TransitionProps={{ timeout: 500 }}
                                    >
                                        <CustomAccordionSummary
                                            expandIcon={<CustomExpandMoreIcon />}
                                            aria-controls={`panel${filterType}-content`}
                                            id={`panel${filterType}-header-mobile`}
                                        >
                                            {filterType}
                                        </CustomAccordionSummary>
                                        <CustomAccordionDetails>
                                            {
                                                data.map(({ name, image, extraInfo, altName }) => {
                                                    return (
                                                        <div key={name} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems:"center", width: "100%"}}>
                                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems:"center"}}>
                                                                <div>
                                                                    <FormControlLabel
                                                                        control={
                                                                            <Checkbox
                                                                                color='warning'
                                                                                checked={selection.filters[filterType]?.includes(name) || false}
                                                                                onChange={() => handleFilterClick(name, singleChoice, filterType)}
                                                                            />
                                                                        }
                                                                    />
                                                                    {image!==null && <img src={image} alt={name} style={{ width: '25px', height: '25px', marginLeft: "-20%", marginRight: "10%" }} />}
                                                                </div>
                                                                <span>{altName? altName: name.replace('"','')}</span>
                                                            </div>
                                                            {extraInfo &&
                                                                    <div key={name}>
                                                                    <Typography
                                                                        aria-owns={openPopoverId === name ? `mouse-over-popover${name}` : undefined}
                                                                        aria-haspopup="true"
                                                                        onMouseEnter={(event) => handlePopoverOpen(event, name)}
                                                                        onMouseLeave={handlePopoverClose}
                                                                    >
                                                                        <HelpOutlineOutlinedIcon style={{ color: "grey" }} />
                                                                    </Typography>
                                                                    <Popover
                                                                        id={`mouse-over-popover${name}-mobile`}
                                                                        sx={{
                                                                            pointerEvents: 'none',
                                                                        }}
                                                                        open={openPopoverId === name}
                                                                        anchorEl={anchorEl}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'left',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                        onClose={handlePopoverClose}
                                                                        disableRestoreFocus
                                                                    >
                                                                        <Typography style={{ maxWidth: "400px", padding: "10px" }}>{extraInfo}</Typography>
                                                                    </Popover>
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </CustomAccordionDetails>
                                    </Accordion>
                                );
                            }
                        })
                    }
                    </FilterContainer>
                    </div>
                    </div>
                </div>
                </div>
            </MobileFilterContainer>
        </>
    );
};

export default React.memo(FilterComponent);
