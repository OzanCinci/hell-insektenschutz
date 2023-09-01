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


function RaumKarlsruhe() {

    useLayoutEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },[])


  return (
    <Wrapper>
        <PhotoComponent/>
        <Container>
            <h1 style={{textAlign:'center'}} className='header'>Insektenschutz im Raum Karlsruhe für Fenster und Türen</h1>

            <br></br>
            <div>
                Ein Insektenschutz an Fenstern und Türen ist die effektive Lösung, um Insekten wie Mücken, Wespen, Spinnen oder Fliegen aus Wohnräumen fernzuhalten. Die Anbringung gelingt in nur wenigen Handgriffen. Weder die Luftzirkulation noch die Aussicht nach draußen werden dabei beeinträchtigt. Sie möchten Insektenschutz im Raum Karlsruhe kaufen und möchten wissen, was Sie beachten müssen? Hier erhalten Sie die Informationen für Ihren Kauf.
            </div>

            <br></br>
            <br></br>


            <h4>Vorteile Insektenschutz</h4>
            <div>Der Einsatz von Insektenschutz für Karlsruhe bietet eine Vielzahl von Vorteilen. Hier sind einige der Hauptvorteile:</div>
            <div>Abwehr von Schädlingen: Gerade im Sommer können Insekten zu einer unangenehmen Plage werden. Insektenschutz an Fenstern und Türen verhindern das Eindringen von Insekten und anderen Schädlingen - sowohl im Innen- als auch im Außenbereich eines Gebäudes. Nach der Anbringung verbessert sich die Luftzirkulation, da Fenster bedenkenlos gekippt werden können. </div>
            <div>Reduzierung des Einsatzes von Chemikalien: Da Insektenschutzgitter das Eindringen von Insekten verhindern, ist es weniger notwendig, Insektizide und andere chemische Schutzmittel im Innenbereich zu verwenden. Das trägt zur Schonung der Umwelt und zur Reduzierung von potenziell schädlichen Chemikalien im Wohnraum bei.</div>
            <div>Gesundheitlicher Schutz: Insektenschutzgitter verhindern nicht nur lästige Insekten, sondern bieten auch einen Schutz vor Insekten, die Krankheiten übertragen können. Dies kann das Risiko von Insektenstichen und die Übertragung von durch Insekten übertragbaren Krankheiten wie Malaria, Dengue-Fieber und Zika-Virus reduzieren. Übrigens gibt es auch Schutzgitter, die das Eindringen von Pollen verhindern können. Interessant für Menschen mit Heuschnupfen. </div>
            <div>Keine Beeinträchtigung der Aussicht: Moderne Insektenschutzgitter sind in der Regel so konzipiert, dass sie die Aussicht durch die Fenster nicht beeinträchtigen. Sie sind transparent und ermöglichen den Bewohnern, die Natur zu genießen, ohne das störende Netz im Blickfeld zu haben. </div>
            <div>Langlebigkeit und Wartungsfreundlichkeit: Insektenschutzgitter sind in der Regel langlebig und erfordern nur minimale Wartung. Regelmäßiges Reinigen kann leicht durchgeführt werden, um sie in gutem Zustand zu halten.</div>


            <br></br>
            <br></br>


            <h4>Arten von Insektenschutzgittern im Raum Karlsruhe</h4>
            <div>Fliegengitter sind eine beliebte und kostengünstige Option. Sie bestehen aus feinmaschigem Gewebe. Fliegengitter sind als fest installierte Rahmen, als flexible Rollen oder Plissees erhältlich.</div>
            <div>Spannrahmen sind aus einem stabilen Rahmen mit Gitter. Sie werden direkt in den Fensterrahmen oder die Türöffnung montiert und können durch Scharniere oder Magnetverschlüsse geöffnet und geschlossen werden. </div>
            <div>Drehrahmen sind mit einem Drehmechanismus ausgestattet, der es ermöglicht, das Fliegengitter zur Seite zu drehen, um das Fenster oder die Tür zu öffnen oder zu schließen. Drehrahmen sind besonders praktisch für Türen.</div>
            <div>Schiebesysteme sind ideal für große Fenster oder Terrassentüren. Sie bestehen aus einem oder mehreren Fliegengitterpaneelen, die seitlich verschoben werden können, um den Zugang zu ermöglichen. Schiebesysteme sind platzsparend und einfach zu bedienen.</div>
            <div>Magnetische Fliegengitter sind eine einfache und flexible Option für den Insektenschutz. Sie bestehen aus einem Fliegengitter mit eingearbeiteten Magneten, die es ermöglichen, das Gitter leicht an Metallrahmen anzubringen und bei Bedarf wieder zu entfernen.</div>
            <div>Lamellenvorhänge sind eine neuere Variante des Insektenschutzes und eignen sich besonders für große Glasfronten oder Schiebetüren. Sie bestehen aus vertikalen Lamellen, die sich leicht zur Seite schieben lassen.</div>
            <div>Plisseetüren sind eine elegante und platzsparende Option für den Insektenschutz an Türen. Sie bestehen aus einem faltbaren Fliegengitter, das sich bei Bedarf leicht aus- oder zusammenziehen lässt.</div>
            <div>Insgesamt ist Insektenschutz für Fenster und Türen eine kostengünstige und effektive Möglichkeit, um Insekten fernzuhalten. Egal für welche Variante Sie sich entscheiden, wir sind Ihre Experten für den Insektenschutz im Raum Karlsruhe. Sprechen Sie uns gerne an!</div>


        </Container>
    </Wrapper>
  )
}

export default RaumKarlsruhe