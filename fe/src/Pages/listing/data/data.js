// images
import PlisseImg from '../../../images/shopCategories/MaterialTypePlissee.svg';
import WabenPlisseImg from '../../../images/shopCategories/MaterialTypeWabenplissee.svg';
import Halbtransparent  from '../../../images/shopCategories/TranslucencyHalbtransparent.svg';
import Transparent  from '../../../images/shopCategories/TranslucencyTransparent.svg';


import Abdunkeln  from '../../../images/shopCategories/TranslucencyAbdunkelnd.svg';
import Verdunkelnd  from '../../../images/shopCategories/TranslucencyVerdunkelnd.svg';
import Feucht from '../../../images/shopCategories/FunctionFeuchtabwischbar.svg';
import Hand from '../../../images/shopCategories/FunctionHandwaschbarbis30.svg';
import Hitzes from '../../../images/shopCategories/FunctionHitzeschutz.svg';
import Schad from '../../../images/shopCategories/FunctionSchadstoffgeprueft.svg';
import Schwer from '../../../images/shopCategories/FunctionSchwerentflammbar.svg';
import Feuchtraum from '../../../images/shopCategories/Feuchtraum.svg';
import Bildschirmarbeitsplatz from '../../../images/shopCategories/Bildschirmarbeitsplatz.svg';

import Aluminum from '../../../images/shopCategories/aluminum.png';
import Holz from '../../../images/shopCategories/holz.png';
import BlindWidth25 from '../../../images/shopCategories/BlindWidth25.svg';
import BlindWidth16 from '../../../images/shopCategories/BlindWidth16.svg';
import BlindWidth50 from '../../../images/shopCategories/BlindWidth50.svg';
import Blind25 from '../../../images/shopCategories/Blind25.svg';
import Blind16 from '../../../images/shopCategories/Blind16.svg';
import Blind50 from '../../../images/shopCategories/Blind50.svg';


import SlatsStandard from '../../../images/shopCategories/SlatsStandard.svg';
import SlatsPerforated from '../../../images/shopCategories/SlatsPerforated.svg';
import SlatsMatte from '../../../images/shopCategories/SlatsMatte.svg';
import SlatsHighGloss from '../../../images/shopCategories/SlatsHighGloss.svg';
import Gebür from '../../../images/shopCategories/Gebür.png';
import SlatsMetallic from '../../../images/shopCategories/SlatsMetallic.svg';
import SlatsHammerFinished from '../../../images/shopCategories/SlatsHammerFinished.svg';

import LamellaWidth127 from '../../../images/shopCategories/LamellaWidth127.svg';
import LamellaWidth89 from '../../../images/shopCategories/LamellaWidth89.svg';
import Lamella127 from '../../../images/shopCategories/Lamella127.svg';
import Lamella89 from '../../../images/shopCategories/Lamella89.svg';


