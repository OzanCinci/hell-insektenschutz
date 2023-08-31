import React from 'react'
import styled from 'styled-components';
import P1 from '../images/product/p1.jpg'
import P2 from '../images/product/p2.jpg'
import P3 from '../images/product/p3.jpg'
import P4 from '../images/product/p4.jpg'
import P5 from '../images/product/p5.jpg'
import P6 from '../images/product/p6.jpg'
import P7 from '../images/product/p7.jpg'
import { useNavigate } from 'react-router-dom';

export const Row = styled(({img, title, text, def, showNav , func})=>{ 
  return (
    <Wrapper data-aos={def?"fade-right":"fade-left"} def={def}>
        <ServiceImg src={img}/>
        <div  style={{textAlign:"left"}}>
          {title && <RowTitle>{title}</RowTitle>}
          <ServiceText>
            {text}
          </ServiceText>
          {showNav && <MoreInfo onClick={func}>Mehr Info</MoreInfo>}
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
    bottom: 2px;
    width: 100%;
    height: 2px;;
    background-color: #f59f4c;
    transform: scaleX(0.4);
    border: 1px solid #f59f4c;

    transition: transform 150ms ease-in;
  }

`

export const RowTitle = styled.div`
  font-size: 18px;
  margin: 15px auto;
  font-weight: bold;
  margin-left: 15px;
`

export const ServiceImg = styled.img`
  height: 300px;

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
  max-width: 1000px;
  gap: 80px;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 680px) {
    flex-direction: column;
    border-radius: 12px;

    -webkit-box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);
    -moz-box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);
    box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);

    width: 60%;
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
`

const data = [
  {
    img: P1,
    text: "Drehtüren sind die 1. Wahl, wenn Sie ein Fliegengitter zum Öffnen für Balkon oder Terrasse suchen. Durch die Vielzahl an Varianten bieten wir Ihnen die optimale Lösung für Ihren Anwendungsfall. Die Öffnung erfolgt im Regelfall nach außen.",
    def: true,
    title: "Insektenschutz für Türen",
    url: "/turen"
  },
  {
    img: P2,
    text: "Unsere Spannrahmen sind die beliebte Lösung für Fenster, die nur zum Lüften geöffnet oder gekippt werden. Unser Einhängesystem ermöglicht eine Montage ohne zu Bohren. Auch bei besonders eng anliegenden Rolloführungsschienen haben wir die richtige Lösung parat.",
    def: false,
    title: "Insektenschutz für Fenster",
    url: "/fenster"
  },
  {
    img: P3,
    text: "Unsere Rollo-Systeme bieten Insektenschutz für nahezu jedes Dachflächenfenster. Egal ob Sie unsere Rollos ausgezogen haben, oder ob es in der Kassette auf Benutzung wartet – sie werden in Sachen Durchblick fast keinen Unterschied merken. Versprochen.",
    def: true,
    title: "Insektenschutz für Dachfenster",
    url: "/dachfenster"
  },
  {
    img: P4,
    text: "Viele Möglichkeiten ein Ziel: Sauberkeit in Ihren Lichtschächten. Ob als clevere Nachrüstlösung oder als tragfähiges Gesamtelement – wir bieten für Ihre Anforderung die richtige Lösung.",
    def: false,
    title: "Für Lichtschächte",
    url: "/lich"
  },
  {
    img: P5,
    text: "Mit Ecken und Kanten oder sanften Radien? Unsere Abteilung für Sonderformen realisiert mit Präzision außergewöhnliche Rahmenformen für Ihre Fenster.",
    def: true,
    title: "Sonderformen",
    url: "/sonderformen"
  },
  {
    img: P6,
    text: "Die perfekte Ergänzung für den Eingangsbereich ist ein Lämmermann-Fußabstreifer nach Maß. Edle Optik und leichte Reinigung sprechen für sich.",
    def: false,
    title: "Zusatzprodukte",
    url: "/zusatzprodukte"
  },
  {
    img: P7,
    text: "proAIR bietet Ihnen das Optimum an Durchsicht, Luftdurchlass und Haltbarkeit. Mit seiner offenen Siebfläche von 80% und extrem dünnen Fäden entsteht ein nahezu unsichtbarer Insektenschutz. Fiberglas – ein langzeiterprobter Werkstoff - ist zudem extrem reißfest und beständig gegen Witterungseinflüsse.",
    def: true,
    title: "Gewebearten",
    url: "/gewebearten"
  },
]

const GeneralTitle = styled.div`
  font-size: 35px;
  margin: 35px auto;
  font-weight: bold;
`

function Products() {
  const navigate = useNavigate()
  const nav = (arg) => {
    navigate(arg);
  }


  return (
    <Container>
      <GeneralTitle> Unsere Produkte</GeneralTitle>
      <ServiceWrapper>
        {
          data.map((item,index)=> <Row key={index} func={()=>nav(item.url)} showNav={true} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
        }
      </ServiceWrapper>
    </Container>
  )
}

export default Products