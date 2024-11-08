import DachfensterPlisseeDimensionCalculator from "./customDimensionCalculators/DachfensterPlisseeDimensionCalculator";
import Sonderform3DDimensionCalculator from "./customDimensionCalculators/Sonderform3DDimensionCalculator";
import Sonderform4DDimensionCalculator from "./customDimensionCalculators/Sonderform4DDimensionCalculator";
import Sonderform2DDimensionCalculator from "./customDimensionCalculators/Sonderform2DDimensionCalculator";
import Lamellenvorhang3DLeftDimensionCalculator
    from "./customDimensionCalculators/Lamellenvorhang3DLeftDimensionCalculator";
import Lamellenvorhang3DRightDimensionCalculator
    from "./customDimensionCalculators/Lamellenvorhang3DRightDimensionCalculator";
import Sonderform3DRightDimensionCalculator from "./customDimensionCalculators/Sonderform3DRightDimensionCalculator";
import Sonderform4DRightDimensionCalculator from "./customDimensionCalculators/Sonderform4DRightDimensionCalculator";
import Sonderform2DRightDimensionCalculator from "./customDimensionCalculators/Sonderform2DRightDimensionCalculator";
import Sonderform2DRightDimensionCalculator2 from "./customDimensionCalculators/Sonderform2DRightDimensionCalculator2";
import Sonderform2DDimensionCalculator2 from "./customDimensionCalculators/Sonderform2DDimensionCalculator2";

