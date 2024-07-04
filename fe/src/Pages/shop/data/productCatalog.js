import BasicPlisseImg from '../../../images/shopCategories/basicplisse.webp';
import PremPlisseImg from '../../../images/shopCategories/premplisse.webp';

import BasicJalousieImg from '../../../images/shopCategories/basicjalousie.webp';
import PremJalousieImg from '../../../images/shopCategories/premjalousie.webp';

import PremRolloImg from '../../../images/shopCategories/premrollo.webp';
import DoppelRolloImg from '../../../images/shopCategories/doppelrollo.webp';

import BasicLamellenvorhangImg from '../../../images/shopCategories/basiclamellenvorhang.webp';
import PremLamellenvorhangImg from '../../../images/shopCategories/premLamellenvorhang.webp';



export const catalogData = {
    "plissees": {
        data: [
            {
                title: "Basic Plissee",
                image: BasicPlisseImg,
                desc: [
                    "Made in Europe",
                    "Über 100 Stoffe",
                    "Einfache Montage",
                    "Millimetergenau gefertigt",
                    "Montage ohne bohren "
                ],
                links: [
                    {
                        text: "siehe Optionen",
                        url: "/geschaft/plissees/basic-plissee-optionen",
                    }
                ]
            },
            {
                title: "Premium Plissee",
                image: PremPlisseImg,
                desc: [
                    "Made in Germany",
                    "über 400 Stoffe",
                    "Trendige Designs",
                    "Gemustert, crush, uvm.",
                    "Montage ohne bohren"
                ],
                links: [
                    {
                        text: "siehe Optionen",
                        url: "/geschaft/plissees/premium-plissee-optionen",
                    }
                ]
            },
        ],
        measurement: "/messanleitung/plissee",
        installation: null,
    },
    "jalousien": {
        data: [
            {
                title: "Basic Jalousie",
                image: BasicJalousieImg,
                desc: [
                    "Montage ohne bohren ",
                    "über 60 Farben",
                    "16, 25, oder 50 mm Lamellen",
                    "bis 230 cm Breite",
                    "millimetergenau gefertigt"
                ],
                links: [
                    {
                        text: "siehe Optionen",
                        url: "/geschaft/jalousie/basic-jalousie-optionen",
                    }
                ]
            },
            {
                title: "Premium Jalousie",
                image: PremJalousieImg,
                desc: [
                    "Qualität von Hunter & Douglas",
                    "über 220 Farben",
                    "16, 25, 50 mm Lamellen",
                    "bis 260 cm Breite",
                    "Hochglanz, matt, metallic, uvm."
                ],
                links: [
                    {
                        text: "siehe Optionen",
                        url: "/geschaft/jalousie/premium-jalousie-optionen",
                    }
                ]
            },
        ],
        measurement: "/messanleitung/jalousie",
        installation: null,
    },
    "rollos": {
        data: [
            {
                title: "Premium Rollo",
                image: PremRolloImg,
                desc: [
                    "über 300 Stoffe",
                    "bis 440 cm Breite",
                    "Kassettenrollo",
                    "Mittelzugrollo",
                    "millimetergenau gefertigt"
                ],
                links: [
                    {
                        text: "siehe Optionen",
                        url: "/geschaft/rollo/premium-rollo-optionen",
                    }
                ]
            },
            {
                title: "Doppelrollo",
                image: DoppelRolloImg,
                desc: [
                    "Lichtregulierung durch transparente und farbige Stoffe",
                    "Einfache Bedienung",
                    "Einfache Konfiguration",
                    "Einfache Montage"
                ],                
                links: [
                    {
                        text: "siehe Optionen",
                        url: "/geschaft/rollo/doppel-rollo-optionen",
                    }
                ]
            },
        ],
        measurement: "/messanleitung/rollo",
        installation: null,
    },
    "lamellenvorhang": {
        data: [
            {
                title: "Basic Lamellenvorhang",
                image: BasicLamellenvorhangImg,
                desc: [
                    "über 110 Stoffe",
                    "89 mm, 127 mm Lamellen",
                    "bis 400 cm Breite",
                    "millimetergenau gefertigt",
                    "Decken-, oder Wandmontage"
                ],                
                links: [
                    {
                        text: "siehe Optionen",
                        url: "/geschaft/lamellenvorhang/basic-lamellenvorhang-optionen",
                    }
                ]
            },
            {
                title: "Premium Lamellenvorhang",
                image: PremLamellenvorhangImg,
                desc: [
                    "über 350 Stoffe",
                    "89 mm, 127 mm Lamellen",
                    "bis 500 cm Breite",
                    "optional eingeschweißte Gewichte"
                ],                
                links: [
                    {
                        text: "siehe Optionen",
                        url: "/geschaft/lamellenvorhang/premium-lamellenvorhang-optionen",
                    }
                ]
            },
        ],
        measurement: "/messanleitung/lamellenvorhang",
        installation: null,
    }
};
