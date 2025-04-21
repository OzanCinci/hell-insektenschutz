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

function RaumPforzheim() {
  return (
      <Wrapper>
          <Container>
              <SeoPageTitle>Insekten & Sonnenschutz im Raum Pforzheim</SeoPageTitle>
              <br/>
              <div>
                  <p>
                      In <strong> Pforzheim </strong> suchen viele Menschen nach Lösungen, um ihre Wohnräume
                      vor den Herausforderungen des Sommers zu schützen – sei es vor lästigen Insekten, intensiver
                      Sonneneinstrahlung oder neugierigen Blicken. Unsere <strong> maßgeschneiderten Insektenschutz- und
                      Sonnenschutzlösungen </strong> bieten den idealen Schutz und mehr Komfort für Ihr Zuhause. Ob für
                      Fenster, Türen oder große Terrassenelemente – unsere Systeme passen sich perfekt an Ihre
                      Bedürfnisse
                      an und bieten gleichzeitig ästhetische Lösungen, die Ihre Räume aufwerten.
                  </p>
              </div>
              <div>
                  <p>
                      <strong> Sonnenschutzsysteme </strong> bieten nicht nur Schutz vor starker Sonneneinstrahlung und
                      übermäßiger Wärme, sondern fungieren auch als <strong> Sichtschutz </strong>. Besonders in
                      städtischen Gebieten wie
                      <strong> Pforzheim </strong>, wo Privatsphäre oft ein Thema ist, können Sie sich vor neugierigen
                      Blicken schützen,
                      während das natürliche Licht weiterhin in Ihre Räume fließt. So bleibt Ihr Zuhause angenehm
                      kühl, und Ihre Privatsphäre bleibt jederzeit gewährleistet – ohne den Raum zu verdunkeln.
                  </p>
              </div>
              <div>
                  <p>
                      Unsere <strong> Insektenschutzlösungen </strong> sorgen für eine ruhige Nacht und ungestörte
                      Sommertage, indem sie Mücken, Fliegen und andere unerwünschte Insekten draußen halten. So können
                      Sie
                      Ihre Fenster öffnen, ohne sich Gedanken über den Insektenbefall machen zu müssen – ein klarer
                      Vorteil für mehr Lebensqualität im Sommer.

                      Als <strong> lokaler Anbieter </strong> in <strong> Pforzheim </strong> bieten wir Ihnen nicht nur
                      eine individuelle Beratung vor Ort, sondern auch eine schnelle und <strong> fachgerechte
                      Montage </strong>
                      durch unser erfahrenes Team. Unsere <strong> hochwertigen Produkte </strong> zeichnen sich
                      durch <strong> Langlebigkeit </strong> und <strong> Pflegeleichtigkeit </strong> aus, sodass Sie
                      langfristig von den Vorteilen profitieren können. Sie bieten <strong> mehr Komfort </strong> und
                      schützen Ihr Zuhause
                      effektiv – sowohl vor Insekten als auch vor intensiver Sonneneinstrahlung.
                  </p>
              </div>
          </Container>
          <LandingPageProductSwiper/>
          <br/>
          <br/>
          <Products dataType={"PFORZHEIM"} title={"Unser Insekten- & Sonnenschutzsortiment"}/>
          <br/>
          <Reviews/>
          <Container>
              <SeoPageH2Title>Mehr über uns – was unseren Sonnen & Insektenschutz auszeichnet:</SeoPageH2Title>
              <div>
                  <p>
                      Lichtdurchflutete Räume ohne unerwünschte Insekten und lästige Sonnenstrahlen genießen!
                      Unsere <strong> maßgeschneiderten
                      Fliegengitter </strong> und <strong> Sonnenschutzsysteme </strong> bieten Ihnen sowohl einen
                      echten <strong> Sichtschutz </strong>
                      als auch einen effektiven <strong> Insektenschutz </strong>. Bei Hell kombinieren wir die Vorteile
                      des stationären
                      Fachhandels mit denen des Onlineshoppings und garantieren Ihnen hochwertige Plissees, die
                      perfekt auf Ihre individuellen Bedürfnisse abgestimmt sind. Unser Expertenteam steht Ihnen
                      jederzeit zur Seite, um die optimale Lösung für Ihr Zuhause zu finden. Um Ihnen die
                      Entscheidung zu erleichtern, bieten wir Ihnen zudem die Möglichkeit, <strong> gratis
                      Muster </strong> anzufordern, damit Sie die Stoffe in Ruhe auswählen können. Lassen Sie sich von
                      der großen
                      Produktvielfalt inspirieren – von Plissees bis hin zu Jalousien – alles für Ihr perfektes
                      Wohnambiente in Pforzheim!
                  </p>
              </div>
              <Services noAnimation={true} dataType={"PFORZHEIM"}/>
              <br/>
              <br/>
              <SeoPageH3Title>Maßgeschneiderte Produkte für Ihren Insektenschutz in Pforzheim!</SeoPageH3Title>
              <div>
                  <p>
                      Wir schauen uns Ihre individuelle Einbausituation <strong> vor Ort </strong> genau an. Denn jeder
                      Anwendungsfall ist individuell. Nach einer umfassenden Beratung planen wir gemeinsam mit Ihnen den
                      <strong> perfekten Insektenschutz für Ihre Fenster, Türen und Lichtschächte</strong>. Unsere
                      Lösungen für
                      <strong> Insektenschutz im Raum Pforzheim </strong> werden je nach Einbausituation fachgerecht und
                      mit höchster Qualität angepasst. Unser umfangreiches Produktsortiment ist auf die Vielzahl an
                      Fenster und
                      Türen in unterschiedlichsten Größen, Formen und Funktionalitäten zugeschnitten.
                  </p>
              </div>
              <br/>
              <SeoPageH3Title>Individuelle Beratung & fachgerechte Montage in Pforzheim</SeoPageH3Title>
              <div>
                  <p>
                      Wir informieren Sie detailliert über unsere
                      vielfältigen <strong> Insektenschutzprodukte </strong> –
                      inklusive <strong> Farbauswahl, Gewebearten und spezieller Funktionen </strong>. Ob Wohnzimmer,
                      Büro oder
                      Gewerberaum: Gemeinsam entwickeln wir maßgeschneiderte Lösungen, die sich perfekt in Ihre
                      Räumlichkeiten einfügen.
                  </p>
              </div>
              <div>
                  <p>
                      Ihren <strong> maßgefertigten Insektenschutz installieren </strong> unsere
                      erfahrenen <strong> Monteure </strong>
                      termingerecht und präzise. Dank innovativer Befestigungstechniken entfällt häufig lästiges Bohren,
                      während unsere sorgfältige Arbeitsweise Langlebigkeit garantiert. Nach der Montage erklären wir
                      Ihnen die einfache <strong> Handhabung </strong> und <strong> Pflege </strong>. Profitieren Sie
                      von unserem Know-how
                      für dauerhaft insektenfreie Räume – kontaktieren Sie uns für eine persönliche Beratung in
                      Pforzheim und Umgebung.
                  </p>
              </div>
          </Container>
          <br/>
          <SeoLineSeperatorTitleComponent msg={"Kontakt & Navigation"}></SeoLineSeperatorTitleComponent>
          <Kontakt skipMarginTop={true}/>
      </Wrapper>
  )
}

export default RaumPforzheim