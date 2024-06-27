import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Carousel from '../ProductComponents/Carousel';
import ProductDetails from '../ProductComponents/ProductDetails';
import Selection from '../ProductComponents/Selection';
import Installation from '../ProductComponents/Installation';
import Reviews from '../../LandingPageComponents/Reviews';

const ModifiedAlert = styled(Alert)`
  width: fit-content;
  font-size: 18px !important;
  text-align: left;
  margin: 0 auto;
`;

const ColumnContainer = styled.div`
  margin-top: 120px;
  min-height: fit-content;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  max-width: 1250px;
  gap: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const Column = styled.div`
  flex: 1;
  padding: 20px;
`;

const LeftColumn = styled(Column)`
  
`;

const RightColumn = styled(Column)`
  height: fit-content;
`;

const config = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
};

const defaultImages = [
    'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4586_1688031027_1000x1000.webp',
    'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4587_1688031051_1000x1000.webp',
    'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4585_1688031004_1000x1000.webp',
    'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4588_1688031079_1000x1000.webp',
]

const selectionData = [
    {
        title: "Montageposition",
        multichoice: false,
        options: [
            {
                title: "Glasfalz",
                note: "meist gewählt",
                defaultSelected: true,
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_5_1666613448_450x450.webp",
                explanation: {
                    title: "Glasfalz",
                    text: [
                        "Bei dieser beliebten Montageart verschrauben Sie die Plissees standardmäßig, mit den im Lieferumfang enthaltenen Abspannschuhen, im Glasfalz - dieser kann auch leicht schräg zur Glasscheibe hin abfallen.",
                        "Optional auswählbare Befestigungsarten sind die Montage mit Klebeleisten oder Klebeplatten (Modell VS2).",
                        "Die Mindest-Glasleistentiefe beträgt 18 mm. Dies ist die Tiefe von der Rahmenvorderkante zum Glas (bei der Klebeleiste wird keine Mindesttiefe benötigt).",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_85_1678865265_450x450.webp",
                forbids: [],
                price: 0
            },
            {
                title: "Fensterflügel",
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_33_1666613279_450x450.webp",
                explanation: {
                    title: "Fensterflügel",
                    text: [
                        "Hier schrauben Sie die im Lieferumfang enthaltenen Winkelträger an den Fensterflügel (Schrauben inkl.).",
                        "Optional kann die Montage ohne zu schrauben mit Klemmträgern gewählt werden.",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_86_1683704113_450x450.webp",
                forbids: [],
                price: 0
            },
            {
                title: "Wand",
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_11_1666613476_450x450.webp",
                explanation: {
                    title: "Wand",
                    text: [
                        "Bei dieser Montageart schrauben Sie die im Lieferumfang enthaltenen Winkelträger an die Wand (Schrauben inkl.).",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_88_1683704125_450x450.webp",
                forbids: [],
                price: 0
            },
            {
                title: "Decke/Nische",
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_12_1666613467_450x450.webp",
                explanation: {
                    title: "Decke oder Nische",
                    text: [
                        "Bei dieser Montageart erhalten Sie, je nach bestelltem Plisseemodell, Abspannschuhe oder Deckenträger, die nach oben in die Decke oder Nische verschraubt werden (Schrauben inkl.).",
                    ]
                },
                explanationImg: null,
                forbids: [],
                price: 0
            },
        ]
    },
    {
        title: "Plisseemodell",
        multichoice: false,
        hardcodedSelected: true,
        options: [
            {
                title: "MP2",
                defaultSelected: true,
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7037_1705999731_450x450.webp",
                explanation: {
                    title: "Der Bestseller - Modell MP2 verspannt",
                    text: [
                        "Das Plissee kann jeweils mit der Ober- und Unterschiene nach oben und unten bewegt werden.",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7037_1705999731_450x450.webp",
                forbids: [],
                price: 0
            },
        ]
    },
    {
        title: "Befestigungsart",
        multichoice: false,
        checkAllowList: true,
        options: [
            {
                title: "Abspannschuhe",
                note: "meist gewählt",
                defaultSelected: false,
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_221_1711541147_450x450.webp",
                explanation: {
                    title: "Der Bestseller - Modell MP2 verspannt",
                    text: [
                        "Das Plissee kann jeweils mit der Ober- und Unterschiene nach oben und unten bewegt werden.",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7037_1705999731_450x450.webp",
                forbids: [],
                allows: {
                    type: "single",
                    dependecies: [
                        {"Montageposition":"Glasfalz"},
                        {"Montageposition":"Decke/Nische"},
                    ]
                },
                price: 0
            },
            {
                title: "Gelenkklebeplatte",
                defaultSelected: false,
                note: "sehr beliebt",
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_209_1706006725_450x450.webp",
                explanation: {
                    title: "Der Bestseller - Modell MP2 verspannt",
                    text: [
                        "Das Plissee kann jeweils mit der Ober- und Unterschiene nach oben und unten bewegt werden.",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7037_1705999731_450x450.webp",
                forbids: [],
                allows: {
                    type: "single",
                    dependecies: [
                        {"Montageposition":"Glasfalz"},
                    ]
                },
                price: 14.90
            },
            {
                title: "Winkelträger",
                defaultSelected: false,
                note: "meist gewählt",
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_222_1711541147_450x450.webp",
                explanation: {
                    title: "Der Bestseller - Modell MP2 verspannt",
                    text: [
                        "Das Plissee kann jeweils mit der Ober- und Unterschiene nach oben und unten bewegt werden.",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7037_1705999731_450x450.webp",
                forbids: [],
                allows: {
                    type: "single",
                    dependecies: [
                        {"Montageposition":"Fensterflügel"},
                        {"Montageposition":"Wand"},
                    ]
                },
                price: 0
            },
            {
                title: "Klemmträger",
                defaultSelected: false,
                note: "sehr beliebt",
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_213_1706006727_450x450.webp",
                explanation: {
                    title: "Der Bestseller - Modell MP2 verspannt",
                    text: [
                        "Das Plissee kann jeweils mit der Ober- und Unterschiene nach oben und unten bewegt werden.",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7037_1705999731_450x450.webp",
                forbids: [],
                allows: {
                        type: "single",
                        dependecies: [
                            {"Montageposition":"Fensterflügel"},
                        ]
                },
                price: 15.90
            },
        ]
    },
    {
        title: "Zubehör",
        multichoice: true,
        options: [
            {
                title: "Bedienstab",
                cancallable: true,
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_223_1716377905_450x450.webp",
                explanation: {
                    title: "Bedienstab",
                    text: [
                        "Wenn das Plissee schwer zugänglich ist, oder höher angebracht ist, ist der Bedienstab sehr hilfreich. Es wird ein spezieller beweglicher Bediengriff verbaut (s. Bild), der mit dem Bedienstab kompatibel ist.",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_169_1714983431_450x450.webp",
                price: 26
            },
            {
                title: "Magnethalter",
                note: "sehr beliebt",
                cancallable: true,
                image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_208_1706006725_450x450.webp",
                explanation: {
                    title: "Magnetische Fixierung",
                    text: [
                        "Ober- und Unterschiene werden magnetisch an den Abspannschuhen fixiert.",
                    ]
                },
                explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_208_1706006725_450x450.webp",
                price: 12
            },
        ]
    },
    {
        // , , , , 
        title: "Schienenfarbe",
        multichoice: false,
        options: [
            {
                title: "Weiß",
                defaultSelected: true,
                image: "rgb(243, 246, 246)",
                price: 0
            },
            {
                title: "Silber",
                image: "linear-gradient(58.82deg, rgb(233, 233, 233) 2.73%, rgb(196, 196, 196) 50.11%, rgb(221, 221, 221) 67.69%, rgb(233, 233, 233) 78.93%, rgb(224, 224, 224) 96.51%)",
                price: 0
            },
            {
                title: "Anthrazit matt",
                image: "rgb(90, 90, 90)",
                price: 0
            },
            {
                title: "Schwarz matt",
                image: "rgb(30, 26, 26)",
                price: 0
            },
            {
                title: "Elfenbein",
                image: "rgb(245, 239, 224)",
                price: 0
            },
            {
                title: "Mahagoni",
                image: "rgb(87, 62, 57)",
                price: 0
            },
        ]
    },
]

const pageNumber = 0;

const SelectorComponent = styled(({data})=>{ 
    return (
        <div>
            <button id='product-color-option-detail-btn' style={{display: "none"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productColorMoreDetail"/>
            { data ?
                (<div>
                    <div class="modal fade" id="productColorMoreDetail" tabindex="-1" aria-labelledby="productColorMoreDetailLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="productColorMoreDetailLabel">{data.title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img height='200px' width='auto' src={data.img}/>
                                <div style={{textAlign: "left"}} className='my-4'>
                                    {
                                        data.body.map((item,index)=>{
                                            return <li className='my-2' key={index}>{item}</li>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>)
                :(<div></div>)
            }
        </div>
)})``;

function sumValues(obj) {
    let sum = 0;

    function traverse(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(item => traverse(item));
        } else if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    traverse(obj[key]);
                }
            }
        } else if (typeof obj === 'number') {
            sum += obj;
        }
    }

    traverse(obj);
    return sum;
}

function ProductPlissee() {
  const [moreDetailInfo, setMoreDetailInfo] = useState(null);
  /////// ITEM REQUEST AND RESPONSE DATA ///////
  const { id } = useParams();
  const url = `/api/external-products/colors/BasicPlissee/${id}`;
  const { data, loading, error } = useFetch(url, config, pageNumber);
  const [itemData, setItemData] = useState(null);
  const [images, setImages] =  useState([])
  
  useEffect(() => {
    if (data !== null) {
      setItemData(data);
      console.log(data)
      const mainImage = data.color.previewImage;
      const secondaryImage = data.color.tileImage;
      const tmp = [mainImage, secondaryImage, ...defaultImages];
      setImages(tmp);
    }
  }, [data]);
  /////// ITEM REQUEST AND RESPONSE DATA ///////



  /////// CONFIGURATION DATA ///////
  const [itemConfiguration,setItemConfiguration] = useState(null);
  const [configPrice,setConfigPrice] = useState(0);

  useEffect(()=>{
    if (itemConfiguration===null) {
        let tempItemConfiguration = {};
        selectionData.forEach(item => {
            
            let arr = [];
            const options = item.options;

            options.forEach(singleOption=> {
                if (singleOption.defaultSelected === true) {
                    // TODO: you assume default ones add 0€ cost!
                    // if not change the code here!
                    const tmp = {[singleOption.title]:0};
                    arr.push(tmp); 
                }
            });

            tempItemConfiguration[item.title] = [...arr];
        });

        setItemConfiguration(tempItemConfiguration);
        console.log("tempItemConfiguration: ",tempItemConfiguration);
    } else {
        // calculate price logic
        const tempConfigPrice = sumValues(itemConfiguration);
        setConfigPrice(tempConfigPrice);
    }
  },[itemConfiguration])
  /////// CONFIGURATION DATA ///////


  /////// TOTAL PRICE DATA ///////
  const [totalPrice,setTotalPrice] = useState(0);
  /////// TOTAL PRICE DATA ///////



  if (loading) {
    return <CircularProgress color="warning" />;
  }

  if (error) {
    return (
      <div>
        {error !== null && <ModifiedAlert severity="error">{error}</ModifiedAlert>}
      </div>
    );
  }

  return (
    <>
        {
            itemData ? 
            (
            <div>
                <ColumnContainer>
                    <LeftColumn>
                        <Carousel images={images} itemData={itemData}/>
                    </LeftColumn>
                    <RightColumn>
                        <ProductDetails itemData={itemData} image={images[1]}/>
                        <SelectorComponent data={moreDetailInfo}/>
                        {
                            selectionData.map((item,index)=>{
                                return (
                                <Selection
                                    key={index}
                                    optionList={item}
                                    itemConfiguration={itemConfiguration}
                                    setItemConfiguration={setItemConfiguration}
                                    setMoreDetailInfo={setMoreDetailInfo}
                                />)
                            })
                        }
                        <div>
                            {
                                `Config prices: ${configPrice}€`
                            }
                        </div>
                        <div>
                            <input></input>
                            <input></input>
                        </div>
                    </RightColumn>
                </ColumnContainer>
                <Installation/>
                <br/>
                <br/>
                <br/>
                <Reviews/>
                <br/>
                <br/>
            </div>
            )
            : (<div></div>)
        }
    </>
  );
}

export default ProductPlissee;
