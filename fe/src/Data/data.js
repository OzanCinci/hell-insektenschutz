import P1 from '../images/product/p1.jpg'
import P2 from '../images/product/p2.jpg'
import P3 from '../images/product/p3.jpg'
import P4 from '../images/product/p4.jpg'
import P5 from '../images/product/p5.jpg'
import P6 from '../images/product/p6.jpg'
import P7 from '../images/product/p7.jpg'
import T2 from '../images/dumps/turen2.jpg'
import T3 from '../images/dumps/turen3.jpg'
import T4 from '../images/dumps/turen4.jpg'
import F2 from '../images/dumps/fenster2.jpg'
import F3 from '../images/dumps/fenster3.jpg'
import F4 from '../images/dumps/fenster4.jpg'
import D2 from '../images/dumps/dach2.jpg'
import L2 from '../images/dumps/lich2.jpg'
import L3 from '../images/dumps/lich3.jpg'
import S2 from '../images/dumps/sonder2.jpg'
import S3 from '../images/dumps/sonder3.jpg'
import Z2 from '../images/dumps/z2.jpg'
import G2 from '../images/dumps/g2.jpg'
import G3 from '../images/dumps/g3.jpg'
import G4 from '../images/dumps/g4.jpg'
import G5 from '../images/dumps/g5.jpg'

