export const uniqueProductData = {
    "BasicPlissee": {
        defaultImages : [
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4586_1688031027_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4587_1688031051_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4585_1688031004_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4588_1688031079_1000x1000.webp',
        ],
        selectionData : [
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
                                "Optional auswählbare Befestigungsarten sind die Montage mit Klebeleisten oder Klebeplatten (Modell VS2).",
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
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_11_1666613476_450x450.webp",
                        explanation: {
                            title: "Wand",
                            text: [
                                "Bei dieser Montageart schrauben Sie die im Lieferumfang enthaltenen Winkelträger an die Wand (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_88_1683704125_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_12_1666613467_450x450.webp",
                        explanation: {
                            title: "Decke oder Nische",
                            text: [
                                "Bei dieser Montageart erhalten Sie, je nach bestelltem Plisseemodell, Abspannschuhe oder Deckenträger, die nach oben in die Decke oder Nische verschraubt werden (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_12_1666613467_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Plisseemodell",
                multichoice: false,
                hardcodedSelected: true,
                options: [
                    {
                        title: "MP2",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7037_1705999731_450x450.webp",
                        explanation: {
                            title: "Der Bestseller - Modell MP2 verspannt",
                            text: [
                                "Das Plissee kann jeweils mit der Ober- und Unterschiene nach oben und unten bewegt werden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7037_1705999731_450x450.webp",
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
                        defaultSelected: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_221_1711541147_450x450.webp",
                        explanation: {
                            title: "Abspannschuhe: Glasfalzmontage",
                            text: [
                                "Die Standard-Befestigungsart! Die im Lieferumfang enthaltenen Abspannschuhe werden mit einer kleinen Schraube im Glasfalz verschraubt (Schrauben inkl.). Der Glasfalz kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei den Sonderform-Modellen wird das Plissee oben mit Deckenclips verschraubt und nach unten mit Abspannschuhen verspannt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_221_1711541147_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Montageposition":"Decke/Nische"},
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Gelenkklebeplatte",
                        defaultSelected: false,
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_209_1706006725_450x450.webp",
                        explanation: {
                            title: "Für Kunststofffenster",
                            text: [
                                "Sehr beliebt und extrem einfach zu montieren. Hierbei schrauben oder bohren Sie nicht. Aufgrund der Klebung der Winkelplatte über die Kante der Kunststofffenster wird die Klebekraft deutlich erhöht. Dauerhafter Halt ohne zu schrauben.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_209_1706006725_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                            ]
                        },
                        price: 29.80
                    },
                    {
                        title: "Winkelträger",
                        defaultSelected: false,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_222_1711541147_450x450.webp",
                        explanation: {
                            title: "Winkelträger: Wand.- Fensterflügelmontage",
                            text: [
                                "Mit dem Winkelträger kann das Plissee an der Wand oder am Fensterflügel verspannt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_222_1711541147_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Fensterflügel"},
                                {"Montageposition":"Wand"},
                            ]
                        },
                        price: 18
                    },
                    {
                        title: "Klemmträger",
                        defaultSelected: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_213_1706006727_450x450.webp",
                        explanation: {
                            title: "Klemmträger: Fensterflügelmontage",
                            text: [
                                "Bohrerlose Montageart auf den Fensterflügel. Die Klemmbreite beträgt 5-25 mm. Der hochwertige Klemmträger aus Metall mit Kunststoffgehäuse benötigt oberhalb bzw. unterhalb des Fensterflügels 18 mm Platz.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_213_1706006727_450x450.webp",
                        forbids: [],
                        allows: {
                                type: "single",
                                dependecies: [
                                    {"Montageposition":"Fensterflügel"},
                                ]
                        },
                        price: 31.80
                    },
                ]
            },
            {
                title: "Zubehör",
                multichoice: true,
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
                            "1,25m" : 52,
                            "1,5m" : 52,
                            "2m" : 52
                        },
                        priceExplanation: "Stablänge"
                    },
                    {
                        title: "Magnethalter",
                        note: "sehr beliebt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_208_1706006725_450x450.webp",
                        explanation: {
                            title: "Magnetische Fixierung",
                            text: [
                                "Ober- und Unterschiene werden magnetisch an den Abspannschuhen fixiert.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_208_1706006725_450x450.webp",
                        price: 24
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
                        title: "Anthrazit matt",
                        image: "rgb(90, 90, 90)",
                        price: 0
                    },
                    {
                        title: "Schwarz matt",
                        image: "rgb(30, 26, 26)",
                        price: 0
                    },
                    {
                        title: "Elfenbein",
                        image: "rgb(245, 239, 224)",
                        price: 0
                    },
                    {
                        title: "Mahagoni",
                        image: "rgb(87, 62, 57)",
                        price: 0
                    },
                ]
            },
        ],
        subcategoryTitle: "Plisseemodell",
        blendcolorTitle: "Schienenfarbe",
        requestCategory: "BasicPlissee",
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/plissee",
        productDetailUrl: "/api/product/Plissee/Basic Plissee",
        EXTERNAL_URL: "/api/external-products/colors/BasicPlissee/",
        defaultHeight: 500,
        defaultWidth: 300,
    },
    "PremiumPlissee": {
        defaultImages : [
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4586_1688031027_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4587_1688031051_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4585_1688031004_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4588_1688031079_1000x1000.webp',
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
                                "Optional auswählbare Befestigungsarten sind die Montage mit Klebeleisten oder Klebeplatten (Modell VS2).",
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
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_11_1666613476_450x450.webp",
                        explanation: {
                            title: "Wand",
                            text: [
                                "Bei dieser Montageart schrauben Sie die im Lieferumfang enthaltenen Winkelträger an die Wand (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_88_1683704125_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_12_1666613467_450x450.webp",
                        explanation: {
                            title: "Decke oder Nische",
                            text: [
                                "Bei dieser Montageart erhalten Sie, je nach bestelltem Plisseemodell, Abspannschuhe oder Deckenträger, die nach oben in die Decke oder Nische verschraubt werden (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_12_1666613467_450x450.webp",
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
                        title: "VS 2",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_15_1624866811_450x450.webp",
                        explanation: {
                            title: "Der Bestseller - Modell VS2 verspannt",
                            text: [
                                "Das Plissee kann jeweils mit der Ober- und Unterschiene nach oben und unten bewegt werden.",
                                "Max.150 cm Breite",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_3_1624866904.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "VS 1",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_14_1624866771_450x450.webp",
                        explanation: {
                            title: "Plissee VS1 verspannt",
                            text: [
                                "Die Oberschiene ist fest montiert. Mit der Unterschiene kann das Plissee nach oben und unten bewegt werden.",
                                "Bei diesem Modell sind keine Klebemontagen möglich - hierzu eignet sich das Modell VS 2 optimal",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_4_1624866907.gif",
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
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_221_1711541147_450x450.webp",
                        explanation: {
                            title: "Abspannschuhe: Glasfalzmontage",
                            text: [
                                "Die Standard-Befestigungsart! Die im Lieferumfang enthaltenen Abspannschuhe werden mit einer kleinen Schraube im Glasfalz verschraubt (Schrauben inkl.). Der Glasfalz kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei den Sonderform-Modellen wird das Plissee oben mit Deckenclips verschraubt und nach unten mit Abspannschuhen verspannt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_221_1711541147_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Montageposition":"Decke/Nische"},
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Gelenkklebeplatte",
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_209_1706006725_450x450.webp",
                        explanation: {
                            title: "Für Kunststofffenster",
                            text: [
                                "Sehr beliebt und extrem einfach zu montieren. Hierbei schrauben oder bohren Sie nicht. Aufgrund der Klebung der Winkelplatte über die Kante der Kunststofffenster wird die Klebekraft deutlich erhöht. Dauerhafter Halt ohne zu schrauben.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_209_1706006725_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "allOfThem",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Plisseemodell": "VS 2"}
                            ]
                        },
                        price: 35.80
                    },
                    {
                        title: "Klebeleiste Slide",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_51_1666613469_450x450.webp",
                        explanation: {
                            title: "Klebeleiste Slide: Montage ohne zu bohren!",
                            text: [
                                "Bestens geeignet für Fenster ohne oder mit sehr geringer Glasleistentiefe. Zusätzlich wird das Plissee durch die seitlichen, Klebeprofile aus Aluminium noch lichtdichter. Die Farbe dieser durchgängigen Aluschienen wird der Farbe der Griffleisten/Ober-, Unterschiene in weiß bzw. grau angepasst.",
                                "Info: Die Bedienung erfolgt mittels Griffleiste, sprich ohne Griff. Sie haben somit keine hervorstehenden Bedienelemente.",
                                "Abmessen wie bei Glasfalzmontage!"
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_51_1666613469_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "allOfThem",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Plisseemodell": "VS 2"}
                            ]
                        },
                        price: 48.80
                    },
                    {
                        title: "Winkelträger",
                        defaultSelected: false,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_222_1711541147_450x450.webp",
                        explanation: {
                            title: "Winkelträger: Wand.- Fensterflügelmontage",
                            text: [
                                "Mit dem Winkelträger kann das Plissee an der Wand oder am Fensterflügel verspannt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_222_1711541147_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Fensterflügel"},
                                {"Montageposition":"Wand"},
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Klemmträger Slim",
                        note: "sehr beliebt",
                        defaultSelected: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_193_1682414556_450x450.webp",
                        explanation: {
                            title: "Klemmträger Slim",
                            text: [
                                "Die einfachste Montageart! Die neue Generation der Klemm-Montage. Dieser schlichte Klemmträger wird mit einem Handgriff über den Fensterflügel geklemmt und das Plissee verläuft zwischen den Glasleisten. Die Stärke des Fensterflügels darf 7 mm bis max. 25 mm betragen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_193_1682414556_450x450.webp",
                        allows: {
                                type: "allOfThem",
                                dependecies: [
                                    {"Montageposition":"Fensterflügel"},
                                    {"Plisseemodell": "VS 2"}
                                ]
                        },
                        price: 33
                    },
                    {
                        title: "Klemmträger",
                        defaultSelected: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_4_1666613291_450x450.webp",
                        explanation: {
                            title: "Klemmträger: Fensterflügelmontage",
                            text: [
                                "Bohrerlose Montageart auf den Fensterflügel. Die Klemmbreite beträgt 5-25 mm. Der hochwertige Klemmträger aus Metall mit Kunststoffgehäuse benötigt oberhalb bzw. unterhalb des Fensterflügels 10 mm Platz.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_4_1666613291_450x450.webp",
                        forbids: [],
                        allows: {
                                type: "single",
                                dependecies: [
                                    {"Montageposition":"Fensterflügel"},
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
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_16_1682414552_450x450.webp",
                        price: 28
                    },
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
                            "2.5m": 94
                        },
                        priceExplanation: "Stablänge"
                    },
                    {
                        title: "Magnethalter",
                        note: "sehr beliebt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_217_1709801125_450x450.webp",
                        explanation: {
                            title: "Magnetische Fixierung",
                            text: [
                                "Mit der magnetischen Fixierung für die obere Bedienschiene hält die Schiene optimal an den oberen Abspannschuhen und mögliche Lichtschlitze oder ein Absenken der Schiene werden vermieden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_217_1709801125_450x450.webp",
                        price: 20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Plisseemodell": "VS 2"}
                            ]
                        },
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
        ],
        subcategoryTitle: "Plisseemodell",
        blendcolorTitle: "Schienenfarbe",
        requestCategory: "Plissee",
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/plissee",
        productDetailUrl: "/api/product/Plissee/Premium Plissee",
        EXTERNAL_URL: "/api/external-products/colors/Plissee/",
        defaultHeight: 500,
        defaultWidth: 300,
    }
};