export const optionsData = {
    "plissees": {
        "basic-plissee-optionen": {
            filterValues : {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null } // Light Red (Pinkish)
                    ]
                },
                Stoffart: {
                    singleChoice: true,
                    data: [
                        { name: 'Plissee', image: PlisseImg, extraInfo: null},
                        { name: 'Wabenplissee', image: WabenPlisseImg, extraInfo: null }
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null }
                    ]
                }
            },
            productDetailUrl : "/api/product/Plissee/Basic Plissee",
            url: "/api/external-products/colors/BasicPlissee",
            ternaryImageFunction: (item) => {
                return item.properties.MaterialType === "Plissee" ? PlisseImg : WabenPlisseImg;
            },
            link: "BasicPlissee"
        },
        "premium-plissee-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null } // Light Red (Pinkish)
                    ]
                },
                Stoffart: {
                    singleChoice: true,
                    data: [
                        { name: 'Plissee', image: PlisseImg, extraInfo: null},
                        { name: 'Wabenplissee', image: WabenPlisseImg, extraInfo: null }
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feuchtraum', image: Feuchtraum, extraInfo: "Diese Stoffe eignen sich zusätzlich für Feuchträume, wie Küche und Badezimmer." },
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null }                        
                    ]
                }
            },
            productDetailUrl : "/api/product/Plissee/Premium Plissee",
            url: "/api/external-products/colors/Plissee",
            ternaryImageFunction: (item) => {
                return item.properties.MaterialType === "Plissee" ? PlisseImg : WabenPlisseImg;
            },
            link: "PremiumPlissee"
        },
        "wintergarten-plissee-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                    ]
                },
                Stoffart: {
                    singleChoice: true,
                    data: [
                        { name: 'Plissee', image: PlisseImg, extraInfo: null},
                        { name: 'Wabenplissee', image: WabenPlisseImg, extraInfo: null }
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feuchtraum', image: Feuchtraum, extraInfo: "Diese Stoffe eignen sich zusätzlich für Feuchträume, wie Küche und Badezimmer." },
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },                        
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Plissee/Wintergarten Plissee",
            url: "/api/external-products/colors/PlisseeWintergarten",
            ternaryImageFunction: (item) => {
                return item.properties.MaterialType === "Plissee" ? PlisseImg : WabenPlisseImg;
            },
            link: "WintergartenPlissee"
        },
        "dachfenster-plissee-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                    ]
                },
                Stoffart: {
                    singleChoice: true,
                    data: [
                        { name: 'Plissee', image: PlisseImg, extraInfo: null},
                        { name: 'Wabenplissee', image: WabenPlisseImg, extraInfo: null }
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feuchtraum', image: Feuchtraum, extraInfo: "Diese Stoffe eignen sich zusätzlich für Feuchträume, wie Küche und Badezimmer." },
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Plissee/Dachfenster Plissee",
            url: "/api/external-products/colors/PlisseeDachfenster",
            ternaryImageFunction: (item) => {
                return item.properties.MaterialType === "Plissee" ? PlisseImg : WabenPlisseImg;
            },
            link: "DachfensterPlissee"
        },
        "sonderformen-plissee-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                    ]
                },
                Stoffart: {
                    singleChoice: true,
                    data: [
                        { name: 'Plissee', image: PlisseImg, extraInfo: null},
                        { name: 'Wabenplissee', image: WabenPlisseImg, extraInfo: null }
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feuchtraum', image: Feuchtraum, extraInfo: "Diese Stoffe eignen sich zusätzlich für Feuchträume, wie Küche und Badezimmer." },
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Plissee/Sonderformen Plissee",
            url: "/api/external-products/colors/PlisseeSonderformen",
            ternaryImageFunction: (item) => {
                return item.properties.MaterialType === "Plissee" ? PlisseImg : WabenPlisseImg;
            },
            link: "SonderformenPlissee"
        },
        "akku-plissee-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                    ]
                },
                Stoffart: {
                    singleChoice: true,
                    data: [
                        { name: 'Plissee', image: PlisseImg, extraInfo: null},
                        { name: 'Wabenplissee', image: WabenPlisseImg, extraInfo: null }
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feuchtraum', image: Feuchtraum, extraInfo: "Diese Stoffe eignen sich zusätzlich für Feuchträume, wie Küche und Badezimmer." },
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Plissee/Smart Akku Plissee",
            url: "/api/external-products/colors/AkkuPlissee",
            ternaryImageFunction: (item) => {
                return item.properties.MaterialType === "Plissee" ? PlisseImg : WabenPlisseImg;
            },
            link: "SmartAkkuPlissee"
        },
        "freihaengend-plissee-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                    ]
                },
                Stoffart: {
                    singleChoice: true,
                    data: [
                        { name: 'Plissee', image: PlisseImg, extraInfo: null},
                        { name: 'Wabenplissee', image: WabenPlisseImg, extraInfo: null }
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feuchtraum', image: Feuchtraum, extraInfo: "Diese Stoffe eignen sich zusätzlich für Feuchträume, wie Küche und Badezimmer." },
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Plissee/Freihängend Plissee",
            url: "/api/external-products/colors/PlisseeFreihaengend",
            ternaryImageFunction: (item) => {
                return item.properties.MaterialType === "Plissee" ? PlisseImg : WabenPlisseImg;
            },
            link: "FreihangendPlissee"
        }
    },
    "jalousie": {
        "basic-jalousie-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                    ]
                },
                Material: {
                    singleChoice: true,
                    data: [
                        { name: 'Aluminium', image: Aluminum, extraInfo: null },
                    ]
                },
                Lamellenbreite: {
                    singleChoice: true,
                    data: [
                        { name: '25 mm', image: BlindWidth25, extraInfo: "Lamellenbreite: 25 mm – meist gewähltDie 25 mm breiten Lamellen sind besonders beliebt und bieten eine perfekte Balance zwischen Lichtregulierung und Sichtschutz. Sie sind vielseitig einsetzbar und passen sich harmonisch in jedes Raumkonzept ein. Diese Lamellenbreite ermöglicht eine präzise Steuerung des Lichteinfalls und sorgt gleichzeitig für einen modernen Look. Ob im Wohnbereich, Büro oder in öffentlichen Räumen, die 25 mm Lamellen sind die optimale Wahl für stilbewusste Kunden." },
                        { name: '16 mm', image: BlindWidth16, extraInfo: null },
                        { name: '50 mm', image: BlindWidth50, extraInfo: null },
                    ]
                }
            },
            productDetailUrl : "/api/product/Jalousie/Basic Jalousie",
            url: "/api/external-products/colors/BasicJalousie",
            ternaryImageFunction: (item) => {
                const prop = item.properties?.BlindWidth;

                if (prop==="50 mm") return Blind50;
                else if (prop==="16 mm") return Blind16;
                else if (prop==="25 mm") return Blind25;
                else return BlindWidth25;
            },
            link: "BasicJalousie"
        },
        "premium-jalousie-optionen": {
        filterValues: {
            Farbton: {
                singleChoice: true,
                data: [
                    { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                    { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                    { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                    { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                    { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                    { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                    { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                    { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                    { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                    { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                ]
            },
            Material: {
                singleChoice: true,
                data: [
                    { name: 'Aluminium', image: Aluminum, extraInfo: null },
                ]
            },
            Lamellenbreite: {
                singleChoice: true,
                data: [
                    { name: '25 mm', image: BlindWidth25, extraInfo: "Lamellenbreite: 25 mm – meist gewähltDie 25 mm breiten Lamellen sind besonders beliebt und bieten eine perfekte Balance zwischen Lichtregulierung und Sichtschutz. Sie sind vielseitig einsetzbar und passen sich harmonisch in jedes Raumkonzept ein. Diese Lamellenbreite ermöglicht eine präzise Steuerung des Lichteinfalls und sorgt gleichzeitig für einen modernen Look. Ob im Wohnbereich, Büro oder in öffentlichen Räumen, die 25 mm Lamellen sind die optimale Wahl für stilbewusste Kunden." },
                    { name: '16 mm', image: BlindWidth16, extraInfo: null },
                    { name: '50 mm', image: BlindWidth50, extraInfo: null },
                ]
            },
            Design: {
                singleChoice: true,
                data: [
                    { name: 'Standard":"1', image: SlatsStandard, extraInfo: null, altName: "Standard"},
                    { name: 'Perforated":"1', image: SlatsPerforated, extraInfo: null, altName: "Perforiert"},
                    { name: 'Matte":"1', image: SlatsMatte, extraInfo: null, altName: "Matt"},
                    { name: 'HighGloss":"1', image: SlatsHighGloss, extraInfo: null, altName: "Hochglänzend"},
                    { name: 'Brushed":"1', image: Gebür, extraInfo: null, altName: "Gebürstet"},
                    { name: 'Metallic":"1', image: SlatsMetallic, extraInfo: null, altName: "Metallic"},
                    { name: ' hammerschlag ', image: SlatsHammerFinished, extraInfo: null, altName: "Hammerschlag"},
                ]
            },
            Funktion: {
                singleChoice: false,
                data: [
                    { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                ]
            }
        },
        productDetailUrl : "/api/product/Jalousie/Premium Jalousie",
        url: "/api/external-products/colors/PremiumJalousie",
        ternaryImageFunction: (item) => {
            const prop = item.properties?.BlindWidth;

            if (prop==="50 mm") return Blind50;
            else if (prop==="16 mm") return Blind16;
            else if (prop==="25 mm") return Blind25;
            else return BlindWidth25;
        },
        link: "PremiumJalousie"
        },
        "holzjalousie-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                    ]
                },
                Material: {
                    singleChoice: true,
                    data: [
                        { name: 'Holz', image: Holz, extraInfo: null },
                    ]
                },
                Lamellenbreite: {
                    singleChoice: true,
                    data: [
                        { name: '25 mm', image: BlindWidth25, extraInfo: "Lamellenbreite: 25 mm – meist gewähltDie 25 mm breiten Lamellen sind besonders beliebt und bieten eine perfekte Balance zwischen Lichtregulierung und Sichtschutz. Sie sind vielseitig einsetzbar und passen sich harmonisch in jedes Raumkonzept ein. Diese Lamellenbreite ermöglicht eine präzise Steuerung des Lichteinfalls und sorgt gleichzeitig für einen modernen Look. Ob im Wohnbereich, Büro oder in öffentlichen Räumen, die 25 mm Lamellen sind die optimale Wahl für stilbewusste Kunden." },
                        { name: '50 mm', image: BlindWidth50, extraInfo: null },
                    ]
                },
            },
            productDetailUrl : "/api/product/Jalousie/Holzjalousie",
            url: "/api/external-products/colors/Holzjalousie",
            ternaryImageFunction: (item) => {
                const prop = item.properties?.BlindWidth;
    
                if (prop==="50 mm") return Blind50;
                else if (prop==="25 mm") return Blind25;
                else return BlindWidth25;
            },
            link: "Holzjalousie"
        }
    },
    "lamellenvorhang": {
        "basic-lamellenvorhang-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                    ]
                },
                Lamellenbreite: {
                    singleChoice: true,
                    data: [
                        { name: '127 mm', image: LamellaWidth127, extraInfo: "Lamellenbreite: 127 mm – meist gewähltDie 127 mm breiten Lamellen sind besonders beliebt und bieten eine perfekte Balance zwischen Lichtregulierung und Sichtschutz. Sie sind vielseitig einsetzbar und passen sich harmonisch in jedes Raumkonzept ein. Diese Lamellenbreite ermöglicht eine präzise Steuerung des Lichteinfalls und sorgt gleichzeitig für einen modernen Look. Ob im Wohnbereich, Büro oder in öffentlichen Räumen, die 127 mm Lamellen sind die optimale Wahl für stilbewusste Kunden." },
                        { name: '89 mm', image: LamellaWidth89, extraInfo: null },
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Lamellenvorhang/Basic Lamellenvorhang",
            url: "/api/external-products/colors/BasicLamellenvorhang",
            ternaryImageFunction: (item) => {
                return item==="127 mm" ? Lamella127: Lamella89;
            },
            link: "BasicLamellenvorhang",
        },
        "premium-lamellenvorhang-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                    ]
                },
                Lamellenbreite: {
                    singleChoice: true,
                    data: [
                        { name: '127 mm', image: LamellaWidth127, extraInfo: "Lamellenbreite: 127 mm – meist gewähltDie 127 mm breiten Lamellen sind besonders beliebt und bieten eine perfekte Balance zwischen Lichtregulierung und Sichtschutz. Sie sind vielseitig einsetzbar und passen sich harmonisch in jedes Raumkonzept ein. Diese Lamellenbreite ermöglicht eine präzise Steuerung des Lichteinfalls und sorgt gleichzeitig für einen modernen Look. Ob im Wohnbereich, Büro oder in öffentlichen Räumen, die 127 mm Lamellen sind die optimale Wahl für stilbewusste Kunden." },
                        { name: '89 mm', image: LamellaWidth89, extraInfo: null },
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feuchtraum', image: Feuchtraum, extraInfo: "Diese Stoffe eignen sich zusätzlich für Feuchträume, wie Küche und Badezimmer." },
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },                        
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Lamellenvorhang/Premium Lamellenvorhang",
            url: "/api/external-products/colors/Lamellenvorhang",
            ternaryImageFunction: (item) => {
                return item==="127 mm" ? Lamella127: Lamella89;
            },
            link: "PremiumLamellenvorhang",
        },
        "schrag-lamellenvorhang-optionen":{
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                    ]
                },
                Lamellenbreite: {
                    singleChoice: true,
                    data: [
                        { name: '127 mm', image: LamellaWidth127, extraInfo: "Lamellenbreite: 127 mm – meist gewähltDie 127 mm breiten Lamellen sind besonders beliebt und bieten eine perfekte Balance zwischen Lichtregulierung und Sichtschutz. Sie sind vielseitig einsetzbar und passen sich harmonisch in jedes Raumkonzept ein. Diese Lamellenbreite ermöglicht eine präzise Steuerung des Lichteinfalls und sorgt gleichzeitig für einen modernen Look. Ob im Wohnbereich, Büro oder in öffentlichen Räumen, die 127 mm Lamellen sind die optimale Wahl für stilbewusste Kunden." },
                        { name: '89 mm', image: LamellaWidth89, extraInfo: null },
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feuchtraum', image: Feuchtraum, extraInfo: "Diese Stoffe eignen sich zusätzlich für Feuchträume, wie Küche und Badezimmer." },
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Lamellenvorhang/Lamellenvorhang Schräg",
            url: "/api/external-products/colors/LamellenvorhangSlope",
            ternaryImageFunction: (item) => {
                return item==="127 mm" ? Lamella127: Lamella89;
            },
            link: "LamellenvorhangSchrag",
        }
    },
    "rollo": {
        "basic-rollo-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },                        
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Rollo/Basic Rollo",
            url: "/api/external-products/colors/BasicRollo",
            ternaryImageFunction: (item) => null,
            link: "BasicRollo"
        },
        "premium-rollo-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: '"transparent', image: Transparent, extraInfo: 'Transparente Stoffe lassen sehr viel Licht durch und eignen sich bedingt als Sichtschutz, ähnlich wie bei Gardinen.' },
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },                        
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Rollo/Premium Rollo",
            url: "/api/external-products/colors/PremiumRollo",
            ternaryImageFunction: (item) => null,
            link: "PremiumRollo"
        },
        "doppel-rollo-optionen": {
            filterValues: {
                Farbton: {
                    singleChoice: true,
                    data: [
                        { name: 'Weiß', image: 'rgb(250, 250, 250)', extraInfo: null }, // Soft White
                        { name: 'Braun', image: 'rgb(205, 133, 63)', extraInfo: null }, // Light Brown
                        { name: 'Rot', image: 'rgb(255, 100, 100)', extraInfo: null }, // Light Red (Pinkish)
                        { name: 'Blau', image: 'rgb(173, 216, 230)', extraInfo: null }, // Light Blue
                        { name: 'Schwarz', image: 'rgb(50, 50, 50)', extraInfo: null }, // Soft Black
                        { name: 'Orange', image: 'rgb(255, 200, 124)', extraInfo: null }, // Light Orange
                        { name: 'Grau', image: 'grey', extraInfo: null }, // Light Gray
                        { name: 'Beige', image: 'rgb(245, 245, 220)', extraInfo: null }, // Beige (unchanged, already soft)
                        { name: 'Grün', image: 'rgb(144, 238, 144)', extraInfo: null }, // Light Green
                        { name: 'Violett', image: 'rgb(221, 160, 221)', extraInfo: null }, // Light Violet
                        { name: 'Gelb', image: 'rgb(255, 255, 180)', extraInfo: null }, // Light Yellow
                    ]
                },
                Lichtdurchlässigkeit: {
                    singleChoice: true,
                    data: [
                        { name: 'halbtransparent', image: Halbtransparent, extraInfo: 'Halbtransparente Stoffe eignen sich perfekt als Sichtschutz und Sonnenschutz.' },
                        { name: 'abdunkelnd', image: Abdunkeln, extraInfo: 'Abdunkelnde Stoffe lassen noch etwas Licht herein und eignen sich deshalb nur bedingt für Schlafräume.' },
                        { name: 'verdunkelnd', image: Verdunkelnd, extraInfo: 'Verdunkelnde Stoffe, auch "Blackout-Stoffe" genannt, lassen überhaupt kein Licht durch und eignen sich perfekt für Schlafräume.' }
                    ]
                },
                Funktion: {
                    singleChoice: false,
                    data: [
                        { name: 'Feucht abwischbar', image: Feucht, extraInfo: null },
                        { name: 'Handwaschbar bis 30°', image: Hand, extraInfo: null },
                        { name: 'Schadstoffgeprüft', image: Schad, extraInfo: 'Produkt auf schädliche Substanzen getestet wurde.' },
                        { name: 'Bildschirmarbeitsplatz', image: Bildschirmarbeitsplatz, extraInfo: "Diese Stoffe eignen sich bestens für Räumlichkeiten in denen mit Bildschrimen gearbeitet wird. Sie lassen nur mäßig Licht durch." },
                        { name: 'Schwer entflammbar', image: Schwer, extraInfo: null },                        
                        { name: 'Hitzeschutz', image: Hitzes, extraInfo: 'Die Stoffe sind mit einer Perlmuttbeschichtung ausgerüstet und reflektieren dadurch die Hitze sehr gut. Optimal für südlich ausgerichtete Räume.' },
                    ]
                }
            },
            productDetailUrl : "/api/product/Rollo/Doppel Rollo",
            url: "/api/external-products/colors/Doppelrollo",
            ternaryImageFunction: (item) => null,
            link: "Doppelrollo"
        }
    }
};
