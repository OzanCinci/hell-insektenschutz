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
        }
    }
};
