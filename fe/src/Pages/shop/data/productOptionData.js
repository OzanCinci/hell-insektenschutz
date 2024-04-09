import EinFarbig from '../../../images/productAttributes/einfarbig.svg';
import Feuchtraum from '../../../images/productAttributes/feuchtraum.svg';
import Halbtransparent from '../../../images/productAttributes/halbtransparent.svg';
import Plissee from '../../../images/productAttributes/plissee.svg';
import SchwerEntflammbar from '../../../images/productAttributes/schwer-entflammbar.svg';
import MaxMeasurement from '../../../images/productAttributes/max-measurement.svg';

export const data = {
    "plissees": {
        "plissee-optionen": [
            {
                name: "Caro Basic",
                attributes: null,
            },
            {
                name: "Caro Perl",
                attributes: null,
            },
            {
                name: "Rubens Uni",
                constraints: [
                    {
                        name: "max-breite",
                        value: 230
                    }
                ],
                attributes: [
                    {
                        image: Plissee,
                        title: "Plissee",
                    },
                    {
                        image: EinFarbig,
                        title: "Einfarbig",
                    },
                    {
                        image: Halbtransparent,
                        title: "halbtransparent",
                    },
                    {
                        image: SchwerEntflammbar,
                        title: "Schwer entflammbar",
                    },
                    {
                        image: Feuchtraum,
                        title: "Feuchtraum",
                    },
                    {
                        image: MaxMeasurement,
                        title: "Max. Breite 230cm",
                    }
                ]
                
            },
            {
                name: "Yannis Uni",
                attributes: null,
            }
        ]
    }
}