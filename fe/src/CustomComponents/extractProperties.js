export function extractProperties(properties) {
    const result = [];

    // Translation map for all possible keys and array elements
    const translationMap = {
        "Translucency": "Transluzenz",
        "MaterialType": "Materialtyp",
        "DampWipeable": "Feucht abwischbar",
        "SuitableHumidRooms": "Geeignet für feuchte Räume",
        "DirtRepellant": "Schmutzabweisend",
        "PearlCoated": "Perlbeschichtet",
        "OekoTexStandard100": "Öko-Tex Standard 100",
        "Hue": "Farbton",
        "Material": "Material",
        "Room": "Raum",
        "Look": "Aussehen",
        "LamellaWidth": "Lamellenbreite",
        "Function": "Funktion",
        "halbtransparent": "Halbtransparent",
        "Feuchtraum": "Feuchtraum",
        "Schadstoffgeprüft": "Schadstoffgeprüft",
        "100% Polyester": "100% Polyester",
        "Plissee": "Plissee",
        "Hitzeschutz": "Hitzeschutz",
        "WoodGrain":"Holzmaserung",
        "SlatsStandard": "Standard-Lamellen",
        "SlatsPerforated": "Perforierte Lamellen",
        "SlatsMatte": "Matte Lamellen",
        "SlatsHighGloss": "Hochglanz-Lamellen",
        "SlatsBrushed": "Gebürstete Lamellen",
        "SlatsMetallic": "Metallische Lamellen",
    };

    const keysToExtract = [
        "BlindWidth",
        "LamellaWidth",
        "SlatsStandard",
        "SlatsPerforated",
        "SlatsMatte",
        "SlatsHighGloss",
        "SlatsBrushed",
        "SlatsMetallic",
        "Translucency",
        "MaxWidth",
        "MaterialType",
        "DampWipeable",
        "SuitableHumidRooms",
        "DirtRepellant",
        "PearlCoated",
        "OekoTexStandard100",
        "Material",
        "Room",
        "Look",
        "Function",
        "WoodGrain",
        "HexColor",
    ];

    keysToExtract.forEach(key => {
        const value = properties[key];

        if (key==="Function" || key==="Material") {
            value.forEach(item=>{
                if (item!==null && item!=='')
                    result.push(item)
            });
            return;
        }
        
        if (key==='MaxWidth') {
            if (value!=="0.00") {
                result.push(`Max. Breite ${value} cm`);
            } 
            return;
        }

        if (key==="BlindWidth" && value) {
            result.push(value);
            return;
        }

        if (key==="HexColor" && value) {
            result.push(`Hex-Farbe: #${value}`);
            return;
        }
            
        
        if (value === '0') {
            // Skip if the value is 0
            return;
        } else if (value === "1") {
            // Add the German version of the key if the value is 1
            
            if (translationMap[key]) {
                result.push(translationMap[key]);
            }
        } else if (Array.isArray(value)) {
            // Add all elements if the value is an array
            value.forEach(item => {
                if (item !== null && translationMap[item]) {
                    result.push(translationMap[item]);
                }
            });
        } else {
            // Add the translated value if it exists, otherwise add the value itself
            if (translationMap[value]) {
                result.push(translationMap[value]);
            } else {
                result.push(value);
            }
        }
    });

    //console.log("result: ",result);
    return Array.from(new Set(result.filter(item=>item)));
};