const data = {
    dachfenster: [
        {
            url: "rollo",
            img: P3,
            text: "Unsere Rollo-Systeme bieten Insektenschutz für nahezu jedes Dachflächenfenster. Egal ob Sie unsere Rollos ausgezogen haben, oder ob es in der Kassette auf Benutzung wartet – sie werden in Sachen Durchblick fast keinen Unterschied merken. Versprochen.",
            def: true,
            title: "Rollo"
        },
        {
            url: "plissee",
            img: D2,
            text: "Insektenschutzplissees für Dachfenster sind die Alternative zum Rollo für trendbewusste Kunden. Mit einem Handgriff an der Zugschiene entfaltet sich das Gewebe und bietet wirksamen Insektenschutz. Die Faltenkanten wirken dabei besonders stylisch und modern.",
            def: false,
            title: "Plissee"
        },
    ],
    fenster: [
        {
            url: "spannrahmen",
            img: P2,
            text: "Unsere Spannrahmen sind die beliebte Lösung für Fenster, die nur zum Lüften geöffnet oder gekippt werden. Unser Einhängesystem ermöglicht eine Montage ohne zu Bohren. Auch bei besonders eng anliegenden Rolloführungsschienen haben wir die richtige Lösung parat.",
            def: false,
            title: "Spannrahmen"
        },
        {
            url: "drehfenster",
            img: F2,
            text: "Sie möchten Ihr Fliegengitter öffnen können? Je nach Anwendungsfall und Wunsch bieten wir Lösungen, die nach außen oder innen zum Öffnen sind. Die Drehfenster werden gerne in Bereichen eingesetzt, in den Blumen von innen heraus gegossen werden sollen.",
            def: true,
            title: "Drehfenster"
        },
        {
            url: "rollo",
            img: F3,
            text: "Egal ob Sie unser Insektenschutzrollo ausgezogen haben, oder ob es in der Kassette auf Benutzung wartet – sie werden in Sachen Durchblick fast keinen Unterschied merken. Versprochen.",
            def: false,
            title: "Rollo"
        },
        {
            url: "plissee",
            img: F4,
            text: "Insektenschutzplissees sind der Trendsetter im Markt. Mit einem Handgriff an der Zugschiene entfaltet sich das Gewebe und bietet wirksamen Insektenschutz. Die Faltenkanten wirken dabei besonders stylisch und modern.",
            def: true,
            title: "Plissee"
        },
    ],
    gewebearten: [
        {
            img: P7,
            text: "proAIR bietet Ihnen das Optimum an Durchsicht, Luftdurchlass und Haltbarkeit. Mit seiner offenen Siebfläche von 80% und extrem dünnen Fäden entsteht ein nahezu unsichtbarer Insektenschutz. Fiberglas – ein langzeiterprobter Werkstoff - ist zudem extrem reißfest und beständig gegen Witterungseinflüsse.",
            def: true,
            title: "Gewebearten"
        },
        {
            img: G2,
            text: "Fiberglas ist ein High-Tech Werkstoff, der durch seine positiven Eigenschaften in vielen Bereichen unseres täglichen Lebens eingesetzt wird. Diese Basis verschafft unseren Geweben eine extrem lange Haltbarkeit im Vergleich zu anderen Werkstoffen. Der Gewebeaufbau ermöglicht Ihnen eine optimale Durchsicht und ein hervorragendes Lüftungsverhalten. Je nach gewünschtem Anwendungsbereich stehen verschiedene Ausführung hinsichtlich Maschenweite und Farben (grau oder schwarz) zur Verfügung.",
            def: false,
            title: "Fiberglasgewebe. Jahrzehnte bewährt. Vielfältige Möglichkeiten."
        },
        {
            img: G3,
            text: "Zugeben, unsere vierbeinigen Mitbewohner werden Ihr neues Insektengitter auf Herz und Nieren testen. Damit Sie lange Freude an Ihrem Produkt haben, bieten wir ein spezielles Gewebe für Katzen und Hunde an. Durch die extra starken Fäden entsteht ein robustes Gewebe, dem auch Katzenkrallen nichts anhaben können.",
            def: true,
            title: "Haustiergewebe. Extrem strapazierfähig."
        },
        {
            img: G4,
            text: "Das solidClear Gewebe zeichnet sich durch eine 7-Mal höhere Reißfestigkeit als normales Fiberglasgewebe aus und bietet zudem noch eine sehr gute Durchsicht. Bei der Herstellung dieses Gewebes wird eine komplett neues Fertigungsverfahren eingesetzt, welches völlig neue Möglichkeiten eröffnet. solidClear-Gewebe ist ideal bei starker Beanspruchung, wie beispielsweise verursacht durch Haustiere. Transparenz und Luftdurchlass (+18 %) begeistern im Vergleich zu marktüblichen Petscreen-Geweben.",
            def: false,
            title: "solidClear"
        },
        {
            img: G5,
            text: "Das Pollenschutzgewebe bietet eine wirksame Unterstützung zur Schaffung von Wohnräumen mit reduzierter Pollenbelastung. Die hochfeinen Maschen des Gewebes und die statische Wirkung lassen die anfliegenden Pollen am Gewebe anhaften. Ein Eindringen in den Wohnraum kann somit für viele Pollenarten vermieden werden. Unser Gewebe ist Allergiker-Zertifiziert.",
            def: true,
            title: "Pollenschutzgewebe. Ihrer Gesundheit zuliebe."
        },
        {
            img: P7,
            text: "Für Bereiche mit erhöhten Anforderungen bieten wir zahlreiche Spezialgewebe. Mögliche Gründe für den Einsatz sind beispielsweise Hygieneanforderungen in Lebensmittelbetrieben oder ein erhöhter mechanischer Schutz gegen Verbiss in bodennahen Bereichen. Die verfügbare Bandbreite erstreckt sich hierbei von naturbelassenen oder zusätzlich beschichteten Geweben aus Edelstahl oder Aluminium.",
            def: false,
            title: "Metallgewebe. Das Plus für Sonderanforderungen."
        },
    ],
    lich: [
        {
            url: null,
            img: P4,
            text: "Viele Möglichkeiten ein Ziel: Sauberkeit in Ihren Lichtschächten. Ob als clevere Nachrüstlösung oder als tragfähiges Gesamtelement – wir bieten für Ihre Anforderung die richtige Lösung.",
            def: false,
            title: "Für Lichtschächte"
        },
        {
            url: "lichtsschachtabdeckung",
            img: L2,
            text: "Die optimale Lösung zum Nachrüsten auf nahezu jede Kellerschachtabdeckung. Die Lichtschachtabdeckung besteht aus einem Rahmenelement mit einem hochstrapazierfähigem Edelstahlgewebe. Garantiert passend für Ihre Situation durch viele Zusatzvarianten.",
            def: true,
            title: "Lichtsschachtabdeckung"
        },
        {
            url: "gitterSafe",
            img: L3,
            text: "Ein solides Gesamtelement mit integrierten GFK-Rost ersetzt Ihren bestehenden Stahlrost. Der Vorteil: Flächenbündiger Abschluss zur Umgebung mit einem gleichzeitig eingearbeiteten Edelstahlgewebe.",
            def: false,
            title: "GitterSafe"
        },
    ],
    sonderformen: [
        {
            img: P5,
            text: "Mit Ecken und Kanten oder sanften Radien? Unsere Abteilung für Sonderformen realisiert mit Präzision außergewöhnliche Rahmenformen für Ihre Fenster.",
            def: true,
            title: "Sonderformen"
        },
        {
            img: S2,
            text: "Architekten und Planer schätzen die Fachkompetenz zur Anfertigung außergewöhnlicher Rahmenelemente. In Abhängigkeit Ihrer Kundenanforderungen wählen wir eine geeignete Variante aus und fertigen auf Grundlage eines CAD-Modells die Rahmenkontur millimetergenau.",
            def: false,
            title: "Maximale Gestaltungsfreiheit. Höchste Individualität."
        },
        {
            img: S3,
            text: "Den möglichen Konturen sind nahezu keine Grenzen gesetzt. Rund- und Segmentbögen stellen die häufigsten Arten von Sonderformen dar. Darüber hinaus lassen sich auch komplexere Geometrien mit unseren Profilbiegemaschinen realisieren. Sprechen Sie mit uns.",
            def: true,
            title: "Formgebung. Eine runde Sache."
        },
    ],
    türen: [
        {
            url: "drehtür",
            img: P1,
            text: "Drehtüren sind die 1. Wahl, wenn Sie ein Fliegengitter zum Öffnen für Balkon oder Terrasse suchen. Durch die Vielzahl an Varianten bieten wir Ihnen die optimale Lösung für Ihren Anwendungsfall. Die Öffnung erfolgt im Regelfall nach außen.",
            def: true,
            title: "Drehtür"
        },
        {
            url: "pendeltür",
            img: T2,
            text: "Höchsten Komfort und beste Technik bieten unsere Pendeltüren, die sich in zwei Richtungen öffnen lassen und von selbst schließen. So wird der Gang nach Draußen mit dem Tablett kinderleicht – drücken Sie einfach sanft gegen den Flügel und passieren Sie das Türelement.",
            def: false,
            title: "Pendeltür"
        },
        {
            url: "schiebetür",
            img: T3,
            text: "Sie haben eine große Fensteröffnung oder zu wenig Platz für ein Drehelement? Die können ein- oder zweiflügelig ausgeführt werden. Sprossenfrei ausgeführt wird Ihr Fliegengitter nahezu unsichtbar.",
            def: true,
            title: "Schiebetür"
        },
        {
            url: "plissee",
            img: T4,
            text: "Insektenschutzplissees sind der Trendsetter im Markt. Mit einem Handgriff an der Zugschiene entfaltet sich das Gewebe und bietet wirksamen Schutz gegen Fliegen. Die Faltenkanten wirken dabei besonders stylisch und modern.",
            def: false,
            title: "Plissee"
        },
    ],
    zusatzprodukte: [
        {
            img: P6,
            text: "Die perfekte Ergänzung für den Eingangsbereich ist ein Lämmermann-Fußabstreifer nach Maß. Edle Optik und leichte Reinigung sprechen für sich.",
            def: false,
            title: "Zusatzprodukte"
        },
        {
            img: Z2,
            text: "Zugegeben, wir sind Perfektionisten. Sollte ein Abstreifer der hunderte Male am Tag begangen wird nicht gut aussehen dürfen? Mit unserem individuell gefertigten Fußabstreifer-System setzen Sie den richtigen Akzent in Ihrem Eingangsbereich. Die hochwertigen Rahmenprofile sind zeitlos elegant und die eingebetteten Bürstenleisten haben ein angenehmes Trittverhalten.",
            def: true,
            title: "Perfektion"
        },
        {
            img: P5,
            text: "Freude am Fußabstreifer – ein Produktleben lang. Alle Beschlagteile sind hinsichtlich Langlebigkeit und Solidität optimiert. Die in Deutschland hergestellten Bürsteneinsätze im Abstreifer sind langlebig und leicht zu reinigen. Sollte Ihre Verschmutzung hartnäckiger sein, kann auch ein Hochdruckreiniger verwendet werden.",
            def: false,
            title: "Bürsteneinsätze"
        },
    ],
};

export default data;