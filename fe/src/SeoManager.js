import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Hardcoded SEO data
const seoContentMap = {
    '/': {
        title: 'Insekten & Sonnenschutz von HELL',
        description: 'Entdecke effektiven Sonnenschutz & schütze dich vor Insekten! 🌞 Ihr Spezialist in ➥ Baden-Baden, Pforzheim und Karlsruhe!'
    },
    '/geschaft/rollo/akku-rollo-optionen': {
        title: 'Rollo mit Akku für Ihre Fenster | HELL',
        description: 'Rollo mit Akku entdecken: ✔  Kabellose Montage ✔  Modernes Design ✔ optional mit Fernbedienung ➤ Jetzt elektrische Rollos finden!'
    },
    '/geschaft/insektenschutz': {
        title: 'Insektenschutz » Fliegengitter | HELL',
        description: 'Entdecken Sie hochwertigen Insektenschutz nach Maß!  ✔️ Fliegengitter für Fenster und Türen  ➤Jetzt konfigurieren und Ihr Zuhause 🦟 schützen!'
    },
    '/geschaft/plissees/dachfenster-plissee-optionen': {
        title: 'Plissee für Ihr Dachfenster | HELL',
        description: 'Plissee Dachfenster: Maßgefertigter Sonnenschutz 🌞  Stilvolles Design & passgenau ➡️ Jetzt kostenlose Stoffmuster anfordern! entdecken!'
    },
    '/geschaft/plissees/sonderformen-plissee-optionen': {
        title: 'Sonderformen Plissees » Plissee Dreickesfenster | HELL',
        description: 'Sonderformen Plissee? Kein Problem! passgenauer Sonnenschutz 🌞 Modernes Design, erfrischende Farben➡️jetz kostenlose Muster anfordern!'
    },
    '/messanleitung/jalousie': {
        title: 'Messanleitung » Jalousien ausmessen | HELL',
        description: 'Messanleitung: Einfache Jalousie Montage für perfekten Sonnenschutz:  Tipps, Tricks für die richtige Montage ➡️ Jetzt mehr erfahren!'
    },
    '/geschaft/plissees/premium-plissee-optionen': {
        title: 'Plissees » Premium Plissee | HELL',
        description: 'Premium Plisees von Hell ➔ ganz einfach ohne Bohren ✔ über 400 Stoffe ✔ trendige Designs  ➤ Jetzt entdecken!'
    },
    "/geschaft/plissees/waben-plissee-optionen": {
        title: 'Wabenplissee » Wabenplissee nach Maß - ohne Bohren | HELL',
        description: 'Perfekte Wabenplissee maßgeschneidert für Ihr Zuhause entdecken– stilvoll und praktisch ohne Bohren! ➤ mehr erfahren!'
    },
    '/impressum': {
        title: 'Impressum | HELL',
        description: ''
    },
    '/geschaft/lamellenvorhang/basic-lamellenvorhang-optionen': {
        title: 'Basic Lamellenvorhang für Ihre Fenster | HELL',
        description: 'Entdecken Sie Basic Lamellenvorhänge von HELL  ✔ über 110 Stoffe ✔ millimeter genau gefertigt ➤ Jetzt konfigurieren!'
    },
    '/messanleitung/plissee': {
        title: 'Messanleitung » Plissees ausmessen | HELL',
        description: 'Messanleitung für Ihre Plissees:  Tipps & Tricks für die Montage Ihrer Fenster ➡️ Jetzt mehr erfahren!'
    },
    '/geschaft/jalousien': {
        title: 'Jalousien » Jalousien nach Maß | HELL',
        description: 'Jalousien nach Maß für perfekten Sonnenschutz 🌞  Holzjalousien ✔  einfache Montage-Tipps ✔  Jetzt entdecken & inspirieren lassen!'
    },
    '/agb': {
        title: 'AGB | HELL',
        description: ''
    },
    '/montageanleitung/lamellenvorhang': {
        title: 'Lamellenvorhang Montage | Anleitung von HELL',
        description: 'Einfache Lamellenvorhang Montage für perfekten Sonnenschutz 🌞 Tipps, Tricks für Wand und Deckenmontage ➡️ Jetzt PDF Downloaden!'
    },
    '/produkts/InsektenschutzPendelt%C3%BCr/1': {
        title: 'Insektenschutz » Fliegengitter Pendeltür | HELL ',
        description: 'Fliegengitter & Insektenschutz für Pendeltür 🦟 Perfekter Schutz vor Insekten, einfache Montage & stilvolles Design. ➤ Jetzt mehr erfahren!'
    },
    '/messanleitung/rollo': {
        title: 'Rollo ausmessen - Messanleitung | HELL',
        description: 'Messanleitung für Ihre Rollos - Tipps & Tricks  für jede Fenstermontage ➡️ Jetzt informieren & Rollos richtig ausmessen!'
    },
    '/geschaft/rollos': {
        title: 'Rollos » Rollo nach Maß für Ihr Fenster | Hell',
        description: 'Rollo nach Maß 🏠 Perfekter Sonnenschutz, individuelle Größen, einfache Montage & modernes Design. ➡️ Jetzt anpassen & bestellen!'
    },
    '/geschaft/jalousie/holzjalousie-optionen': {
        title: 'Holzjalousien » Jalousien aus Holz bestellen | HELL',
        description: 'Holzjalousie nach Maß 🌞 Natürlicher Sonnenschutz, individuelle Größen, leichte Montage & stilvolles Design ➤ Jetzt konfigurieren & bestellen!'
    },
    '/geschaft/rollo/premium-rollo-optionen': {
        title: 'Premium Rollo für mehr Sonnenschutz | HELL',
        description: 'Premium Rollos - maßgeschneiderter Sonnenschutz ☀️ qualitativ hochwertig  ✔ über 300 Stoffe ➤ jetzt informieren! '
    },
    '/geschaft/jalousie/premium-jalousie-optionen': {
        title: 'Premium Jalousien - Jalousien kaufen | HELL',
        description: 'hochwertige Premium Jalousien entdecken für optimalen Sicht- und Blendschutz ☀️Jetzt gratis Muster bestellen und Jalousien kaufen!'
    },
    '/turen': {
        title: 'Insektenschutz Tür » Fliegengitter Türen | HELL',
        description: 'Insektenschutz und Fliegengitter für Ihre Türen  – Effektiver Schutz vor Insekten! ✔  Maßanfertigungen ✔  Einfache Montage ➤ Jetzt entdecken!'
    },
    '/kontakt': {
        title: 'Kontakt | HELL',
        description: ''
    },
    '/geschaft/lamellenvorhang/premium-lamellenvorhang-optionen': {
        title: 'Premium Lamellenvorhang kaufen | HELL',
        description: 'AEROLUX-PREMIUM-Lamellenvorhang  ✔ stilvoll ✔ langlebig ✔ideal für Privatsphäre und dunkle Räume ➤ kostenlose Muster bestellen!'
    },
    '/geschaft/jalousie/basic-jalousie-optionen': {
        title: 'Basic Jalousie für Ihre Fenster | HELL',
        description: 'Basic Jalousien ✔  einfache Montage ✔  über 60 Farben ✔ passgenau gefertigt ✔ ohne Bohren ➡️ Jalousien hier entdecken! '
    },
    '/geschaft/rollo/doppel-rollo-optionen': {
        title: 'Doppelrollo: Lichtschutz für Ihre Fenster | HELL',
        description: 'Doppelrollos  - Qualität & Innovation ✔  Ketten- oder Akkumotorbedienung ✔ Flexible Lichtregulierung 🎨Jetzt kostenlose Stoffmuster bestellen!'
    },
    '/montageanleitung/plissee': {
        title: 'Montage Plissee | Montageanleitung von HELL',
        description: 'Plissee Montage für Ihre Fenster - Anleitungen zur Installation von Plissees ➡️ Jetzt PDF downloaden!'
    },
    '/montageanleitung/jalousie': {
        title: 'Jalousie Montage – PDF zum Download | HELL',
        description: 'Montageanleitung für Jalousien ✔Glasflaz ✔Wand und Fensterflügel ➡️ Jetzt PDF downloaden und loslegen!'
    },
    '/dachfenster': {
        title: 'Insektenschutz & Fliegengitter für Dachfenster | HELL',
        description: 'Insektenschutz für Dachfenster:  Ob Rollo oder Plissee ➡️ maßgefertigt, stylisch & effektiv!  ➤ Jetzt mehr erfahren & Insekten draußen halten!'
    },
    '/geschaft/lamellenvorhang': {
        title: 'Lamellenvorhang » Lamellenvorhang nach Maß | HELL',
        description: 'Lamellenvorhang nach Maß bestellen ✔ über 350 Stoffe ✔  Decken- oder Wandmontage ✔ auch schräg erhältlich ➤ mehr erfahren!'
    },
    '/datenschutz': {
        title: 'Datenschutz | HELL',
        description: ''
    },
    '/geschaft/rollo/basic-rollo-optionen': {
        title: 'Basic Rollos » Rollo nach Maß online kaufen | HELL',
        description: 'Basic Rollo - einfache Montage  ✔ wartungsfreie Technik ✔ millimetergenau gefertigt ✔ ohne Bohren! ➤ Jetzt Ihr Rollo finden!'
    },
    '/bestellung': {
        title: 'Bestellung | HELL',
        description: ''
    },
    '/geschaft/plissees/basic-plissee-optionen': {
        title: 'Basic Plissees für optimalen Sonnenschutz | HELL',
        description: 'Basic Plissee für Hitze- und Sonnenschutz ☀️ einfache Montage ✔ Montage ohne Bohren ✔ über 100 Stoffe  ➤ Sonnenschutz entdecken!'
    },
    '/lich': {
        title: 'Insektenschutz für Ihren Lichtschacht | HELL',
        description: 'Lichtschacht Insektenschutz durch ✔  Lichtschachtabdeckung aus Edelstahlgewebe ✔ GitterSafe - robustes GFK-Element ➤  Mehr erfahren!'
    },
    '/geschaft/plissees/wintergarten-plissee-optionen': {
        title: 'Plissee für Ihren Wintergarten | HELL',
        description: 'Wintergarten Plissees: Effektiven Sonnen- und Hitzeschutz ☀️ genießen. ✔ Kostenlose Stoffmuster  ✔ 600 Stoffe  ➤ Muster bestellen!'
    },
    '/geschaft/lamellenvorhang/schrag-lamellenvorhang-optionen': {
        title: 'Lamellenvorhang » Lamellenvorhang schräg | HELL',
        description: 'Schräge Lamellenvorhänge für Ihre Fenster entdecken ✔stilvoller Komfort mit über 300 Stoffen.  ➤ Kostenlose Stoffmuster anfordern!'
    },
    '/montageanleitung/rollo': {
        title: 'Rolladen Montage | Anleitung von HELL',
        description: 'Montageanleitung für Rollos ➤ Tipps für die Installation passgenauer Lösungen für jedes Fenster ➡️ Jetzt PDF downloaden!'
    },
    '/geschaft/plissees/freihaengend-plissee-optionen': {
        title: 'Plissee freihängend für Ihre Fenster | HELL',
        description: 'Freihängende Plissees ➜ Sonnen-, Blend- und Hitzeschutz ✔ Über 500 Stoffe ✔ Plissee- oder Wabenplissee freihängend finden!'
    },
    '/geschaft/plissees/akku-plissee-optionen': {
        title: 'Plissees elektrisch  » Akku Plissee | HELL',
        description: 'elektrische Plissees mit Akku ➜ Kabelloser Komfort ✔ Einfache Montage ✔ Energieeffizient ✔ 400  Stoffe zur Auswahl ✔ Jetzt modernes Design entdecken!'
    },
    '/geschaft/plissees': {
        title: 'Plissees » Plissee nach Maß | HELL',
        description: 'maßgeschneiderte Plissees entdecken - perfekt für Ihr Zuhause 🌟 Plissees nach Maß einfach zu messen und individuell zu konfigurieren ➤ Plissees finden!'
    },
    '/produkts/InsektenschutzFensterSpannrahmen/1': {
        title: 'Fliegengitter Spannrahmen für Fenster | HELL',
        description: 'Fliegengitter Spannrahmen » online konfigurieren ✔ hochwertiger Insektenschutz ✔ Standardgrößen ✔ Maßanfertigungen ➤ Jetzt entdecken!'
    },
    '/produkts/InsektenschutzPlisseet%C3%BCr/1': {
        title: 'Insektenschutz - Fliegengitter für Plisseetür | HELL',
        description: 'Plisseetüren Fliegengitter  ✔ hochwertiger Insektenschutz ✔ bis 220 cm Breite✔ millimetergenau gefertigt ➤ Jetzt online konfigurieren!'
    },
    '/widerrufsbelehrung': {
        title: 'Haftungsausschluß HELL',
        description: ''
    },
    '/fenster': {
        title: 'Insektenschutz Fenster - Fliegengitter für Fenster | HELL',
        description: 'maßgefertigten Insektenschutz für Ihre Fenster von Hell entdecken ✔ Spannrahmen  ✔ Rollo ✔ Plissee ➤ effektiven Insektenschutz finden!'
    },
    '/messanleitung/lamellenvorhang': {
        title: 'Lamellenvorhang richtig ausmessen | HELL',
        description: 'Messanleitung für Lamellenvorhang  Tipps zur Abmessung: ✔ schräge Wandanlagen ✔ Deckenmontage ➤ Jetzt mehr erfahren!'
    },
    '/einzelheiten/turen/dreht%C3%BCr': {
        title: 'Insektenschutz Drehtür - nach Maß bestellen | HELL',
        description: 'stabile Insektenschutz-Drehtüren für Terrassen & Balkone ✔ hochwertige Materialien ✔ leises Schließen ✔ langlebige Konstruktion ➤ Mehr erfahren!'
    },
    '/einzelheiten/turen/pendelt%C3%BCr': {
        title: 'Insektenschutz Pendeltür - Fliegengitter nach Maß | HELL',
        description: 'Insektenschutz-Pendeltür: Komfort & Design vereint! ✔  schließt automatisch ✔ langlebig dank Aluminium & Edelstahl ➡️ Jetzt entdecken!'
    },
    '/einzelheiten/turen/schiebet%C3%BCr': {
        title: 'Insektenschutz Schiebetüren nach Maß kaufen | HELL',
        description: 'Insektenschutz-Schiebetür: Perfekt für breite Fensterfronten!  ✔ hochtransparentes Gewebe ✔ langlebig dank Aluminium & Edelstahl ➡️ mehr Infos!'
    },
    '/einzelheiten/turen/plissee': {
        title: 'Insektenschutz Plissee für Türen | HELL',
        description: 'Insektenschutz Plissee für Türen: Perfekt für modernen Wohnstil – flache Bodenschiene, ergonomischer Bedienung & langlebiger Qualität.  ➤ Mehr erfahren!'
    },
    '/einzelheiten/fenster/spannrahmen': {
        title: 'Insektenschutz Spannrahmen für Ihre Fenster | HELL',
        description: 'Spannrahmen für Fenster: hochwertig & passgenau ✔ ohne Bohren montierbar. ✔ Ergonomische Griffe ✔ langlebige Gewebe & Qualität ➤ Jetzt entdecken!'
    },
    '/einzelheiten/fenster/drehfenster': {
        title: 'Fliegengitter Drehfenster - Insektenschutz | HELL',
        description: 'hochwertigen Fliegengitter Drehfenster  – die perfekte Lösung für effektiven Insektenschutz. hohe Langlebigkeit & müheloses Öffnen ➤ Mehr erfahren!'
    },
    '/einzelheiten/fenster/rollo': {
        title: 'Insektenschutz Rollo für Ihre Fenster | HELL',
        description: 'Insektenschutz-Rollo: Flexibler Schutz nach Bedarf – dezent, langlebig & sogar elektrisch verfügbar. ✨ Perfekt für jedes Fenster!'
    },
    '/einzelheiten/fenster/plissee': {
        title: 'Insektenschutz Plissee für Ihre Fenster | HELL',
        description: 'Plissee für Fenster: Der schicke & flexible Insektenschutz! 🪟 Platzsparend, langlebig & kinderleicht zu bedienen. Made in Germany ➤ Mehr erfahren!'
    },
    '/einzelheiten/dachfenster/rollo': {
        title: 'Insektenschutz Rollo für Ihr Dachfenster | HELL',
        description: 'Insektenschutz-Rollo fürs Dachfenster: Flexibel, nachrüstbar & elektrisch verfügbar. Edles Design, langlebig & wartungsfreundlich ➤ Jetzt informieren!'
    },
    '/einzelheiten/dachfenster/plissee': {
        title: 'Insektenschutz » Plissee für Ihr Dachfenster | HELL',
        description: 'Insektenschutz Plissee für Dachfenster – Praktisch, platzsparend & stilvoll. Einfach zu bedienen, langlebig ➤ Jetzt Insektenschutz für Dachfenster finden!'
    },
    '/einzelheiten/lichtschachte/lichtsschachtabdeckung': {
        title: 'Lichtschachtabdeckung » Insektenschutz für Lichtschacht | HELL',
        description: 'Lichtschachtabdeckung: Saubere & spinnenfreie Kellerschächte✔️ witterungsbeständig & maßgefertigt mit Edelstahlgewebe. ➤ Abdeckungen entdecken!'
    },
    '/einzelheiten/lichtschachte/gitterSafe': {
        title: 'GitterSafe - Lichtschachtgitter für optimalen Insektenschutz | HELL',
        description: 'Der GitterSafe ersetzt den Rost komplett! ✔ästhetisch ✔ ohne Stolperkanten ✔ Schutz vor Laub & Kleintieren dank Edelstahlgewebe ➤ Jetzt entdecken!'
    },
    '/baden-baden': {
        title: 'Insekten & Sonnenschutz Baden-Baden | HELL',
        description: 'Entdecken Sie effektiven Insektenschutz & Sonnenschutz 🌞 in Raum Pforzheim, Baden-Baden & Karlsruhe. ➤ Jetzt informieren!'
    },
    '/pforzheim': {
        title: 'Insekten & Sonnenschutz Pforzheim | HELL',
        description: 'Insektenschutz & Sonnenschutz für Ihr Zuhause 🏡 im Raum Pforzheim, Baden-Baden und Karlsruhe.  ➤ Jetzt entdecken!'
    },
    '/karlsruhe': {
        title: 'Insekten & Sonnenschutz Karlsruhe | HELL',
        description: 'Zuhause vor Insekten schützen und optimale Sonnenschutz genießen☀️ im Raum Pforzheim, Baden-Baden & Karlsruhe. ➤ Erfahren Sie mehr!'
    },
};

