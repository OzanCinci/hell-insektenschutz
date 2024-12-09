import React from 'react';
import styled from 'styled-components';
import PhotoComponent from './PhotoComponent';

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
`;

function Agb({}) {

    return (
        <Wrapper>
            <PhotoComponent/>
            <Container>
                <h1 style={{textAlign: 'center'}} className='header'>Allgemeine Geschäftsbedingungen mit
                    Kundeninformationen</h1>

                <br/>
                <div>Stand, Juli 2021</div>
                <br/>
                <br/>

                <h4>Inhaltsverzeichnis</h4>
                <ol>
                    <li className='liElement'>Geltungsbereich</li>
                    <li className='liElement'>Vertragsschluss</li>
                    <li className='liElement'>Widerrufsrecht</li>
                    <li className='liElement'>Preise und Zahlungsbedingungen</li>
                    <li className='liElement'>Liefer- und Versandbedingungen</li>
                    <li className='liElement'>Eigentumsvorbehalt</li>
                    <li className='liElement'>Mängelhaftung (Gewährleistung)</li>
                    <li className='liElement'>Einlösung von Aktionsgutscheinen</li>
                    <li className='liElement'>Anwendbares Recht</li>
                    <li className='liElement'>Gerichtsstand</li>
                    <li className='liElement'>Verhaltenskodex</li>
                    <li className='liElement'>Alternative Streitbeilegung</li>
                </ol>


                <br></br>
                <br></br>
                <h4>1) Geltungsbereich</h4>
                <div>
                    1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der Hell Insekten&Sonnenschutz
                    (nachfolgend "Verkäufer"), gelten für alle Verträge über die Lieferung von Waren, die ein
                    Verbraucher oder Unternehmer (nachfolgend „Kunde“) mit dem Verkäufer hinsichtlich der vom
                    Verkäufer in seinem Online-Shop dargestellten Waren abschließt. Hiermit wird der Einbeziehung
                    von eigenen Bedingungen des Kunden widersprochen, es sei denn, es ist etwas anderes vereinbart.
                </div>
                <div>
                    1.2 Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken
                    abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
                    zugerechnet werden können. Unternehmer im Sinne dieser AGB ist eine natürliche oder juristische
                    Person
                    oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung
                    ihrer
                    gewerblichen oder selbständigen beruflichen Tätigkeit handelt.
                </div>


                <br></br>
                <br></br>
                <h4>2) Vertragsschluss</h4>
                <div>
                    2.1 Die im Online-Shop des Verkäufers enthaltenen Produktbeschreibungen stellen keine
                    verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines
                    verbindlichen Angebots durch den Kunden.
                </div>
                <div>
                    2.2 Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte
                    Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten Waren
                    in den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat,
                    durch Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich verbindliches
                    Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab.
                </div>
                <div>
                    2.3 Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen annehmen,
                    <li> indem er dem Kunden eine schriftliche Auftragsbestätigung oder eine Auftragsbestätigung in
                        Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang der Auftragsbestätigung beim
                        Kunden maßgeblich ist, oder</li>
                    <li> indem er dem Kunden die bestellte Ware liefert, wobei insoweit der Zugang der Ware beim Kunden
                        maßgeblich ist, oder
                    </li>
                    <li> indem er den Kunden nach Abgabe von dessen Bestellung zur Zahlung auffordert.</li>
                    Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in dem Zeitpunkt zustande,
                    in dem eine der vorgenannten Alternativen zuerst eintritt. Die Frist zur Annahme des Angebots
                    beginnt am Tag nach der Absendung des Angebots durch den Kunden zu laufen und endet mit dem
                    Ablauf des fünften Tages, welcher auf die Absendung des Angebots folgt. Nimmt der Verkäufer
                    das Angebot des Kunden innerhalb vorgenannter Frist nicht an, so gilt dies als Ablehnung des
                    Angebots mit der Folge, dass der Kunde nicht mehr an seine Willenserklärung gebunden ist.
                </div>
                <div>
                    2.4 Bei Auswahl einer von PayPal angebotenen Zahlungsart erfolgt die Zahlungsabwicklung über den
                    Zahlungsdienstleister PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
                    Luxembourg
                    (im Folgenden: „PayPal“), unter Geltung der PayPal-Nutzungsbedingungen, einsehbar unter
                    https://www.paypal.com/de/webapps/mpp/ua/useragreement-full oder - falls der Kunde nicht über ein
                    PayPal-Konto verfügt – unter Geltung der Bedingungen für Zahlungen ohne PayPal-Konto, einsehbar
                    unter
                    https://www.paypal.com/de/webapps/mpp/ua/privacywax-full. Zahlt der Kunde mittels einer im
                    Online-Bestellvorgang auswählbaren von PayPal angebotenen Zahlungsart, erklärt der Verkäufer schon
                    jetzt
                    die Annahme des Angebots des Kunden in dem Zeitpunkt, in dem der Kunde den den Bestellvorgang
                    abschließenden
                    Button anklickt.
                </div>
                <div>
                    2.5 Bei der Abgabe eines Angebots über das Online-Bestellformular des Verkäufers wird der
                    Vertragstext nach dem
                    Vertragsschluss vom Verkäufer gespeichert und dem Kunden nach Absendung von dessen Bestellung in
                    Textform
                    (z. B. E-Mail, Fax oder Brief) übermittelt. Eine darüber hinausgehende Zugänglichmachung des
                    Vertragstextes
                    durch den Verkäufer erfolgt nicht. Sofern der Kunde vor Absendung seiner Bestellung ein Nutzerkonto
                    im
                    Online-Shop des Verkäufers eingerichtet hat, werden die Bestelldaten auf der Website des Verkäufers
                    archiviert
                    und können vom Kunden über dessen passwortgeschütztes Nutzerkonto unter Angabe der entsprechenden
                    Login-Daten
                    kostenlos abgerufen werden.
                </div>
                <div>
                    2.6 Vor verbindlicher Abgabe der Bestellung über das Online-Bestellformular des Verkäufers kann der
                    Kunde mögliche
                    Eingabefehler durch aufmerksames Lesen der auf dem Bildschirm dargestellten Informationen erkennen.
                    Ein wirksames
                    technisches Mittel zur besseren Erkennung von Eingabefehlern kann dabei die Vergrößerungsfunktion
                    des Browsers sein,
                    mit deren Hilfe die Darstellung auf dem Bildschirm vergrößert wird. Seine Eingaben kann der Kunde im
                    Rahmen des
                    elektronischen Bestellprozesses so lange über die üblichen Tastatur- und Mausfunktionen korrigieren,
                    bis er den den
                    Bestellvorgang abschließenden Button anklickt.
                </div>
                <div>
                    2.7 Für den Vertragsschluss stehen die deutsche und die englische Sprache zur Verfügung.
                </div>
                <div>
                    2.8 Die Bestellabwicklung und Kontaktaufnahme finden in der Regel per E-Mail und automatisierter
                    Bestellabwicklung statt.
                    Der Kunde hat sicherzustellen, dass die von ihm zur Bestellabwicklung angegebene E-Mail-Adresse
                    zutreffend ist, so dass
                    unter dieser Adresse die vom Verkäufer versandten E-Mails empfangen werden können. Insbesondere hat
                    der Kunde bei dem Einsatz
                    von SPAM-Filtern sicherzustellen, dass alle vom Verkäufer oder von diesem mit der Bestellabwicklung
                    beauftragten Dritten
                    versandten E-Mails zugestellt werden können.
                </div>


                <br></br>
                <br></br>
                <h4>3) Widerrufsrecht</h4>
                <div>3.1 Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.</div>
                <div>3.2 Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des
                    Verkäufers.
                </div>


                <br></br>
                <br></br>
                <h4>4) Preise und Zahlungsbedingungen</h4>
                <div>
                    4.1 Sofern sich aus der Produktbeschreibung des Verkäufers nichts anderes ergibt, handelt
                    es sich bei den angegebenen Preisen um Gesamtpreise, die die gesetzliche Umsatzsteuer enthalten.
                    Gegebenenfalls zusätzlich anfallende Liefer- und Versandkosten werden in der jeweiligen
                    Produktbeschreibung gesondert angegeben.
                </div>
                <div>
                    4.2 Bei Lieferungen in Länder außerhalb der Europäischen Union können im Einzelfall weitere Kosten
                    anfallen, die der Verkäufer nicht zu vertreten hat und die vom Kunden zu tragen sind. Hierzu zählen
                    beispielsweise Kosten für die Geldübermittlung durch Kreditinstitute (z.B. Überweisungsgebühren,
                    Wechselkursgebühren) oder einfuhrrechtliche Abgaben bzw. Steuern (z.B. Zölle). Solche Kosten können
                    in Bezug auf die Geldübermittlung auch dann anfallen, wenn die Lieferung nicht in ein Land außerhalb
                    der Europäischen Union erfolgt, der Kunde die Zahlung aber von einem Land außerhalb der Europäischen
                    Union aus vornimmt.
                </div>
                <div>
                    4.3 Die Zahlungsmöglichkeit/en wird/werden dem Kunden im Online-Shop des Verkäufers mitgeteilt.
                </div>
                <div>
                    4.4 Ist Vorauskasse per Banküberweisung vereinbart, ist die Zahlung sofort nach Vertragsabschluss
                    fällig,
                    sofern die Parteien keinen späteren Fälligkeitstermin vereinbart haben.
                </div>
                <div>
                    4.5 Bei Auswahl der Zahlungsart „SOFORT“ erfolgt die Zahlungsabwicklung über den
                    Zahlungsdienstleister SOFORT GmbH,
                    Theresienhöhe 12, 80339 München (im Folgenden „SOFORT“). Um den Rechnungsbetrag über „SOFORT“
                    bezahlen zu können,
                    muss der Kunde über ein für die Teilnahme an „SOFORT“ frei geschaltetes Online-Banking-Konto
                    verfügen, sich beim
                    Zahlungsvorgang entsprechend legitimieren und die Zahlungsanweisung gegenüber „SOFORT“ bestätigen.
                    Die Zahlungstransaktion
                    wird unmittelbar danach von „SOFORT“ durchgeführt und das Bankkonto des Kunden belastet. Nähere
                    Informationen zur
                    Zahlungsart „SOFORT“ kann der Kunde im Internet unter https://www.klarna.com/sofort/ abrufen.
                </div>
                <div>
                    4.6. Kauf auf Rechnung (POWERPAY) Wir bieten Ihnen die Möglichkeit, die bei uns bestellten Waren und
                    Dienstleistungen
                    mittels «Kauf auf Rechnung» von POWERPAY zu begleichen. Hierbei handelt es sich um eine
                    Drittdienstleistung, wobei für
                    Lieferungen nach Österreich folgende <a href={"https://www.powerpay.at/de/agb"}
                                                            target={"_blank"}>AGB</a> und für Lieferung nach Deutschland
                    folgende <a href={"https://www.powerpay.at/de/agb"} target={"_blank"}>AGB</a> zur Anwendung
                    gelangen. Des Weiteren
                    verweisen wir auf die im Zusammenhang mit "POWERPAY-Kauf auf Rechnung" bestehenden <a
                    href={"https://terms.mfgroup.ch/agbfiles/Datenschutzerkl%C3%A4rung_EU_de.pdf"}
                    target={"_blank"}>Datenschutzbestimmungen</a>.
                    Beim Abschluss der Bestellung mittels "Kauf auf Rechnung" übernimmt POWERPAY die Bearbeitung der
                    entstandenen Rechnungsforderung
                    und wickelt die entsprechenden Zahlungsmodalitäten ab. Sie erhalten die Einzelrechnung kostenlos per
                    E-Mail. Mit der Einzelrechnung
                    können Sie Ihren Onlineeinkauf einfach per Rechnung begleichen.
                </div>
                <div>
                    4.7 Bei Auswahl der Zahlungsart Rechnungskauf via payolution wird der Kaufpreis fällig, nachdem die
                    Ware
                    geliefert und in Rechnung gestellt wurde. In diesem Fall ist der Kaufpreis innerhalb von 14
                    (vierzehn)
                    Tagen ab Erhalt der Rechnung ohne Abzug an die Bank Frick & Co. AG zu zahlen, an die der Verkäufer
                    seine
                    Forderung aus dem Kaufvertrag abtritt, sofern nichts anderes vereinbart ist. Die Zahlungsart
                    Rechnungskauf
                    setzt eine erfolgreiche Bonitätsprüfung voraus. Der Kunde kann in diesem Fall mit schuldbefreiender
                    Wirkung
                    nur an die Bank Frick & Co. AG leisten. Im Übrigen gelten insoweit die ergänzenden Allgemeinen
                    Geschäftsbedingungen,
                    die der Kunde im Rahmen des Bestellprozesses abrufen kann. Der Verkäufer behält sich vor, die
                    Zahlungsart Rechnungskauf
                    nur bis zu einem bestimmten Bestellvolumen anzubieten und diese Zahlungsart bei Überschreitung des
                    angegebenen
                    Bestellvolumens abzulehnen. In diesem Fall wird der Verkäufer den Kunden in seinen
                    Zahlungsinformationen im
                    Online-Shop auf eine entsprechende Zahlungsbeschränkung hinweisen.
                </div>
                <div>
                    4.8 Bei Auswahl der Zahlungsart Lastschrift erfolgt die Zahlungsabwicklung über den
                    Zahlungsdienstleister payolution GmbH,
                    Am Euro Platz 2, 1120 Wien, Österreich (nachfolgend „Payolution“) in Zusammenarbeit mit der Bank
                    Frick & Co. AG, an die der
                    Verkäufer seine Zahlungsforderung abtritt. Die Zahlung erfolgt in diesem Fall per Einzug vom
                    Bankkonto des Kunden, sofern dieser
                    derBank Frick & Co. AG zuvor ein SEPA-Mandat erteilt hat. Die Abbuchung des Kaufpreises vom
                    Bankkonto des Kunden erfolgt einen
                    Bankarbeitstag nach Abschluss der Bestellung durch die Bank Frick & Co. AG. Die Frist für die
                    Vorabankündigung (Pre-Notification)
                    wird auf einen Tag verkürzt. Innerhalb von acht Wochen kann der Kunde, beginnend mit dem
                    Belastungsdatum, die Erstattung des
                    belasteten Betrages verlangen. Es gelten dabei die mit seinem Geldinstitut vereinbarten Bedingungen.
                    Der Kunde hat jedoch zu
                    beachten, dass die fällige Forderung auch bei einer Rücklastschrift bestehen bleibt. Wenn das
                    Girokonto die erforderliche Deckung
                    nicht aufweist, besteht seitens des kontoführenden Kreditinstituts keine Verpflichtung zur
                    Einlösung. Teileinlösungen werden im
                    Lastschriftverfahren nicht vorgenommen. Wird die Lastschrift mangels ausreichender Kontodeckung oder
                    aufgrund der Angabe einer
                    falschen Bankverbindung nicht eingelöst oder widerspricht der Kunde der Abbuchung, obwohl er hierzu
                    nicht berechtigt ist, hat der
                    Kunde die durch die Rückbuchung des jeweiligen Kreditinstituts entstehenden Gebühren zu tragen, wenn
                    er dies zu vertreten hat.
                    Im Falle der Abtretung kann nur an die Bank Frick & Co. AG mit schuldbefreiender Wirkung geleistet
                    werden. Der Verkäufer bleibt
                    auch bei dem Kauf per Lastschrift zuständig für allgemeine Kundenanfragen (z.B. zur Ware,
                    Lieferzeit, Versendung, Retouren,
                    Reklamationen, Widerruferklärungen und -zusendungen oder Gutschriften).
                </div>

                <br/>
                <br/>
                <strong style={{fontSize: "21px"}}>Zusätzliche Allgemeine Geschäftsbedingungen (AGB) für Kauf auf
                    Rechnung oder Ratenzahlung oder SEPA-Basis-Lastschrift von Hell Insekten&Sonnenschutz (im Folgenden:
                    „wir“)</strong>
                <div>(Stand: 16.10.2020)</div>
                <div>Allgemeines</div>
                <div>1. Wir bieten die Zahlungsarten „Kauf auf Rechnung” (Rechnungskauf) und/oder „Ratenzahlung“
                    und/oder SEPA-Basis-Lastschrift für unsere Kunden an. Dabei erfolgt eine Forderungsabtretung an die
                    Bank Frick & Co. AG (im Folgenden „Bank“).
                </div>
                <div>2. Der Rechnungskauf, die Ratenzahlung oder die Zahlung mittels SEPA-Basislastschrift stehen nur
                    Verbrauchern ab 18 Jahren zur Verfügung. Sie können mit diesem Service Waren über das Internet
                    erwerben und müssen sie erst nach tatsächlichem Erhalt der Ware und der Rechnung bezahlen oder
                    können die Zahlung bequem in Teilraten vornehmen oder der Betrag wird mittels SEPA-Basis-Lastschrift
                    von Ihrem Konto eingezogen.
                </div>
                <div>3. Der Kaufvertrag über die Ware kommt ausschließlich zwischen Ihnen und uns zustande. Auch die
                    Abwicklung des Kaufvertrags bestimmt sich nach den Vereinbarungen, die Sie mit uns treffen.
                    Insbesondere bleiben wir zuständig für allgemeine Kundenanfragen (z.B. zu Ware, Lieferzeit,
                    Versendung), Retouren, Reklamationen, Gewährleistungsansprüchen, allfällige Vertragsrücktritte sowie
                    Gutschriften. Wenn Sie sich für Kauf auf Rechnung oder Ratenzahlung oder SEPA-Basis-Lastschrift
                    entscheiden, gelten diese Geschäftsbedingungen zusätzlich zu jenen Vereinbarungen und den AGB die
                    Sie mit uns im Rahmen des Kaufvertrages vereinbaren.
                </div>
                <div>4. Wir werden zur Abwicklung eines Kaufs auf Rechnung oder einer Ratenzahlung oder einer Bezahlung
                    mittels SEPA-Basis-Lastschrift unseren Anspruch auf Zahlung des Kaufpreises gegen Sie an die Bank
                    abtreten. Sie werden über diese Forderungsabtretung hiermit informiert. Sämtliche Zahlungen haben,
                    um schuldbefreiend zu wirken, ausschließlich an die Bank auf das zu diesem Zweck Ihnen
                    bekanntgegebene Konto zu erfolgen. Die Waren bleiben bis zur vollständigen Bezahlung Eigentum der
                    Bank.
                </div>
                <div>5. Als technische Dienstleisterin und Dienstleisterin zur Überprüfung Ihrer Kreditwürdigkeit bei
                    einem Kauf auf Rechnung oder einer Ratenzahlung oder einer Bezahlung mittels SEPA-Basis-Lastschrift
                    fungiert für uns die payolution GmbH (www.payolution.com).
                </div>
                <strong style={{fontSize: "19px"}}>Bei Zahlung mittels SEPA-Basis-Lastschrift</strong>
                <div>6. Sofern eine Zahlung mittels SEPA-Basis-Lastschrift vereinbart wird, übersenden wir Ihnen eine
                    Rechnung, die unverzüglich nach Zugang der Rechnung und ohne Abzug fällig ist. Der fällige Betrag
                    wird mittels SEPA-Basis-Lastschrift vom angegebenen Konto eingezogen.
                </div>
                <div>7. Wir werden Ihnen spätestens einen Kalendertag vor der Fälligkeit der
                    SEPA-Basis-Lastschrift-Zahlung den SEPA-Basis-Lastschrift-Einzug ankündigen.
                </div>
                <div>8. Sie bestätigen, dass Sie über die Berechtigung zur Erteilung eines SEPA-Lastschriftmandats in
                    Bezug auf das im Bestellprozess angegebene Konto verfügen. Sie haben für die entsprechende Deckung
                    des Kontos zu sorgen. Verfügt das Konto nicht über die erforderliche Deckung, haben Sie die durch
                    die Rücklastschrift entstehenden Kosten zu tragen.
                </div>
                <div>9. Im Falle eines Widerrufs, eines Rücktritts, einer Retoure oder einer Reklamation bitten wir Sie,
                    der Belastung der SEPA-Basis-Lastschrift nicht zu widersprechen, um unnötigen Aufwand und Kosten zu
                    vermeiden. Der von uns an Sie zurückzuzahlende Geldbetrag wird dem Konto, dem die
                    SEPA-Basis-Lastschrift belastet wurde, wieder gutgeschrieben oder, sofern dies zwischen Ihnen und
                    uns vereinbart wird, eine Gutschrift erstellt.
                </div>
                <div>10. Sie erteilen mit der Abgabe der Bestellung und der Annahme dieser Bedingungen folgendes
                    SEPA-Lastschriftmandat mit dem folgenden Inhalt an die:
                    Bank Frick & Co. AG
                    Gläubiger-Identifikationsnummer: DE98X9400000083274
                    Mandatsreferenz wird separat mitgeteilt
                </div>
                <strong style={{fontSize: "19px"}}>SEPA-Lastschriftmandat</strong>
                <div>
                    Ich ermächtige die Bank Frick & Co. AG, Zahlungen von meinem Konto mittels Lastschrift einzuziehen.
                    Zugleich weise ich mein Kreditinstitut an, die von der Bank Frick & Co. AG auf mein Konto gezogenen
                    Lastschriften einzulösen.
                </div>
                <div>
                    Hinweis: Ich kann innerhalb von acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des
                    belasteten Betrages verlangen. Es gelten dabei die mit meinem Kreditinstitut vereinbarten
                    Bedingungen.
                </div>
                <div>
                    Name des Kontoinhabers: wie im Bestellprozess angegeben
                </div>
                <div>
                    IBAN: wie im Bestellprozess angegeben
                </div>
                <div>
                    Datum der Erteilung: Datum Ihrer Bestellung
                </div>
                <strong style={{fontSize: "19px"}}>Zahlungsmodalitäten und Zinssätze</strong>
                <div>
                    11. Beim Kauf auf Ratenzahlung werden Sie in unserer Dateneingabemaske oder einem anderen geeigneten
                    elektronischen Medium und in einer Ihnen anschließend zur Aufbewahrung bzw. Speicherung zur
                    Verfügung gestellten Information über alle wesentlichen Vertragskonditionen im Sinne der
                    vorvertraglichen Informationspflichten der Richtlinie 2008/48/EG über Verbraucherkreditverträge
                    informiert. Diese Informationen werden Ihnen zusätzlich nach Vertragsabschluss, spätestens mit
                    Zustellung der Ware, in speicherbarer Form elektronisch oder schriftlich übermittelt.
                </div>
                <div>
                    12. Sofern Sie auf Grund Ihrer besonderen Vereinbarung mit uns oder aufgrund gesetzlicher
                    Bestimmungen von dem Kaufvertrag zurücktreten, die Ware retournieren, Preisminderung geltend machen
                    oder sonstige Gründe haben, Ihre Zahlung ganz oder teilweise nicht leisten zu müssen, wird die Bank
                    in diesem Fall die Forderung gegen Sie wieder an uns zurück übertragen. Mit uns ist sodann eine
                    endgültige Vereinbarung über die Zahlung zu treffen, oder die Rückabwicklung vorzunehmen.
                </div>
                <strong style={{fontSize: "19px"}}>Kündigung und vorzeitige Rückzahlung</strong>
                <div>
                    13. Eine vorzeitige Kündigung einer getroffenen Vereinbarung über eine Ratenzahlung ist im Wege
                    vorzeitiger Rückzahlung möglich: Sie haben das Recht, jederzeit den Kreditbetrag vor Ablauf der
                    bedungenen Zeit zum Teil oder zur Gänze zurückzuzahlen. Die von Ihnen zu zahlenden Zinsen verringern
                    sich bei vorzeitiger Kreditrückzahlung entsprechend dem dadurch verminderten Außenstand und
                    entsprechend der dadurch verkürzten Vertragsdauer; laufzeitabhängige Kosten verringern sich
                    verhältnismäßig.
                </div>
                <strong style={{fontSize: "19px"}}>Warnung: Folgen ausbleibender Zahlungen</strong>
                <div>
                    14. Es fallen für verspätete Zahlungen sowohl bei Rechnungskauf als auch bei Ratenkauf als auch bei
                    der Bezahlung mittels SEPA-Basis-Lastschrift Verzugszinsen in vereinbarter Höhe sowie Kosten für
                    zweckentsprechende Mahnungen an. Bei nicht erfolgreichem internem Mahnwesen, kann die Bank die
                    offene Forderung zur Betreibung an ein Inkassobüro übergeben. In diesem Fall können Ihnen Kosten für
                    Rechtsverfolgung durch Inkassobüros und allenfalls für anwaltliche Vertretung entstehen.
                </div>
                <div>
                    15. Wir informieren Sie darüber, dass bei Ratenzahlung im Falle des Ausbleibens fälliger Zahlungen
                    die Bank, der die Kaufpreisforderung von uns abgetreten wurde, das Recht hat, die Vereinbarung über
                    die Ratenzahlung nach schriftlicher Mahnung und Nachfristsetzung vorzeitig zu beenden und der
                    gesamte noch offene Betrag dann sofort fällig wird.
                </div>
                <div>
                    16. Sollte eine Bestimmung dieser zusätzlichen AGB unwirksam sein, so berührt dies die Wirksamkeit
                    der sonstigen Bestimmungen dieser AGB nicht.
                </div>

                <br/>
                <div>
                    4.8 Bei Auswahl der Zahlungsart Kreditkarte ist der Rechnungsbetrag mit Vertragsschluss sofort
                    fällig. Die Abwicklung der Zahlungsart Kreditkartenzahlung erfolgt in Zusammenarbeit mit der BS
                    PAYONE GmbH, Lyoner Str. 9, 60528 Frankfurt/Main, an die der Anbieter seine Zahlungsforderung
                    abtritt. Die BS PAYONE GmbH zieht den Rechnungsbetrag vom angegebenen Kreditkartenkonto des Kunden
                    ein. Im Falle der Abtretung kann nur an die BS PAYONE GmbH mit schuldbefreiender Wirkung geleistet
                    werden. Die Belastung der Kreditkarte erfolgt umgehend nach Absendung der Kundenbestellung im
                    Online-Shop. Der Anbieter bleibt auch bei Auswahl der Zahlungsart Kreditkartenzahlung über die BS
                    PAYONE GmbH zuständig für allgemeine Kundenanfragen z.B. zur Ware, Lieferzeit, Versendung, Retouren,
                    Reklamationen, Widerrufserklärungen und -zusendungen oder Gutschriften.
                </div>


                <br></br>
                <br></br>
                <h4>5) Liefer- und Versandbedingungen</h4>
                <div>
                    5.1 Die Lieferung von Waren erfolgt auf dem Versandweg an die vom Kunden angegebene Lieferanschrift,
                    sofern nichts anderes vereinbart ist. Bei der Abwicklung der Transaktion ist die in der
                    Bestellabwicklung des Verkäufers angegebene Lieferanschrift maßgeblich.
                </div>
                <div>
                    5.2 Scheitert die Zustellung der Ware aus Gründen, die der Kunde zu vertreten hat, trägt der Kunde
                    die dem Verkäufer hierdurch entstehenden angemessenen Kosten. Dies gilt im Hinblick auf die Kosten
                    für die Hinsendung nicht, wenn der Kunde sein Widerrufsrecht wirksam ausübt. Für die Rücksendekosten
                    gilt bei wirksamer Ausübung des Widerrufsrechts durch den Kunden die in der Widerrufsbelehrung des
                    Verkäufers hierzu getroffene Regelung.
                </div>
                <div>
                    5.3 Selbstabholung ist aus logistischen Gründen nicht möglich.
                </div>


                <br></br>
                <br></br>
                <h4>6) Eigentumsvorbehalt</h4>
                <div>Tritt der Verkäufer in Vorleistung, behält er sich bis zur vollständigen Bezahlung des geschuldeten
                    Kaufpreises das Eigentum an der gelieferten Ware vor.
                </div>


                <br></br>
                <br></br>
                <h4>7) Mängelhaftung (Gewährleistung)</h4>
                <div>
                    7.1 Ist die Kaufsache mangelhaft, gelten die Vorschriften der gesetzlichen Mängelhaftung.
                </div>
                <div>
                    7.2 Handelt der Kunde als Verbraucher, so wird er gebeten, angelieferte Waren mit offensichtlichen
                    Transportschäden bei dem Zusteller zu reklamieren und den Verkäufer hiervon in Kenntnis zu setzen.
                    Kommt der Kunde dem nicht nach, hat dies keinerlei Auswirkungen auf seine gesetzlichen oder
                    vertraglichen Mängelansprüche.
                </div>


                <br></br>
                <br></br>
                <h4>8) Einlösung von Aktionsgutscheinen</h4>
                <div>8.1 Gutscheine, die vom Verkäufer im Rahmen von Werbeaktionen mit einer bestimmten Gültigkeitsdauer
                    unentgeltlich ausgegeben werden und die vom Kunden nicht käuflich erworben werden können
                    (nachfolgend "Aktionsgutscheine"), können nur im Online-Shop des Verkäufers und nur im angegebenen
                    Zeitraum eingelöst werden.
                </div>
                <div>8.2 Einzelne Produkte können von der Gutscheinaktion ausgeschlossen sein, sofern sich eine
                    entsprechende Einschränkung aus dem Inhalt des Aktionsgutscheins ergibt.
                </div>
                <div>8.3 Aktionsgutscheine können nur vor Abschluss des Bestellvorgangs eingelöst werden. Eine
                    nachträgliche Verrechnung ist nicht möglich.
                </div>
                <div>8.4 Pro Bestellung kann immer nur ein Aktionsgutschein eingelöst werden.</div>
                <div>8.5 Der Warenwert muss mindestens dem Betrag des Aktionsgutscheins entsprechen. Etwaiges
                    Restguthaben wird vom Verkäufer nicht erstattet.
                </div>
                <div>8.6 Reicht der Wert des Aktionsgutscheins zur Deckung der Bestellung nicht aus, kann zur
                    Begleichung des Differenzbetrages eine der übrigen vom Verkäufer angebotenen Zahlungsarten gewählt
                    werden.
                </div>
                <div>8.7 Das Guthaben eines Aktionsgutscheins wird weder in Bargeld ausgezahlt noch verzinst.</div>
                <div>8.8 Der Aktionsgutschein wird nicht erstattet, wenn der Kunde die mit dem Aktionsgutschein ganz
                    oder teilweise bezahlte Ware im Rahmen seines gesetzlichen Widerrufsrechts zurückgibt.
                </div>
                <div>8.9 Der Aktionsgutschein ist übertragbar. Der Verkäufer kann mit befreiender Wirkung an den
                    jeweiligen Inhaber, der den Aktionsgutschein im Online-Shop des Verkäufers einlöst, leisten. Dies
                    gilt nicht, wenn der Verkäufer Kenntnis oder grob fahrlässige Unkenntnis von der Nichtberechtigung,
                    der Geschäftsunfähigkeit oder der fehlenden Vertretungsberechtigung des jeweiligen Inhabers hat.
                </div>


                <br></br>
                <br></br>
                <h4>9) Anwendbares Recht</h4>
                <div>Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Republik Österreich unter
                    Ausschluss der Gesetze über den internationalen Kauf beweglicher Waren. Bei Verbrauchern gilt diese
                    Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des
                    Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.
                </div>


                <br></br>
                <br></br>
                <h4>10) Gerichtsstand</h4>
                <div>Handelt der Kunde als Kaufmann, juristische Person des öffentlichen Rechts oder
                    öffentlich-rechtliches Sondervermögen mit Sitz im Hoheitsgebiet der Republik Österreich, ist
                    ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz des
                    Verkäufers. Hat der Kunde seinen Sitz außerhalb des Hoheitsgebiets der Republik Österreich, so ist
                    der Geschäftssitz des Verkäufers ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem
                    Vertrag, wenn der Vertrag oder Ansprüche aus dem Vertrag der beruflichen oder gewerblichen Tätigkeit
                    des Kunden zugerechnet werden können. Der Verkäufer ist in den vorstehenden Fällen jedoch in jedem
                    Fall berechtigt, das Gericht am Sitz des Kunden anzurufen.
                </div>


                <br></br>
                <br></br>
                <h4>11) Verhaltenskodex</h4>
                <div>
                    Der Verkäufer hat sich den Richtlinien für „Google Kundenrezensionen“ unterworfen, die im Internet
                    unter https://support.google.com/merchants/topic/7105962 einsehbar sind.
                </div>


                <br></br>
                <br></br>
                <h4>12) Alternative Streitbeilegung</h4>
                <div>
                    12.1 Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr
                    Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten aus Online-Kauf- oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist.
                </div>
                <div>
                    12.2 Der Verkäufer ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet, hierzu jedoch grundsätzlich bereit.
                </div>
            </Container>
        </Wrapper>
    );
}

export default Agb;
