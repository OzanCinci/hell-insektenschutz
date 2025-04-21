import React, { useLayoutEffect } from 'react'
import styled from 'styled-components';
import PhotoComponent from '../LegalPages/PhotoComponent';
import {SeoLineSeperatorTitleComponent, SeoPageH2Title, SeoPageH3Title, SeoPageTitle} from "./common";
import LandingPageProductSwiper from "../LandingPageComponents/LandingPageProductSwiper";
import Products from "../LandingPageComponents/Products";
import Reviews from "../LandingPageComponents/Reviews";
import Services from "../LandingPageComponents/Services";
import Kontakt from "../LegalPages/Kontakt";

const Container = styled.div`
    min-height: 500px;
    text-align: left;
    max-width: 1300px;
    min-width: 300px;
    width: 80%;
    margin: auto;
    margin-top: 180px;

    &> div {
        font-size: 20px;
        margin: 20px 10px;
    }

    .liElement {
        font-size: 19px;
    }

    &> h4, .header {
        font-weight: bold;
    }

    @media only screen and (max-width: 1200px) {
        margin-top: 180px;

        &> div {
            font-size: 18px;
        }

        .liElement {
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 780px) {
        margin-top: 100px;
    }
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`


function RaumKarlsruhe() {
  return (
      <Wrapper>
          <Container>
              <SeoPageTitle>Insektenschutz & Sonnenschutz im Raum Karlsruhe</SeoPageTitle>
              <div>
                  <p>
                      Wenn die Temperaturen steigen und die Sonne ins Haus scheint, wünschen sich viele Menschen im Raum
                      Karlsruhe eine Lösung, um Hitze, Blendung und lästige Insekten draußen zu halten – ohne auf
                      frische
                      Luft oder Tageslicht zu verzichten. Unsere <strong> maßgeschneiderten Insekten- und
                      Sonnenschutzlösungen </strong>
                      bieten genau das: effektiven Schutz und mehr Lebensqualität. Ob für Fenster, Türen, Dachfenster
                      oder Terrassenelemente – wir bieten Ihnen passgenaue Systeme, die sich harmonisch in Ihr Zuhause
                      in Karlsruhe und Umgebung einfügen.
                  </p>
              </div>
              <div>
                  <p>
                      Ein zusätzlicher Vorteil unseres <strong> Sonnenschutzes </strong>: Er sorgt nicht nur für
                      angenehme
                      Temperaturen, sondern auch für <strong> Sichtschutz </strong>. Besonders in dicht besiedelten
                      Stadtteilen oder bei Wohnungen in höheren Etagen können Sie Ihre Privatsphäre wahren, ohne auf
                      Tageslicht zu verzichten. Mit unseren Lösungen bleiben neugierige Blicke draußen, während das
                      Licht ungehindert in Ihre Räume strömt.
                  </p>
              </div>
              <div>
                  <p>
                      Die <strong> Montage </strong> erfolgt <strong> schnell </strong> und sauber, damit Sie Ihre neuen
                      Systeme sofort nutzen können. Als regionaler Anbieter in Karlsruhe bieten wir Ihnen nicht nur
                      individuelle Beratung,
                      sondern auch transparente Preise und fachgerechte Installation. Unsere Produkte zeichnen sich
                      durch
                      <strong> Langlebigkeit und hohe Qualität </strong> aus, die sich deutlich von günstigeren
                      Baumarktlösungen abheben. Ob
                      Sie nur Insektenschutz oder eine <strong> Kombination aus Insektenschutz und
                      Sonnenschutz </strong> wünschen
                      – wir haben die passende Lösung für Ihre Bedürfnisse. Kontaktieren Sie uns noch heute für eine
                      unverbindliche Beratung und erleben Sie, wie einfach es ist, mehr Komfort in Ihr Zuhause in
                      Karlsruhe zu bringen.
                  </p>
              </div>
          </Container>
          <LandingPageProductSwiper/>
          <br/>
          <br/>
          <Products dataType={"KARLSRUHE"} title={"Unser Insekte- & Sonnenschutzsortiment für Karlsruhe"}/>
          <br/>
          <Reviews/>
          <Container>
              <SeoPageH2Title>Mehr über uns – was unseren Sonnen & Insektenschutz auszeichnet:</SeoPageH2Title>
              <div>
                  <p>
                      Genießen Sie <strong> lichtdurchflutete Räume in Karlsruhe </strong>, ohne dass unerwünschte
                      Insekten oder störende Sonnenstrahlen eindringen. Unser Insektenschutz & Sonnenschutz bietet Ihnen
                      maßgeschneiderte Lösungen, die sowohl einen effektiven Schutz vor Insekten als auch vor intensiver
                      Sonneneinstrahlung bieten. Mit hochwertigen <strong> Fliegengittern und
                      Sonnenschutzsystemen </strong>
                      schaffen wir eine perfekte Kombination aus Sichtschutz und Funktionalität. Wir verbinden die
                      Vorteile des
                      stationären Fachhandels mit den Bequemlichkeiten des Online-Shoppings und bieten Ihnen eine große
                      Auswahl an maßgefertigten Produkten, die perfekt zu Ihrem Zuhause passen. Unser Team von Experten
                      berät Sie gerne, um die ideale Lösung für Ihre Bedürfnisse zu finden. Zur Unterstützung bieten wir
                      Ihnen außerdem die Möglichkeit, kostenlos Muster anzufordern, damit Sie die Stoffe in Ruhe
                      auswählen können. Lassen Sie sich von unserer Produktvielfalt inspirieren – von Plissees bis hin
                      zu Jalousien, alles für den perfekten <strong> Insektenschutz & Sonnenschutz in
                      Karlsruhe </strong>.
                  </p>
              </div>

              <Services noAnimation={true} dataType={"KARLSRUHE"}/>
              <br/>
              <br/>
              <SeoPageH3Title>Maßgeschneiderte Produkte für Ihren Insektenschutz in Karlsruhe</SeoPageH3Title>
              <div>
                  <p>
                      Wir nehmen uns Zeit, Ihre individuelle Situation <strong> vor Ort in Karlsruhe </strong> genau zu
                      analysieren. Jede Installation erfordert eine <strong> maßgeschneiderte Lösung </strong> , da jede
                      Gegebenheit einzigartig
                      ist. Nach einer ausführlichen Beratung entwickeln wir gemeinsam mit Ihnen den
                      idealen <strong> Insektenschutz
                      & Sonnenschutz in Karlsruhe </strong> für Ihre <strong> Fenster, Türen und Lichtschächte </strong> .
                      Unsere Produkte werden
                      präzise an die spezifischen Anforderungen Ihrer Räumlichkeiten angepasst und zeichnen sich durch hohe
                      Qualität aus. Das breite Sortiment an <strong> Insektenschutzlösungen </strong> ist ideal auf
                      unterschiedlichste Fenster- und Türgrößen, Formen sowie Funktionalitäten abgestimmt.
                  </p>
              </div>
              <SeoPageH3Title>Individuelle Beratung & fachgerechte Montage in Karlsruhe</SeoPageH3Title>
              <div>
                  <p>
                      Wir informieren Sie umfassend über unsere vielfältigen Produkte – von verschiedenen Farbmöglichkeiten
                      und Gewebearten bis hin zu speziellen Funktionen. Egal, ob für das Wohnzimmer, das Büro oder
                      gewerbliche Räumlichkeiten: Wir bieten Lösungen, die sich harmonisch in jedes Raumkonzept einfügen.
                  </p>
              </div>
              <div>
                  <p>
                      Unser erfahrenes Team übernimmt die fachgerechte Installation des <strong> maßgefertigten
                      Insektenschutzes & Sonnenschutzes bei Ihnen in Karlsruhe </strong>– schnell und präzise.Dank
                      innovativer Befestigungstechniken können viele Produkte ohne Bohren montiert werden, was die
                      Handhabung deutlich vereinfacht. Unsere sorgfältige Arbeitsweise sorgt für eine lange Lebensdauer und
                      dauerhafte Funktionalität. Nach der Installation zeigen wir Ihnen, wie einfach die Pflege und Nutzung
                      sind. Profitieren Sie von unserem Fachwissen für einen nachhaltigen, insektenfreien Wohnraum.
                      Vereinbaren Sie noch heute eine persönliche Beratung in Karlsruhe und Umgebung.
                  </p>
              </div>
          </Container>
          <br/>
          <SeoLineSeperatorTitleComponent msg={"Kontakt & Navigation"}></SeoLineSeperatorTitleComponent>
          <Kontakt skipMarginTop={true}/>
      </Wrapper>
  )
}

export default RaumKarlsruhe