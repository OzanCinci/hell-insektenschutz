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
        freeSamplingTitle: "Stoffmuster Basic Plissee",
        assemblyInfo: {
            name: "Basic Plissee",
            link: "/montageanleitung/plissee"
        },
        cartName: "Basic Plissee",
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
        freeSamplingTitle: "Stoffmuster Premium Plissee",
        assemblyInfo: {
            name: "Premium Plissee",
            link: "/montageanleitung/plissee"
        },
        cartName: "Premium Plissee",
    },
    "WabenPlissee": {
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
        productDetailUrl: "/api/product/Plissee/Wabenplissee",
        EXTERNAL_URL: "/api/external-products/colors/Plissee/",
        defaultHeight: 500,
        defaultWidth: 300,
        freeSamplingTitle: "Stoffmuster Premium Wabenplissee",
        assemblyInfo: {
            name: "Premium Wabenplissee",
            link: "/montageanleitung/plissee"
        },
        cartName: "Premium Wabenplissee",
    },
    "SmartAkkuPlissee": {
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
                        title: "FE",
                        defaultSelected: true,
                        cancallable: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7060_1713422190_450x450.webp",
                        explanation: {
                            title: "Smart Akku Plissee",
                            text: [
                                "Das Akkuplissee wird komfortabel über App (kein weiteres Zubehör nötig) oder Fernbedienung gesteuert.",
                                "Die Oberschiene wird fest montiert. Die Unterschiene bewegt sich von oben nach unten.",
                            ]
                        },
                        explanationImg: null,
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
                        title: "Deckenträger",
                        note: "meist gewählt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_182_1666613484_450x450.webp",
                        explanation: {
                            title: "Deckenträger",
                            text: [
                                "Die Deckenträger werden bei der Montage im Glasfalz nach oben in die Glasleiste verschraubt - diese kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei der Deckenmontage werden die Träger in die Decke oder Nische verschraubt (Schrauben stets inkl.)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_182_1666613484_450x450.webp",
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
                                {"Montageposition":"Wand"},
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Klemmträger",
                        note: "sehr beliebt",
                        defaultSelected: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_4_1666613291_450x450.webp",
                        explanation: {
                            title: "Klemmträger: Fensterflügelmontage",
                            text: [
                                "Bohrerlose Montageart auf den Fensterflügel. Der hochwertige Klemmträger aus Metall mit Kunststoffgehäuse benötigt oberhalb bzw. unterhalb des Fensterflügels 10 mm Platz.",
                                "Achten Sie insb. bei Holzfenstern darauf, dass die Träger am Fensterflügel montiert werden können (umlaufende Dichtung).",
                                "Die Klemmbreite beträgt 5-25 mm.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_10_1726645576_450x450.webp",
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
                title: "Bedienart",
                multichoice: false,
                options: [
                    {
                        title: "Akku-Motor",
                        defaultSelected: true,
                        cancallable: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_218_1709801125_450x450.webp",
                        explanation: {
                            title: "Akku-Motor",
                            text: [
                                'Alle Akku-Plissees können über die eigene "Motion-App" gesteuert werden, oder mittels Fernbedienung.',
                                "Li-Ion-Akku",
                                "USB wiederaufladbar",
                                "Lieblingsposition programmierbar"
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_218_1709801125_450x450.webp",
                        price: 0,
                    },
                ]
            },
            {
                title: "Optionales Motor Zubehör",
                multichoice: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Ladekabel USB C",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_97_1706781114_450x450.webp",
                        explanation: {
                            title: "Ladekabel ohne Netzteil",
                            text: [
                                "Es handelt sich um ein handelsübliches USB C Ladekabel (3 m Länge) ohne Netzteil. Das Plissee wird in der Regel zweimal jährlich geladen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_97_1706781114_450x450.webp",
                        price: 13,
                    },
                    {
                        title: "1 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_112_1707894379_450x450.webp",
                        explanation: {
                            title: "1 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihr Plissee sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_112_1707894379_450x450.webp",
                        price: 48.60,
                    },
                    {
                        title: "5 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        explanation: {
                            title: "5 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        price: 64.80,
                    },
                    {
                        title: "15 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        explanation: {
                            title: "15 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        price: 87.40,
                    },
                ]
            },
            {
                title: "Optionales Smart Zubehör",
                multichoice: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Wi-Fi Mini Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_101_1706781162_450x450.webp",
                        explanation: {
                            title: "USB WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite auf 20 Meter - das Plissee kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Etage wird eine Mini Bridge benötigt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_101_1706781162_450x450.webp",
                        price: 220.40,
                    },
                    {
                        title: "Wi-Fi Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        explanation: {
                            title: "WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite - das Plissee kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Haushalt ist eine WiFi Bridge ausreichend.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        price: 388.80,
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
                        title: "Seitenführung",
                        note: "meist gewählt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_30_1666613357_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung",
                            text: [
                                "Die seitliche Führung verhindert das unkontrollierte Auspendeln des Plissees. Diese ist besonders empfehlenswert bei beweglichen Fenstern und Türen oder auch bei Luftzug. Es kommt je nach Montageart entweder ein Spann-Winkel (Wand, Decke), Spann-Schuh (in der Fensternische) oder ein Klemmträger zum Einsatz.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_30_1666613357_450x450.webp",
                        price: 22.20,
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
        requestCategory: "AkkuPlissee",
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/plissee",
        productDetailUrl: "/api/product/Plissee/Smart Akku Plissee",
        EXTERNAL_URL: "/api/external-products/colors/AkkuPlissee/",
        defaultHeight: 700,
        defaultWidth: 800,
        freeSamplingTitle: "Stoffmuster Premium Plissee",
        assemblyInfo: {
            name: "Smart Akku Plissee",
            link: "/montageanleitung/plissee"
        },
        cartName: "Smart Akku Plissee",
    },
    "FreihangendPlissee": {
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
                        title: "F 1",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_16_1624866759_450x450.webp",
                        explanation: {
                            title: "Modell Zugschnur F1 freihängend",
                            text: [
                                "Die Oberschiene ist fest montiert. Die Unterschiene kann mit einer Zugschnur (Schnurbremse) nach oben und unten bewegt werden.",
                                "Maximale Breite bis 230 cm (abhängig von Stoffbreite)",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_5_1624866904.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "F 2",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_17_1624866758_450x450.webp",
                        explanation: {
                            title: "Modell Zugschnur F2 freihängend",
                            text: [
                                "Sowohl die Oberschiene als auch die Unterschiene kann mit Zugschnüren (Schnurbremse) nach oben und unten bewegt werden.",
                                "Maximale Breite 200 cm",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_6_1624866906.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "F4",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_101_1624866772_450x450.webp",
                        explanation: {
                            title: "Modell Endloskette F4 freihängend",
                            text: [
                                "Mit Endloskette gesteuertes Plissee. Die Oberschiene wird fest montiert. Die Unterschiene kann nach oben und unten bewegt werden.",
                                "Maximale Breite bis 230 cm (abhängig von Stoffbreite)",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_ImageAnimated_7_1624866905.gif",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "FE",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7060_1713422190_450x450.webp",
                        explanation: {
                            title: "Smart Akku Plissee",
                            text: [
                                "Das Akkuplissee wird komfortabel über App (kein weiteres Zubehör nötig) oder Fernbedienung gesteuert.",
                                "Die Oberschiene wird fest montiert. Die Unterschiene bewegt sich von oben nach unten.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/196_Property_Icon_7060_1713422190_450x450.webp",
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
                        title: "Deckenträger",
                        note: "meist gewählt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_182_1666613484_450x450.webp",
                        explanation: {
                            title: "Deckenträger",
                            text: [
                                "Die Deckenträger werden bei der Montage im Glasfalz nach oben in die Glasleiste verschraubt - diese kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei der Deckenmontage werden die Träger in die Decke oder Nische verschraubt (Schrauben stets inkl.)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_182_1666613484_450x450.webp",
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
                                {"Montageposition":"Wand"},
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Klemmträger",
                        note: "sehr beliebt",
                        defaultSelected: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_4_1666613291_450x450.webp",
                        explanation: {
                            title: "Klemmträger: Fensterflügelmontage",
                            text: [
                                "Bohrerlose Montageart auf den Fensterflügel. Der hochwertige Klemmträger aus Metall mit Kunststoffgehäuse benötigt oberhalb bzw. unterhalb des Fensterflügels 10 mm Platz.",
                                "Achten Sie insb. bei Holzfenstern darauf, dass die Träger am Fensterflügel montiert werden können (umlaufende Dichtung).",
                                "Die Klemmbreite beträgt 5-25 mm.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_10_1726645576_450x450.webp",
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
                title: "Bedienart",
                checkAllowList: true,
                options: [
                    {
                        title: "Akku-Motor",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_218_1709801125_450x450.webp",
                        explanation: {
                            title: "Akku-Motor",
                            text: [
                                'Alle Akku-Plissees können über die eigene "Motion-App" gesteuert werden, oder mittels Fernbedienung.',
                                "Li-Ion-Akku",
                                "USB wiederaufladbar",
                                "Lieblingsposition programmierbar"
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_218_1709801125_450x450.webp",
                        price: 0,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Plisseemodell": "FE"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Motor Zubehör",
                multichoice: true,
                doNoDefaultSelection: true,
                checkAllowList: true,
                options: [
                    {
                        title: "Ladekabel USB C",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_97_1706781114_450x450.webp",
                        explanation: {
                            title: "Ladekabel ohne Netzteil",
                            text: [
                                "Es handelt sich um ein handelsübliches USB C Ladekabel (3 m Länge) ohne Netzteil. Das Plissee wird in der Regel zweimal jährlich geladen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_97_1706781114_450x450.webp",
                        price: 13,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "1 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_112_1707894379_450x450.webp",
                        explanation: {
                            title: "1 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihr Plissee sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_112_1707894379_450x450.webp",
                        price: 48.60,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "5 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        explanation: {
                            title: "5 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        price: 64.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "15 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        explanation: {
                            title: "15 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        price: 87.40,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Smart Zubehör",
                multichoice: true,
                doNoDefaultSelection: true,
                checkAllowList: true,
                options: [
                    {
                        title: "Wi-Fi Mini Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_101_1706781162_450x450.webp",
                        explanation: {
                            title: "USB WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite auf 20 Meter - das Plissee kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Etage wird eine Mini Bridge benötigt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/195_Icon_101_1706781162_450x450.webp",
                        price: 220.40,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wi-Fi Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        explanation: {
                            title: "WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite - das Plissee kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Haushalt ist eine WiFi Bridge ausreichend.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        price: 388.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Bedienseite",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        image: "https://wumbo.net/symbols/left-arrow/feature.png",
                        price: 0,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Plisseemodell": "F 1"},
                                {"Plisseemodell": "F4"},
                            ]
                        },
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Plisseemodell": "F 1"},
                                {"Plisseemodell": "F4"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Zubehör",
                multichoice: false,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Seitenführung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_30_1666613357_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung",
                            text: [
                                "Die seitliche Führung verhindert das unkontrollierte Auspendeln des Plissees. Diese ist besonders empfehlenswert bei beweglichen Fenstern und Türen oder auch bei Luftzug. Es kommt je nach Montageart entweder ein Spann-Winkel (Wand, Decke), Spann-Schuh (in der Fensternische) oder ein Klemmträger zum Einsatz.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_30_1666613357_450x450.webp",
                        price: 22.20
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
                        title: "Anthrazit",
                        image: "rgb(90, 90, 90)",
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
                ]
            },
        ],
        subcategoryTitle: "Plisseemodell",
        blendcolorTitle: "Schienenfarbe",
        requestCategory: "PlisseeFreihaengend",
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/plissee",
        productDetailUrl: "/api/product/Plissee/Freihängend Plissee",
        EXTERNAL_URL: "/api/external-products/colors/PlisseeFreihaengend/",
        defaultHeight: 500,
        defaultWidth: 300,
        freeSamplingTitle: "Stoffmuster Premium Plissee",
        assemblyInfo: {
            name: "Freihängend Plissee",
            link: "/montageanleitung/plissee"
        },
        cartName: "Plissee Freihängend",
    },
    "BasicJalousie25mm": {
        defaultImages: [
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4539_1688029222_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4537_1688029182_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4538_1688029202_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4535_1688029109_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4536_1688029134_1000x1000.webp',
        ],
        selectionData: [
            {
                title: "Oberkastenfarbe",
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
                        image: "rgb(161, 161, 160)",
                        price: 0
                    },
                    {
                        title: "Braun",
                        image: "rgb(89, 75, 67)",
                        price: 0
                    },
                    {
                        title: "Elfenbein Hell",
                        image: "rgb(230, 210, 181)",
                        price: 0
                    },
                    {
                        title: "Farbton angepasst",
                        image: "linear-gradient(90deg, rgb(239, 77, 78) 0%, rgb(62, 134, 180) 50%, rgb(110, 212, 86) 100%)",
                        price: 24
                    }
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Glasfalz",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_79_1711541149_450x450.webp",
                        explanation: {
                            title: "Montage innerhalb der Glasleisten im Glasfalz",
                            text: [
                                "Dies ist die optimale und beliebteste Montageart für Jalousien.",
                                "Die Jalousie wird mittels, im Lieferumfang enthaltenen, Trägern nach oben in der Glasleiste verschraubt (Schrauben inkl.). Der Glasleiste kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Die Mindest-Glasleistentiefe beträgt 12 mm. Dies ist die Tiefe von der Rahmenvorderkante zum Glas. Bei der Montage mit Klebeleiste ist keine Mindesttiefe nötig.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_32_1683632163_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_65_1666613263_450x450.webp",
                        explanation: {
                            title: "Montage direkt am Fensterflügel",
                            text: [
                                "Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm.",
                                "Berechnen Sie hier einen Überstand der Jalousie über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie hier auf vorstehende Beschläge!",
                                "Die Montage erfolgt mit Winkelträgern (geschraubt) oder Klemmträgern (geklemmt)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_36_1683704087_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_67_1666613280_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand der Jalousie über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack 5-10 cm. Die Jalousie wird mit, im Lieferumfang enthaltenen, Winkelträgern an der Wand verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_33_1683704072_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_60_1666613281_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensternische",
                            text: [
                                "Achten Sie bei dieser Montageart auf die Pakethöhe (Höhe der aufgezogenen Jalousie), damit sich das Fenster nach erfolgter Montage noch öffnen lässt. Die Jalousie wird mit, im Lieferumfang enthaltenen Trägern an der Decke verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug).",
                                "Darüber hinaus können Jalousien als Raumteiler an der Decke angebracht werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_34_1683703954_450x450.webp",
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
                        title: "Deckenträger",
                        note: "meist gewählt",
                        defaultSelected: true, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
                        explanation: {
                            title: "Deckenträger",
                            text: [
                                "Die Deckenträger werden bei der Montage im Glasfalz nach oben in die Glasleiste verschraubt - diese kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei der Deckenmontage werden die Träger in die Decke oder Nische verschraubt (Schrauben stets inkl.)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Montageposition":"Decke/Nische"}
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Klebeleiste",
                        note: "sehr beliebt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_78_1666613359_450x450.webp",
                        explanation: {
                            title: "Klebeleiste",
                            text: [
                                "Die hochwertige Klebeleiste aus Aluminium kann direkt auf das Glas oder den Fensterflügel (PVC, oder Alu) geklebt werden.",
                                "Im Lieferumfang sind 2 Leisten enthalten. Eine Leiste oben zur Befestigung der Jalousie, die zweite zur Fixierung der Seitenführung unten.",
                                "Die max. Jalousienhöhe beträgt 140 cm."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_78_1666613359_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                            ]
                        },
                        price: 51.80
                    },
                    {
                        title: "Winkelträger",
                        note: "meist gewählt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
                        explanation: {
                            title: "Winkelträger",
                            text: [
                                "Mit den Winkelträgern kann die Jalousie an der Wand oder am Fensterflügel befestigt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
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
                        title: "Klemmträger",
                        note: "sehr beliebt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_115_1711541150_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den hochwertigen Klemmträgern aus Metall mit Kunststoffgehäuse können Sie die Jalousien ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Achten Sie insb. bei Holzfenstern darauf, dass die Träger am Fensterflügel montiert werden können (umlaufende Dichtung).",
                                "Die Klemmbreite beträgt 6-21 mm.",
                                "Zwei weitere Klemmträger als Pendelsicherung an der Unterseite des Fensterflügels verhindern das Auspendeln der Jalousie. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt.",
                                "Weitere Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_35_1683632163_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Fensterflügel"},
                            ]
                        },
                        price: 28.80
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                options: [
                    {
                        title: "Schnur / Wendestab",
                        defaultSelected: true,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        explanation: {
                            title: "Schnur/Wendestab",
                            text: [
                                "Die Schnur dient zum Heben und Senken der Lamellen. Mit dem Wendestab wird die Neigung der Lamellen verändert, um den Lichteinfall zu regulieren.",
                                "Durch das eingearbeitete Schnurschloss kann die Jalousie in jeder beliebigen Stellung arretiert werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Kettenbedienung",
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        explanation: {
                            title: "Kettenbedienung",
                            text: [
                                "Mit der Kette heben und senken Sie die Jalousie. Wenn Sie in die Gegenrichtung ziehen, neigen Sie die Lamellen. Mit der integrierten Bremse arretiert die Jalousie in jeder Position, ohne dass Sie die Kette fixieren müssen. Die Standard-Bedienlänge beträgt ca. 2/3 der Jalousienhöhe, jedoch mindestens 75 cm.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        price: {
                            "Standard 2/3" : 30,
                            "75cm" : 30,
                            "100cm" : 30,
                            "125cm" : 30,
                            "150cm" : 30,
                            "175cm" : 30,
                            "200cm" : 30,
                            "225cm" : 30,
                        },
                        priceExplanation: "Kettenlänge"
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
                title: "Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Seitenführung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung/Seitenführung",
                            text: [
                                "Die Seitenführung aus hochwertigen Nylonschnüren bei 25 mm Jalousien (Metallseile bei 50 mm Jalousien) verläuft links und rechts durch die Lamellen. Sie verhindert das unkontrollierte Auspendeln der Jalousien beim Öffnen oder Kippen von Fenstern und Türen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 7.20
                    },
                    {
                        title: "Besonders abdunkelnd",
                        note: "sehr beliebt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_68_1666613451_450x450.webp",
                        explanation: {
                            title: "Besonders abdunkelnd",
                            text: [
                                "Die obere Lamelle überdeckt stets die Stanzlöcher der unteren Lamelle. Der Lichteinfall wird minimiert. Wir empfehlen im Schritt 'Montage' die Seitenführung zu wählen. Ohne dieser neigt sich das Lamellenpaket durch die außermittige Stanzung der Lamellen etwas nach hinten.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_68_1666613451_450x450.webp",
                        price: 24,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Kettenbedienung Standard 2/3"},
                                {"Bedienart": "Kettenbedienung 75cm"},
                                {"Bedienart": "Kettenbedienung 100cm"},
                                {"Bedienart": "Kettenbedienung 125cm"},
                                {"Bedienart": "Kettenbedienung 150cm"},
                                {"Bedienart": "Kettenbedienung 175cm"},
                                {"Bedienart": "Kettenbedienung 200cm"},
                                {"Bedienart": "Kettenbedienung 225cm"},
                            ]
                        },
                    },
                    {
                        title: "Oberblende",
                        note: "sehr beliebt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_199_1682414572_450x450.webp",
                        explanation: {
                            title: "Oberblende",
                            text: [
                                "Sie können die formschöne Designblende bei der Glasfalzmontage als optische Aufwertung wählen. Die Jalousie wird hierbei mit speziellen Trägern von vorne auf den Glasfalz geschraubt. Die Designblende wird schließlich einfach auf die Träger geklippt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_199_1682414572_450x450.webp",
                        price: 24,
                        allows: {
                            type: "allOfThem",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Befestigungsart": "Deckenträger"},
                                {"Bedienart": "Kettenbedienung"}
                            ]
                        },
                    },
                    {
                        title: "Unterlegkeile",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_59_1666613485_450x450.webp",
                        explanation: {
                            title: "Unterlegkeile",
                            text: [
                                "Unterlegkeile dienen für die Montage an sehr schrägen Glasleisten. Es werden zwei Unterlegkeile je Träger mitgesandt, um bis zu 10° Neigung ausgleichen zu können. ",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_41_1716876550_450x450.webp",
                        price: 4.80,
                        allows: {
                            type: "allOfThem",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Befestigungsart": "Deckenträger"},
                            ]
                        },
                    }
                ]
            }
        ],
        defaultHeight: 800,
        defaultWidth: 400,
        subcategoryTitle: "check-mm",
        blendcolorTitle: "Oberkastenfarbe",
        requestCategory: "BasicJalousie",
        saleMultiplier: 10.25 / 4,
        measurementUrl: "/messanleitung/jalousie",
        productDetailUrl: "/api/product/Jalousie/Basic Jalousie",
        EXTERNAL_URL: "/api/external-products/colors/BasicJalousie/",
        freeSamplingTitle:"Lamellenmuster Basic Alu Jalousien 25mm",
        assemblyInfo: {
            name: "Basic Alu Jalousien 25mm",
            link: "/montageanleitung/jalousie"
        },
        cartName: "Basic Alu Jalousien 25mm",
    },
    "BasicJalousie16mm": {
        defaultImages: [
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4539_1688029222_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4537_1688029182_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4538_1688029202_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4535_1688029109_1000x1000.webp',
            'https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4536_1688029134_1000x1000.webp',
        ],
        selectionData: [
            {
                title: "Oberkastenfarbe",
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
                        image: "rgb(161, 161, 160)",
                        price: 0
                    },
                    {
                        title: "Braun",
                        image: "rgb(89, 75, 67)",
                        price: 0
                    },
                    {
                        title: "Elfenbein Hell",
                        image: "rgb(230, 210, 181)",
                        price: 0
                    },
                    {
                        title: "Farbton angepasst",
                        image: "linear-gradient(90deg, rgb(239, 77, 78) 0%, rgb(62, 134, 180) 50%, rgb(110, 212, 86) 100%)",
                        price: 24
                    }
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Glasfalz",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_79_1711541149_450x450.webp",
                        explanation: {
                            title: "Montage innerhalb der Glasleisten im Glasfalz",
                            text: [
                                "Dies ist die optimale und beliebteste Montageart für Jalousien.",
                                "Die Jalousie wird mittels, im Lieferumfang enthaltenen, Trägern nach oben in der Glasleiste verschraubt (Schrauben inkl.). Der Glasleiste kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Die Mindest-Glasleistentiefe beträgt 12 mm. Dies ist die Tiefe von der Rahmenvorderkante zum Glas. Bei der Montage mit Klebeleiste ist keine Mindesttiefe nötig.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_32_1683632163_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_65_1666613263_450x450.webp",
                        explanation: {
                            title: "Montage direkt am Fensterflügel",
                            text: [
                                "Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm.",
                                "Berechnen Sie hier einen Überstand der Jalousie über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie hier auf vorstehende Beschläge!",
                                "Die Montage erfolgt mit Winkelträgern (geschraubt) oder Klemmträgern (geklemmt)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_36_1683704087_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_67_1666613280_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand der Jalousie über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack 5-10 cm. Die Jalousie wird mit, im Lieferumfang enthaltenen, Winkelträgern an der Wand verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_33_1683704072_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_60_1666613281_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensternische",
                            text: [
                                "Achten Sie bei dieser Montageart auf die Pakethöhe (Höhe der aufgezogenen Jalousie), damit sich das Fenster nach erfolgter Montage noch öffnen lässt. Die Jalousie wird mit, im Lieferumfang enthaltenen Trägern an der Decke verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug).",
                                "Darüber hinaus können Jalousien als Raumteiler an der Decke angebracht werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_34_1683703954_450x450.webp",
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
                        title: "Deckenträger",
                        note: "meist gewählt",
                        defaultSelected: true, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
                        explanation: {
                            title: "Deckenträger",
                            text: [
                                "Die Deckenträger werden bei der Montage im Glasfalz nach oben in die Glasleiste verschraubt - diese kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei der Deckenmontage werden die Träger in die Decke oder Nische verschraubt (Schrauben stets inkl.)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Montageposition":"Decke/Nische"}
                            ]
                        },
                        price: 0
                    },
                    {
                        title: "Klebeleiste",
                        note: "sehr beliebt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_78_1666613359_450x450.webp",
                        explanation: {
                            title: "Klebeleiste",
                            text: [
                                "Die hochwertige Klebeleiste aus Aluminium kann direkt auf das Glas oder den Fensterflügel (PVC, oder Alu) geklebt werden.",
                                "Im Lieferumfang sind 2 Leisten enthalten. Eine Leiste oben zur Befestigung der Jalousie, die zweite zur Fixierung der Seitenführung unten.",
                                "Die max. Jalousienhöhe beträgt 140 cm."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_78_1666613359_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                            ]
                        },
                        price: 51.80
                    },
                    {
                        title: "Winkelträger",
                        note: "meist gewählt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
                        explanation: {
                            title: "Winkelträger",
                            text: [
                                "Mit den Winkelträgern kann die Jalousie an der Wand oder am Fensterflügel befestigt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
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
                        title: "Klemmträger",
                        note: "sehr beliebt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_115_1711541150_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den hochwertigen Klemmträgern aus Metall mit Kunststoffgehäuse können Sie die Jalousien ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Achten Sie insb. bei Holzfenstern darauf, dass die Träger am Fensterflügel montiert werden können (umlaufende Dichtung).",
                                "Die Klemmbreite beträgt 6-21 mm.",
                                "Zwei weitere Klemmträger als Pendelsicherung an der Unterseite des Fensterflügels verhindern das Auspendeln der Jalousie. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt.",
                                "Weitere Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_35_1683632163_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Fensterflügel"},
                            ]
                        },
                        price: 28.80
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                options: [
                    {
                        title: "Schnur / Wendestab",
                        defaultSelected: true,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        explanation: {
                            title: "Schnur/Wendestab",
                            text: [
                                "Die Schnur dient zum Heben und Senken der Lamellen. Mit dem Wendestab wird die Neigung der Lamellen verändert, um den Lichteinfall zu regulieren.",
                                "Durch das eingearbeitete Schnurschloss kann die Jalousie in jeder beliebigen Stellung arretiert werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Kettenbedienung",
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        explanation: {
                            title: "Kettenbedienung",
                            text: [
                                "Mit der Kette heben und senken Sie die Jalousie. Wenn Sie in die Gegenrichtung ziehen, neigen Sie die Lamellen. Mit der integrierten Bremse arretiert die Jalousie in jeder Position, ohne dass Sie die Kette fixieren müssen. Die Standard-Bedienlänge beträgt ca. 2/3 der Jalousienhöhe, jedoch mindestens 75 cm.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        price: {
                            "Standard 2/3" : 30,
                            "75cm" : 30,
                            "100cm" : 30,
                            "125cm" : 30,
                            "150cm" : 30,
                            "175cm" : 30,
                            "200cm" : 30,
                            "225cm" : 30,
                        },
                        priceExplanation: "Kettenlänge"
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
                title: "Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Seitenführung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung/Seitenführung",
                            text: [
                                "Die Seitenführung aus hochwertigen Nylonschnüren bei 25 mm Jalousien (Metallseile bei 50 mm Jalousien) verläuft links und rechts durch die Lamellen. Sie verhindert das unkontrollierte Auspendeln der Jalousien beim Öffnen oder Kippen von Fenstern und Türen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 7.20
                    },
                    {
                        title: "Oberblende",
                        note: "sehr beliebt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_199_1682414572_450x450.webp",
                        explanation: {
                            title: "Oberblende",
                            text: [
                                "Sie können die formschöne Designblende bei der Glasfalzmontage als optische Aufwertung wählen. Die Jalousie wird hierbei mit speziellen Trägern von vorne auf den Glasfalz geschraubt. Die Designblende wird schließlich einfach auf die Träger geklippt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_199_1682414572_450x450.webp",
                        price: 24,
                        allows: {
                            type: "allOfThem",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Befestigungsart": "Deckenträger"},
                                {"Bedienart": "Kettenbedienung"}
                            ]
                        },
                    },
                    {
                        title: "Unterlegkeile",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_59_1666613485_450x450.webp",
                        explanation: {
                            title: "Unterlegkeile",
                            text: [
                                "Unterlegkeile dienen für die Montage an sehr schrägen Glasleisten. Es werden zwei Unterlegkeile je Träger mitgesandt, um bis zu 10° Neigung ausgleichen zu können. ",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_41_1716876550_450x450.webp",
                        price: 4.80,
                        allows: {
                            type: "allOfThem",
                            dependecies: [
                                {"Montageposition":"Glasfalz"},
                                {"Befestigungsart": "Deckenträger"},
                            ]
                        },
                    }
                ]
            }
        ],
        defaultHeight: 800,
        defaultWidth: 400,
        subcategoryTitle: "check-mm",
        blendcolorTitle: "Oberkastenfarbe",
        requestCategory: "BasicJalousie",
        saleMultiplier: 10.25 / 4,
        measurementUrl: "/messanleitung/jalousie",
        productDetailUrl: "/api/product/Jalousie/Basic Jalousie",
        EXTERNAL_URL: "/api/external-products/colors/BasicJalousie/",
        freeSamplingTitle:"Lamellenmuster Basic Alu Jalousien 16mm",
        assemblyInfo: {
            name: "Basic Alu Jalousien 16mm",
            link: "/montageanleitung/jalousie"
        },
        cartName: "Basic Alu Jalousien 16mm",
    },
    "BasicJalousie50mm": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/scenes/alu50/front/900.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4540_1688029253_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4541_1688029272_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4542_1688029288_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4543_1688029315_1000x1000.webp"
        ],
        selectionData: [
            {
                title: "Oberkastenfarbe",
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
                        image: "rgb(161, 161, 160)",
                        price: 0
                    },
                    {
                        title: "Braun",
                        image: "rgb(89, 75, 67)",
                        price: 0
                    },
                    {
                        title: "Elfenbein Hell",
                        image: "rgb(230, 210, 181)",
                        price: 0
                    },
                    {
                        title: "Farbton angepasst",
                        image: "linear-gradient(90deg, rgb(239, 77, 78) 0%, rgb(62, 134, 180) 50%, rgb(110, 212, 86) 100%)",
                        price: 24
                    }
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Wand",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_67_1666613280_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand der Jalousie über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack 5-10 cm. Die Jalousie wird mit, im Lieferumfang enthaltenen, Winkelträgern an der Wand verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_33_1683704072_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_60_1666613281_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensternische",
                            text: [
                                "Achten Sie bei dieser Montageart auf die Pakethöhe (Höhe der aufgezogenen Jalousie), damit sich das Fenster nach erfolgter Montage noch öffnen lässt. Die Jalousie wird mit, im Lieferumfang enthaltenen Trägern an der Decke verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug).",
                                "Darüber hinaus können Jalousien als Raumteiler an der Decke angebracht werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_34_1683703954_450x450.webp",
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
                        title: "Aufzugschnur / Wendeschnur",
                        defaultSelected: true,
                        note: "meist gewählt",
                        cancallable: false,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_55_1666613384_450x450.webp",
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
                title: "Zubehör",
                multichoice: true,
                options: [
                    {
                        title: "Seitenführung",
                        cancallable: true,
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung/Seitenführung",
                            text: [
                                "Die Seitenführung aus hochwertigen Nylonschnüren bei 25 mm Jalousien (Metallseile bei 50 mm Jalousien) verläuft links und rechts durch die Lamellen. Sie verhindert das unkontrollierte Auspendeln der Jalousien beim Öffnen oder Kippen von Fenstern und Türen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 24
                    },
                ]
            }
        ],
        defaultHeight: 600,
        defaultWidth: 420,
        subcategoryTitle: "check-mm",
        blendcolorTitle: "Oberkastenfarbe",
        requestCategory: "BasicJalousie",
        saleMultiplier: 10.25 / 4,
        measurementUrl: "/messanleitung/jalousie",
        productDetailUrl: "/api/product/Jalousie/Basic Jalousie",
        EXTERNAL_URL: "/api/external-products/colors/BasicJalousie/",
        freeSamplingTitle:"Lamellenmuster Basic Alu Jalousien 50mm",
        assemblyInfo: {
            name: "Basic Alu Jalousien 50mm",
            link: "/montageanleitung/jalousie"
        },
        cartName: "Basic Alu Jalousien 50mm",
    },
    "BasicLamellenvorhang": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4576_1688030713_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4577_1688030745_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4578_1688030772_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4584_1688030949_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/400000/files/204_Image_4583_1688030922_1000x1000.webp"
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
                title: "Seite Lamellenpaket",
                multichoice: false,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_89_1712741836_450x450.webp",
                        explanation: {
                            title: "Lamellenpaket Links",
                            text: [
                                "Das Lamellenpaket befindet sich auf der linken Seite und schließt nach rechts."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_49_1683705834_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Mitte",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_90_1624866600_450x450.webp",
                        explanation: {
                            title: "Lamellenpaket Mitte",
                            text: [
                                "Das Lamellenpaket befindet sich in der Mitte und bewegt sich beim Schließen zur Hälfte nach linke und rechts."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_51_1714721855_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Rechts",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_91_1712741844_450x450.webp",
                        explanation: {
                            title: "Lamellenpaket Rechts",
                            text: [
                                "Das Lamellenpaket befindet sich auf der rechten Seite und schließt nach links."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_50_1714721855_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Links/Rechts geteilt",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_92_1624866734_450x450.webp",
                        explanation: {
                            title: "Lamellenpaket-Links/Rechts geteilt",
                            text: [
                                "Das Lamellenpaket befindet sich zur Hälfte rechts bzw. links und schließt zur Mitte."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_52_1683705862_450x450.webp",
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
                        price: 30,
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
                        price: 50,
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
                        price: 65,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Wand"},
                            ]
                        },
                    },
                ]
            }
        ],
        defaultHeight: 1000,
        defaultWidth: 600,
        subcategoryTitle: "check-basic-plissee",
        saleMultiplier: 10 / 4,
        productDetailUrl: "/api/product/Lamellenvorhang/Basic Lamellenvorhang",
        measurementUrl: "/messanleitung/lamellenvorhang",
        EXTERNAL_URL: "/api/external-products/colors/BasicLamellenvorhang/",
        requestCategory: "BasicLamellenvorhang",
        blendcolorTitle: "Schienenfarbe",
        freeSamplingTitle: "Stoffmuster Basic Lamellenvorhang",
        assemblyInfo: {
            name: "Basic Lamellenvorhang",
            link: "/montageanleitung/lamellenvorhang"
        },
        cartName: "Basic Lamellenvorhang"
    },
    "PremiumLamellenvorhang": {
        defaultImages: [
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
                title: "Seite Lamellenpaket",
                multichoice: false,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_89_1712741836_450x450.webp",
                        explanation: {
                            title: "Lamellenpaket Links",
                            text: [
                                "Das Lamellenpaket befindet sich auf der linken Seite und schließt nach rechts."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_49_1683705834_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Mitte",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_90_1624866600_450x450.webp",
                        explanation: {
                            title: "Lamellenpaket Mitte",
                            text: [
                                "Das Lamellenpaket befindet sich in der Mitte und bewegt sich beim Schließen zur Hälfte nach linke und rechts."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_51_1714721855_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Rechts",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_91_1712741844_450x450.webp",
                        explanation: {
                            title: "Lamellenpaket Rechts",
                            text: [
                                "Das Lamellenpaket befindet sich auf der rechten Seite und schließt nach links."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_50_1714721855_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Links/Rechts geteilt",
                        image: "https://api.configurator.vendeco.com/data/configurations/400000/files/196_Property_Icon_92_1624866734_450x450.webp",
                        explanation: {
                            title: "Lamellenpaket-Links/Rechts geteilt",
                            text: [
                                "Das Lamellenpaket befindet sich zur Hälfte rechts bzw. links und schließt zur Mitte."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/400000/files/200_Image_52_1683705862_450x450.webp",
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
                        price: 30,
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
                        price: 40,
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
                        price: 50,
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
        defaultHeight: 1000,
        defaultWidth: 600,
        saleMultiplier: 10 / 4,
        productDetailUrl: "/api/product/Lamellenvorhang/Premium Lamellenvorhang",
        measurementUrl: "/messanleitung/lamellenvorhang",
        EXTERNAL_URL: "/api/external-products/colors/Lamellenvorhang/",
        requestCategory: "Lamellenvorhang",
        blendcolorTitle: "Schienenfarbe",
        freeSamplingTitle: "Stoffmuster Premium Lamellenvorhang",
        assemblyInfo: {
            name: "Premium Lamellenvorhang",
            link: "/montageanleitung/lamellenvorhang"
        },
        cartName: "Premium Lamellenvorhang"
    },
    "PremiumRollo": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4622_1688032123_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4623_1688032155_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4624_1688032182_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4625_1688032212_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4626_1688032264_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4627_1688032295_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4628_1688032387_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4629_1688032418_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Wand",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_117_1677058979_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand des Rollos über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack mind. 5-10 cm. Die im Lieferumfang enthaltenen Träger werden an die Wand geschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_71_1678873497_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_124_1677058988_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensterlaibung",
                            text: [
                                "Beachten Sie bei der Montage in der Fensternische die Höhe des aufgerollten Rollos, sodass sich das Fenster nach erfolgter Montage noch öffnen lässt! Darüber hinaus können Rollos als Raumteiler an der Decke montiert werden. Die im Lieferumfang enthaltenen Träger werden an die Decke geschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_72_1683633209_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_138_1677059003_450x450.webp",
                        explanation: {
                            title: "Montageart Fensterflügel",
                            text: [
                                "Die im Lieferumfang enthaltenen Träger werden an den Fensterflügel geschraubt. Berechnen Sie hier einen Überstand des Rollos über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie bitte beim gewünschten Überstand auf vorstehende Beschläge.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_74_1683633209_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Klemmträger",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_181_1677059012_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den Klemmträgern aus Metall mit Kunststoffgehäuse, können Sie das Rollo kinderleicht ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Klemmbereich: 6-26 mm. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_73_1678869105_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Kassettenart",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Ohne Kassette",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_200_1682414578_450x450.webp",
                        explanation: {
                            title: 'Träger "Magna"',
                            text: [
                                "Sie erhalten zwei hochwertige und stabile Träger aus Aluminium mit Abdeckkappen aus Kunststoff, in welche das Rollo einfach eingehängt wird.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_200_1682414578_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Halbkassette",
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_120_1677058983_450x450.webp",
                        explanation: {
                            title: 'Halbkassette "Coda""',
                            text: [
                                "Dieses Modell besticht durch die formschöne Kassette aus Aluminium. Die Kassette ist auch nach oben geschlossen und verhindert somit ein Verstauben des Rollos.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_91_1646387352_450x450.webp",
                        price: 29
                    },
                    {
                        title: "Kassette",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_100_1666613354_450x450.webp",
                        explanation: {
                            title: 'Kassette "Brutus"',
                            text: [
                                "Dieses Modell mit der klassischen, eckigen Kassette ist bis zu einer Breite von 440 cm erhältlich. Die Kassette ist auch nach oben geschlossen und verhindert somit ein Verstauben des Rollos.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_100_1666613354_450x450.webp",
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Wand"},
                                {"Montageposition":"Decke/Nische"},
                            ]
                        },
                        price: 39
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Kettenbedienung",
                        note: "meist gewählt",
                        defaultSelected: true, 
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_132_1677058996_450x450.webp",
                        explanation: {
                            title: "Kettenbedienung",
                            text: [
                                "Die Kette ermöglicht eine sehr komfortable und praktische Steuerung des Rollos. Das Rollo arretiert in jeder beliebigen Position. Es wird ein Kindersicherheitsclip zur Fixierung der Kette an der Wand mitgeliefert. Die Standard-Bedienlänge beträgt ca. 2/3 der Höhe des Rollos.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_68_1683105803_450x450.webp",
                        price: {
                            "PVC Standard 2/3" : 0,
                            "PVC 50cm" : 0,
                            "PVC 75cm" : 0,
                            "PVC 100cm" : 0,
                            "PVC 125cm" : 0,
                            "PVC 150cm" : 0,
                            "PVC 175cm" : 0,
                            "PVC 200cm" : 0,
                            "PVC 225cm" : 0,
                            "PVC 250cm" : 0,
                            "Metal Standard 2/3" : 24,
                            "Metal 50cm" : 24,
                            "Metal 75cm" : 24,
                            "Metal 100cm" : 24,
                            "Metal 125cm" : 24,
                            "Metal 150cm" : 24,
                            "Metal 175cm" : 24,
                            "Metal 200cm" : 24,
                            "Metal 225cm" : 24,
                            "Metal 250cm" : 24,
                        },
                        priceExplanation: "Kettenmaterial"
                    },
                    {
                        title: "Bedienschiene",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_205_1682414584_450x450.webp",
                        explanation: {
                            title: "Mittelzug ohne Kette",
                            text: [
                                "Die Bedienung beim sogenannten Springrollo erfolgt indem Sie die Unterschiene nach unten ziehen. Das Rollo verharrt in jeder beliebigen Position. Ein kurzes Ziehen nach unten lässt das Rollo selbstständig und gebremst nach oben gleiten. An der Unterschiene befindet sich keine Schnurverlängerung zur Bedienung.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_205_1682414584_450x450.webp",
                        price: 72,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Kassettenart": "Ohne Kassette"}
                            ]
                        },
                    },
                    {
                        title: "Akku-Motor",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_116_1682414573_450x450.webp",
                        explanation: {
                            title: "Akku-Motor",
                            text: [
                                'Alle Akku-Rollos können über die eigene "Motion-App" gesteuert werden (ausgenommen "Kassette Brutus L") - es ist kein Zubehör nötig. Auch mit einem kurzen Ziehen an einer Zugschnur fährt das Rollo nach unten, bzw. wieder nach oben. Das Rollo kann auch beliebig positioniert werden. Detaillierte technische Details finden Sie über das Menü "Rollo"-"Montageanleitungen".',
                                "Li-Ion-Akku",
                                "USB wiederaufladbar",
                                "Lieblingsposition programmierbar"
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_116_1682414573_450x450.webp",
                        price: 200,
                    },
                ]
            },
            {
                title: "Bedienseite",
                multichoice: false,
                checkAllowList: true,
                doNoDefaultSelection: false,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        conditionalSelected: true,
                        image: "https://wumbo.net/symbols/left-arrow/feature.png",
                        price: 0,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                                {"Bedienart": "Kettenbedienung PVC Standard 2/3"},
                                {"Bedienart": "Kettenbedienung PVC 50cm"},
                                {"Bedienart": "Kettenbedienung PVC 75cm"},
                                {"Bedienart": "Kettenbedienung PVC 100cm"},
                                {"Bedienart": "Kettenbedienung PVC 125cm"},
                                {"Bedienart": "Kettenbedienung PVC 150cm"},
                                {"Bedienart": "Kettenbedienung PVC 175cm"},
                                {"Bedienart": "Kettenbedienung PVC 200cm"},
                                {"Bedienart": "Kettenbedienung PVC 225cm"},
                                {"Bedienart": "Kettenbedienung PVC 250cm"},
                                {"Bedienart": "Kettenbedienung Metal Standard 2/3"},
                                {"Bedienart": "Kettenbedienung Metal 50cm"},
                                {"Bedienart": "Kettenbedienung Metal 75cm"},
                                {"Bedienart": "Kettenbedienung Metal 100cm"},
                                {"Bedienart": "Kettenbedienung Metal 125cm"},
                                {"Bedienart": "Kettenbedienung Metal 150cm"},
                                {"Bedienart": "Kettenbedienung Metal 175cm"},
                                {"Bedienart": "Kettenbedienung Metal 200cm"},
                                {"Bedienart": "Kettenbedienung Metal 225cm"},
                                {"Bedienart": "Kettenbedienung Metal 250cm"},
                            ]
                        },
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                                {"Bedienart": "Kettenbedienung PVC Standard 2/3"},
                                {"Bedienart": "Kettenbedienung PVC 50cm"},
                                {"Bedienart": "Kettenbedienung PVC 75cm"},
                                {"Bedienart": "Kettenbedienung PVC 100cm"},
                                {"Bedienart": "Kettenbedienung PVC 125cm"},
                                {"Bedienart": "Kettenbedienung PVC 150cm"},
                                {"Bedienart": "Kettenbedienung PVC 175cm"},
                                {"Bedienart": "Kettenbedienung PVC 200cm"},
                                {"Bedienart": "Kettenbedienung PVC 225cm"},
                                {"Bedienart": "Kettenbedienung PVC 250cm"},
                                {"Bedienart": "Kettenbedienung Metal Standard 2/3"},
                                {"Bedienart": "Kettenbedienung Metal 50cm"},
                                {"Bedienart": "Kettenbedienung Metal 75cm"},
                                {"Bedienart": "Kettenbedienung Metal 100cm"},
                                {"Bedienart": "Kettenbedienung Metal 125cm"},
                                {"Bedienart": "Kettenbedienung Metal 150cm"},
                                {"Bedienart": "Kettenbedienung Metal 175cm"},
                                {"Bedienart": "Kettenbedienung Metal 200cm"},
                                {"Bedienart": "Kettenbedienung Metal 225cm"},
                                {"Bedienart": "Kettenbedienung Metal 250cm"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Motor Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Ladekabel USB C",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        explanation: {
                            title: "Ladekabel ohne Netzteil",
                            text: [
                                "Es handelt sich um ein handelsübliches USB C Ladekabel (3 m Länge) ohne Netzteil. Das Rollo wird in der Regel zweimal jährlich geladen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        price: 10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "1 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        explanation: {
                            title: "1 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihr Rollo sehr einfach per Knopfdruck mit der Fernbedienung und können dieses unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        price: 19.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "5 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        explanation: {
                            title: "5 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        price: 49.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "15 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        explanation: {
                            title: "15 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        price: 69.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wand Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        explanation: {
                            title: "4 Kanal Wandfernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        price: 173.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Tisch Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        explanation: {
                            title: "4 Kanal Tisch-Fernbedienung",
                            text: [
                                "Mit dem Tischsender bedienen sIe Ihre Rollos ganz bequem vom Ess- oder Schreibtisch.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        price: 103.40,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Smart Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Wi-Fi Mini Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        explanation: {
                            title: "USB WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite auf 20 Meter - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Etage wird eine Mini Bridge benötigt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        price: 166.20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wi-Fi Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        explanation: {
                            title: "WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Haushalt ist eine WiFi Bridge ausreichend.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        price: 309.10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Domotica Box",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_104_1706781207_450x450.webp",
                        explanation: {
                            title: "Domotica Box",
                            text: [
                                "Erhöht die Reichweite - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_104_1706781207_450x450.webp",
                        price: 325.20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
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
                        title: "Montageschiene",
                        cancallable: true,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_99_1666613457_450x450.webp",
                        explanation: {
                            title: "Montageschiene",
                            text: [
                                "Die Montageschiene ermöglicht eine sehr einfache Montage - weniger bohren und einfacher positionieren! Es werden lediglich zwei Halterungen montiert, in welche das Montageprofil eingeclippt wird.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_99_1666613457_450x450.webp",
                        price: 35,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Kassettenart":"Ohne Kassette"},
                            ]
                        },
                    },
                    {
                        title: "Kettenbeschwerer",
                        cancallable: true,
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_121_1682414574_450x450.webp",
                        explanation: {
                            title: "Kettenbeschwerer",
                            text: [
                                "Mittels Kettenbeschwerer hängt vorzugsweise die PVC Kette schön straff herunter. Der mitgelieferte Kindersicherheitsclip zur Fixierung der Kette an der Wand kann schließlich auf eigene Verantwortung nicht montiert werden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_77_1646748144_450x450.webp",
                        price: 10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Kettenbedienung PVC Standard 2/3"},
                                {"Bedienart": "Kettenbedienung PVC 50cm"},
                                {"Bedienart": "Kettenbedienung PVC 75cm"},
                                {"Bedienart": "Kettenbedienung PVC 100cm"},
                                {"Bedienart": "Kettenbedienung PVC 125cm"},
                                {"Bedienart": "Kettenbedienung PVC 150cm"},
                                {"Bedienart": "Kettenbedienung PVC 175cm"},
                                {"Bedienart": "Kettenbedienung PVC 200cm"},
                                {"Bedienart": "Kettenbedienung PVC 225cm"},
                                {"Bedienart": "Kettenbedienung PVC 250cm"},
                                {"Bedienart": "Kettenbedienung Metal Standard 2/3"},
                                {"Bedienart": "Kettenbedienung Metal 50cm"},
                                {"Bedienart": "Kettenbedienung Metal 75cm"},
                                {"Bedienart": "Kettenbedienung Metal 100cm"},
                                {"Bedienart": "Kettenbedienung Metal 125cm"},
                                {"Bedienart": "Kettenbedienung Metal 150cm"},
                                {"Bedienart": "Kettenbedienung Metal 175cm"},
                                {"Bedienart": "Kettenbedienung Metal 200cm"},
                                {"Bedienart": "Kettenbedienung Metal 225cm"},
                                {"Bedienart": "Kettenbedienung Metal 250cm"},
                            ]
                        },
                    },
                    {
                        title: "Seitenführung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_204_1682414582_450x450.webp",
                        explanation: {
                            title: "Seitenführung",
                            text: [
                                "...oder auch Pendelsicherung genannt, verhindert das unkontrollierte Auspendeln des Rollos. Diese ist besonders empfehlenswert bei beweglichen Fenstern und Türen oder auch bei Luftzug. Es kommt je nach Montageart entweder ein Spann-Winkel (Wand, Decke), Spann-Schuh (in der Fensternische) oder ein Klemmträger zum Einsatz.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_76_1718714696_450x450.webp",
                        price: 24,
                    },
                ]
            },
            {
                title: "Träger-/Kassettenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Weiß",
                        defaultSelected: true,
                        image: "rgb(243, 246, 246)",
                        price: 0
                    },
                    {
                        title: "Grau",
                        image: "rgb(161, 161, 160)",
                        price: 0
                    },
                    {
                        title: "Anthrazit",
                        image: "rgb(90, 90, 90)",
                        price: 0
                    },
                    {
                        title: "Schwarz",
                        image: "rgb(10, 10, 10)",
                        price: 0
                    },                    
                ]
            },
        ],
        saleMultiplier: 10 / 4,
        defaultHeight: 700,
        defaultWidth: 400,
        productDetailUrl: "/api/product/Rollo/Premium Rollo",
        requestCategory: "PremiumRollo",
        measurementUrl: "/messanleitung/rollo",
        EXTERNAL_URL: "/api/external-products/colors/PremiumRollo/",
        subcategoryTitle: "",
        blendcolorTitle: "Träger-/Kassettenfarbe",
        freeSamplingTitle: "Stoffmuster Premium Rollo",
        assemblyInfo: {
            name: "Premium Rollo",
            link: "/montageanleitung/rollo"
        },
        cartName: "Premium Rollo"
    },
    "AkkuRollo": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4622_1688032123_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4623_1688032155_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4624_1688032182_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4625_1688032212_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4626_1688032264_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4627_1688032295_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4628_1688032387_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4629_1688032418_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Wand",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_117_1677058979_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand des Rollos über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack mind. 5-10 cm. Die im Lieferumfang enthaltenen Träger werden an die Wand geschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_71_1678873497_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_124_1677058988_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensterlaibung",
                            text: [
                                "Beachten Sie bei der Montage in der Fensternische die Höhe des aufgerollten Rollos, sodass sich das Fenster nach erfolgter Montage noch öffnen lässt! Darüber hinaus können Rollos als Raumteiler an der Decke montiert werden. Die im Lieferumfang enthaltenen Träger werden an die Decke geschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_72_1683633209_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_138_1677059003_450x450.webp",
                        explanation: {
                            title: "Montageart Fensterflügel",
                            text: [
                                "Die im Lieferumfang enthaltenen Träger werden an den Fensterflügel geschraubt. Berechnen Sie hier einen Überstand des Rollos über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie bitte beim gewünschten Überstand auf vorstehende Beschläge.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_74_1683633209_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Klemmträger",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_181_1677059012_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den Klemmträgern aus Metall mit Kunststoffgehäuse, können Sie das Rollo kinderleicht ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Klemmbereich: 6-26 mm. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_73_1678869105_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Kassettenart",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Ohne Kassette",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_200_1682414578_450x450.webp",
                        explanation: {
                            title: 'Träger "Magna"',
                            text: [
                                "Sie erhalten zwei hochwertige und stabile Träger aus Aluminium mit Abdeckkappen aus Kunststoff, in welche das Rollo einfach eingehängt wird.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_200_1682414578_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Halbkassette",
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_120_1677058983_450x450.webp",
                        explanation: {
                            title: 'Halbkassette "Coda""',
                            text: [
                                "Dieses Modell besticht durch die formschöne Kassette aus Aluminium. Die Kassette ist auch nach oben geschlossen und verhindert somit ein Verstauben des Rollos.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_91_1646387352_450x450.webp",
                        price: 29
                    },
                    {
                        title: "Kassette",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_100_1666613354_450x450.webp",
                        explanation: {
                            title: 'Kassette "Brutus"',
                            text: [
                                "Dieses Modell mit der klassischen, eckigen Kassette ist bis zu einer Breite von 440 cm erhältlich. Die Kassette ist auch nach oben geschlossen und verhindert somit ein Verstauben des Rollos.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_100_1666613354_450x450.webp",
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Wand"},
                                {"Montageposition":"Decke/Nische"},
                            ]
                        },
                        price: 39
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                checkAllowList: false,
                hardcodedSelected: true,
                doNoDefaultSelection: false,
                options: [
                    {
                        title: "Akku-Motor",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_116_1682414573_450x450.webp",
                        explanation: {
                            title: "Akku-Motor",
                            text: [
                                'Alle Akku-Rollos können über die eigene "Motion-App" gesteuert werden (ausgenommen "Kassette Brutus L") - es ist kein Zubehör nötig. Auch mit einem kurzen Ziehen an einer Zugschnur fährt das Rollo nach unten, bzw. wieder nach oben. Das Rollo kann auch beliebig positioniert werden. Detaillierte technische Details finden Sie über das Menü "Rollo"-"Montageanleitungen".',
                                "Li-Ion-Akku",
                                "USB wiederaufladbar",
                                "Lieblingsposition programmierbar"
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_116_1682414573_450x450.webp",
                        price: 200,
                    },
                ]
            },
            {
                title: "Bedienseite",
                multichoice: false,
                checkAllowList: false,
                doNoDefaultSelection: false,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        conditionalSelected: true,
                        image: "https://wumbo.net/symbols/left-arrow/feature.png",
                        price: 0,
                        allows: {},
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0,
                        allows: {},
                    },
                ]
            },
            {
                title: "Optionales Motor Zubehör",
                multichoice: true,
                checkAllowList: false,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Ladekabel USB C",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        explanation: {
                            title: "Ladekabel ohne Netzteil",
                            text: [
                                "Es handelt sich um ein handelsübliches USB C Ladekabel (3 m Länge) ohne Netzteil. Das Rollo wird in der Regel zweimal jährlich geladen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        price: 10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "1 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        explanation: {
                            title: "1 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihr Rollo sehr einfach per Knopfdruck mit der Fernbedienung und können dieses unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        price: 19.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "5 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        explanation: {
                            title: "5 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        price: 49.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "15 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        explanation: {
                            title: "15 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        price: 69.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wand Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        explanation: {
                            title: "4 Kanal Wandfernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        price: 173.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Tisch Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        explanation: {
                            title: "4 Kanal Tisch-Fernbedienung",
                            text: [
                                "Mit dem Tischsender bedienen sIe Ihre Rollos ganz bequem vom Ess- oder Schreibtisch.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        price: 103.40,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Smart Zubehör",
                multichoice: true,
                checkAllowList: false,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Wi-Fi Mini Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        explanation: {
                            title: "USB WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite auf 20 Meter - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Etage wird eine Mini Bridge benötigt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        price: 166.20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wi-Fi Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        explanation: {
                            title: "WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Haushalt ist eine WiFi Bridge ausreichend.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        price: 309.10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Domotica Box",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_104_1706781207_450x450.webp",
                        explanation: {
                            title: "Domotica Box",
                            text: [
                                "Erhöht die Reichweite - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_104_1706781207_450x450.webp",
                        price: 325.20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
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
                        title: "Montageschiene",
                        cancallable: true,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_99_1666613457_450x450.webp",
                        explanation: {
                            title: "Montageschiene",
                            text: [
                                "Die Montageschiene ermöglicht eine sehr einfache Montage - weniger bohren und einfacher positionieren! Es werden lediglich zwei Halterungen montiert, in welche das Montageprofil eingeclippt wird.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_99_1666613457_450x450.webp",
                        price: 35,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Kassettenart":"Ohne Kassette"},
                            ]
                        },
                    },
                    {
                        title: "Seitenführung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_204_1682414582_450x450.webp",
                        explanation: {
                            title: "Seitenführung",
                            text: [
                                "...oder auch Pendelsicherung genannt, verhindert das unkontrollierte Auspendeln des Rollos. Diese ist besonders empfehlenswert bei beweglichen Fenstern und Türen oder auch bei Luftzug. Es kommt je nach Montageart entweder ein Spann-Winkel (Wand, Decke), Spann-Schuh (in der Fensternische) oder ein Klemmträger zum Einsatz.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_76_1718714696_450x450.webp",
                        price: 24,
                    },
                ]
            },
            {
                title: "Träger-/Kassettenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Weiß",
                        defaultSelected: true,
                        image: "rgb(243, 246, 246)",
                        price: 0
                    },
                    {
                        title: "Grau",
                        image: "rgb(161, 161, 160)",
                        price: 0
                    },
                    {
                        title: "Anthrazit",
                        image: "rgb(90, 90, 90)",
                        price: 0
                    },
                    {
                        title: "Schwarz",
                        image: "rgb(10, 10, 10)",
                        price: 0
                    },
                ]
            },

        ],
        saleMultiplier: 10 / 4,
        defaultHeight: 700,
        defaultWidth: 400,

        productDetailUrl: "/api/product/Rollo/Smart Akku Rollo",
        requestCategory: "PremiumRollo",
        measurementUrl: "/messanleitung/rollo",
        EXTERNAL_URL: "/api/external-products/colors/PremiumRollo/",
        subcategoryTitle: "",
        blendcolorTitle: "Träger-/Kassettenfarbe",
        freeSamplingTitle: "Stoffmuster Premium Rollo",
        assemblyInfo: {
            name: "Premium Akku Rollo",
            link: "/montageanleitung/rollo"
        },
        cartName: "Premium Akku Rollo"
    },
    "Doppelrollo": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4621_1688032087_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4620_1688032059_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4619_1688032034_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4618_1688032009_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4617_1688031983_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4616_1688031954_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Wand",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_117_1677058979_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand des Rollos über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack mind. 5-10 cm. Die im Lieferumfang enthaltenen Träger werden an die Wand geschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_71_1678873497_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_124_1677058988_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensterlaibung",
                            text: [
                                "Beachten Sie bei der Montage in der Fensternische die Höhe des aufgerollten Rollos, sodass sich das Fenster nach erfolgter Montage noch öffnen lässt! Darüber hinaus können Rollos als Raumteiler an der Decke montiert werden. Die im Lieferumfang enthaltenen Träger werden an die Decke geschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_72_1683633209_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_138_1677059003_450x450.webp",
                        explanation: {
                            title: "Montageart Fensterflügel",
                            text: [
                                "Die im Lieferumfang enthaltenen Träger werden an den Fensterflügel geschraubt. Berechnen Sie hier einen Überstand des Rollos über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie bitte beim gewünschten Überstand auf vorstehende Beschläge.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_74_1683633209_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Klemmträger",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_181_1677059012_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den Klemmträgern aus Metall mit Kunststoffgehäuse, können Sie das Rollo kinderleicht ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Klemmbereich: 6-26 mm. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_73_1678869105_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Kassettenart",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Ohne Kassette",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_200_1682414578_450x450.webp",
                        explanation: {
                            title: 'Träger "Magna"',
                            text: [
                                "Sie erhalten zwei hochwertige und stabile Träger aus Aluminium mit Abdeckkappen aus Kunststoff, in welche das Rollo einfach eingehängt wird.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_200_1682414578_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Halbkassette",
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_120_1677058983_450x450.webp",
                        explanation: {
                            title: 'Halbkassette "Coda""',
                            text: [
                                "Dieses Modell besticht durch die formschöne Kassette aus Aluminium. Die Kassette ist auch nach oben geschlossen und verhindert somit ein Verstauben des Rollos.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_91_1646387352_450x450.webp",
                        price: 29
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Kettenbedienung",
                        note: "meist gewählt",
                        defaultSelected: true, 
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_132_1677058996_450x450.webp",
                        explanation: {
                            title: "Kettenbedienung",
                            text: [
                                "Die Kette ermöglicht eine sehr komfortable und praktische Steuerung des Rollos. Das Rollo arretiert in jeder beliebigen Position. Es wird ein Kindersicherheitsclip zur Fixierung der Kette an der Wand mitgeliefert. Die Standard-Bedienlänge beträgt ca. 2/3 der Höhe des Rollos.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_68_1683105803_450x450.webp",
                        price: {
                            "PVC Standard 2/3" : 0,
                            "PVC 50cm" : 0,
                            "PVC 75cm" : 0,
                            "PVC 100cm" : 0,
                            "PVC 125cm" : 0,
                            "PVC 150cm" : 0,
                            "PVC 175cm" : 0,
                            "PVC 200cm" : 0,
                            "PVC 225cm" : 0,
                            "PVC 250cm" : 0,
                            "Metal Standard 2/3" : 24,
                            "Metal 50cm" : 24,
                            "Metal 75cm" : 24,
                            "Metal 100cm" : 24,
                            "Metal 125cm" : 24,
                            "Metal 150cm" : 24,
                            "Metal 175cm" : 24,
                            "Metal 200cm" : 24,
                            "Metal 225cm" : 24,
                            "Metal 250cm" : 24,
                        },
                        priceExplanation: "Kettenmaterial"
                    },
                    {
                        title: "Akku-Motor",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_116_1682414573_450x450.webp",
                        explanation: {
                            title: "Akku-Motor",
                            text: [
                                'Alle Akku-Rollos können über die eigene "Motion-App" gesteuert werden (ausgenommen "Kassette Brutus L") - es ist kein Zubehör nötig. Auch mit einem kurzen Ziehen an einer Zugschnur fährt das Rollo nach unten, bzw. wieder nach oben. Das Rollo kann auch beliebig positioniert werden. Detaillierte technische Details finden Sie über das Menü "Rollo"-"Montageanleitungen".',
                                "Li-Ion-Akku",
                                "USB wiederaufladbar",
                                "Lieblingsposition programmierbar"
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_116_1682414573_450x450.webp",
                        price: 300,
                    },
                ]
            },
            {
                title: "Bedienseite",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        image: "https://wumbo.net/symbols/left-arrow/feature.png",
                        price: 0,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                                {"Bedienart": "Kettenbedienung PVC Standard 2/3"},
                                {"Bedienart": "Kettenbedienung PVC 50cm"},
                                {"Bedienart": "Kettenbedienung PVC 75cm"},
                                {"Bedienart": "Kettenbedienung PVC 100cm"},
                                {"Bedienart": "Kettenbedienung PVC 125cm"},
                                {"Bedienart": "Kettenbedienung PVC 150cm"},
                                {"Bedienart": "Kettenbedienung PVC 175cm"},
                                {"Bedienart": "Kettenbedienung PVC 200cm"},
                                {"Bedienart": "Kettenbedienung PVC 225cm"},
                                {"Bedienart": "Kettenbedienung PVC 250cm"},
                                {"Bedienart": "Kettenbedienung Metal Standard 2/3"},
                                {"Bedienart": "Kettenbedienung Metal 50cm"},
                                {"Bedienart": "Kettenbedienung Metal 75cm"},
                                {"Bedienart": "Kettenbedienung Metal 100cm"},
                                {"Bedienart": "Kettenbedienung Metal 125cm"},
                                {"Bedienart": "Kettenbedienung Metal 150cm"},
                                {"Bedienart": "Kettenbedienung Metal 175cm"},
                                {"Bedienart": "Kettenbedienung Metal 200cm"},
                                {"Bedienart": "Kettenbedienung Metal 225cm"},
                                {"Bedienart": "Kettenbedienung Metal 250cm"},
                            ]
                        },
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Akku-Motor"},
                                {"Bedienart": "Kettenbedienung PVC Standard 2/3"},
                                {"Bedienart": "Kettenbedienung PVC 50cm"},
                                {"Bedienart": "Kettenbedienung PVC 75cm"},
                                {"Bedienart": "Kettenbedienung PVC 100cm"},
                                {"Bedienart": "Kettenbedienung PVC 125cm"},
                                {"Bedienart": "Kettenbedienung PVC 150cm"},
                                {"Bedienart": "Kettenbedienung PVC 175cm"},
                                {"Bedienart": "Kettenbedienung PVC 200cm"},
                                {"Bedienart": "Kettenbedienung PVC 225cm"},
                                {"Bedienart": "Kettenbedienung PVC 250cm"},
                                {"Bedienart": "Kettenbedienung Metal Standard 2/3"},
                                {"Bedienart": "Kettenbedienung Metal 50cm"},
                                {"Bedienart": "Kettenbedienung Metal 75cm"},
                                {"Bedienart": "Kettenbedienung Metal 100cm"},
                                {"Bedienart": "Kettenbedienung Metal 125cm"},
                                {"Bedienart": "Kettenbedienung Metal 150cm"},
                                {"Bedienart": "Kettenbedienung Metal 175cm"},
                                {"Bedienart": "Kettenbedienung Metal 200cm"},
                                {"Bedienart": "Kettenbedienung Metal 225cm"},
                                {"Bedienart": "Kettenbedienung Metal 250cm"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Motor Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Ladekabel USB C",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        explanation: {
                            title: "Ladekabel ohne Netzteil",
                            text: [
                                "Es handelt sich um ein handelsübliches USB C Ladekabel (3 m Länge) ohne Netzteil. Das Rollo wird in der Regel zweimal jährlich geladen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        price: 10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "1 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        explanation: {
                            title: "1 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihr Rollo sehr einfach per Knopfdruck mit der Fernbedienung und können dieses unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        price: 19.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "5 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        explanation: {
                            title: "5 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        price: 49.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "15 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        explanation: {
                            title: "15 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        price: 69.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wand Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        explanation: {
                            title: "4 Kanal Wandfernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        price: 173.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Tisch Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        explanation: {
                            title: "4 Kanal Tisch-Fernbedienung",
                            text: [
                                "Mit dem Tischsender bedienen sIe Ihre Rollos ganz bequem vom Ess- oder Schreibtisch.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        price: 103.40,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Smart Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Wi-Fi Mini Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        explanation: {
                            title: "USB WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite auf 20 Meter - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Etage wird eine Mini Bridge benötigt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        price: 166.20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wi-Fi Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        explanation: {
                            title: "WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Haushalt ist eine WiFi Bridge ausreichend.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        price: 309.10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Domotica Box",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_104_1706781207_450x450.webp",
                        explanation: {
                            title: "Domotica Box",
                            text: [
                                "Erhöht die Reichweite - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_104_1706781207_450x450.webp",
                        price: 325.20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
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
                        title: "Montageschiene",
                        cancallable: false,
                        defaultSelected: true,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_99_1666613457_450x450.webp",
                        explanation: {
                            title: "Montageschiene",
                            text: [
                                "Die Montageschiene ermöglicht eine sehr einfache Montage - weniger bohren und einfacher positionieren! Es werden lediglich zwei Halterungen montiert, in welche das Montageprofil eingeclippt wird.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_99_1666613457_450x450.webp",
                        price: 0,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Kassettenart":"Ohne Kassette"},
                            ]
                        },
                    },
                    {
                        title: "Kettenbeschwerer",
                        cancallable: true,
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_121_1682414574_450x450.webp",
                        explanation: {
                            title: "Kettenbeschwerer",
                            text: [
                                "Mittels Kettenbeschwerer hängt vorzugsweise die PVC Kette schön straff herunter. Der mitgelieferte Kindersicherheitsclip zur Fixierung der Kette an der Wand kann schließlich auf eigene Verantwortung nicht montiert werden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_77_1646748144_450x450.webp",
                        price: 10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Kettenbedienung PVC Standard 2/3"},
                                {"Bedienart": "Kettenbedienung PVC 50cm"},
                                {"Bedienart": "Kettenbedienung PVC 75cm"},
                                {"Bedienart": "Kettenbedienung PVC 100cm"},
                                {"Bedienart": "Kettenbedienung PVC 125cm"},
                                {"Bedienart": "Kettenbedienung PVC 150cm"},
                                {"Bedienart": "Kettenbedienung PVC 175cm"},
                                {"Bedienart": "Kettenbedienung PVC 200cm"},
                                {"Bedienart": "Kettenbedienung PVC 225cm"},
                                {"Bedienart": "Kettenbedienung PVC 250cm"},
                                {"Bedienart": "Kettenbedienung Metal Standard 2/3"},
                                {"Bedienart": "Kettenbedienung Metal 50cm"},
                                {"Bedienart": "Kettenbedienung Metal 75cm"},
                                {"Bedienart": "Kettenbedienung Metal 100cm"},
                                {"Bedienart": "Kettenbedienung Metal 125cm"},
                                {"Bedienart": "Kettenbedienung Metal 150cm"},
                                {"Bedienart": "Kettenbedienung Metal 175cm"},
                                {"Bedienart": "Kettenbedienung Metal 200cm"},
                                {"Bedienart": "Kettenbedienung Metal 225cm"},
                                {"Bedienart": "Kettenbedienung Metal 250cm"},
                            ]
                        },
                    },
                    {
                        title: "Seitenführung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_204_1682414582_450x450.webp",
                        explanation: {
                            title: "Seitenführung",
                            text: [
                                "...oder auch Pendelsicherung genannt, verhindert das unkontrollierte Auspendeln des Rollos. Diese ist besonders empfehlenswert bei beweglichen Fenstern und Türen oder auch bei Luftzug. Es kommt je nach Montageart entweder ein Spann-Winkel (Wand, Decke), Spann-Schuh (in der Fensternische) oder ein Klemmträger zum Einsatz.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_76_1718714696_450x450.webp",
                        price: 24,
                    },
                ]
            },
            {
                title: "Träger-/Kassettenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Weiß",
                        defaultSelected: true,
                        image: "rgb(243, 246, 246)",
                        price: 0
                    },
                    {
                        title: "Grau",
                        image: "rgb(161, 161, 160)",
                        price: 0
                    },
                    {
                        title: "Anthrazit",
                        image: "rgb(90, 90, 90)",
                        price: 0
                    },
                    {
                        title: "Schwarz",
                        image: "rgb(10, 10, 10)",
                        price: 0
                    },                    
                ]
            },
        ],
        saleMultiplier: 12 / 4,
        subcategoryTitle: "",
        blendcolorTitle: "Träger-/Kassettenfarbe",
        productDetailUrl: "/api/product/Rollo/Doppel Rollo",
        measurementUrl: "/messanleitung/rollo",
        EXTERNAL_URL: "/api/external-products/colors/Doppelrollo/",
        requestCategory: "Doppelrollo",
        defaultHeight: 1500,
        defaultWidth: 1000,
        freeSamplingTitle: "Stoffmuster Premium Doppelrollo",
        assemblyInfo: {
            name: "Premium Doppelrollo",
            link: "/montageanleitung/rollo"
        },
        cartName: "Premium Doppelrollo"
    },
    "BasicRollo": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4615_1688031910_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4614_1688031879_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4613_1688031847_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/300000/files/204_Image_4612_1688031804_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Wand",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_117_1677058979_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand des Rollos über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack mind. 5-10 cm. Die im Lieferumfang enthaltenen Träger werden an die Wand geschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_71_1678873497_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_124_1677058988_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensterlaibung",
                            text: [
                                "Beachten Sie bei der Montage in der Fensternische die Höhe des aufgerollten Rollos, sodass sich das Fenster nach erfolgter Montage noch öffnen lässt! Darüber hinaus können Rollos als Raumteiler an der Decke montiert werden. Die im Lieferumfang enthaltenen Träger werden an die Decke geschraubt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_72_1683633209_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_138_1677059003_450x450.webp",
                        explanation: {
                            title: "Montageart Fensterflügel",
                            text: [
                                "Die im Lieferumfang enthaltenen Träger werden an den Fensterflügel geschraubt. Berechnen Sie hier einen Überstand des Rollos über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie bitte beim gewünschten Überstand auf vorstehende Beschläge.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_74_1683633209_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Klemmträger",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_181_1677059012_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den Klemmträgern aus Metall mit Kunststoffgehäuse, können Sie das Rollo kinderleicht ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Klemmbereich: 6-26 mm. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_73_1678869105_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Kettenbedienung",
                        note: "meist gewählt",
                        defaultSelected: true, 
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_132_1677058996_450x450.webp",
                        explanation: {
                            title: "Kettenbedienung",
                            text: [
                                "Die Kette ermöglicht eine sehr komfortable und praktische Steuerung des Rollos. Das Rollo arretiert in jeder beliebigen Position. Es wird ein Kindersicherheitsclip zur Fixierung der Kette an der Wand mitgeliefert. Die Standard-Bedienlänge beträgt ca. 2/3 der Höhe des Rollos.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_68_1683105803_450x450.webp",
                        price: {
                            "Standard 2/3" : 0,
                            "50cm" : 0,
                            "75cm" : 0,
                            "100cm" : 0,
                            "125cm" : 0,
                            "150cm" : 0,
                            "175cm" : 0,
                            "200cm" : 0,
                            "225cm" : 0,
                            "250cm" : 0,
                        },
                        priceExplanation: "Kettenmaterial"
                    },
                ]
            },
            {
                title: "Bedienseite",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Links",
                        defaultSelected: true,
                        image: "https://wumbo.net/symbols/left-arrow/feature.png",
                        price: 0,
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0,
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
                        title: "Kettenbeschwerer",
                        cancallable: true,
                        note: "sehr beliebt",
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_121_1682414574_450x450.webp",
                        explanation: {
                            title: "Kettenbeschwerer",
                            text: [
                                "Mittels Kettenbeschwerer hängt vorzugsweise die PVC Kette schön straff herunter. Der mitgelieferte Kindersicherheitsclip zur Fixierung der Kette an der Wand kann schließlich auf eigene Verantwortung nicht montiert werden.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_77_1646748144_450x450.webp",
                        price: 10,
                    },
                    {
                        title: "Seitenführung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/210_Icon_204_1682414582_450x450.webp",
                        explanation: {
                            title: "Seitenführung",
                            text: [
                                "...oder auch Pendelsicherung genannt, verhindert das unkontrollierte Auspendeln des Rollos. Diese ist besonders empfehlenswert bei beweglichen Fenstern und Türen oder auch bei Luftzug. Es kommt je nach Montageart entweder ein Spann-Winkel (Wand, Decke), Spann-Schuh (in der Fensternische) oder ein Klemmträger zum Einsatz.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/200_Image_76_1718714696_450x450.webp",
                        price: 24,
                    },
                ]
            },
            {
                title: "Träger-/Kassettenfarbe",
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
        saleMultiplier: 10 / 4,
        defaultHeight: 700,
        defaultWidth: 300,
        productDetailUrl: "/api/product/Rollo/Basic Rollo",
        requestCategory: "BasicRollo",
        measurementUrl: "/messanleitung/rollo",
        EXTERNAL_URL: "/api/external-products/colors/BasicRollo/",
        subcategoryTitle: "",
        blendcolorTitle: "Träger-/Kassettenfarbe",
        freeSamplingTitle: "Stoffmuster Basic Rollo",
        assemblyInfo: {
            name: "Basic Rollo",
            link: "/montageanleitung/rollo"
        },
        cartName: "Basic Rollo"
    },
    "WintergartenPlissee": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4604_1688031559_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4603_1688031520_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/200000/files/204_Image_4602_1688031486_1000x1000.webp",
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
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_110_1677058932_450x450.webp",
                        explanation: {
                            title: "Montage zwischen den Sparren",
                            text: [
                                "Die Ober- und Unterschiene werden mit speziellen Clips befestigt. Mit einer dritten Schiene bedienen Sie das Plissee kinderleicht und bringen es in die gewünschte Position.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_108_1683102803_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_111_1677058934_450x450.webp",
                        explanation: {
                            title: "Montage auf den Sparren",
                            text: [
                                "Die Ober- und Unterschiene werden mit speziellen Clips befestigt. Mit einer dritten Schiene bedienen Sie das Plissee kinderleicht und bringen es in die gewünschte Position.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/200_Image_114_1683102803_450x450.webp",
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
                        defaultSelected: true, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_3_1666613404_450x450.webp",
                        explanation: {
                            title: "Abspannschuhe: Glasfalzmontage",
                            text: [
                                "Die Standard-Befestigungsart! Die im Lieferumfang enthaltenen Abspannschuhe werden mit einer kleinen Schraube im Glasfalz verschraubt (Schrauben inkl.). Der Glasfalz kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei den Sonderform-Modellen wird das Plissee oben mit Deckenclips verschraubt und nach unten mit Abspannschuhen verspannt."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_3_1666613404_450x450.webp",
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
                        note: "meist gewählt",
                        defaultSelected: true, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_29_1666613422_450x450.webp",
                        explanation: {
                            title: "Winkelträger: Wand.- Fensterflügelmontage",
                            text: [
                                "Mit dem Winkelträger kann das Plissee an der Wand oder am Fensterflügel verspannt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/200000/files/210_Icon_29_1666613422_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Wand"},
                            ]
                        },
                        price: 0
                    },
                ]
            },
            {
                title: "Zubehör",
                multichoice: true,
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
                        title: "Anthrazit",
                        image: "rgb(90, 90, 90)",
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
                ]
            },
        ],
        defaultHeight: 500,
        defaultWidth: 300,
        saleMultiplier: 10 / 4,
        blendcolorTitle: "Schienenfarbe",
        measurementUrl: "/messanleitung/plissee",
        EXTERNAL_URL: "/api/external-products/colors/PlisseeWintergarten/",
        requestCategory: "PlisseeWintergarten",
        productDetailUrl: "/api/product/Plissee/Wintergarten Plissee",
        subcategoryTitle: "PlisseeWintergarten",
        freeSamplingTitle: "Stoffmuster Premium Plissee",
        assemblyInfo: {
            name: "Wintergarten Plissee",
            link: "/montageanleitung/plissee"
        },
        cartName: "Premium Plissee für Wintergarten",
    },
    "PremiumJalousie25mm": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4535_1688029109_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4536_1688029134_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4538_1688029202_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4539_1688029222_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Oberkastenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Farbton angepasst",
                        defaultSelected: true,
                        image: "linear-gradient(90deg, rgb(239, 77, 78) 0%, rgb(62, 134, 180) 50%, rgb(110, 212, 86) 100%)",
                        price: 0
                    }
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Glasfalz",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_79_1711541149_450x450.webp",
                        explanation: {
                            title: "Montage innerhalb der Glasleisten im Glasfalz",
                            text: [
                                "Dies ist die optimale und beliebteste Montageart für Jalousien.",
                                "Die Jalousie wird mittels, im Lieferumfang enthaltenen, Trägern nach oben in der Glasleiste verschraubt (Schrauben inkl.). Der Glasleiste kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Die Mindest-Glasleistentiefe beträgt 12 mm. Dies ist die Tiefe von der Rahmenvorderkante zum Glas. Bei der Montage mit Klebeleiste ist keine Mindesttiefe nötig.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_32_1683632163_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_65_1666613263_450x450.webp",
                        explanation: {
                            title: "Montage direkt am Fensterflügel",
                            text: [
                                "Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm.",
                                "Berechnen Sie hier einen Überstand der Jalousie über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie hier auf vorstehende Beschläge!",
                                "Die Montage erfolgt mit Winkelträgern (geschraubt) oder Klemmträgern (geklemmt)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_36_1683704087_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_67_1666613280_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand der Jalousie über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack 5-10 cm. Die Jalousie wird mit, im Lieferumfang enthaltenen, Winkelträgern an der Wand verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_33_1683704072_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_60_1666613281_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensternische",
                            text: [
                                "Achten Sie bei dieser Montageart auf die Pakethöhe (Höhe der aufgezogenen Jalousie), damit sich das Fenster nach erfolgter Montage noch öffnen lässt. Die Jalousie wird mit, im Lieferumfang enthaltenen Trägern an der Decke verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug).",
                                "Darüber hinaus können Jalousien als Raumteiler an der Decke angebracht werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_34_1683703954_450x450.webp",
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
                        title: "Deckenträger",
                        note: "meist gewählt",
                        defaultSelected: true, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
                        explanation: {
                            title: "Deckenträger",
                            text: [
                                "Die Deckenträger werden bei der Montage im Glasfalz nach oben in die Glasleiste verschraubt - diese kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei der Deckenmontage werden die Träger in die Decke oder Nische verschraubt (Schrauben stets inkl.)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
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
                        title: "Winkelträger",
                        note: "meist gewählt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
                        explanation: {
                            title: "Winkelträger",
                            text: [
                                "Mit den Winkelträgern kann die Jalousie an der Wand oder am Fensterflügel befestigt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
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
                        title: "Klemmträger",
                        note: "sehr beliebt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_115_1711541150_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den hochwertigen Klemmträgern aus Metall mit Kunststoffgehäuse können Sie die Jalousien ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Achten Sie insb. bei Holzfenstern darauf, dass die Träger am Fensterflügel montiert werden können (umlaufende Dichtung).",
                                "Die Klemmbreite beträgt 6-21 mm.",
                                "Zwei weitere Klemmträger als Pendelsicherung an der Unterseite des Fensterflügels verhindern das Auspendeln der Jalousie. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt.",
                                "Weitere Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_35_1683632163_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Fensterflügel"},
                            ]
                        },
                        price: 38.40
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Schnur / Wendestab",
                        defaultSelected: true,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        explanation: {
                            title: "Schnur/Wendestab",
                            text: [
                                "Die Schnur dient zum Heben und Senken der Lamellen. Mit dem Wendestab wird die Neigung der Lamellen verändert, um den Lichteinfall zu regulieren.",
                                "Durch das eingearbeitete Schnurschloss kann die Jalousie in jeder beliebigen Stellung arretiert werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Kettenbedienung",
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        explanation: {
                            title: "Kettenbedienung",
                            text: [
                                "Mit der Kette heben und senken Sie die Jalousie. Wenn Sie in die Gegenrichtung ziehen, neigen Sie die Lamellen. Mit der integrierten Bremse arretiert die Jalousie in jeder Position, ohne dass Sie die Kette fixieren müssen. Die Standard-Bedienlänge beträgt ca. 2/3 der Jalousienhöhe, jedoch mindestens 75 cm.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        price: {
                            "PVC Standard 2/3" : 76,
                            "PVC 50cm" : 76,
                            "PVC 75cm" : 76,
                            "PVC 100cm" : 76,
                            "PVC 125cm" : 76,
                            "PVC 150cm" : 76,
                            "PVC 175cm" : 76,
                            "PVC 200cm" : 76,
                            "PVC 225cm" : 76,
                            "PVC 250cm" : 76,
                            "Metall Standard 2/3" : 96,
                            "Metall 50cm" : 96,
                            "Metall 75cm" : 96,
                            "Metall 100cm" : 96,
                            "Metall 125cm" : 96,
                            "Metall 150cm" : 96,
                            "Metall 175cm" : 96,
                            "Metall 200cm" : 96,
                            "Metall 225cm" : 96,
                            "Metall 250cm" : 96,
                        },
                        priceExplanation: "Kettenmaterial"
                    },
                    {
                        title: "Akku-Motor",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_215_1709801128_450x450.webp",
                        explanation: {
                            title: "Akku-Motor",
                            text: [
                                'Alle Akku-Jalousien können über die eigene "Motion-App" (kein Zubehör nötig) gesteuert werden oder mittels Fernbedienung. Detaillierte technische Details finden Sie über das Menü "Jalousie"-"Montageanleitungen".',
                                "Li-Ion-Akku",
                                "USB wiederaufladbar",
                                "Lieblingsposition programmierbar"
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_215_1709801128_450x450.webp",
                        forbids: {
                            type: "single",
                            dependecies: [
                                {"Befestigungsart":"Klebeleiste"},
                            ]
                        },
                        price: 222.90
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
                title: "Optionales Motor Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Ladekabel USB C",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        explanation: {
                            title: "Ladekabel ohne Netzteil",
                            text: [
                                "Es handelt sich um ein handelsübliches USB C Ladekabel (3 m Länge) ohne Netzteil. Das Rollo wird in der Regel zweimal jährlich geladen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        price: 11.10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "1 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        explanation: {
                            title: "1 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihr Rollo sehr einfach per Knopfdruck mit der Fernbedienung und können dieses unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        price: 31.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "5 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        explanation: {
                            title: "5 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        price: 45.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "15 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        explanation: {
                            title: "15 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        price: 69.90,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wand Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        explanation: {
                            title: "4 Kanal Wandfernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        price: 192.30,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Tisch Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        explanation: {
                            title: "4 Kanal Tisch-Fernbedienung",
                            text: [
                                "Mit dem Tischsender bedienen sIe Ihre Rollos ganz bequem vom Ess- oder Schreibtisch.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        price: 87.20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Smart Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Wi-Fi Mini Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        explanation: {
                            title: "USB WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite auf 20 Meter - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Etage wird eine Mini Bridge benötigt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        price: 171.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wi-Fi Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        explanation: {
                            title: "WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Haushalt ist eine WiFi Bridge ausreichend.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        price: 282.50,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
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
                        title: "Seitenführung",
                        note: "meist gewählt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung/Seitenführung",
                            text: [
                                "Die Seitenführung aus PVC-ummantelten Stahlseilen verläuft links und rechts durch die Lamellen. Sie verhindert das unkontrollierte Auspendeln der Jalousien beim Öffnen oder Kippen von Fenstern und Türen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 28.20
                    },
                    {
                        title: "Besonders lichtdicht",
                        note: "sehr beliebt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_68_1666613451_450x450.webp",
                        explanation: {
                            title: "Besonders abdunkelnd",
                            text: [
                                'Die obere Lamelle überdeckt stets die Stanzlöcher der unteren Lamelle. Der Lichteinfall wird minimiert. Wir empfehlen im Schritt "Montage" die Seitenführung zu wählen. Ohne dieser neigt sich das Lamellenpaket durch die außermittige Stanzung der Lamellen etwas nach hinten.',
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_80_1682063772_450x450.webp",
                        price: 45,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart": "Schnur / Wendestab"},
                            ]
                        },
                    },
                    {
                        title: "Unterlegkeile",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_59_1666613485_450x450.webp",
                        explanation: {
                            title: "Unterlegkeile",
                            text: [
                                'Unterlegkeile dienen für die Montage an sehr schrägen Glasleisten. Es werden zwei Unterlegkeile je Träger mitgesandt, um bis zu 10° Neigung ausgleichen zu können.',
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_41_1716876550_450x450.webp",
                        price: 4.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition": "Glasfalz"},
                            ]
                        },
                    },
                ]
            }
        ],
        defaultHeight: 800,
        defaultWidth: 300,
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/jalousie",
        productDetailUrl: "/api/product/Jalousie/Premium Jalousie",
        blendcolorTitle: "Oberkastenfarbe",
        requestCategory: "PremiumJalousie",
        EXTERNAL_URL: "/api/external-products/colors/PremiumJalousie/",
        subcategoryTitle: "check-mm",
        freeSamplingTitle:"Lamellenmuster Premium Alu Jalousien 25mm",
        assemblyInfo: {
            name: "Premium Alu Jalousien 25mm",
            link: "/montageanleitung/jalousie"
        },
        cartName: "Premium Alu Jalousien 25mm",
    },
    "PremiumJalousie16mm": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4535_1688029109_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4536_1688029134_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4538_1688029202_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4539_1688029222_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Oberkastenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Farbton angepasst",
                        defaultSelected: true,
                        image: "linear-gradient(90deg, rgb(239, 77, 78) 0%, rgb(62, 134, 180) 50%, rgb(110, 212, 86) 100%)",
                        price: 0
                    }
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Glasfalz",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_79_1711541149_450x450.webp",
                        explanation: {
                            title: "Montage innerhalb der Glasleisten im Glasfalz",
                            text: [
                                "Dies ist die optimale und beliebteste Montageart für Jalousien.",
                                "Die Jalousie wird mittels, im Lieferumfang enthaltenen, Trägern nach oben in der Glasleiste verschraubt (Schrauben inkl.). Der Glasleiste kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Die Mindest-Glasleistentiefe beträgt 12 mm. Dies ist die Tiefe von der Rahmenvorderkante zum Glas. Bei der Montage mit Klebeleiste ist keine Mindesttiefe nötig.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_32_1683632163_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_65_1666613263_450x450.webp",
                        explanation: {
                            title: "Montage direkt am Fensterflügel",
                            text: [
                                "Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm.",
                                "Berechnen Sie hier einen Überstand der Jalousie über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie hier auf vorstehende Beschläge!",
                                "Die Montage erfolgt mit Winkelträgern (geschraubt) oder Klemmträgern (geklemmt)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_36_1683704087_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_67_1666613280_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand der Jalousie über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack 5-10 cm. Die Jalousie wird mit, im Lieferumfang enthaltenen, Winkelträgern an der Wand verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_33_1683704072_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_60_1666613281_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensternische",
                            text: [
                                "Achten Sie bei dieser Montageart auf die Pakethöhe (Höhe der aufgezogenen Jalousie), damit sich das Fenster nach erfolgter Montage noch öffnen lässt. Die Jalousie wird mit, im Lieferumfang enthaltenen Trägern an der Decke verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug).",
                                "Darüber hinaus können Jalousien als Raumteiler an der Decke angebracht werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_34_1683703954_450x450.webp",
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
                        title: "Deckenträger",
                        note: "meist gewählt",
                        defaultSelected: true, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
                        explanation: {
                            title: "Deckenträger",
                            text: [
                                "Die Deckenträger werden bei der Montage im Glasfalz nach oben in die Glasleiste verschraubt - diese kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei der Deckenmontage werden die Träger in die Decke oder Nische verschraubt (Schrauben stets inkl.)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
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
                        title: "Winkelträger",
                        note: "meist gewählt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
                        explanation: {
                            title: "Winkelträger",
                            text: [
                                "Mit den Winkelträgern kann die Jalousie an der Wand oder am Fensterflügel befestigt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
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
                        title: "Klemmträger",
                        note: "sehr beliebt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_115_1711541150_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den hochwertigen Klemmträgern aus Metall mit Kunststoffgehäuse können Sie die Jalousien ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Achten Sie insb. bei Holzfenstern darauf, dass die Träger am Fensterflügel montiert werden können (umlaufende Dichtung).",
                                "Die Klemmbreite beträgt 6-21 mm.",
                                "Zwei weitere Klemmträger als Pendelsicherung an der Unterseite des Fensterflügels verhindern das Auspendeln der Jalousie. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt.",
                                "Weitere Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_35_1683632163_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Fensterflügel"},
                            ]
                        },
                        price: 38.40
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Schnur / Wendestab",
                        defaultSelected: true,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        explanation: {
                            title: "Schnur/Wendestab",
                            text: [
                                "Die Schnur dient zum Heben und Senken der Lamellen. Mit dem Wendestab wird die Neigung der Lamellen verändert, um den Lichteinfall zu regulieren.",
                                "Durch das eingearbeitete Schnurschloss kann die Jalousie in jeder beliebigen Stellung arretiert werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Kettenbedienung",
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        explanation: {
                            title: "Kettenbedienung",
                            text: [
                                "Mit der Kette heben und senken Sie die Jalousie. Wenn Sie in die Gegenrichtung ziehen, neigen Sie die Lamellen. Mit der integrierten Bremse arretiert die Jalousie in jeder Position, ohne dass Sie die Kette fixieren müssen. Die Standard-Bedienlänge beträgt ca. 2/3 der Jalousienhöhe, jedoch mindestens 75 cm.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        price: {
                            "PVC Standard 2/3" : 76,
                            "PVC 50cm" : 76,
                            "PVC 75cm" : 76,
                            "PVC 100cm" : 76,
                            "PVC 125cm" : 76,
                            "PVC 150cm" : 76,
                            "PVC 175cm" : 76,
                            "PVC 200cm" : 76,
                            "PVC 225cm" : 76,
                            "PVC 250cm" : 76,
                            "Metall Standard 2/3" : 96,
                            "Metall 50cm" : 96,
                            "Metall 75cm" : 96,
                            "Metall 100cm" : 96,
                            "Metall 125cm" : 96,
                            "Metall 150cm" : 96,
                            "Metall 175cm" : 96,
                            "Metall 200cm" : 96,
                            "Metall 225cm" : 96,
                            "Metall 250cm" : 96,
                        },
                        priceExplanation: "Kettenmaterial"
                    },
                    {
                        title: "Akku-Motor",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_215_1709801128_450x450.webp",
                        explanation: {
                            title: "Akku-Motor",
                            text: [
                                'Alle Akku-Jalousien können über die eigene "Motion-App" (kein Zubehör nötig) gesteuert werden oder mittels Fernbedienung. Detaillierte technische Details finden Sie über das Menü "Jalousie"-"Montageanleitungen".',
                                "Li-Ion-Akku",
                                "USB wiederaufladbar",
                                "Lieblingsposition programmierbar"
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_215_1709801128_450x450.webp",
                        forbids: {
                            type: "single",
                            dependecies: [
                                {"Befestigungsart":"Klebeleiste"},
                            ]
                        },
                        price: 222.90
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
                title: "Optionales Motor Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Ladekabel USB C",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        explanation: {
                            title: "Ladekabel ohne Netzteil",
                            text: [
                                "Es handelt sich um ein handelsübliches USB C Ladekabel (3 m Länge) ohne Netzteil. Das Rollo wird in der Regel zweimal jährlich geladen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_97_1706781114_450x450.webp",
                        price: 11.10,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "1 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        explanation: {
                            title: "1 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihr Rollo sehr einfach per Knopfdruck mit der Fernbedienung und können dieses unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_112_1707894379_450x450.webp",
                        price: 31.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "5 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        explanation: {
                            title: "5 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_98_1706781125_450x450.webp",
                        price: 45.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "15 Kanal Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        explanation: {
                            title: "15 Kanal Fernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_114_1707894385_450x450.webp",
                        price: 69.90,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wand Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        explanation: {
                            title: "4 Kanal Wandfernbedienung",
                            text: [
                                "Sie koppeln ihre Rollos sehr einfach per Knopfdruck mit der Fernbedienung und können diese unmittelbar bequem bedienen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_99_1706781139_450x450.webp",
                        price: 192.30,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Tisch Fernbedienung",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        explanation: {
                            title: "4 Kanal Tisch-Fernbedienung",
                            text: [
                                "Mit dem Tischsender bedienen sIe Ihre Rollos ganz bequem vom Ess- oder Schreibtisch.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_100_1706781148_450x450.webp",
                        price: 87.20,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                ]
            },
            {
                title: "Optionales Smart Zubehör",
                multichoice: true,
                checkAllowList: true,
                doNoDefaultSelection: true,
                options: [
                    {
                        title: "Wi-Fi Mini Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        explanation: {
                            title: "USB WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite auf 20 Meter - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Etage wird eine Mini Bridge benötigt.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_101_1706781162_450x450.webp",
                        price: 171.70,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
                    },
                    {
                        title: "Wi-Fi Bridge",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        explanation: {
                            title: "WiFi Bridge",
                            text: [
                                "Erhöht die Reichweite - das Rollo kann somit außerhalb der Bluetooth-Umgebung gesteuert werden und in Ihr Smart-Home integriert werden (Amazon Alexa, Google Assistant, IFTTT). Pro Haushalt ist eine WiFi Bridge ausreichend.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/300000/files/195_Icon_102_1706781171_450x450.webp",
                        price: 282.50,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Bedienart":"Akku-Motor"},
                            ]
                        },
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
                        title: "Seitenführung",
                        note: "meist gewählt",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung/Seitenführung",
                            text: [
                                "Die Seitenführung aus PVC-ummantelten Stahlseilen verläuft links und rechts durch die Lamellen. Sie verhindert das unkontrollierte Auspendeln der Jalousien beim Öffnen oder Kippen von Fenstern und Türen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 28.20
                    },
                    {
                        title: "Unterlegkeile",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_59_1666613485_450x450.webp",
                        explanation: {
                            title: "Unterlegkeile",
                            text: [
                                'Unterlegkeile dienen für die Montage an sehr schrägen Glasleisten. Es werden zwei Unterlegkeile je Träger mitgesandt, um bis zu 10° Neigung ausgleichen zu können.',
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_41_1716876550_450x450.webp",
                        price: 4.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition": "Glasfalz"},
                            ]
                        },
                    },
                ]
            }
        ],
        defaultHeight: 800,
        defaultWidth: 300,
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/jalousie",
        productDetailUrl: "/api/product/Jalousie/Premium Jalousie",
        blendcolorTitle: "Oberkastenfarbe",
        requestCategory: "PremiumJalousie",
        EXTERNAL_URL: "/api/external-products/colors/PremiumJalousie/",
        subcategoryTitle: "check-mm",
        freeSamplingTitle:"Lamellenmuster Premium Alu Jalousien 16mm",
        assemblyInfo: {
            name: "Premium Alu Jalousien 16mm",
            link: "/montageanleitung/jalousie"
        },
        cartName: "Premium Alu Jalousien 16mm",
    },
    "PremiumJalousie50mm": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4543_1688029315_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4542_1688029288_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4541_1688029272_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4540_1688029253_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/scenes/alu50/detail/900.webp",
            "https://api.configurator.vendeco.com/data/scenes/alu50/front/900.webp",
        ],
        selectionData: [
            {
                title: "Oberkastenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Farbton angepasst",
                        defaultSelected: true,
                        image: "linear-gradient(90deg, rgb(239, 77, 78) 0%, rgb(62, 134, 180) 50%, rgb(110, 212, 86) 100%)",
                        price: 0
                    }
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Wand",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_67_1666613280_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand der Jalousie über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack 5-10 cm. Die Jalousie wird mit, im Lieferumfang enthaltenen, Winkelträgern an der Wand verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_33_1683704072_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_60_1666613281_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensternische",
                            text: [
                                "Achten Sie bei dieser Montageart auf die Pakethöhe (Höhe der aufgezogenen Jalousie), damit sich das Fenster nach erfolgter Montage noch öffnen lässt. Die Jalousie wird mit, im Lieferumfang enthaltenen Trägern an der Decke verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug).",
                                "Darüber hinaus können Jalousien als Raumteiler an der Decke angebracht werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_34_1683703954_450x450.webp",
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
                        title: "Aufzugschnur/ Wendeschnur",
                        defaultSelected: true,
                        cancallable: false,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_55_1666613384_450x450.webp",
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
                title: "Zubehör",
                multichoice: false,
                options: [
                    {
                        title: "Seitenführung",
                        note: "meist gewählt",
                        defaultSelected: true,
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung/Seitenführung",
                            text: [
                                "Die Seitenführung aus hochwertigen Nylonschnüren bei 25 mm Jalousien (Metallseile bei 50 mm Jalousien) verläuft links und rechts durch die Lamellen. Sie verhindert das unkontrollierte Auspendeln der Jalousien beim Öffnen oder Kippen von Fenstern und Türen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 44.20
                    },
                ]
            }
        ],
        defaultHeight: 1000,
        defaultWidth: 450,
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/jalousie",
        productDetailUrl: "/api/product/Jalousie/Premium Jalousie",
        blendcolorTitle: "Oberkastenfarbe",
        requestCategory: "PremiumJalousie",
        EXTERNAL_URL: "/api/external-products/colors/PremiumJalousie/",
        subcategoryTitle: "check-mm",
        freeSamplingTitle:"Lamellenmuster Premium Alu Jalousien 50mm",
        assemblyInfo: {
            name: "Premium Alu Jalousien 50mm",
            link: "/montageanleitung/jalousie"
        },
        cartName: "Premium Alu Jalousien 50mm",
    },
    "Holzjalousie25mm": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/scenes/holz25/front/112.webp",
            "https://api.configurator.vendeco.com/data/scenes/holz25/detail/112.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4546_1688029384_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4547_1688029399_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4544_1688029349_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/scenes/holz25/detail/1.webp",
            "https://api.configurator.vendeco.com/data/scenes/holz25/front/1.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4548_1688029418_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4545_1688029365_1000x1000.webp"
        ],
        selectionData: [
            {
                title: "Oberkastenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Farbton angepasst",
                        defaultSelected: true,
                        image: "linear-gradient(90deg, rgb(239, 77, 78) 0%, rgb(62, 134, 180) 50%, rgb(110, 212, 86) 100%)",
                        price: 0
                    }
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Glasfalz",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_79_1711541149_450x450.webp",
                        explanation: {
                            title: "Montage innerhalb der Glasleisten im Glasfalz",
                            text: [
                                "Dies ist die optimale und beliebteste Montageart für Jalousien.",
                                "Die Jalousie wird mittels, im Lieferumfang enthaltenen, Trägern nach oben in der Glasleiste verschraubt (Schrauben inkl.). Der Glasleiste kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Die Mindest-Glasleistentiefe beträgt 12 mm. Dies ist die Tiefe von der Rahmenvorderkante zum Glas. Bei der Montage mit Klebeleiste ist keine Mindesttiefe nötig.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_32_1683632163_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Fensterflügel",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_65_1666613263_450x450.webp",
                        explanation: {
                            title: "Montage direkt am Fensterflügel",
                            text: [
                                "Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm.",
                                "Berechnen Sie hier einen Überstand der Jalousie über die Glasfläche ein, um seitlichen Lichteinfall zu minimieren. Achten Sie hier auf vorstehende Beschläge!",
                                "Die Montage erfolgt mit Winkelträgern (geschraubt) oder Klemmträgern (geklemmt)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_36_1683704087_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Wand",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_67_1666613280_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand der Jalousie über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack 5-10 cm. Die Jalousie wird mit, im Lieferumfang enthaltenen, Winkelträgern an der Wand verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_33_1683704072_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_60_1666613281_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensternische",
                            text: [
                                "Achten Sie bei dieser Montageart auf die Pakethöhe (Höhe der aufgezogenen Jalousie), damit sich das Fenster nach erfolgter Montage noch öffnen lässt. Die Jalousie wird mit, im Lieferumfang enthaltenen Trägern an der Decke verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug).",
                                "Darüber hinaus können Jalousien als Raumteiler an der Decke angebracht werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_34_1683703954_450x450.webp",
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
                        title: "Deckenträger",
                        note: "meist gewählt",
                        defaultSelected: true, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
                        explanation: {
                            title: "Deckenträger",
                            text: [
                                "Die Deckenträger werden bei der Montage im Glasfalz nach oben in die Glasleiste verschraubt - diese kann auch leicht schräg zur Glasscheibe hin abfallen.",
                                "Bei der Deckenmontage werden die Träger in die Decke oder Nische verschraubt (Schrauben stets inkl.)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_69_1666613395_450x450.webp",
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
                        title: "Winkelträger",
                        note: "meist gewählt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
                        explanation: {
                            title: "Winkelträger",
                            text: [
                                "Mit den Winkelträgern kann die Jalousie an der Wand oder am Fensterflügel befestigt werden. Winkelträger werden von vorne an den Fensterrahmen geschraubt (Schrauben inkl.).",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_70_1711541149_450x450.webp",
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
                        title: "Klemmträger",
                        note: "sehr beliebt",
                        defaultSelected: false, // you are not sure yet ?!
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_115_1711541150_450x450.webp",
                        explanation: {
                            title: "Klemmträgermontage auf dem Fensterflügel",
                            text: [
                                "Mit den hochwertigen Klemmträgern aus Metall mit Kunststoffgehäuse können Sie die Jalousien ohne zu bohren auf dem Fensterflügel befestigen.",
                                "Achten Sie insb. bei Holzfenstern darauf, dass die Träger am Fensterflügel montiert werden können (umlaufende Dichtung).",
                                "Die Klemmbreite beträgt 6-21 mm.",
                                "Zwei weitere Klemmträger als Pendelsicherung an der Unterseite des Fensterflügels verhindern das Auspendeln der Jalousie. Oberhalb bzw. unterhalb des Fensterflügels werden ca. 11 mm Platz benötigt.",
                                "Weitere Anwendung: Bei vorhandenen Fensterkreuzen im Glasfalz, oder bei einer Glasfalztiefe von weniger als 12 mm."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_35_1683632163_450x450.webp",
                        forbids: [],
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition":"Fensterflügel"},
                            ]
                        },
                        price: 28.80
                    },
                ]
            },
            {
                title: "Bedienart",
                multichoice: false,
                checkAllowList: true,
                options: [
                    {
                        title: "Schnur / Wendestab",
                        defaultSelected: true,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        explanation: {
                            title: "Schnur/Wendestab",
                            text: [
                                "Die Schnur dient zum Heben und Senken der Lamellen. Mit dem Wendestab wird die Neigung der Lamellen verändert, um den Lichteinfall zu regulieren.",
                                "Durch das eingearbeitete Schnurschloss kann die Jalousie in jeder beliebigen Stellung arretiert werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_75_1666613272_450x450.webp",
                        price: 0
                    },
                    {
                        title: "Kettenbedienung",
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        explanation: {
                            title: "Kettenbedienung",
                            text: [
                                "Mit der Kette heben und senken Sie die Jalousie. Wenn Sie in die Gegenrichtung ziehen, neigen Sie die Lamellen. Mit der integrierten Bremse arretiert die Jalousie in jeder Position, ohne dass Sie die Kette fixieren müssen. Die Standard-Bedienlänge beträgt ca. 2/3 der Jalousienhöhe, jedoch mindestens 75 cm.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_52_1666613345_450x450.webp",
                        price: 30
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
                        price: 0,
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0,
                    },
                ]
            },
            {
                title: "Zubehör",
                multichoice: true,
                checkAllowList: true,
                options: [
                    {
                        title: "Seitenführung",
                        note: "meist gewählt",
                        defaultSelected: true,
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung/Seitenführung",
                            text: [
                                "Die Seitenführung aus PVC-ummantelten Stahlseilen verläuft links und rechts durch die Lamellen. Sie verhindert das unkontrollierte Auspendeln der Jalousien beim Öffnen oder Kippen von Fenstern und Türen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 16.00
                    },
                    {
                        title: "Unterlegkeile",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_59_1666613485_450x450.webp",
                        explanation: {
                            title: "Unterlegkeile",
                            text: [
                                'Unterlegkeile dienen für die Montage an sehr schrägen Glasleisten. Es werden zwei Unterlegkeile je Träger mitgesandt, um bis zu 10° Neigung ausgleichen zu können.',
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_41_1716876550_450x450.webp",
                        price: 4.80,
                        allows: {
                            type: "single",
                            dependecies: [
                                {"Montageposition": "Glasfalz"},
                            ]
                        },
                    },
                ]
            }
        ],
        defaultHeight: 300,
        defaultWidth: 320,
        saleMultiplier: 10 / 4,
        measurementUrl: "/messanleitung/jalousie",
        productDetailUrl: "/api/product/Jalousie/Holzjalousie",
        blendcolorTitle: "Oberkastenfarbe",
        requestCategory: "Holzjalousie",
        EXTERNAL_URL: "/api/external-products/colors/Holzjalousie/",
        subcategoryTitle: "check-mm",
        freeSamplingTitle: "Lamellenmuster Holz Jalousien 25mm",
        assemblyInfo: {
            name: "Holz Jalousien 25mm",
            link: "/montageanleitung/jalousie"
        },
        cartName: "Basic Holzjalousien 25mm"
    },
    "Holzjalousie50mm": {
        defaultImages: [
            "https://api.configurator.vendeco.com/data/scenes/holz50/front/112.webp",
            "https://api.configurator.vendeco.com/data/scenes/holz50/detail/112.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4549_1688029617_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4550_1688029636_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4551_1688029695_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4552_1688029719_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4553_1688029743_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4554_1688029775_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4555_1688029801_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4556_1688029850_1000x1000.webp",
            "https://api.configurator.vendeco.com/data/configurations/100000/files/204_Image_4557_1688029872_1000x1000.webp",
        ],
        selectionData: [
            {
                title: "Oberkastenfarbe",
                multichoice: false,
                options: [
                    {
                        title: "Farbton angepasst",
                        defaultSelected: true,
                        image: "linear-gradient(90deg, rgb(239, 77, 78) 0%, rgb(62, 134, 180) 50%, rgb(110, 212, 86) 100%)",
                        price: 0
                    }
                ]
            },
            {
                title: "Montageposition",
                multichoice: false,
                options: [
                    {
                        title: "Wand",
                        note: "meist gewählt",
                        defaultSelected: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_67_1666613280_450x450.webp",
                        explanation: {
                            title: "Wandmontage z.B. vor der Fensternische",
                            text: [
                                "Berechnen Sie hier einen Überstand der Jalousie über die Fensternische ein, um seitlichen Lichteinfall zu minimieren - je nach Geschmack 5-10 cm. Die Jalousie wird mit, im Lieferumfang enthaltenen, Winkelträgern an der Wand verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug)."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_33_1683704072_450x450.webp",
                        forbids: [],
                        price: 0
                    },
                    {
                        title: "Decke/Nische",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_60_1666613281_450x450.webp",
                        explanation: {
                            title: "Deckenmontage z.B. in der Fensternische",
                            text: [
                                "Achten Sie bei dieser Montageart auf die Pakethöhe (Höhe der aufgezogenen Jalousie), damit sich das Fenster nach erfolgter Montage noch öffnen lässt. Die Jalousie wird mit, im Lieferumfang enthaltenen Trägern an der Decke verschraubt (Schrauben inkl.).",
                                "Optional kann eine Pendelsicherung hinzu konfiguriert werden (Luftzug).",
                                "Darüber hinaus können Jalousien als Raumteiler an der Decke angebracht werden."
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/200_Image_34_1683703954_450x450.webp",
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
                        title: "Aufzugschnur/ Wendeschnur",
                        defaultSelected: true,
                        cancallable: false,
                        note: "meist gewählt",
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_55_1666613384_450x450.webp",
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
                        price: 0,
                    },
                    {
                        title: "Rechts",
                        image: "https://wumbo.net/symbols/right-arrow/feature.png",
                        price: 0,
                    },
                ]
            },
            {
                title: "Zubehör",
                multichoice: false,
                options: [
                    {
                        title: "Seitenführung",
                        defaultSelected: true,
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        explanation: {
                            title: "Pendelsicherung/Seitenführung",
                            text: [
                                "Die Seitenführung aus hochwertigen Nylonschnüren bei 25 mm Jalousien (Metallseile bei 50 mm Jalousien) verläuft links und rechts durch die Lamellen. Sie verhindert das unkontrollierte Auspendeln der Jalousien beim Öffnen oder Kippen von Fenstern und Türen.",
                            ]
                        },
                        explanationImg: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 24.20
                    },
                    {
                        title: "Leiterband",
                        cancallable: true,
                        image: "https://api.configurator.vendeco.com/data/configurations/100000/files/210_Icon_61_1711541148_450x450.webp",
                        price: 21.60
                    },
                ]
            }
        ],
        defaultHeight: 400,
        defaultWidth: 420,
        saleMultiplier: 16 / 4,
        measurementUrl: "/messanleitung/jalousie",
        productDetailUrl: "/api/product/Jalousie/Holzjalousie",
        blendcolorTitle: "Oberkastenfarbe",
        requestCategory: "Holzjalousie",
        EXTERNAL_URL: "/api/external-products/colors/Holzjalousie/",
        subcategoryTitle: "check-mm",
        freeSamplingTitle: "Lamellenmuster Holz Jalousien 50mm",
        assemblyInfo: {
            name: "Holz Jalousien 50mm",
            link: "/montageanleitung/jalousie"
        },
        cartName: "Basic Holzjalousien 50mm"
    }
};
