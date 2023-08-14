import React from 'react'
import {SingleSection} from '../CustomComponents/Components'
import styled from 'styled-components'
import liPhoto from '../images/landingPage/li.png';
import service1 from '../images/Services/service1.jpg';
import service2 from '../images/Services/service2.jpg';

const liMap = [
  {
    title: "Das System",
    text: "Unsere Lösungen - die Grundlage für Ihre positive Geschäftsentwicklung."
  },
  {
    title: "Hochwertig & Passgenau",
    text: "Wir legen großen Wert auf Optik und Funktion unserer Produkte, deshalb haben wir entscheidende Details"
  },
  {
    title: "Schutz, der Freiheit schafft",
    text: "Zählt zu den führenden Anbietern im Insektenschutz. Die Basis des Erfolges: solide Werte."
  }
]

const Icon = styled.img`
  height: 60px;
  margin-top: 20px;
`
const Title = styled.div`
  font-size: 24px;
  text-align: left;
  font-weight: bold;

  @media only screen and (max-width: 1370px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 17px;
  }

  @media only screen and (max-width: 780px) {
    display: none;
  }
`
const Text = styled.div`
  font-size: 18px;
  text-align: left;

  @media only screen and (max-width: 1370px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 90px) {
    font-size: 11px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
`;

const LiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justfiy-content: space-around;
  align-items: flex-start;
  gap: 40px;
`;


const LiElement = styled(({title, text})=>{ 
  return (
    <LiWrapper>
      <div>
        <Icon src={liPhoto}/>
      </div>
      <TextWrapper>
        <Title>
          {title}
        </Title>
        <Text>
          {text}
        </Text>
      </TextWrapper>
    </LiWrapper>
  )})``;


const LiContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    max-width: 1400px;

    @media only screen and (max-width: 755px) {
      display: none;
    }
`;


const serviceMap = [
  {
    title: null,
    img: service1,
    text: "Schnaken und andere Insekten in Ihren Wohnräumen gehören bald der Vergangenheit an. Lehnen Sie sich entspannt zurück, Ihr Auftrag geht bei uns in Arbeit und Sie erhalten in Kürze millimetergenau gefertigte und optimal montierte Fliegengitter. Hochwertige Materialien, ein umfassendes Produktportfolio und erstklassige Kundenbetreuung zeichnen.",
    def: true
  },
  {
    title: null,
    img: service2,
    text: "Der Wunsch nach hellen, lichtdurchfluteten Räumen und energieeffizienten Häusern beeinflusst den modernen Objektbau. Klar, dass es unser Anspruch ist Fliegengitter zu produzieren, die nahezu unsichtbar sind und eine extrem komfortable Bedienung aufweisen. Unsere Mission ist, die besten Insektenschutzlösungen auf dem Markt zu bieten.",
    def: false
  }
]

//height: 250px;
const ServiceImg = styled.img`
  height: 300px;

  @media only screen and (max-width: 1370px) {
    height: 250px;
  }
  @media only screen and (max-width: 900px) {
    height: 230px;
  }
`


const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.def ? "row" : "row-reverse"};
  max-width: 1000px;
  gap: 80px;
  align-items: center;
`;

const ServiceText = styled.div`
  color: rgb(82, 82, 102);
  font-size: 20px;
  padding: 10px;

  @media only screen and (max-width: 1370px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
`

const ServiceElement = styled(({img, title, text, def})=>{ 
  return (
    <Wrapper def={def}>
        <ServiceImg src={img}/>
        <div  style={{textAlign:"left"}}>
          {title && <div>{title}</div>}
          <ServiceText>
            {text}
          </ServiceText>
        </div>
    </Wrapper>
  )})``;

const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media only screen and (max-width: 755px) {
      display: none;
    }
`;

const ServiceContainer = styled(SingleSection)`
    flex-direction: column;
    justify-content: space-around;
    padding-top: 95px;
    padding-bottom: 20px;

    @media only screen and (max-width: 1370px) {
      gap: 3vh;
      padding-bottom: 50px;
    }

    @media only screen and (max-width: 900px) {
      padding-bottom: 20px;
      justify-content: space-around;
      padding-top: 80px;
    }

    @media only screen and (max-width: 780px) {
      justify-content: flex-start;
      padding-top: 100px;
    }
    
`;


const SubTitle = styled.div`
  font-size: 24px;
  text-align: left;
  font-weight: bold;

  @media only screen and (max-width: 900px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 560px) {
    font-size: 20px;
  }
`

const AccordionWrapper = styled.div`
  width: 90vw;


  @media only screen and (min-width: 756px) {
    display: none;
  }

  .accordion-button:not(.collapsed) {
    color: white;
    background: #f59f4c;
    border: none;
    font-weight: bold;
  }

  .accordion-item {
    border: 1px solid #db5424;
  }

  .accordion-button:focus {
    box-shadow: inherit;
  }

  .accordion-button:not(.collapsed)::after{
    filter: brightness(0%) invert(100%);
  }
`;


const AccordionImg = styled.img`
  height: 20vh;
  min-height: 150px;
  @media only screen and (min-width: 756px) {
    display: none;
  }
`;

const AccordionText = styled.div`
  text-align: left;
  padding: 20px;
  font-size: 18px;

  @media only screen and (max-width: 560px) {
    font-size: 15px;
  }
`;


function Services() {
  return (
    <ServiceContainer>
      <LiContainer>
        {
          liMap.map(item => <LiElement key={item.title} text={item.text} title={item.title}/>)
        }
      </LiContainer>
      <SubTitle>Mehr über uns </SubTitle>
      <ServiceWrapper>
        <ServiceElement img={service1} text={serviceMap[0].text} def={true}/>
        <ServiceElement img={service2} text={serviceMap[1].text} def={false}/>
      </ServiceWrapper>


      <AccordionImg  src={service1}/>
      <AccordionWrapper>
        <div class="accordion" id="accordionExample">
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button style={{fontSize: "15px"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Unsere Mission. 100% Insektenschutz
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <AccordionText class="accordion-body">
                Schnaken und andere Insekten in Ihren Wohnräumen gehören bald der Vergangenheit an. Lehnen Sie sich entspannt zurück, Ihr Auftrag geht bei uns in Arbeit und Sie erhalten in Kürze millimetergenau gefertigte und optimal montierte Fliegengitter. Hochwertige Materialien, ein umfassendes Produktportfolio und erstklassige Kundenbetreuung zeichnen.
              </AccordionText>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button style={{fontSize: "15px"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Schutz, der Freiheit schafft 
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <AccordionText class="accordion-body">
                Der Wunsch nach hellen, lichtdurchfluteten Räumen und energieeffizienten Häusern beeinflusst den modernen Objektbau. Klar, dass es unser Anspruch ist Fliegengitter zu produzieren, die nahezu unsichtbar sind und eine extrem komfortable Bedienung aufweisen. Unsere Mission ist, die besten Insektenschutzlösungen auf dem Markt zu bieten.
              </AccordionText>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button style={{fontSize: "15px"}} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Hochwertig & Passgenau
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <AccordionText class="accordion-body">
                Unsere Lösungen - die Grundlage für Ihre positive Geschäftsentwicklung. Wir legen großen Wert auf Optik und Funktion unserer Produkte, deshalb haben wir entscheidende Details. Zählt zu den führenden Anbietern im Insektenschutz. Die Basis des Erfolges: solide Werte.
              </AccordionText>
            </div>
          </div>
        </div>
      </AccordionWrapper>

    </ServiceContainer>
  )
}

export default Services