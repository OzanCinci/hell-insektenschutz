import React, { useLayoutEffect } from 'react'
import styled from 'styled-components';
import PhotoComponent from '../LegalPages/PhotoComponent';

const Container = styled.div`
    min-height: 500px;
    text-align: left;
    max-width: 1300px;
    min-width: 300px;
    width: 80%;
    margin: auto;
    margin-top: 40px;
   
    &> div {
        font-size: 20px;
        margin: 20px 10px;
    }

    .liElement {
        font-size: 20px;
    }

    &> h4, .header {
        font-weight: bold;
    }

    @media only screen and (max-width: 1200px) {
        margin-top: 30px;

        &> div {
            font-size: 18px;
        }
    
        .liElement {
            font-size: 18px;
        }
    }
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`


function RaumBaden() {

    useLayoutEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },[])



  return (
     <Wrapper>
        <PhotoComponent/>
        <Container>
            <h1 style={{textAlign:'center'}} className='header'>Insektenschutz im Raum Baden-Baden</h1>

            <br></br>
            <div>
            Sie möchten frische Luft in Ihrem Zuhause genießen und durch das Lüften nicht Mücken, Wespen, Motten und Fliegen Einlass gewähren? Mit dem passenden Insektengitter an Fenstern oder Türen können Sie wieder sorgenfrei Lüften. Als Experten im Bereich Insektenschutz für Baden-Baden beraten wir Sie zu den verschiedenen Möglichkeiten, fertigen hochwertige Insektenschutzlösungen für Sie nach Maß an und übernehmen auf Wunsch auch die Montage vor Ort.
            </div>

            <br></br>
            <br></br>


            <h4>Professioneller Insektenschutz steigert die Wohnqualität</h4>
            <div>Gerade während der Sommermonate verirrt sich so mancher ungebetener Gast durch ein geöffnetes Fenster oder eine offen stehende Tür ins Innere von Wohnungen und Häusern. Während eine Fliegen Ihnen nachts mit ihrem Summen den wohlverdienten Schlaf raubt, sorgen Mücken für lästige Stiche und Wespen oder Bienen können für Allergiker sogar zur Gefahr werden. Ein Insektenschutz an den Fenstern und Türen verhindert zuverlässig, dass die Plagegeister Sie zuhause besuchen. </div>
            <div>Selbst in den Abendstunden ist das Lüften mit eingeschaltetem Licht dank Insektenschutz möglich, ohne dass Sie danach von einer Mückenplage oder einem Mottenschwarm heimgesucht werden. Um Ihre Wohnqualität zu steigern und ungebetene Insekten aus den Wohnräumen fernzuhalten, fertigt unser Team für Sie Insektenschutz für Baden-Baden und Umgebung an.</div>

            <br></br>
            <br></br>


            <h4>Verschiedene Ausführungen des Insektenschutzes</h4>
            <div>Insektenschutz für Fenster und Türen fertigen wir in unterschiedlichen Ausführungen für Sie an. In vielen Bereichen des Hauses sind Festrahmen mit Insektenschutzgitter die ideale Wahl. Das gilt besonders für Fenster, durch die Sie nicht ins Freie gelangen müssen. Bei bodentiefen Fenstern und Türen hingegen ist ein beweglicher Insektenschutz gefragt, sofern diese als Ausgang aufs Grundstück oder einen Balkon genutzt werden. Er lässt sich bei Bedarf mit einem Handgriff öffnen, damit Sie durch die Tür ins Freie gelangen. Solche beweglichen Insektenschutzlösungen bieten wir als praktischen Schwenkrahmen an. </div>
            <div>Sie werden üblicherweise an Balkontüren, Terrassentüren und anderen Türen im Erdgeschoss verwendet. Sollte der Platz eng bemessen sein, ist ein Schieberahmen eine alternative Lösung. Bei Dachschrägen und anderen speziellen Fensterformen bieten Rollo-Lösungen den effektivsten Insektenschutz für Baden-Baden. Gerne beraten wir Sie vor Ort ausführlich dazu, welche Insektenschutzlösung optimal zu den räumlichen Gegebenheiten und Ihrem individuellen Bedarf passt.</div>



            <br></br>
            <br></br>


            <h4>Insektenschutz für Baden-Baden nach Maß</h4>
            <div>Nicht in jedem Gebäude haben Türen und Fenster Standardmaße. Gerade in denkmalgeschützten Objekten oder extravagant gestalteten Architektenhäusern können die Fensterfronten Sondermaße haben. Hier passt ein handelsüblicher Insektenschutz häufig nicht. Dank unserer jahrelangen Erfahrung und handwerklichen Expertise können wir auch in solchen Fällen einen maßgeschneiderten Insektenschutz herstellen. </div>
            <div>Dazu vereinbaren wir mit Ihnen einen Termin zum Ausmessen der Fenster oder Türen und stellen Ihnen direkt vor Ort die möglichen Insektenschutzlösungen vor. Anschließend wird der von Ihnen ausgewählte Insektenschutz nach individuellem Maß von unseren Fachkräften angefertigt, ausgeliefert und montiert.</div>


            <br></br>
            <br></br>


            <h4>Montage des neuen Insektenschutzes vom Profi</h4>
            <div>Die Montage der von uns angefertigten Insektenschutzlösungen ist ohne großen Aufwand und bauliche Maßnahmen möglich. Sie möchten sich nicht selbst um die Montage Ihres neuen Insektenschutzes kümmern? Gerne übernehmen unsere Mitarbeiter die Montage von Insektenschutz im Raum Baden-Baden in Form von Festrahmen, Schieberahmen, Schwenkrahmen oder Rollo-Lösungen. Vereinbaren Sie jetzt Ihren Termin mit unseren Experten für Insektenschutz im Raum Baden-Baden, damit Sie künftig wieder die einzigen Bewohner Ihres Zuhauses sind!</div>
        </Container>
    </Wrapper>
  )
}

export default RaumBaden