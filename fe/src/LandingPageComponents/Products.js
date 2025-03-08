import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlisseeImage from '../images/shopCategories/PlisseeFreihaengend.webp';
import HolzjalousieImage from '../images/shopCategories/holzjalousie.webp';
import DoppelRolloImg from '../images/shopCategories/doppelrollo.webp';
import LamellanImg from '../images/shopCategories/lamellan.webp';
import InsekImg from '../images/shopCategories/insek.webp';


const defaultButtonMsg = "Mehr Info";
export const Row = styled(({img, title, text, def, showNav , func, buttonMsg = defaultButtonMsg})=>{
  const isMainPage = buttonMsg === defaultButtonMsg;
  return (
    <Wrapper isMainPage={isMainPage} def={def}>
        <ServiceImg src={img}/>
        <div  style={{textAlign:"left"}}>
          {title && <RowTitle>{title}</RowTitle>}
          <ServiceText>
            {text}
          </ServiceText>
          {showNav && <MoreInfo scaleRatioDefault={isMainPage} onClick={func}>{buttonMsg}</MoreInfo>}
        </div>
    </Wrapper>
  )})``;

const MoreInfo = styled.div`
  font-size: 18px;
  margin: 15px auto;
  margin-left: 15px;
  cursor: pointer;
  color: #f59f4c;
  position: relative;
  width: fit-content;

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 2px;;
    background-color: #f59f4c;
    transform: ${props=>props.scaleRatioDefault ? "scaleX(0.4)" : "scaleX(0.7)"};
    border: 1px solid #f59f4c;

    transition: transform 150ms ease-in;
  }

`

export const RowTitle = styled.div`
  font-size: 21px;
  margin: 15px auto;
  font-weight: bold;
  margin-left: 15px;
`;

export const ServiceImg = styled.img`
  height: 300px;
  border-radius: 10px;

  @media only screen and (max-width: 1370px) {
    height: 250px;
  }
  @media only screen and (max-width: 900px) {
    height: 230px;
  }

  @media only screen and (max-width: 680px) {
    width: 100%;
    height: auto;
  }
`;

export const ServiceText = styled.div`
  color: rgb(82, 82, 102);
  font-size: 20px;
  padding: 10px;

  @media only screen and (max-width: 1370px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.def ? "row" : "row-reverse"};
  max-width: ${props => !props.isMainPage ? "1250px" : "1000px"};
  gap: ${props => !props.isMainPage ? "60px" : "80px"}; 
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 680px) {
    flex-direction: column;
    border-radius: 12px;

    -webkit-box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);
    -moz-box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);
    box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);

    width: ${props => !props.isMainPage ? "100%" : "60%"};
    min-width: 300px;
    gap: 10px;
  }
`;

export const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Container = styled.div`
  height: fit-content;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
  padding: 20px;
`;

const data = [
  {
    img: PlisseeImage,
    text: "Plissees sind die perfekte Lösung für stilvollen Sicht- und Sonnenschutz in jedem Raum. Sie bieten eine moderne Alternative zu klassischen Rollos und Jalousien und sind in verschiedenen Varianten erhältlich, um individuellen Bedürfnissen gerecht zu werden. Ob für Standardfenster, Dachfenster oder spezielle Sonderformen – Plissees lassen sich millimetergenau anpassen und überzeugen durch einfache Montage, hochwertige Stoffe und eine breite Auswahl an Designs.",
    def: false,
    title: "Plissees",
    url: "/geschaft/plissees",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: HolzjalousieImage,
    text: "Jalousien sind eine stilvolle und funktionale Lösung für Sicht- und Sonnenschutz in jedem Raum. Sie bieten eine präzise Lichtregulierung und sind in verschiedenen Varianten erhältlich, um individuellen Bedürfnissen gerecht zu werden. Unser Sortiment umfasst Basic Jalousie, Premium Jalousie und Holzjalousie. Ob aus Aluminium oder Holz – unsere Jalousien überzeugen durch hochwertige Verarbeitung, vielfältige Farb- und Designoptionen sowie einfache Montage, auch ohne Bohren.",
    def: true,
    title: "Jalousien",
    url: "/geschaft/jalousien",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: DoppelRolloImg,
    text: "Rollos bieten stilvollen Sonnen- und Sichtschutz mit einfacher Bedienung. Unser Sortiment umfasst Premium Rollo, Basic Rollo, Smart Akku Rollo und Doppelrollo. Dank verschiedener Stoffe, Breiten und Montagemöglichkeiten – auch ohne Bohren – passen sie sich jedem Raum an. Ob klassisch, smart steuerbar oder mit doppeltem Stoff für flexible Lichtregulierung – unsere Rollos bieten Funktionalität und Design in einem.",
    def: false,
    title: "Rollos",
    url: "/geschaft/rollos",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: LamellanImg,
    text: "Lamellenvorhänge sind eine stilvolle Lösung für Sonnen- und Sichtschutz. Sie ermöglichen eine präzise Lichtregulierung und eignen sich besonders für große Fenster. Unser Sortiment umfasst Premium, Basic und Schräge Lamellenvorhänge. Mit verschiedenen Stoffen, Lamellenbreiten und Montagemöglichkeiten passen sie sich flexibel an Wohn- und Arbeitsräume an. Sie bieten eine elegante Kombination aus Design und Funktionalität.",
    def: true,
    title: "Lamellenvorhang",
    url: "/geschaft/lamellenvorhang",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: InsekImg,
    text: "Insektenschutz sorgt für frische Luft ohne lästige Insekten und bietet gleichzeitig eine klare Sicht nach draußen. Unser Sortiment umfasst Spannrahmen, Plisseetüren und Pendeltüren, die sich flexibel an Fenster und Türen anpassen. Sie sind millimetergenau gefertigt, einfach zu bedienen und sowohl in Standardgrößen als auch als Maßanfertigung erhältlich. Dank hochwertiger Materialien und durchdachtem Design bieten sie optimalen Schutz zu einem fairen Preis.",
    def: false,
    title: "Insektenschutz",
    url: "/geschaft/insektenschutz",
    buttonMsg: "Entdecke alle Varianten"
  },
];

const Splitter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
`;

const Line = styled.div`
    border-bottom: 1px solid #696984;
    flex-grow: 1;
`;

const LineText = styled.div`
    color: #696984;
    font-size: 25px;
    font-weight: 700;
    width: fit-content;
    
    @media only screen and (max-width: 550px) {
        font-size: 20px;
    }   
`;

const LineSeperatorTitleComponent = ({msg}) => {
  return (
      <Splitter>
        <Line></Line>
        <LineText>{msg}</LineText>
        <Line></Line>
      </Splitter>
  );
};

function Products() {
  const navigate = useNavigate()
  const nav = (arg) => {
    navigate(arg);
  }

  return (
    <Container>
      <LineSeperatorTitleComponent msg={"Unser Produktkatalog"}/>
      <ServiceWrapper>
        {
          data.map((item,index)=> <Row key={index} func={()=>nav(item.url)} showNav={true} img={item.img}  text={item.text} def={item.def} title={item.title} buttonMsg={item.buttonMsg}/>)
        }
      </ServiceWrapper>
    </Container>
  )
}

export default Products;
