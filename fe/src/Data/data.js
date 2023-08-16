import P1 from '../images/product/p1.jpg'
import P2 from '../images/product/p2.jpg'
import P3 from '../images/product/p3.jpg'
import P4 from '../images/product/p4.jpg'
import P5 from '../images/product/p5.jpg'
import P6 from '../images/product/p6.jpg'
import P7 from '../images/product/p7.jpg'

const data = {
    dachfenster: [
        {
            img: P3,
            text: "Unsere Rollo-Systeme bieten Insektenschutz für nahezu jedes Dachflächenfenster. Egal ob Sie unsere Rollos ausgezogen haben, oder ob es in der Kassette auf Benutzung wartet – sie werden in Sachen Durchblick fast keinen Unterschied merken. Versprochen.",
            def: true,
            title: "Insektenschutz für Dachfenster"
        },
    ],
    fenster: [
        {
            img: P2,
            text: "Unsere Spannrahmen sind die beliebte Lösung für Fenster, die nur zum Lüften geöffnet oder gekippt werden. Unser Einhängesystem ermöglicht eine Montage ohne zu Bohren. Auch bei besonders eng anliegenden Rolloführungsschienen haben wir die richtige Lösung parat.",
            def: false,
            title: "Insektenschutz für Fenster"
        },
    ],
    gewebearten: [
        {
            img: P7,
            text: "proAIR bietet Ihnen das Optimum an Durchsicht, Luftdurchlass und Haltbarkeit. Mit seiner offenen Siebfläche von 80% und extrem dünnen Fäden entsteht ein nahezu unsichtbarer Insektenschutz. Fiberglas – ein langzeiterprobter Werkstoff - ist zudem extrem reißfest und beständig gegen Witterungseinflüsse.",
            def: true,
            title: "Gewebearten"
        },
    ],
    lich: [
        {
            img: P4,
            text: "Viele Möglichkeiten ein Ziel: Sauberkeit in Ihren Lichtschächten. Ob als clevere Nachrüstlösung oder als tragfähiges Gesamtelement – wir bieten für Ihre Anforderung die richtige Lösung.",
            def: false,
            title: "Für Lichtschächte"
        },
    ],
    sonderformen: [
        {
            img: P5,
            text: "Mit Ecken und Kanten oder sanften Radien? Unsere Abteilung für Sonderformen realisiert mit Präzision außergewöhnliche Rahmenformen für Ihre Fenster.",
            def: true,
            title: "Sonderformen"
        },
    ],
    türen: [
        {
            img: P1,
            text: "Drehtüren sind die 1. Wahl, wenn Sie ein Fliegengitter zum Öffnen für Balkon oder Terrasse suchen. Durch die Vielzahl an Varianten bieten wir Ihnen die optimale Lösung für Ihren Anwendungsfall. Die Öffnung erfolgt im Regelfall nach außen.",
            def: true,
            title: "Insektenschutz für Türen"
        },
    ],
    zusatzprodukte: [
        {
            img: P6,
            text: "Die perfekte Ergänzung für den Eingangsbereich ist ein Lämmermann-Fußabstreifer nach Maß. Edle Optik und leichte Reinigung sprechen für sich.",
            def: false,
            title: "Zusatzprodukte"
        },
    ],
};

export default data;