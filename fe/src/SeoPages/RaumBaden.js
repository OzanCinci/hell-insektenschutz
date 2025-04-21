import React, { useLayoutEffect } from 'react'
import styled from 'styled-components';
import PhotoComponent from '../LegalPages/PhotoComponent';
import LandingPageProductSwiper from "../LandingPageComponents/LandingPageProductSwiper";
import {
    LineSeperatorTitleComponent,
    SeoLineSeperatorTitleComponent,
    SeoPageH2Title,
    SeoPageH3Title,
    SeoPageTitle
} from "./common";
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


function RaumBaden() {
  return (
      <Wrapper>
          <Container>
              <SeoPageTitle>Insektenschutz & Sonnenschutz im Raum Baden-Baden</SeoPageTitle>
              <br/>
              <div>
                  <p>
                      Die Sommermonate in <strong> Baden-Baden</strong> bringen nicht nur schönes Wetter, sondern auch
                      Herausforderungen für Ihr Zuhause. Unsere <strong> maßgeschneiderten Insektenschutz- und
                      Sonnenschutzlösungen bieten </strong> den idealen Schutz vor intensiver Sonneneinstrahlung und
                      lästigen Insekten – und das ohne Kompromisse bei Komfort und Stil. Sie können Ihr Zuhause optimal
                      an Ihre Bedürfnisse anpassen, ohne auf natürliche Belüftung oder Tageslicht zu verzichten.
                  </p>
              </div>
              <div>
                  <p>
                      Unsere <strong> Sonnenschutzsysteme </strong> bieten nicht nur effektiven Schutz vor der Sonne,
                      sondern auch einen praktischen <strong> Sichtschutz </strong>, der Ihre <strong> Privatsphäre
                  </strong> wahrt – besonders in städtischen Umgebungen wie <strong> Baden-Baden </strong>. Ihre
                      Räume bleiben kühl und lichtdurchflutet, während neugierige Blicke draußen bleiben.
                  </p>
              </div>
              <div>
                  <p>
                      Unsere <strong> Insektenschutzlösungen </strong> sorgen dafür, dass Mücken und Fliegen draußen
                      bleiben, sodass Sie die frische Luft ungestört genießen können. Ob für Fenster, Türen oder
                      Terrassenelemente – wir bieten passgenaue Lösungen, die perfekt in Ihr Zuhause integriert werden
                      und gleichzeitig höchste Funktionalität bieten. Als <strong> lokaler Anbieter </strong> bieten wir
                      Ihnen eine persönliche <strong> Beratung vor Ort </strong> und eine
                      schnelle, <strong> fachgerechte Montage </strong>. Unsere Produkte zeichnen sich durch <strong>
                      hochwertige Materialien, Langlebigkeit und Pflegeleichtigkeit </strong> aus, sodass Sie
                      langfristig von den Vorteilen profitieren. Kontaktieren Sie uns noch heute für eine <strong>
                      unverbindliche Beratung </strong>und finden Sie die passende Lösung für <strong> Insektenschutz
                      und Sonnenschutz </strong> in <strong>Baden-Baden</strong>.
                  </p>
              </div>
          </Container>
          <LandingPageProductSwiper/>
          <br/>
          <br/>
          <Products dataType={"BADEN-BADEN"} title={"Unser Insekten- & Sonnenschutzsortiment für Baden-Baden"}/>
          <br/>
          <Reviews/>
          <Container>
              <SeoPageH2Title>Mehr über uns – was unseren Sonnen & Insektenschutz auszeichnet:</SeoPageH2Title>
              <div>
                  <p>
                      Unsere <strong> Insektenschutz- und Sonnenschutzlösungen in Baden-Baden </strong> bieten
                      zahlreiche
                      Vorteile,
                      die Ihre Erwartungen an Qualität und Funktionalität erfüllen. Mit maßgeschneiderten Lösungen,
                      innovativen Materialien und einem hohen Maß an Flexibilität stellen wir sicher, dass unsere
                      Produkte
                      perfekt zu Ihren individuellen Bedürfnissen und Ihrem Zuhause passen. Hier sind einige Gründe,
                      warum
                      Sie sich für uns entscheiden sollten:
                  </p>
              </div>
              <ul>
                  <li className="liElement">
                      <strong> Individuelle Fertigung:</strong> Jedes Produkt wird speziell nach Ihren Anforderungen
                      gefertigt und passt sich perfekt an Ihre Fenster und Türen in <strong> Baden-Baden </strong> an.
                  </li>
                  <li className="liElement">
                      <strong> Hochwertige Materialien: </strong> Unsere <strong> Insektenschutzsysteme </strong> und
                      <strong> Sonnenschutzlösungen </strong> bestehen aus langlebigen, pflegeleichten Materialien, die
                      für eine langfristige Nutzung sorgen.
                  </li>
                  <li className="liElement">
                      <strong> Einfache Installation: </strong> Viele unserer Produkte können schnell und unkompliziert
                      ohne Bohren montiert werden.
                  </li>
                  <li className="liElement">
                      <strong> Vielseitige Designs: </strong> Mit einer breiten Auswahl an Farben, Stoffen und Designs
                      finden Sie die perfekte Lösung für Ihre Raumgestaltung.
                  </li>
                  <li className="liElement">
                      <strong> Kostenlose Muster: </strong> Sie können kostenlos Muster anfordern, um die ideale Lösung
                      für Ihre Fenster und Türen zu finden.
                  </li>
              </ul>
              <Services noAnimation={true} dataType={"BADEN-BADEN"}/>
              <br/>
              <br/>
              <SeoPageH3Title>Maßgeschneiderte Lösungen für Ihren Insektenschutz & Sonnenschutz in
                  Baden-Baden</SeoPageH3Title>
              <div>
                  <p>
                      Wir bieten Ihnen maßgeschneiderte <strong> Insektenschutzsysteme und
                      Sonnenschutzlösungen </strong>,
                      die exakt auf Ihre Fenster und Türen in <strong> Baden-Baden </strong> abgestimmt werden. Unsere
                      Produkte garantieren höchste Qualität und Präzision, damit Sie optimalen Schutz und Komfort
                      genießen können.
                  </p>
              </div>
              <br/>
              <SeoPageH3Title>Individuelle Beratung und fachgerechte Montage in Baden-Baden</SeoPageH3Title>
              <div>
                  <p>
                      Unsere Experten nehmen sich die Zeit, Ihre individuelle Situation vor Ort zu analysieren. Wir
                      beraten Sie persönlich und entwickeln eine Lösung, die Ihre Anforderungen perfekt erfüllt. Unsere
                      erfahrenen Monteure sorgen dafür, dass die Installation Ihres <strong> Insektenschutzes &
                      Sonnenschutzes in Baden-Baden </strong> schnell und präzise erfolgt. Nach der Montage erklären wir
                      Ihnen die einfache Handhabung und Pflege, sodass Sie lange Freude an Ihrem
                      neuen <strong> Insektenschutz
                      & Sonnenschutz </strong> haben.
                  </p>
              </div>
          </Container>
          <br/>
          <SeoLineSeperatorTitleComponent msg={"Kontakt & Navigation"}></SeoLineSeperatorTitleComponent>
          <Kontakt skipMarginTop={true}/>
      </Wrapper>
  )
}

export default RaumBaden