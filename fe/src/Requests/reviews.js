import axios from 'axios';

const ozanApiKey = "8CAD9B04EE494507A431DA430663461D";

const keyToCheck = 'reviewsData';
const readFromLocalStorage = () => {
    const value = localStorage.getItem(keyToCheck);
    return value !== null ? JSON.parse(value) : null;
};
const writeToLocalStorage = (value) => {
    localStorage.setItem(keyToCheck, JSON.stringify(value));
  };
  
export const getReviews = async () => {
    const temp = readFromLocalStorage();

    if (temp!==null){
        const timeDifference = Date.now() - temp.createdDate;
        if (timeDifference<43200000){
            //console.log("newer than 24 hours!");
            return temp;
        }
    }

    // set up the request parameters
    const params = {
        api_key: ozanApiKey,
        search_type: "place_reviews",
        data_id: "0x47971d3e08e72315:0x7f1d1b9e57fc9c47",
        hl: "de",
        sort_by: "date"
    }

    try{
        const response = await axios.get('https://api.scaleserp.com/search', { params });
        const temp = {...response, createdDate: Date.now()};
        writeToLocalStorage(temp);
        return temp;
    } catch(e){
        //console.log("ERR: ",e);
        return "ERR";
    }
};