export const uniqueNDimProductsData = {
    "DachfensterPlissee": {
        defaultImages : [
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4592_1688031195_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4595_1688031277_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4594_1688031252_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4593_1688031223_1000x1000.webp',
        ],
        selectionData : [
            {
                title: "Plisseemodell",
                multichoice: false,
                //hardcodedSelected: true,
                options: [
                    {
                        title: "DF 20",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_21_1643186886_450x450.webp",
                        explanation: {
                            title: "Modell DF 20 Dachfenster",
                            text: [
                                "Das Modell DF 20 wird mit Bediengriffen und seitlichen Abdeckprofilen geliefert.  Geeignet für den Einsatz in Dachfenstern mit schrägem oder geradem Falz. Die Montage ist ausschließlich im Fensterfalz möglich!",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_17_1624866907.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "DF 20 Comfort",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_3546_1667391599_450x450.webp",
                        explanation: {
                            title: "Modell DF 20 Comfort mit Seitenführungsschienen",
                            text: [
                                "Das Plissee wird mit Bedienschienen ohne Griffen gefertigt. Das Plissee ist mit den Seitenschienen verbunden und wird an diesen komfortabel geführt, was eine sehr angenehme und stabile Bedienung gewährleistet. Geeignet für den Einsatz in Dachfenstern mit schrägem oder geradem Falz. Die Montage ist ausschließlich im Fensterfalz möglich!",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_17_1624866907.gif",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Zubehör",
                multichoice: true,
                checkAllowList: true,
                options: [
                    {
                        title: "Bedienstab",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_223_1716377905_450x450.webp",
                        explanation: {
                            title: "Bedienstab",
                            text: [
                                "Wenn das Plissee schwer zugänglich ist, oder höher angebracht ist, ist der Bedienstab sehr hilfreich. Es wird ein spezieller beweglicher Bediengriff verbaut (s. Bild), der mit dem Bedienstab kompatibel ist.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_169_1714983431_450x450.webp",
                        price: {
                            "1,25m" : 76,
                            "1,5m" : 82,
                            "2m" : 88,
                            "2.5m" : 94
                        },
                        priceExplanation: "Stablänge"
                    },
                    {
                        title: "Designgriff",
                        note: "sehr beliebt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_16_1682414552_450x450.webp",
                        explanation: {
                            title: "Designgriff",
                            text: [
                                "Der pulverbeschichtete Designgriffs aus Aluminium sorgt für eine zusätzliche optische Aufwertung (Farben; weiß, grau, schwarzbraun, anthrazit, bronze - die Farben werden der Schienenfarbe angepasst). Wird der Designgriff nicht gewählt, erhalten Sie automatisch den Standardbediengriff (eine Abbildung finden Sie unten bei den technischen Details.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_13_1726645666_450x450.webp",
                        price: 28,
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Plisseemodell":"DF 20"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Farbe Ober- u. Unterschiene",
                multichoice: false,
                options: [
                    {
                        title: "Weiß",
                        defaultSelected: true,
                        image: "rgb(243, 246, 246)",
                        price: 0
                    },
                ]
            },
        ],
        subcategoryTitle: "Plisseemodell",
        blendcolorTitle: "Farbe Ober- u. Unterschiene",
        requestCategory: "PlisseeDachfenster",
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/plissee",
        productDetailUrl: "/api/product/Plissee/Dachfenster Plissee",
        EXTERNAL_URL: "/api/external-products/colors/PlisseeDachfenster/",
        freeSamplingTitle: "Stoffmuster Premium Plissee",
        assemblyInfo: {
            name: "Dachfenster Plissee",
            link: "/montageanleitung/plissee"
        },
        cartName: "Premium Plissee für Dachfenster",
        dimensionSelector: "Plisseemodell",
        dimensionCalculators: {
            default: {
                component: DachfensterPlisseeDimensionCalculator,
                type: "DACHFENSTER_PRICE_OBJ",
                dimensions: {
                    "width": 300,
                    "width2": 300,
                    "height": 500,
                    "height2": 500,
                    "depth": 45
                }
            }
        },
    },
    "SonderformenPlissee": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4598_1688031358_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4596_1688031307_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4597_1688031336_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4600_1688031417_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4601_1688031443_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Glasfalz",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_5_1666613448_450x450.webp",
                        explanation: {
                            title: "Glasfalz",
                            text: [
                                "Bei dieser beliebten Montageart verschrauben Sie die Plissees standardmäßig, mit den im Lieferumfang enthaltenen Abspannschuhen, im Glasfalz - dieser kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Optional auswählbare Befestigungsarten sind die Montage mit Klebeleisten oder Gelenkklebeplatten (Modell VS2).",
                                "Die Mindest-Glasleistentiefe beträgt 18 mm. Dies ist die Tiefe von der Rahmenvorderkante zum Glas (bei der Klebeleiste wird keine Mindesttiefe benötigt).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_85_1678865265_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_33_1666613279_450x450.webp",
                        explanation: {
                            title: "Fensterflügel",
                            text: [
                                "Hier schrauben Sie die im Lieferumfang enthaltenen Winkelträger an den Fensterflügel (Schrauben inkl.).",
                                "Optional kann die Montage ohne zu schrauben mit Klemmträgern gewählt werden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_86_1683704113_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Plisseemodell",
                multichoice: false,
                options: [
                    {
                        title: "VS 4 Slope",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_25_1624866586_450x450.webp",
                        explanation: {
                            title: "VS 4 Slope verspannt",
                            text: [
                                "Der Behang ist bis zur waagrechten Schiene hochschiebbar.",
                                "Die Schräge kann sowohl links als auch rechts sein.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_21_1624866905.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "VS 5 ",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_26_1624866571_450x450.webp",
                        explanation: {
                            title: "VS 5 - Fünfeck verspannt",
                            text: [
                                "Die Schräge kann sowohl links als auch rechts sein.",
                                "Es sind zwei Schienen von oben nach unten verschiebbar. Die Spannschnüre sind feststehend.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_22_1624866902.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "VS 10 D",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_28_1624866768_450x450.webp",
                        explanation: {
                            title: "VS 10 D - Dreieck verspannt",
                            text: [
                                "Die Schräge kann sowohl links als auch rechts sein.",
                                "Die Spannschnüre sind feststehend!",
                                "Die Oberschiene ist beweglich und kann von oben nach unten bewegt werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_24_1624866904.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "F Slope 2",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_23_1624866642_450x450.webp",
                        explanation: {
                            title: "F Slope 2 - freihängend",
                            text: [
                                "Die Schräge kann sowohl links als auch rechts sein.",
                                "Der Behang ist bis an die schräge Schiene hochziehbar.",
                                "Die Bedienung auf der niedrigen Seite ist für den unteren Behang, auf der hohen Seite für den oberen Behang."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_25_1624866906.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "FD Slope 3",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_24_1624866883_450x450.webp",
                        explanation: {
                            title: "FD Slope 3 - Dreieck freihängend",
                            text: [
                                "Die Schräge kann sowohl links als auch rechts sein.",
                                "Der Behang ist bis an die schräge Schiene hochziehbar.",
                                "Die Bedienung ist nur auf der hohen Seite möglich."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_26_1624866904.gif",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Befestigungsart",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Abspannschuhe",
                        note: "meist gewählt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_3_1666613404_450x450.webp",
                        explanation: {
                            title: "Abspannschuhe: Glasfalzmontage",
                            text: [
                                "Die Standard-Befestigungsart! Die im Lieferumfang enthaltenen Abspannschuhe werden mit einer kleinen Schraube im Glasfalz verschraubt (Schrauben inkl.). Der Glasfalz kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei den Sonderform-Modellen wird das Plissee oben mit Deckenclips verschraubt und nach unten mit Abspannschuhen verspannt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_8_1726645428_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Winkelträger",
                        defaultSelected: false,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_29_1666613422_450x450.webp",
                        explanation: {
                            title: "Winkelträger: Wand.- Fensterflügelmontage",
                            text: [
                                "Mit dem Winkelträger kann das Plissee an der Wand oder am Fensterflügel verspannt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_9_1726652409_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Fensterflügel"},
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Klemmträger",
                        defaultSelected: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_4_1666613291_450x450.webp",
                        explanation: {
                            title: "Klemmträger: Fensterflügelmontage",
                            text: [
                                "Bohrerlose Montageart auf den Fensterflügel. Der hochwertige Klemmträger aus Metall mit Kunststoffgehäuse benötigt oberhalb bzw. unterhalb des Fensterflügels 10 mm Platz.",
                                "Achten Sie insb. bei Holzfenstern darauf, dass die Träger am Fensterflügel montiert werden können (umlaufende Dichtung).",
                                "Die Klemmbreite beträgt 5-25 mm."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_10_1726645576_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "anyTuple",
                            dependecies: [
                                [
                                    {"Montageposition":"Fensterflügel"},
                                    {"Plisseemodell": "VS 4 Slope"},
                                ],
                                [
                                    {"Montageposition":"Fensterflügel"},
                                    {"Plisseemodell": "VS 5 "},
                                ],
                                [
                                    {"Montageposition":"Fensterflügel"},
                                    {"Plisseemodell": "F Slope 2"},
                                ],
                            ]
                        },
                        price: 35.80
                    },
                ]
            },
            {
                title: "Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Designgriff",
                        note: "sehr beliebt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_16_1682414552_450x450.webp",
                        explanation: {
                            title: "Designgriff",
                            text: [
                                "Der pulverbeschichtete Designgriffs aus Aluminium sorgt für eine zusätzliche optische Aufwertung (Farben; weiß, grau, schwarzbraun, anthrazit, bronze - die Farben werden der Schienenfarbe angepasst). Wird der Designgriff nicht gewählt, erhalten Sie automatisch den Standardbediengriff (eine Abbildung finden Sie unten bei den technischen Details.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_13_1726645666_450x450.webp",
                        price: 28,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Plisseemodell":"VS 4 Slope"},
                                {"Plisseemodell":"VS 5 "},
                                {"Plisseemodell":"VS 10 D"},
                            ]
                        },
                    },
                    {
                        title: "Bedienstab",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_223_1716377905_450x450.webp",
                        explanation: {
                            title: "Bedienstab",
                            text: [
                                "Wenn das Plissee schwer zugänglich ist, oder höher angebracht ist, ist der Bedienstab mit Gelenk sehr hilfreich.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_47_1711541147_450x450.webp",
                        price: {
                            "1,25m" : 76,
                            "1,5m" : 82,
                            "2m" : 88,
                            "2.5m": 94
                        },
                        priceExplanation: "Stablänge"
                    },
                ]
            },
            {
                title: "Schienenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Weiß",
                        defaultSelected: true,
                        image: "rgb(243, 246, 246)",
                        price: 0
                    },
                    {
                        title: "Silber",
                        image: "linear-gradient(58.82deg, rgb(233, 233, 233) 2.73%, rgb(196, 196, 196) 50.11%, rgb(221, 221, 221) 67.69%, rgb(233, 233, 233) 78.93%, rgb(224, 224, 224) 96.51%)",
                        price: 0
                    },
                    {
                        title: "Bronze",
                        image: "rgb(138, 130, 113)",
                        price: 0
                    },
                    {
                        title: "Schwarzbraun",
                        image: "rgb(30, 26, 26)",
                        price: 0
                    },
                    {
                        title: "Anthrazit",
                        image: "rgb(90, 90, 90)",
                        price: 0
                    },
                ]
            },
            {
                title: "Skizze Spiegeln",
                multichoice: false,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        image: "https://wumbo.net/symbols/left-arrow/feature.png",
                        price: 0
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0
                    },
                ]
            },
        ],
        subcategoryTitle: "Plisseemodell",
        blendcolorTitle: "Schienenfarbe",
        requestCategory: "PlisseeSonderformen",
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/plissee",
        productDetailUrl: "/api/product/Plissee/Sonderformen Plissee",
        EXTERNAL_URL: "/api/external-products/colors/PlisseeSonderformen/",
        cartName: "Premium Plissee Sonderformen",
        freeSamplingTitle: "Stoffmuster Premium Plissee",
        assemblyInfo: {
            name: "Sonderformen Plissee",
            link: "/montageanleitung/plissee"
        },
        dimensionSelector: "Plisseemodell",
        secondDimensionSelector: "Skizze Spiegeln",
        dimensionCalculators: {
            "VS 4 Slope Links": {
                component: Sonderform3DDimensionCalculator,
                type: "SONDERFORM_3D_PRICE_OBJ",
            },
            "VS 4 Slope Rechts": {
                component: Sonderform3DRightDimensionCalculator,
                type: "SONDERFORM_3D_PRICE_OBJ",
            },
            "F Slope 2 Links": {
                component: Sonderform3DDimensionCalculator,
                type: "SONDERFORM_3D_PRICE_OBJ",
            },
            "F Slope 2 Rechts": {
                component: Sonderform3DRightDimensionCalculator,
                type: "SONDERFORM_3D_PRICE_OBJ",
            },
            "VS 5  Links": {
                component: Sonderform4DDimensionCalculator,
                type: "SONDERFORM_4D_PRICE_OBJ",
            },
            "VS 5  Rechts": {
                component: Sonderform4DRightDimensionCalculator,
                type: "SONDERFORM_4D_PRICE_OBJ",
            },


            "FD Slope 3 Links": {
                component: Sonderform2DDimensionCalculator2,
                type: "SONDERFORM_2D_PRICE_OBJ",
            },
            "FD Slope 3 Rechts": {
                component: Sonderform2DRightDimensionCalculator2,
                type: "SONDERFORM_2D_PRICE_OBJ",
            },


            "VS 10 D Links": {
                component: Sonderform2DDimensionCalculator,
                type: "SONDERFORM_2D_PRICE_OBJ",
            },
            "VS 10 D Rechts": {
                component: Sonderform2DRightDimensionCalculator,
                type: "SONDERFORM_2D_PRICE_OBJ",
            }
        },
    },
    "LamellenvorhangSchrag": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_3147_1666612698_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_3148_1666612111_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4580_1688030839_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4581_1688030867_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4583_1688030922_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4584_1688030949_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4576_1688030713_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Schienenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Weiß",
                        defaultSelected: true,
                        image: "rgb(243, 246, 246)",
                        price: 0
                    },
                    {
                        title: "Silber",
                        image: "linear-gradient(58.82deg, rgb(233, 233, 233) 2.73%, rgb(196, 196, 196) 50.11%, rgb(221, 221, 221) 67.69%, rgb(233, 233, 233) 78.93%, rgb(224, 224, 224) 96.51%)",
                        price: 0
                    },
                    {
                        title: "Schwarz",
                        image: "rgb(10, 10, 10)",
                        price: 0
                    },
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Decke/Nische",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/210_Icon_90_1666613266_450x450.webp",
                        explanation: {
                            title: "Deckenmontage",
                            text: [
                                "Die Montage kann in der Fensternische oder vor der Fensternische erfolgen. Die im Lieferumfang enthaltenen Träger werden verschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_48_1683704829_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/210_Icon_87_1666613301_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Hier erfolgt die Montage mittels, im Lieferumfang enthaltenen, Wandwinkel. Diese werden verschraubt. Die Breite kann je nach gewünschtem Überstand über die Fensternische beliebig gewählt werden.",
                                "Es werden den Farben der Oberschiene entsprechende Wandwinkel beigelegt. Außer bei schwarzen Oberschienen werden weiße Wandwinkel beigelegt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_47_1683704818_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                options: [
                    {
                        title: "Schnur/Kette",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/210_Icon_93_1666613331_450x450.webp",
                        explanation: {
                            title: "Schnur/Kette",
                            text: [
                                "Mit der Bedienschnur öffnen und schließen Sie den Vorhang, indem die Lamellen seitlich verschoben werden. Mit der Bedienkette wird die Neigung der Lamellen eingestellt.",
                                "Die Bedienlänge beträgt in etwa 2/3 der Bestellhöhe."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/210_Icon_93_1666613331_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Bedienseite",
                multichoice: false,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        image: "https://wumbo.net/symbols/left-arrow/feature.png",
                        price: 0
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0
                    },
                ]
            },
            {
                title: "Montagewinkel",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "60- 108 mm",
                        conditionalSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_94_1624866872_450x450.webp",
                        explanation: {
                            title: "Montagewinkel",
                            text: [
                                "Mit diesen verstellbaren Montagewinkeln ergibt sich ein Wandabstand der aufgedrehten Lamelle von; 127 mm Lamelle: 0 bis 45 mm, 89 mm-Lamelle 15 bis 65 mm",
                                "Zur silbernen Oberschiene erhalten sie silberne Winkel, zu weißer und schwarzer Schiene weiße Winkel."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_54_1678873334_450x450.webp",
                        price: 20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Wand"},
                            ]
                        },
                    },
                    {
                        title: "95- 150 mm",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_95_1624866620_450x450.webp",
                        explanation: {
                            title: "Montagewinkel",
                            text: [
                                "Mit diesen verstellbaren Montagewinkeln ergibt sich ein Wandabstand der aufgedrehten Lamelle von; 127 mm Lamelle: 30 bis 85 mm, 89 mm-Lamelle 50 bis 105 mm",
                                "Zur silbernen Oberschiene erhalten sie silberne Winkel, zu weißer und schwarzer Schiene weiße Winkel."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_55_1678873356_450x450.webp",
                        price: 30,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Wand"},
                            ]
                        },
                    },
                    {
                        title: "145- 240 mm",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_95_1624866620_450x450.webp",
                        explanation: {
                            title: "Montagewinkel",
                            text: [
                                "Mit diesen verstellbaren Montagewinkeln ergibt sich ein Wandabstand der aufgedrehten Lamelle von; 127 mm Lamelle: 80 bis 175 mm, 89 mm-Lamelle 100 bis 195 mm",
                                "Zur silbernen Oberschiene erhalten sie silberne Winkel, zu weißer und schwarzer Schiene weiße Winkel."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_56_1678873366_450x450.webp",
                        price: 40,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Wand"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Form",
                multichoice: false,
                options: [
                    {
                        title: "Schräg links",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/210_Icon_141_1677059024_450x450.webp",
                        explanation: {
                            title: "Modell Slope schräg links",
                            text: [
                                "Das Lamellenpaket befindet sich auf der rechten Seite.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_45_1683705946_450x450.webp",
                        price: 0,
                    },
                    {
                        title: "Schräg rechts",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/210_Icon_139_1677059023_450x450.webp",
                        explanation: {
                            title: "Modell Slope schräg rechts",
                            text: [
                                "Das Lamellenpaket befindet sich auf der linken Seite.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_46_1683705957_450x450.webp",
                        price: 0,
                    },
                ]
            },
            {
                title: "Optionales Zubehör",
                multichoice: false,
                options: [
                    {
                        title: "Lamellengewicht eingeschweißt",
                        cancallable: true,
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/195_Icon_115_1709802650_450x450.webp",
                        explanation: {
                            title: "Lamellengewicht eingeschweißt",
                            text: [
                                "Hier wird das Lamellengewicht unten in die Lamellen eingeschweißt. Die Gewichte sind komplett vom Lamellenstoff umgeben. Es sind somit keine Verbindungsketten nötig. Eine ästhetisch sehr schöne Variante.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/195_Icon_115_1709802650_450x450.webp",
                        price: 35
                    },
                ]
            }
        ],
        subcategoryTitle: "check-basic-plissee",
        blendcolorTitle: "Schienenfarbe",
        requestCategory: "LamellenvorhangSlope",
        saleMultiplier: 11 / 4,
        measurementUrl: "/messanleitung/lamellenvorhang",
        productDetailUrl: "/api/product/Lamellenvorhang/Lamellenvorhang Schräg",
        EXTERNAL_URL: "/api/external-products/colors/LamellenvorhangSlope/",
        cartName: "Premium Lamellenvorhang schräg",
        freeSamplingTitle: "Stoffmuster Basic/Premium Lamellenvorhang",
        assemblyInfo: {
            name: "Lamellenvorhang Schräg",
            link: "/montageanleitung/lamellenvorhang"
        },
        dimensionSelector: "Form",
        dimensionCalculators: {
            "Schräg links": {
                component: Lamellenvorhang3DLeftDimensionCalculator,
                type: "LAMELLENVORHANG_SLOPE_3D_PRICE_OBJ",
            },
            "Schräg rechts": {
                component: Lamellenvorhang3DRightDimensionCalculator,
                type: "LAMELLENVORHANG_SLOPE_3D_PRICE_OBJ",
            }
        },
    }
};
