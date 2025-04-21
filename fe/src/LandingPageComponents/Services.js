import React, {useMemo} from 'react'
import {SingleSection} from '../CustomComponents/Components'
import styled from 'styled-components'
import liPhoto from '../images/landingPage/li.png';
import service1 from '../images/shopCategories/wintergardenplissee.webp';
import service2 from '../images/shopCategories/insek.webp';

const liMap = [
  {
    title: "Technik",
    text: "Unser Erfolgsgeheimnis: Einzigartige Perfektion im Detail.",
    anim: "fade-right"
  },
  {
    title: "Qualität",
    text: "Engagement, das sich auszahlt: Führendes Qualitätsniveau.",
    anim: "zoom-out"
  },
  {
    title: "Kundenorientierung",
    text: "Ihr Mehrwert: Kurze Wege & kompetente Beratung.",
    anim: "fade-left"
  }
]

const serviceMap = [
  {
    title: null,
    img: service1,
    text: "Intensive Sonneneinstrahlung und lästige Insekten in Ihren Wohnräumen gehören bald der Vergangenheit an. Lehnen Sie sich entspannt zurück – Ihr Auftrag geht bei uns in Arbeit, und Sie erhalten in Kürze millimetergenau gefertigte und optimal montierte Fliegengitter und Sonnenschutzsysteme. Hochwertige Materialien, ein umfassendes Produktportfolio und erstklassige Kundenbetreuung zeichnen unser Angebot aus.",
    def: true,
  },
  {
    title: null,
    img: service2,
    text: "Der Wunsch nach hellen, lichtdurchfluteten Räumen und energieeffizienten Häusern beeinflusst den modernen Objektbau. Klar, dass es unser Anspruch ist, Fliegengitter zu produzieren, die nahezu unsichtbar sind, sowie Sonnenschutzlösungen, die für optimalen Licht- und Wärmeschutz sorgen. Unsere Produkte verbinden Ästhetik mit Funktionalität und bieten eine extrem komfortable Bedienung. Unsere Mission ist es, die besten Insektenschutz- und Sonnenschutzlösungen auf dem Markt zu bieten.",
    def: false
  }
]

const badenBadenserviceMap = [
  {
    title: null,
    img: service1,
    text: "Genießen Sie ungestörte Stunden in Ihrem Zuhause in Baden-Baden, geschützt vor Insekten und starker Sonneneinstrahlung. Unsere maßgeschneiderten Insektenschutz & Sonnenschutzlösungen in Baden-Baden bieten Ihnen effektiven Schutz bei gleichzeitig hohem Komfort. Unsere Produkte passen sich perfekt Ihrer Architektur an und zeichnen sich durch hochwertige Materialien und exzellente Verarbeitung aus.",
    def: true,
  },
  {
    title: null,
    img: service2,
    text: "Moderne Gebäude erfordern durchdachte Klimakonzepte. Unsere Fliegengitter bieten Ihnen zuverlässigen Insektenschutz, ohne das Tageslicht zu beeinträchtigen. Gleichzeitig regulieren unsere Sonnenschutzsysteme die Raumtemperatur effizient und tragen so zur Verbesserung Ihrer Energieeffizienz bei. Diese Kombination aus Funktion und Design sorgt für optimalen Komfort und schützt Ihr Zuhause vor Sonne und Insekten – ganz ohne Kompromisse.",
    def: false
  }
]

const pforzheimserviceMap = [
  {
    title: null,
    img: service1,
    text: "Genießen Sie künftig ungestörte Stunden in Ihren vier Wänden – ob bei strahlendem Sonnenschein oder lauen Sommerabenden. Als Spezialist für Insektenschutz in Pforzheim und Umgebung fertigen wir individuelle Lösungen, die sich nahtlos in Ihre Architektur einfügen. Unsere Systeme kombinieren präzise Verarbeitung mit innovativen Materialien, um maximalen Komfort bei minimaler Sichtbeeinträchtigung zu garantieren. Von der Beratung bis zur Montage begleiten wir Sie mit regionalem Know-how.",
    def: true,
  },
  {
    title: null,
    img: service2,
    text: "Moderne Gebäude verlangen nach intelligenten Klimakonzepten: Unsere nahezu unsichtbaren Fliegengitter schützen vor Insekten, ohne Tageslicht zu mindern. Parallel regulieren unsere Sonnenschutzsysteme Ihre Raumtemperatur energieeffizient. Dieses Zusammenspiel aus Ästhetik & Technologie und macht uns zum Vorreiter für zukunftsorientierten Wohnkomfort nähe Pforzheim.",
    def: false
  }
]

const karlsruheserviceMap = [
  {
    title: null,
    img: service1,
    text: "Erleben Sie mehr Komfort und Ruhe in Ihren eigenen vier Wänden, ganz gleich, ob an sonnigen Tagen oder bei angenehmen Sommerabenden. Als Experten für Insektenschutz & Sonnenschutz in Karlsruhe bieten wir maßgeschneiderte Lösungen, die perfekt zu Ihrem Zuhause passen. Unsere Produkte zeichnen sich durch exzellente Verarbeitung und den Einsatz fortschrittlicher Materialien aus, um Ihnen optimalen Schutz zu bieten, ohne die Sicht oder den Lichteinfall zu beeinträchtigen.",
    def: true,
  },
  {
    title: null,
    img: service2,
    text: "Moderne Architektur erfordert durchdachte Lösungen für das Raumklima. Unsere fast unsichtbaren Fliegengitter für Insektenschutz in Karlsruhe bieten zuverlässigen Schutz vor Insekten, ohne das natürliche Licht zu beeinträchtigen. Gleichzeitig optimieren unsere Sonnenschutzsysteme die Raumtemperatur und tragen zur Energieeffizienz bei. Diese perfekte Kombination aus Funktionalität und Design stellt sicher, dass Ihr Zuhause sowohl komfortabel als auch umweltfreundlich bleibt.",
    def: false
  }
]

