import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    min-height: 500px;
    margin-top: 180px;
    text-align: left;
    max-width: 1300px;
    min-width: 300px;
    width: 80%;
    margin: 180px auto;

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
        margin-top: 110px;
    }
`;

function Datenschutz() {
  return (
    <Container>
        <h1 style={{textAlign:'center'}} className='header'>Datenschutz</h1>

        <br></br>
        <br></br>
        <h3>Datenschutzerklärung</h3>
        <div>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder E-
            Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
            kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
            Dritte ist nicht möglich.
        </div>

        <br></br>
        <br></br>


        <h4>Cookies</h4>
        <div>
            Die Internetseiten verwenden teilweise so genannte Cookies.
            Cookies richten auf Ihrem Rechner keinen Schaden an und
            enthalten keine Viren. Cookies dienen dazu, unser Angebot
            nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
            sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
            und die Ihr Browser speichert.
            Die meisten der von uns verwendeten Cookies sind so genannte
            „Session-Cookies“. Sie werden nach Ende Ihres Besuchs
            automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
            gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es
            uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen
            von Cookies informiert werden und Cookies nur im Einzelfall
            erlauben, die Annahme von Cookies für bestimmte Fälle oder
            generell ausschließen sowie das automatische Löschen derCookies beim Schließen des Browser aktivieren. Bei der
            Deaktivierung von Cookies kann die Funktionalität dieser Website
            eingeschränkt sein.
        </div>


        <br></br>
        <br></br>


        <h4>Server-Log-Files</h4>
        <div>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log Files, die Ihr Browser
            automatisch an uns übermittelt. Dies sind:
        </div>
        <ul>
            <li className='liElement'>Browsertyp und Browserversion</li>
            <li className='liElement'>verwendetes Betriebssystem</li>
            <li className='liElement'>Referrer URL</li>
            <li className='liElement'>Hostname des zugreifenden Rechners</li>
            <li className='liElement'>Uhrzeit der Serveranfrage</li>
        </ul>
        <div>
            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
            Zusammenführung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen. Wir behalten uns vor, diese Daten
            nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine
            rechtswidrige Nutzung bekannt werden.
        </div>


        <br></br>
        <br></br>


        <h4>Kontaktformular</h4>
        <div>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
            werden Ihre Angaben aus dem Anfrageformular inklusive der von
            Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </div>


        <br></br>
        <br></br>


        <h4>Newsletterdaten</h4>
        <div>
            Wenn Sie den auf der Webseite angebotenen Newsletter beziehen
            möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
            Informationen, welche uns die Überprüfung gestatten, dass Sie der
            Inhaber der angegebenen E-Mail-Adresse sind und mit dem
            Empfang des Newsletters einverstanden sind. Weitere Daten
            werden nicht erhoben. Diese Daten verwenden wir ausschließlich
            für den Versand der angeforderten Informationen und geben sie
            nicht an Dritte weiter.
            Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-
            Adresse sowie deren Nutzung zum Versand des Newsletters
            können Sie jederzeit widerrufen, etwa über den "Austragen"-Link
            im Newsletter.
        </div>


        <br></br>
        <br></br>


        <h4>Google Analytics</h4>
        <div>
            Diese Website nutzt Funktionen des Webanalysedienstes Google
            Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway
            Mountain View, CA 94043, USA.
            Google Analytics verwendet so genannte "Cookies". Das sind
            Textdateien, die auf Ihrem Computer gespeichert werden und die
            eine Analyse der Benutzung der Website durch Sie ermöglichen.
            Die durch den Cookie erzeugten Informationen über Ihre
            Benutzung dieser Website werden in der Regel an einen Server von
            Google in den USA übertragen und dort gespeichert.
        </div>


        <br></br>
        <br></br>


        <h4>IP-Anonymisierung</h4>
        <div>
            Wir haben auf dieser Webseite die Funktion IP-Anonymisierung
            aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von
            Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen
            Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in
            Ausnahmefällen wird die volle IP-Adresse an einen Server von
            Google in den USA übertragen und dort gekürzt. Im Auftrag des
            Betreibers dieser Website wird Google diese Informationen
            benutzen, um Ihre Nutzung der Website auszuwerten, um Reports
            über die Websiteaktivitäten zusammenzustellen und um weitere mit
            der Websitenutzung und der Internetnutzung verbundene
            Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
            Die im Rahmen von Google Analytics von Ihrem Browser
            übermittelte IP-Adresse wird nicht mit anderen Daten von Google
            zusammengeführt.
        </div>


        <br></br>
        <br></br>


        <h4>Browser Plugin</h4>
        <div>
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
            jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
            sämtliche Funktionen dieser Website vollumfänglich werden
            nutzen können. Sie können darüber hinaus die Erfassung der
            durch den Cookie erzeugten und auf Ihre Nutzung der Website
            bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
            Verarbeitung dieser Daten durch Google verhindern, indem Sie das
            unter dem folgenden Link verfügbare Browser-Plugin
            herunterladen und installieren: https://tools.google.com/dlpage/
            gaoptout?hl=de
        </div>


        <br></br>
        <br></br>


        <h4>Widerspruch gegen Datenerfassung</h4>
        <div>
            Sie können die Erfassung Ihrer Daten durch Google Analytics
            verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-
            Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen
            Besuchen dieser Website verhindert: Google Analytics deaktivierenMehr Informationen zum Umgang mit Nutzerdaten bei Google
            Analytics finden Sie in der Datenschutzerklärung von
            Google: https://support.google.com/analytics/answer/6004245?
            hl=de
        </div>


        <br></br>
        <br></br>


        <h4>Auftragsdatenverarbeitung</h4>
        <div>
            Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung
            abgeschlossen und setzen die strengen Vorgaben der deutschen
            Datenschutzbehörden bei der Nutzung von Google Analytics
            vollständig um.
        </div>


        <br></br>
        <br></br>


        <h4>Demografische Merkmale bei Google Analytics</h4>
        <div>
            Diese Website nutzt die Funktion “demografische Merkmale” von
            Google Analytics. Dadurch können Berichte erstellt werden, die
            Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher
            enthalten. Diese Daten stammen aus interessenbezogener
            Werbung von Google sowie aus Besucherdaten von Drittanbietern.
            Diese Daten können keiner bestimmten Person zugeordnet werden.
            Sie können diese Funktion jederzeit über die.
            Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder
            die Erfassung Ihrer Daten durch Google Analytics wie im Punkt
            “Widerspruch gegen Datenerfassung” dargestellt generell
            untersagen.
        </div>



        <br></br>
        <br></br>


        <h4>etracker</h4>
        <div>
            Unsere Webseite nutzt den Analysedienst etracker. Anbieter ist die
            etracker GmbH, Erste Brunnenstraße 1, 20459 Hamburg Germany.
            Aus den Daten können unter einem Pseudonym Nutzungsprofile
            erstellt werden. Dazu können Cookies eingesetzt werden. Bei
            Cookies handelt es sich um kleine Textdateien, die lokal im
            Zwischenspeicher Ihres Internet-Browsers gespeichert werden. Die
            Cookies ermöglichen es, Ihren Browser wieder zu erkennen. Die
            mit den etracker-Technologien erhobenen Daten werden ohne die
            gesondert erteilte Zustimmung des Betroffenen nicht genutzt,
            Besucher unserer Website persönlich zu identifizieren und werden
            nicht mit personenbezogenen Daten über den Träger des
            Pseudonyms zusammengeführt.
            Der Datenerhebung und -speicherung können Sie jederzeit mit
            Wirkung für die Zukunft widersprechen. Um einer Datenerhebung
            und -speicherung Ihrer Besucherdaten für die Zukunft zu
            widersprechen, können Sie unter nachfolgendem Link ein Opt-Out-
            Cookie von etracker beziehen, dieser bewirkt, dass zukünftig keine
            Besucherdaten Ihres Browsers bei etracker erhoben und
            gespeichert werden: https://www.etracker.de/privacy?et=V23JbbDadurch wird ein Opt-Out-Cookie mit dem Namen "cntcookie" von
            etracker gesetzt. Bitte löschen Sie diesen Cookie nicht, solange Sie
            Ihren Widerspruch aufrecht erhalten möchten. Weitere
            Informationen finden Sie in den Datenschutzbestimmungen von
            etracker: https://www.etracker.com/de/datenschutz.html
        </div>




        <br></br>
        <br></br>


        <h4>Matomo</h4>
        <div>
            Diese Website benutzt den Open Source Webanalysedienst
            Matomo. Matomo verwendet so genannte "Cookies". Das sind
            Textdateien, die auf Ihrem Computer gespeichert werden und die
            eine Analyse der Benutzung der Website durch Sie ermöglichen.
            Dazu werden die durch den Cookie erzeugten Informationen über
            die Benutzung dieser Website auf unserem Server gespeichert. Die
            IP-Adresse wird vor der Speicherung anonymisiert.
            Die durch den Cookie erzeugten Informationen über die Benutzung
            dieser Website werden nicht an Dritte weitergegeben. Sie können
            die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
            jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
            sämtliche Funktionen dieser Website vollumfänglich werden
            nutzen können.
        </div>
        <div>
            Wenn Sie mit der Speicherung und Nutzung Ihrer Daten nicht
            einverstanden sind, können Sie die Speicherung und Nutzung hier
            deaktivieren. In diesem Fall wird in Ihrem Browser ein Opt-Out-
            Cookie hinterlegt der verhindert, dass Matomo Nutzungsdaten
            speichert. Wenn Sie Ihre Cookies löschen hat dies zur Folge, dass
            auch das Matomo Opt-Out-Cookie gelöscht wird. Das Opt-Out
            muss bei einem erneuten Besuch unserer Seite wieder aktiviert
            werden.
        </div>
        <a className='liElement' href='https://matomo.org/docs/privacy/' target='blank'>[Hier Matomo iframe-Code einfügen] (Klick für die Anleitung)</a>
        <div>
            Inhalte teilen bei Facebook, Google+1, Twitter, etc.
            Die Inhalte auf unseren Seiten können datenschutzkonform in
            sozialen Netzwerken wie Facebook, Twitter oder Google+ geteilt
            werden. Diese Seite nutzt dafür das eRecht24 Safe Sharing Tool.
            Dieses Tool stellt den direkten Kontakt zwischen den Netzwerken
            und Nutzern erst dann her, wenn der Nutzer aktiv auf einen dieser
            Button klickt.
        </div>
        <div>
            Eine automatische Übertragung von Nutzerdaten an die Betreiber
            dieser Plattformen erfolgt durch dieses Tool nicht. Ist der Nutzer
            bei einem der sozialen Netzwerke angemeldet, erscheint bei der
            Nutzung der Social-Buttons von Facebook, Google+1, Twitter & Co.eine Informations-Fenster, in dem der Nutzer den Text vor dem
            Absenden bestätigen kann.
        </div>
        <div>
            Unsere Nutzer können die Inhalte dieser Seite datenschutzkonform
            in sozialen Netzwerken teilen, ohne dass komplette Surf-Profile
            durch die Betreiber der Netzwerke erstellt werden.
        </div>



        <br></br>
        <br></br>


        <h4>Facebook-Plugins (Like-Button)</h4>
        <div>
            Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook,
            Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California
            94025, USA, integriert. Die Facebook-Plugins erkennen Sie an dem
            Facebook-Logo oder dem "Like-Button" ("Gefällt mir") auf unserer
            Seite. Eine Übersicht über die Facebook-Plugins finden Sie
            hier: https://developers.facebook.com/docs/plugins/.
            Wenn Sie unsere Seiten besuchen, wird über das Plugin eine
            direkte Verbindung zwischen Ihrem Browser und dem Facebook-
            Server hergestellt. Facebook erhält dadurch die Information, dass
            Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den
            Facebook "Like-Button" anklicken während Sie in Ihrem Facebook-
            Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf
            Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den
            Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen
            darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom
            Inhalt der übermittelten Daten sowie deren Nutzung durch
            Facebook erhalten. Weitere Informationen hierzu finden Sie in der
            Datenschutzerklärung von Facebook unter https://de-
            de.facebook.com/policy.php.
        </div>
        <div>
            Wenn Sie nicht wünschen, dass Facebook den Besuch unserer
            Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie
            sich bitte aus Ihrem Facebook-Benutzerkonto aus.
        </div>


        <br></br>
        <br></br>


        <h4>Facebook-Pixel</h4>
        <div>
            Unsere Webseite nutzt zur Konversionsmessung das
            Besucheraktions-Pixel von Facebook, Facebook Inc. 1601 S.
            California Ave, Palo Alto, CA 94304, USA (“Facebook”) . So kann
            das Verhalten der Seitenbesucher nachverfolgt werden, nachdem
            diese durch Klick auf eine Facebook-Werbeanzeige auf die
            Webseite des Anbieters weitergeleitet wurden. Dadurch können die
            Wirksamkeit der Facebook-Werbeanzeigen für statistische und
            Marktforschungszwecke ausgewertet werden und zukünftige
            Werbemaßnahmen optimiert werden.
        </div>
        <div>
            Die erhobenen Daten sind für uns als Betreiber dieser Webseite
            anonym, wir können keine Rückschlüsse auf die Identität derNutzer ziehen. Die Daten werden aber von Facebook gespeichert
            und verarbeitet, sodass eine Verbindung zum jeweiligen
            Nutzerprofil möglich ist und Facebook die Daten für eigene
            Werbezwecke, entsprechend der Facebook-
            Datenverwendungsrichtlinie (https://www.facebook.com/about/
            privacy/) verwenden kann. Dadurch kann Facebook das Schalten
            von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von
            Facebook ermöglichen. Diese Verwendung der Daten kann von uns
            als Seitenbetreiber nicht beeinflusst werden.
            In den Datenschutzhinweisen von Facebook finden Sie weitere
            Hinweise zum Schutz Ihrer Privatsphäre https://
            www.facebook.com/about/privacy/.
        </div>
        <div>
            Sie können außerdem die Remarketing-Funktion „Custom
            Audiences“ unter https://www.facebook.com/ads/preferences/?
            entry_product=ad_settings_screendeaktivieren. Dazu müssen Sie
            bei Facebook angemeldet sein.
            Wenn Sie kein Facebook Konto besitzen können Sie
            nutzungsbasierte Werbung von Facebook auf der Webseite der
            European Interactive Digital Advertising Alliance
            deaktivieren: http://www.youronlinechoices.com/de/
            praferenzmanagement/
        </div>


        <br></br>
        <br></br>


        <h4>Google+</h4>
        <div>
            Unsere Seiten nutzen Funktionen von Google+. Anbieter ist die
            Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043,
            USA.
        </div>
        <div>
            Erfassung und Weitergabe von Informationen: Mithilfe der
            Google+-Schaltfläche können Sie Informationen weltweit
            veröffentlichen. Über die Google+-Schaltfläche erhalten Sie und
            andere Nutzer personalisierte Inhalte von Google und unseren
            Partnern. Google speichert sowohl die Information, dass Sie für
            einen Inhalt +1 gegeben haben, als auch Informationen über die
            Seite, die Sie beim Klicken auf +1 angesehen haben. Ihre +1
            können als Hinweise zusammen mit Ihrem Profilnamen und Ihrem
            Foto in Google-Diensten, wie etwa in Suchergebnissen oder in
            Ihrem Google-Profil, oder an anderen Stellen auf Websites und
            Anzeigen im Internet eingeblendet werden.
        </div>
        <div>
            Google zeichnet Informationen über Ihre +1-Aktivitäten auf, um die
            Google-Dienste für Sie und andere zu verbessern. Um die Google+-
            Schaltfläche verwenden zu können, benötigen Sie ein weltweit
            sichtbares, öffentliches Google-Profil, das zumindest den für das
            Profil gewählten Namen enthalten muss. Dieser Name wird in allenGoogle-Diensten verwendet. In manchen Fällen kann dieser Name
            auch einen anderen Namen ersetzen, den Sie beim Teilen von
            Inhalten über Ihr Google-Konto verwendet haben. Die Identität
            Ihres Google-Profils kann Nutzern angezeigt werden, die Ihre E-
            Mail-Adresse kennen oder über andere identifizierende
            Informationen von Ihnen verfügen.
        </div>
        <div>
            Verwendung der erfassten Informationen: Neben den oben
            erläuterten Verwendungszwecken werden die von Ihnen
            bereitgestellten Informationen gemäß den geltenden Google-
            Datenschutzbestimmungen genutzt. Google veröffentlicht
            möglicherweise zusammengefasste Statistiken über die +1-
            Aktivitäten der Nutzer bzw. gibt diese an Nutzer und Partner weiter,
            wie etwa Publisher, Inserenten oder verbundene Websites.
        </div>


        <br></br>
        <br></br>


        <h4>Google Web Fonts</h4>
        <div>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Web Fonts, die von Google bereitgestellt werden. Beim
            Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
            ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
            Standardschrift von Ihrem Computer genutzt.
            Weitere Informationen zu Google Web Fonts finden Sie
            unter https://developers.google.com/fonts/faq und in der
            Datenschutzerklärung von Google: https://www.google.com/
            policies/privacy/
        </div>




        <br></br>
        <br></br>


        <h4>Google Maps</h4>
        <div>
            Diese Seite nutzt über eine API den Kartendienst Google Maps.
            Anbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain
            View, CA 94043, USA. Zur Nutzung der Funktionen von Google
            Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese
            Informationen werden in der Regel an einen Server von Google in
            den USA übertragen und dort gespeichert. Der Anbieter dieser
            Seite hat keinen Einfluss auf diese Datenübertragung.
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
            Datenschutzerklärung von Google: https://www.google.de/intl/de/
            policies/privacy/
        </div>


        <br></br>
        <br></br>


        <h4>XING</h4>
        <div>
            Unsere Webseite nutzt Funktionen des Netzwerks XING. Anbieter
            ist die XING AG, Dammtorstraße 29-32, 20354 Hamburg,
            Deutschland. Bei jedem Abruf einer unserer Seiten, die Funktionenvon XING enthält, wird eine Verbindung zu Servern von XING
            hergestellt. Eine Speicherung von personenbezogenen Daten
            erfolgt dabei nach unserer Kenntnis nicht. Insbesondere werden
            keine IP-Adressen gespeichert oder das Nutzungsverhalten
            ausgewertet.
        </div>
        <div>
            Weitere Information zum Datenschutz und dem XING Share-Button
            finden Sie in der Datenschutzerklärung von XING unter: https://
            www.xing.com/app/share?op=data_protection
        </div>



        <br></br>
        <br></br>


        <h4>YouTube</h4>
        <div>
            Unsere Webseite nutzt Plugins der von Google betriebenen Seite
            YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry
            Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem
            YouTube-Plugin ausgestatteten Seiten besuchen, wird eine
            Verbindung zu den Servern von YouTube hergestellt. Dabei wird
            dem Youtube-Server mitgeteilt, welche unserer Seiten Sie besucht
            haben.
        </div>
        <div>
            Wenn Sie in Ihrem YouTube-Account eingeloggt sind ermöglichen
            Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil
            zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem
            YouTube-Account ausloggen.
        </div>
        <div>
            Weitere Informationen zum Umgang von Nutzerdaten finden Sie in
            der Datenschutzerklärung von YouTube unter: https://
            www.google.de/intl/de/policies/privacy
        </div>


        <br></br>
        <br></br>


        <h4>Google Adsense</h4>
        <div>
            Diese Website benutzt Google AdSense, einen Dienst zum
            Einbinden von Werbeanzeigen der Google Inc. ("Google"). Anbieter
            ist die Google Inc., 1600 Amphitheatre Parkway Mountain View, CA
            94043, USA
        </div>
        <div>
            Google AdSense verwendet so genannte "Cookies", Textdateien,
            die auf Ihrem Computer gespeichert werden und die eine Analyse
            der Benutzung der Website ermöglicht. Google AdSense verwendet
            auch so genannte Web Beacons (unsichtbare Grafiken). Durch
            diese Web Beacons können Informationen wie der
            Besucherverkehr auf diesen Seiten ausgewertet werden.
            Die durch Cookies und Web Beacons erzeugten Informationen über
            die Benutzung dieser Website (einschließlich Ihrer IP-Adresse) und
            Auslieferung von Werbeformaten werden an einen Server von
            Google in den USA übertragen und dort gespeichert. Diese
            Informationen können von Google an Vertragspartner von Googleweiter gegeben werden. Google wird Ihre IP-Adresse jedoch nicht
            mit anderen von Ihnen gespeicherten Daten zusammenführen.
            Sie können die Installation der Cookies durch eine entsprechende
            Einstellung Ihrer Browser Software verhindern; wir weisen Sie
            jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
            sämtliche Funktionen dieser Website voll umfänglich nutzen
            können. Durch die Nutzung dieser Website erklären Sie sich mit
            der Bearbeitung der über Sie erhobenen Daten durch Google in der
            zuvor beschriebenen Art und Weise und zu dem zuvor benannten
            Zweck einverstanden.
        </div>


        <br></br>
        <br></br>


        <h4>Google Analytics Remarketing</h4>
        <div>
            Unsere Webseiten nutzen die Funktionen von Google Analytics
            Remarketing in Verbindung mit den geräteübergreifenden
            Funktionen von Google AdWords und Google DoubleClick.
            Anbieter ist die Google Inc. 1600 Amphitheatre Parkway Mountain
            View, CA 94043, USA.
        </div>
        <div>
            Diese Funktion ermöglicht es die mit Google Analytics
            Remarketing erstellten Werbe-Zielgruppen mit den
            geräteübergreifenden Funktionen von Google AdWords und
            Google-DoubleClick zu verknüpfen. Auf diese Weise können
            interessenbezogene, personalisierte Werbebotschaften, die in
            Abhängigkeit Ihres früheren Nutzungs- und Surfverhaltens auf
            einem Endgerät (z.B. Handy) an Sie angepasst wurden auch auf
            einem anderen Ihrer Endgeräte (z.B. Tablet oder PC) angezeigt
            werden.
        </div>
        <div>
            Haben Sie eine entsprechende Einwilligung erteilt, verknüpft
            Google zu diesem Zweck Ihren Web- und App-Browserverlauf mit
            Ihrem Google-Konto. Auf diese Weise können auf jedem Endgerät
            auf dem Sie sich mit Ihrem Google-Konto anmelden, dieselben
            personalisierten Werbebotschaften geschaltet werden.
            Zur Unterstützung dieser Funktion erfasst Google Analytics
            google-authentifizierte ID ́s der Nutzer, die vorübergehend mit
            unseren Google-Analytics-Daten verknüpft werden, um
            Zielgruppen für die geräteübergreifende Anzeigenwerbung zu
            definieren und zu erstellen.
        </div>
        <div>
            Sie können dem geräteübergreifenden Remarketing/Targeting
            dauerhaft widersprechen, indem Sie personalisierte Werbung in
            Ihrem Google-Konto deaktivieren; folgen Sie hierzu diesem
            Link: https://www.google.com/settings/ads/onweb/
        </div>
        <div>
            Weitergehende Informationen und die Datenschutzbestimmungen
            finden Sie in der Datenschutzerklärung von Google unter: https://
            www.google.com/policies/technologies/ads/
        </div>


        <br></br>
        <br></br>


        <h4>Google AdWords und Google Conversion Tracking</h4>
        <div>
            Diese Webseite verwendet Google AdWords. AdWords ist ein
            Online-Werbeprogramm der Google Inc., 1600 Amphitheatre
            Parkway, Mountain View, CA 94043, United States (“Google”).
            Im Rahmen von Google AdWords nutzen wir das so genannte
            Conversion-Tracking. Wenn Sie auf eine von Google geschaltete
            Anzeige klicken wird ein Cookie für das Conversion-Tracking
            gesetzt. Bei Cookies handelt es sich um kleine Textdateien, die der
            Internet-Browser auf dem Computer des Nutzers ablegt. Diese
            Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht
            der persönlichen Identifizierung der Nutzer. Besucht der Nutzer
            bestimmte Seiten dieser Website und das Cookie ist noch nicht
            abgelaufen, können Google und wir erkennen, dass der Nutzer auf
            die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde.
            Jeder Google AdWords-Kunde erhält ein anderes Cookie. Die
            Cookies können nicht über die Websites von AdWords-Kunden
            nachverfolgt werden. Die mithilfe des Conversion-Cookies
            eingeholten Informationen dienen dazu, Conversion-Statistiken für
            AdWords-Kunden zu erstellen, die sich für Conversion-Tracking
            entschieden haben. Die Kunden erfahren die Gesamtanzahl der
            Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem
            Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden.
            Sie erhalten jedoch keine Informationen, mit denen sich Nutzer
            persönlich identifizieren lassen. Wenn Sie nicht am Tracking
            teilnehmen möchten, können Sie dieser Nutzung widersprechen,
            indem Sie das Cookie des Google Conversion-Trackings über ihren
            Internet-Browser unter Nutzereinstellungen leicht deaktivieren. Sie
            werden sodann nicht in die Conversion-Tracking Statistiken
            aufgenommen.
        </div>
        <div>
            Mehr Informationen zu Google AdWords und Google Conversion-
            Tracking finden Sie in den Datenschutzbestimmungen von
            Google: https://www.google.de/policies/privacy/
        </div>
        <div>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen
            von Cookies informiert werden und Cookies nur im Einzelfall
            erlauben, die Annahme von Cookies für bestimmte Fälle oder
            generell ausschließen sowie das automatische Löschen der
            Cookies beim Schließen des Browser aktivieren. Bei derDeaktivierung von Cookies kann die Funktionalität dieser Website
            eingeschränkt sein.
        </div>


        <br></br>
        <br></br>


        <h4>Registrierung auf dieser Webseite</h4>
        <div>
            Sie können sich auf unserer Webseite registrieren, um zusätzliche
            Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten
            verwenden wir nur zum Zwecke der Nutzung des jeweiligen
            Angebotes oder Dienstes, für den Sie sich registriert haben.
            Für wichtige Änderungen etwa beim Angebotsumfang oder bei
            technisch notwendigen Änderungen nutzen wir die bei der
            Registrierung angegebene E-Mail-Adresse, um Sie auf diesem
            Wege zu informieren.
        </div>


        <br></br>
        <br></br>


        <h4>SSL-Verschlüsselung</h4>
        <div>
            Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
            Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen,
            die Sie an uns als Seitenbetreiber senden, eine SSL-
            Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers von "http://" auf
            "https://" wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
        </div>
        <div>
            Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die
            Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
        </div>


        <br></br>
        <br></br>


        <h4>Verarbeiten von Daten (Kunden- und Vertragsdaten)</h4>
        <div>
            Wir erheben, verarbeiten und nutzen personenbezogene Daten nur,
            soweit sie für die Begründung, inhaltliche Ausgestaltung oder
            Änderung des Rechtsverhältnisses erforderlich sind
            (Bestandsdaten). Personenbezogene Daten über die
            Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben,
            verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um
            dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen
            oder abzurechnen.
        </div>



        <br></br>
        <br></br>


        <h4>Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitalen Inhalten</h4>
        <div>
            Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn
            dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an
            das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
            Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur
            dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben.Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche
            Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
        </div>


        <br></br>
        <br></br>


        <h4>Recht auf Auskunft, Löschung, Sperrung</h4>
        <div>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empfänger und den Zweck der Datenverarbeitung sowie ein Recht
            auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
            sowie zu weiteren Fragen zum Thema personenbezogene Daten
            können Sie sich jederzeit unter der im Impressum angegebenen
            Adresse an uns wenden.
        </div>


        <br></br>
        <br></br>


        <h4>Widerspruch Werbe-Mails</h4>
        <div>
            Der Nutzung von im Rahmen der Impressumspflicht
            veröffentlichten Kontaktdaten zur Übersendung von nicht
            ausdrücklich angeforderter Werbung und Informationsmaterialien
            wird hiermit widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten
            Zusendung von Werbeinformationen, etwa durch Spam-E-Mails,
            vor.
        </div>



        <br></br>
        <br></br>
        <h3>Disclaimer</h3>
        <br></br>

        <h4>Haftung für Inhalte</h4>
        <div>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen,
            die auf eine rechtswidrige Tätigkeit hinweisen.
        </div>
        <div>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen
            werden wir diese Inhalte umgehend entfernen.
        </div>


        <br></br>
        <br></br>

        <h4>Haftung für Links</h4>
        <div>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
            überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
        </div>
        <div>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
        </div>


        <br></br>
        <br></br>

        <h4>Urheberrecht</h4>
        <div>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
            der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
        </div>
        <div>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werden wir derartige Inhalte umgehend
            entfernen.
        </div>

    </Container>
  )
}

export default Datenschutz