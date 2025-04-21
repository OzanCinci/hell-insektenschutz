import React, {useMemo} from 'react'
import styled from 'styled-components';
import PlisseeImage from '../images/shopCategories/PlisseeFreihaengend.webp';
import HolzjalousieImage from '../images/shopCategories/holzjalousie.webp';
import DoppelRolloImg from '../images/shopCategories/doppelrollo.webp';
import LamellanImg from '../images/shopCategories/lamellan.webp';
import InsekImg from '../images/shopCategories/insek.webp';
import {RegularProductCatalogProductLinkWithoutHover} from "../CustomComponents/Link";


const defaultButtonMsg = "Mehr Info";
export const Row = styled(({img, title, text, def, url, showNav, buttonMsg = defaultButtonMsg})=>{
  const isMainPage = buttonMsg === defaultButtonMsg;
  return (
    <Wrapper isMainPage={isMainPage} def={def}>
        <ServiceImg src={img}/>
        <div  style={{textAlign:"left"}}>
          {title && <RowTitle>{title}</RowTitle>}
          <ServiceText>
            {text}
          </ServiceText>
          {showNav && <MoreInfo scaleRatioDefault={isMainPage}>
            <RegularProductCatalogProductLinkWithoutHover to={url}>
              {buttonMsg}
            </RegularProductCatalogProductLinkWithoutHover>
          </MoreInfo>}
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

export const RowTitle = styled.h3`
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

const generalProductData = [
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

const badenBadenProductData = [
  {
    img: PlisseeImage,
    text: "Plissees sind die ideale Wahl für Ihren Sonnenschutz in Baden-Baden, da sie eine stilvolle Möglichkeit bieten, das Licht in Ihren Räumen zu regulieren und gleichzeitig für einen zuverlässigen Insektenschutz zu sorgen. Diese modernen Faltstores passen sich perfekt an jede Fenstergröße an – sei es für Standardfenster, Dachfenster oder spezielle Sonderformen. Mit maßgeschneiderter Fertigung und einer Vielzahl an Stoffen und Farben schaffen Sie mit unseren Plissees in Baden-Baden einen funktionalen und attraktiven Schutz für Ihr Zuhause.",
    def: false,
    title: "Plissees",
    url: "/geschaft/plissees",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: HolzjalousieImage,
    text: "Mit unseren Jalousien für Baden-Baden und Umgebung können Sie das Licht in Ihrem Zuhause genau nach Ihren Wünschen regulieren und gleichzeitig für effektiven Sonnenschutz sorgen. Unsere Jalousien sind in verschiedenen Ausführungen erhältlich, von modernen Aluminiumjalousien bis hin zu klassischen Holzjalousien. Sie zeichnen sich durch ihre hohe Verarbeitungsqualität und ihre Vielseitigkeit aus, wodurch sie sich hervorragend in jede Raumgestaltung einfügen.",
    def: true,
    title: "Jalousien",
    url: "/geschaft/jalousien",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: DoppelRolloImg,
    text: "Unsere Rollos bieten Ihnen in Baden-Baden eine ideale Lösung, um Ihr Zuhause vor Sonneneinstrahlung zu schützen und gleichzeitig eine angenehme Atmosphäre zu schaffen. Sie sind in verschiedenen Ausführungen erhältlich, darunter Premium Rollos, Basic Rollos, Smart Akku Rollos und Doppelrollos. Diese bieten Ihnen nicht nur eine präzise Kontrolle des Lichteinfalls, sondern auch eine benutzerfreundliche Handhabung. Mit flexiblen Montagemöglichkeiten, die auch ohne Bohren auskommen, fügen sich unsere Rollos nahtlos in Ihre Raumgestaltung ein.",
    def: false,
    title: "Rollos",
    url: "/geschaft/rollos",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: LamellanImg,
    text: "Lamellenvorhänge bieten bei Ihnen in Baden-Baden eine stilvolle Möglichkeit, sowohl den Sonnenschutz als auch den Sichtschutz in Ihrem Zuhause zu optimieren. Besonders bei großen Fenstern sind sie eine ausgezeichnete Wahl, da sie eine exakte Steuerung des Lichts ermöglichen und sich perfekt an Ihre Bedürfnisse anpassen. Unsere Auswahl an Lamellenvorhängen umfasst verschiedene Modelle, von Premium- bis hin zu Basic-Varianten, die in unterschiedlichen Stoffen und Lamellenbreiten erhältlich sind.",
    def: true,
    title: "Lamellenvorhang",
    url: "/geschaft/lamellenvorhang",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: InsekImg,
    text: "Unser Insektenschutz für Baden-Baden und Umgebung sorgt dafür, dass Sie frische Luft genießen können, ohne von Insekten gestört zu werden. Wir bieten eine breite Palette an Insektenschutzlösungen, darunter Spannrahmen, Plisseetüren und Pendeltüren, die passgenau auf Ihre Fenster und Türen abgestimmt werden. Diese Produkte sind sowohl in Standardgrößen als auch in individuellen Maßanfertigungen erhältlich.",
    def: false,
    title: "Insektenschutz",
    url: "/geschaft/insektenschutz",
    buttonMsg: "Entdecke alle Varianten"
  },
];

const pforzheimProductData = [
  {
    img: PlisseeImage,
    text: "Plissees – die ideale Lösung für stilvollen Sicht- und Sonnenschutz in jedem Raum. Diese modernen Faltstore sind eine hervorragende Alternative zu traditionellen Rollos und Jalousien und sind in verschiedenen Ausführungen verfügbar, um den individuellen Bedürfnissen gerecht zu werden. Egal ob für Standardfenster, Dachfenster oder spezielle Sonderformen – Plissees lassen sich millimetergenau anpassen und überzeugen durch eine einfache Montage, hochwertige Stoffe und eine vielfältige Auswahl an Designs.",
    def: false,
    title: "Plissees",
    url: "/geschaft/plissees",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: HolzjalousieImage,
    text: "Jalousien sind eine elegante und praktische Lösung für Sicht- und Sonnenschutz in jedem Raum in Pforzheim. Sie ermöglichen eine präzise Regulierung des Lichts und sind in unterschiedlichen Varianten erhältlich, um den persönlichen Anforderungen gerecht zu werden. Unser Sortiment reicht von einfachen Jalousien über Premium-Ausführungen bis hin zu Holzjalousien. Egal ob aus Aluminium oder Holz – unsere Produkte zeichnen sich durch ihre hochwertige Verarbeitung aus und bieten eine Vielzahl von Farb- und Designoptionen.",
    def: true,
    title: "Jalousien",
    url: "/geschaft/jalousien",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: DoppelRolloImg,
    text: "In Pforzheim finden Sie stilvolle Rollos, die sowohl als Sonnen- als auch Sichtschutz dienen und sich durch ihre einfache Handhabung auszeichnen. Unser Angebot umfasst verschiedene Modelle wie Premium Rollos, Basic Rollos, Smart Akku Rollos und Doppelrollos. Dank einer Vielzahl an Stoffen, Breiten und Montagemöglichkeiten – auch ohne Bohren – fügen sich unsere Rollos harmonisch in jeden Raum ein. Egal, ob Sie eine klassische Variante, oder eine Option mit doppelt gewebtem Stoff für flexible Lichtregulierung suchen.",
    def: false,
    title: "Rollos",
    url: "/geschaft/rollos",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: LamellanImg,
    text: "Lamellenvorhänge stellen eine elegante Lösung für den Sonnen- und Sichtschutz für Ihr Zuhause in Pforzheim dar. Sie erlauben eine präzise Regulierung des Lichts und sind besonders gut für große Fenster geeignet. In Pforzheim finden Sie eine vielfältige Auswahl an Lamellenvorhängen, darunter Premium-, Basic- und schräge Varianten. Diese Vorhänge sind in verschiedenen Stoffen, Lamellenbreiten und Montagemöglichkeiten erhältlich, wodurch sie sich flexibel an die Bedürfnisse Ihrer Wohn- und Arbeitsräume anpassen lassen.",
    def: true,
    title: "Lamellenvorhang",
    url: "/geschaft/lamellenvorhang",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: InsekImg,
    text: "Mit unserem Insektenschutz für die Umgebung von Pforzheim gewährleisten wir frische Luft, während störende Insekten draußen bleiben. Unser vielfältiges Angebot umfasst flexible Spannrahmen, praktische Plisseetüren und bequeme Pendeltüren, die optimal an Ihre Fenster und Türen angepasst werden können. Diese Produkte werden millimetergenau gefertigt und sind sowohl in gängigen Standardgrößen als auch als individuelle Maßanfertigung erhältlich.",
    def: false,
    title: "Insektenschutz",
    url: "/geschaft/insektenschutz",
    buttonMsg: "Entdecke alle Varianten"
  },
];

const karlsruheProductData = [
  {
    img: PlisseeImage,
    text: "Plissees - die perfekte Wahl für stilvollen Sicht- und Sonnenschutz in jedem Raum. Diese modernen Faltstores stellen eine ausgezeichnete Alternative zu klassischen Rollos und Jalousien dar und bieten eine breite Auswahl an Designs, die sich flexibel an Ihre Bedürfnisse anpassen lassen. Ob für Standardfenster, Dachfenster oder spezielle Sonderformen – wir fertigen Ihre Plissees in der Nähe von Karlsruhe präzise auf Maß und bieten eine einfache Montage sowie hochwertige Materialien.",
    def: false,
    title: "Plissees",
    url: "/geschaft/plissees",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: HolzjalousieImage,
    text: "Jalousien bieten eine präzise Lichtregulierung und sind in vielen verschiedenen Ausführungen erhältlich, sodass sie sich ideal an Ihre persönlichen Bedürfnisse anpassen lassen. Unser Angebot reicht von klassischen Aluminiumjalousien bis hin zu edlen Holzjalousien, die durch ihre hochwertige Verarbeitung und Langlebigkeit überzeugen. In der Region Karlsruhe ist unsere Auswahl besonders beliebt – egal ob für moderne oder traditionelle Wohnstile. Unsere Jalousien lassen sich mühelos montieren, oft sogar ohne Bohren, und bieten zahlreiche Farb- und Designvarianten.",
    def: true,
    title: "Jalousien",
    url: "/geschaft/jalousien",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: DoppelRolloImg,
    text: "Wir bieten Ihnen hochwertige Rollos, die sowohl optimalen Sicht- als auch Sonnenschutz bieten. Unsere Rollos zeichnen sich durch eine benutzerfreundliche Handhabung und eine Vielzahl von Optionen aus, die sich perfekt an Ihre Bedürfnisse anpassen lassen. Mit flexiblen Montagemöglichkeiten – oft ganz ohne Bohren – fügen sich unsere Rollos nahtlos in jedes Raumkonzept ein. Egal, ob Sie eine klassische Variante, eine smart steuerbare Lösung bevorzugen. bei uns finden Sie den idealen Insektenschutz oder Sonnenschutz für Ihr Zuhause in Karlsruhe.",
    def: false,
    title: "Rollos",
    url: "/geschaft/rollos",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: LamellanImg,
    text: "Lamellenvorhänge für Karlsruhe und Umgebung bieten eine elegante Möglichkeit, sowohl den Sicht- als auch den Sonnenschutz in Ihrem Zuhause zu optimieren. Besonders für große Fenster sind sie eine hervorragende Wahl, da sie eine exakte Regulierung des Lichts ermöglichen. Unsere Auswahl an Lamellenvorhängen umfasst verschiedene Modelle, darunter Premium- und Basic-Optionen sowie Varianten für schräge Fenster. In der Nähe von Karlsruhe finden Sie Lamellenvorhänge, die in unterschiedlichen Stoffen, Lamellenbreiten und Montagemöglichkeiten erhältlich sind.",
    def: true,
    title: "Lamellenvorhang",
    url: "/geschaft/lamellenvorhang",
    buttonMsg: "Entdecke alle Varianten"
  },
  {
    img: InsekImg,
    text: "Unser Insektenschutz sorgt dafür, dass Sie frische Luft genießen können, ohne dass unerwünschte Insekten in Ihre Räume gelangen. Wir bieten eine breite Auswahl an Lösungen, darunter flxible Spannrahmen, Plisseetüren und Pendeltüren, die sich perfekt an Ihre Fenster und Türen anpassen lassen. Alle Produkte werden passgenau gefertigt und sind sowohl in Standardgrößen als auch als maßgeschneiderte Anfertigungen verfügbar. Mit der Verwendung von hochwertigen Materialien und einem durchdachten Design bieten unsere Insektenschutzsysteme in der Nähe von Karlsruhe effektiven Schutz vor Insekten.",
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

const LineText = styled.h2`
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

function selectDataByType(dataType) {
  if (dataType==="GENERAL")
    return generalProductData;
  if (dataType==="BADEN-BADEN")
    return badenBadenProductData;
  if (dataType==="PFORZHEIM")
    return pforzheimProductData;
  if (dataType==="KARLSRUHE")
    return karlsruheProductData;
  return [];
}

function Products({dataType = "GENERAL", title = "Unser Produktkatalog"}) {
  const data = useMemo(() => selectDataByType(dataType), [dataType]);

  return (
    <Container>
      <LineSeperatorTitleComponent msg={title}/>
      <ServiceWrapper>
        {
          data.map((item,index)=> <Row key={index} showNav={true} url={item.url} img={item.img}  text={item.text} def={item.def} title={item.title} buttonMsg={item.buttonMsg}/>)
        }
      </ServiceWrapper>
    </Container>
  )
}

export default Products;
