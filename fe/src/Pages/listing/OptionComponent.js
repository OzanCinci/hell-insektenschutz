import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Grid from './listingComponents/Grid';
import Alert from '@mui/material/Alert';
import styled from 'styled-components';
import useFilter from './listingComponents/useFilter';
import FilterComponent from './listingComponents/FilterComponent';
import CircularProgress from '@mui/material/CircularProgress';
import { optionsData } from './data/data';

const ModifiedAlert = styled(Alert)`
    width: fit-content;
    font-size: 18px !important;
    text-align: left;
    margin: 0 auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 1600px;
    margin: auto;

    @media (max-width: 850px) {
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const config = {
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
        }
};

function OptionComponent({category, model}) {
    const optionComponentData = optionsData[category][model];
    const filterValues = optionComponentData.filterValues;
    const url = optionComponentData.url;
    const productDetailUrl = optionComponentData.productDetailUrl;
    const link = optionComponentData.link;
    const ternaryImageFunction = optionComponentData.ternaryImageFunction;

    ///////// CODE BELOW IS GENERIC CODE ///////
    const { data, loading, error } = useFetch(url, config, 0);
    const [colors, setColors] = useState(null);
    const [result, filterLoading, handleFilterClick, selection, clearAllFilters, handleSearchChange] = useFilter(filterValues, colors);

    useEffect(() => {
        if (data !== null) {
            const upgradedColors = data.colors.map(item=> {
                const mainImage = item.previewImage;
                const secondaryImage = item.tileImage;
                const ternaryImage = ternaryImageFunction(item);
                return {mainImage, secondaryImage, ternaryImage, ...item};
            })
            setColors(upgradedColors);
        }
    }, [data]);

    if (loading) {
        return <CircularProgress color="warning" />;
    }

    if (error) {
        return <div>
            {error !== null && <ModifiedAlert severity="error">{error}</ModifiedAlert>}
        </div>;
    }

    return (
        link 
        ? <>
            <Container>
                <FilterComponent 
                    filterObj={filterValues} 
                    handleFilterClick={handleFilterClick} 
                    selection={selection} 
                    clearAllFilters={clearAllFilters}
                    defaultExpandedPanels={{ Farbton: true, Lichtdurchlässigkeit: true , Stoffart: true}}
                    handleSearchChange={handleSearchChange}
                />
                <Grid 
                    loading={filterLoading} 
                    data={result || []} 
                    link={link}
                    productInfoUrl={productDetailUrl}
                />
            </Container>
        </>
        :<></>
    );
}

export default OptionComponent;