const Icon = styled.img`
  height: 60px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 23px;
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
`;

const Text = styled.div`
  font-size: 18px;
  text-align: left;

  @media only screen and (max-width: 1370px) {
    font-size: 17px;
  }

  @media only screen and (max-width: 90px) {
    font-size: 11px;
  }
`;

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
  justify-content: space-around;
  align-items: space-around;
  gap: 0px;
`;

const LiElement = styled(({title, text, anim,noAnimation})=>{ 
  return (
    <LiWrapper data-aos={noAnimation?"":anim}>
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

const ServiceImg = styled.img`
  height: 300px;
  border-radius: 8px;

  @media only screen and (max-width: 1370px) {
    height: 250px;
  }
  @media only screen and (max-width: 900px) {
    height: 230px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.def ? "row" : "row-reverse"};
  max-width: 1100px;
  gap: 80px;
  align-items: center;
  margin-top: 15px;
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

const ServiceElement = styled(({img, title, text, def, noAnimation})=>{ 
  return (
    <Wrapper data-aos={noAnimation?"":(def?"fade-up":"fade-up")} def={def}>
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
      padding-top: 0px;
    }

    @media only screen and (max-width: 780px) {
      justify-content: flex-start;
      padding-top: 0px;
    }
    
`;

const AccordionWrapper = styled.div`
  width: 90vw;
  z-index: 95;


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
  width: 90vw;
  @media only screen and (min-width: 756px) {
    display: none;
  }
`;

const AccordionText = styled.div`
  text-align: left;
  padding: 20px;
  font-size: 18px;

  @media only screen and (max-width: 560px) {
    font-size: 20px;
  }
`;

const UlMobile = styled.ul`
`;

const Splitter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
    margin-top: 45px;

  @media only screen and (max-width: 550px) {
    margin-bottom: 5px;
    margin-top: 0px;
  }
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
        font-size: 23px;
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

function selectByDataType(dataType) {
  if (dataType==="GENERAL")
    return serviceMap;
  if (dataType==="BADEN-BADEN")
    return badenBadenserviceMap;
  if (dataType==="PFORZHEIM")
    return pforzheimserviceMap;
  if (dataType==="KARLSRUHE")
    return karlsruheserviceMap;
  return [];
}

function Services({noAnimation, dataType = "GENERAL"}) {
  const serviceMapData = useMemo(() => selectByDataType(dataType), [dataType]);

  return (
    <ServiceContainer>
      <LiContainer>
        {
          liMap.map((item,index) => <LiElement key={index} noAnimation={noAnimation} anim={"fade-up"} text={item.text} title={item.title}/>)
        }
      </LiContainer>
      <LineSeperatorTitleComponent msg={"Mehr über uns"}/>
      <ServiceWrapper>
        <ServiceElement img={service1} noAnimation={noAnimation} text={serviceMapData[0].text} def={true}/>
        <ServiceElement img={service2} noAnimation={noAnimation} text={serviceMapData[1].text} def={false}/>
      </ServiceWrapper>

      <div style={{overflow:"hidden"}}>
        <AccordionImg data-aos={noAnimation?"":"fade-up"}  src={service1}/>
      </div>
      <AccordionWrapper data-aos={noAnimation ? "" : "fade-up"}>
        <div class="accordion" id="accordionExample">

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                  style={{ fontSize: "21px" }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                Unsere Mission: 100% Schutz vor Sonne & Insekten
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <AccordionText class="accordion-body">
                Intensive Sonneneinstrahlung und lästige Insekten in Ihren Wohnräumen gehören bald der Vergangenheit an. Lehnen Sie sich entspannt zurück – Ihr Auftrag geht bei uns in Arbeit, und Sie erhalten in Kürze millimetergenau gefertigte und optimal montierte Fliegengitter und Sonnenschutzlösungen. Hochwertige Materialien, ein umfassendes Produktportfolio und erstklassige Kundenbetreuung zeichnen unser Angebot aus.
              </AccordionText>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                  style={{ fontSize: "21px" }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree">
                Schutz, der Freiheit schafft
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <AccordionText class="accordion-body">
                Der Wunsch nach hellen, lichtdurchfluteten Räumen und energieeffizienten Häusern beeinflusst den modernen Objektbau. Unser Anspruch ist es, Fliegengitter zu produzieren, die nahezu unsichtbar sind, und Sonnenschutzsysteme, die für ein angenehmes Raumklima sorgen. Unsere Produkte bieten effektiven Schutz und gleichzeitig eine komfortable Bedienung. Unsere Mission ist es, die besten Insektenschutz- und Sonnenschutzlösungen auf dem Markt zu bieten.
              </AccordionText>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                  style={{ fontSize: "21px" }}
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                Hochwertig & Passgenau
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <AccordionText class="accordion-body">
                <UlMobile>
                  <li>Unser Erfolgsgeheimnis: Einzigartige Perfektion im Detail.</li>
                  <li>Engagement, das sich auszahlt: Führendes Qualitätsniveau.</li>
                  <li>Ihr Mehrwert: Kurze Wege & kompetente Beratung.</li>
                </UlMobile>
              </AccordionText>
            </div>
          </div>

        </div>
      </AccordionWrapper>


    </ServiceContainer>
  )
}

export default Services