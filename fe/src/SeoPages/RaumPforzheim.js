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

function RaumPforzheim() {

    useLayoutEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },[])

      
  return (
    <Wrapper>
    <PhotoComponent/>
    <Container>
        <h1 style={{textAlign:'center'}} className='header'>Insektenschutz im Raum Pforzheim</h1>

        <br></br>

        <div>
        Luftige und helle Räume sorgen für eine hohe Wohnqualität. Das gilt natürlich besonders in den Sommermonaten. Aber viele Fenster und Balkon- sowie Terrassentüren sind auch Einfallstor für jede Menge Insekten. Besonders Stechmücken und Fliegen können sich zu echten Plagegeistern entwickeln und die Wohnqualität mindern. Dann hilft ein intelligenter Insektenschutz für die unterschiedlichsten Arten von Türen, Fenstern und Lichtschächten. Wir bieten Ihnen maßgefertigte Lösungen für Insektenschutz im Raum Pforzheim.
        </div>

        <br></br>
        <br></br>


        <h4>Insekten als nervige Plagegeister in den eigenen vier Wänden</h4>
        <div>
            Insekten in den eigenen vier Wänden können sehr nerven. Sie surren herum, hinterlassen Flecken, verursachen Juckreiz und bringen Menschen um Erholung oder sogar um den wohlverdienten Schlaf. Die tägliche Insektenjagd ist keine dauerhafte Lösung. Es ist immer besser, wenn die Quälgeister erst gar nicht in die eigenen vier Wände gelangen. Durch die Konstruktion des jeweiligen Insektenschutzes halten Sie die Mücken und Stechmücken draußen. 
        </div>
        <div>
            Das Licht und vor allem die frische Luft können aber ungehindert Ihre Räumlichkeiten erreichen. Nehmen Sie mit uns Kontakt auf und lassen Sie sich zu den vielen Optionen für den Insektenschutz für Pforzheim beraten.
        </div>


        <br></br>
        <br></br>


        <h4>Vorteile von Insektenschutz-Lösungen für Fenster und Türen</h4>
        <div>
            Ein effizienter und hochwertiger Insektenschutz hat viele Vorteile. Sie benötigen dann keine Insektensprays, Insektenkerzen oder andere Abwehrmaßnahmen, die teilweise giftig sind und zu Unwohlsein führen können. Mit einem Insektenschutz für Fenster sowie Türen schützen Sie sich zudem vor Mückenstichen und allergischen Reaktionen. Sie müssen vor allem im Sommer nicht die Fenster fest schließen. Unser Insektenschutz verbesserte die Luftzirkulation und damit die Luftqualität erheblich. Sie können wieder durchatmen und die Sommermonate genießen. 
        </div>
        <div>
            Mit unserem Insektenschutz ist ebenfalls garantiert, dass Sie freie Sicht nach draußen haben und dass das natürliche Licht in Ihre Räumlichkeiten gelangt. Da die Insekten von einem Eindringen in Ihre Räumlichkeiten abgehalten werden, sinkt auch das Risiko für die Übertragung von Krankheiten. Insgesamt steigen Ihr Wohlbefinden und Ihre Wohnqualität enorm. Wir beraten Sie gerne zu Ihrem individuellen Insektenschutz für Pforzheim.
        </div>


        <br></br>
        <br></br>


        <h4>Maßgeschneiderte Produkte für Ihren Insektenschutz für Pforzheim</h4>
        <div>
            Wir schauen uns vor Ort Ihre individuelle Einbausituation genau an. Denn jeder Anwendungsfall ist speziell. Wir beraten Sie umfassend und planen dann gemeinsam den perfekten Insektenschutz für Fenster, Türen und Lichtschächte. Unsere Lösungen für den Insektenschutz im Raum Pforzheim passen wir je nach Einbausituation fachmännisch und in höchster Qualität an. Dafür verfügen wir über ein umfangreiches Produktprogramm. Denn es gibt schließlich die unterschiedlichsten Fenster und Türen. Sie unterscheiden sich nicht nur in der Größe, sondern vor allem hinsichtlich der Funktionalitäten. 
        </div>
        <div>
            Außerdem haben Sie sicherlich gewisse Vorstellungen und Vorlieben, die wir bei der Anfertigung des Insektenschutzes berücksichtigen. Vereinbaren Sie noch heute einen Termin vor Ort mit uns. Dann können wir die Einbausituation begutachten und das Aufmaß Ihrer Fenster und Türen nehmen. Danach beraten wir Sie umfänglich über die verfügbaren Produkte mit Eigenschaften, Farben, Gewebesorten und Varianten. Zusammen mit Ihnen finden wir die perfekte Lösung für Ihre Wohnräume oder auch Büro-, Lager-, Keller- oder Verkaufsräume.
        </div>


        <br></br>
        <br></br>


        <h4>Individuelle Montage des Insektenschutzes</h4>
        <div>
            Nach der Anfertigung der individuellen Insektenschutz-Lösungen vereinbaren wir einen Termin für die Montage durch unsere geschulten Monteure. Dabei stellen wir höchste Ansprüche an die Qualität der Montage, um eine hundertprozentige Funktionalität und eine lange Lebensdauer sicherzustellen. Wir arbeiten immer sauber und effektiv. Je nach Insektenschutz-Lösung ist oftmals auch kein Bohren notwendig. 
        </div>
        <div>
            Wenn die Montage abgeschlossen ist, dann beraten wir Sie anschließend zur Pflege und Bedienung. Mit unserer jahrelangen Erfahrung und unserem Know-how tragen wir dazu bei, dass Ihre Räumlichkeiten in Zukunft insektenfrei bleiben. Kontaktieren Sie uns gerne für ein Beratungsgespräch über die unzähligen Möglichkeiten des Insektenschutzes im Raum Pforzheim.
        </div>

    </Container>
</Wrapper>
  )
}

export default RaumPforzheim