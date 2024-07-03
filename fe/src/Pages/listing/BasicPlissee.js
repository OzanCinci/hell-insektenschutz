import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Alert from '@mui/material/Alert';
import styled from 'styled-components';
import useFilter from './listingComponents/useFilter';
import FilterComponent from './listingComponents/FilterComponent';
import CircularProgress from '@mui/material/CircularProgress';

// images
import PlisseImg from '../../images/shopCategories/MaterialTypePlissee.svg';
import WabenPlisseImg from '../../images/shopCategories/MaterialTypeWabenplissee.svg';
import Halbtransparent  from '../../images/shopCategories/TranslucencyHalbtransparent.svg';
import Abdunkeln  from '../../images/shopCategories/TranslucencyAbdunkelnd.svg';
import Verdunkelnd  from '../../images/shopCategories/TranslucencyVerdunkelnd.svg';
import Feucht from '../../images/shopCategories/FunctionFeuchtabwischbar.svg';
import Hand from '../../images/shopCategories/FunctionHandwaschbarbis30.svg';
import Hitzes from '../../images/shopCategories/FunctionHitzeschutz.svg';
import Schad from '../../images/shopCategories/FunctionSchadstoffgeprueft.svg';
import Schwer from '../../images/shopCategories/FunctionSchwerentflammbar.svg';
import Grid from './listingComponents/Grid';

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

const url = "/api/external-products/colors/BasicPlissee";
const config = {
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
        }
};
const pageNumber = 0;

const filterValues = {
    Farbton: {
        singleChoice: true,
        data: [
            { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
            { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
            { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
            { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
            { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
            { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
            { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
            { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
            { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
            { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
            { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null } // Light Red (Pinkish)
        ]
    },
    Stoffart: {
        singleChoice: true,
        data: [
            { name: 'Plissee', image: PlisseImg, extraInfo: null},
            { name: 'Wabenplissee', image: WabenPlisseImg, extraInfo: null }
        ]
    },
    Lichtdurchlässigkeit: {
        singleChoice: true,
        data: [
            { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
            { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
            { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
        ]
    },
    Funktion: {
        singleChoice: false,
        data: [
            { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
            { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
            { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
            { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
            { name: 'Schwer entflammbar', image: Schwer, extraInfo: null }
        ]
    }
};

const productDetailUrl = "/api/product/Plissee/Basic Plissee";
function BasicPlissee() {
    const { data, loading, error } = useFetch(url, config, pageNumber);
    const [colors, setColors] = useState(null);
    const [result, filterLoading, handleFilterClick, selection, clearAllFilters, handleSearchChange] = useFilter(filterValues, colors);

    useEffect(() => {
        if (data !== null) {
            const upgradedColors = data.colors.map(item=> {
                const mainImage = item.previewImage;
                const secondaryImage = item.tileImage;
                const ternaryImage = item.properties.MaterialType === "Plissee" ? PlisseImg : WabenPlisseImg;
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
        <>
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
                    link={"BasicPlissee"}
                    productInfoUrl={productDetailUrl}
                />
            </Container>
        </>
    );
}

export default BasicPlissee;
