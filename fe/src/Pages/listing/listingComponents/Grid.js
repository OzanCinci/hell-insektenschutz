import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    row-gap: 40px;
    column-gap: 10px;
    border: 2px solid purple;
    width: fit-content;

    /* Grid layout for screens smaller than or equal to 576px */
    @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CustomImg = styled.img`
    width: 100%;
    height: auto;
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const MoreDetail = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    transition: max-height 0.3s ease-out;
    max-height: ${props => (props.visible ? '500px' : '0')}; /* Adjust max-height as needed */
    overflow: hidden;
    position: relative;
`;

const ToggleButton = styled.button`
    background: none;
    border: none;
    color: black;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 10px;
`;


const ItemComponent = ({ item, isVisible, toggleDetail }) => {
    return (
        <div key={item.id} style={{ border: '1px solid black', width: '88%', position: 'relative' }}>
            <ToggleButton onClick={toggleDetail}>
                {isVisible ? 'Close' : 'More'}
            </ToggleButton>
            <ImgWrapper>
                <CustomImg src={item.mainImage} />
                <MoreDetail visible={isVisible}>
                    <div style={{ padding: '20px' }}>More details about the item...</div>
                </MoreDetail>
            </ImgWrapper>
            <div style={{ textAlign: 'left', marginTop: '10px', fontSize: '18px' }}>{item.title}</div>
        </div>
    );
};


const Grid = ({ loading, data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [detailVisible, setDetailVisible] = useState([]);

    const itemsPerPage = 12;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentData(data.slice(startIndex, endIndex));
        setDetailVisible(new Array(data.length).fill(false)); // Initialize detailVisible array
    }, [currentPage, data]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const toggleDetail = (index) => {
        setDetailVisible(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div style={{ margin: "20px auto", maxWidth: "900px" }}>
            {loading ? (
                <div>
                    <CircularProgress color='warning' />
                </div>
            ) : (
                <Wrapper>
                    {data && currentData.map((item, index) => (
                        <ItemComponent
                            key={item.id}
                            item={item}
                            isVisible={detailVisible[index]}
                            toggleDetail={() => toggleDetail(index)}
                        />
                    ))}
                </Wrapper>
            )}
        </div>
    );
};

export default Grid;
