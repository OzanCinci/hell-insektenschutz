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
        "Availability": "Verfügbarkeit",
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
        "Hitzeschutz": "Hitzeschutz"
    };

    const keysToExtract = [
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
        "LamellaWidth",
        "Function"
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
            result.push(`Max. Breite ${value} cm`);
            return;   
        }
        
        if (value === '0') {
            // Skip if the value is 0
            return;
        } else if (value === '1') {
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

    return result;
};