// Default SEO data for pages not in the map
const defaultSeo = {
    title: 'HELL Insekten & Sonnenschutz',
    description: 'Qualitätsprodukte für Insektenschutz und Sonnenschutz von HELL. Maßgefertigte Lösungen für Ihr Zuhause.'
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HELL Insekten & Sonnenschutz",
    "image": "https://www.hell-insekten-sonnenschutz.com/static/media/insek.490b0046df196a7b8b2b.webp",
    "@id": "",
    "url": "https://www.hell-insekten-sonnenschutz.com/",
    "telephone": "+49176/62960342",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lochfeldstraße 30",
        "addressLocality": "Rastatt",
        "postalCode": "76437",
        "addressCountry": "DE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.8534784,
        "longitude": 8.2308404
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "16:30"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "13:00"
        }
    ]
};

const getRelativePath = (pathname) => {
    return pathname || '/';
};

const SEOManager = () => {
    const location = useLocation();
    const [seoData, setSeoData] = useState({...defaultSeo});

    useEffect(() => {
        const currentPath = getRelativePath(location.pathname);
        const seoContent = seoContentMap[currentPath] || defaultSeo;
        setSeoData(prev=> ({...seoContent}));
    }, [location]);

    return (
        <>
            <Helmet>
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description}/>
                <meta property="og:title" content={seoData.title}/>
                <meta property="og:description" content={seoData.description}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <link rel="canonical" href={`https://www.hell-insekten-sonnenschutz.com${location.pathname}`}/>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
        </>
    );
};

export default SEOManager;
