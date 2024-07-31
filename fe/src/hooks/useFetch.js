import { useEffect, useRef, useState } from "react";
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BE_API;

const useFetch = (url, _config, pageNumber, alreadyParamed=false) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const config = useRef(_config).current;

    useEffect(()=>{
        const abortController = new AbortController();

        const fetchData = async () => {
            //console.log("pageNumber: ",pageNumber)
            let req_url;
            if (pageNumber===0){
                req_url = `${BASE_URL}${url}`;
            } else if (alreadyParamed) {
                req_url = `${BASE_URL}${url}&page=${pageNumber}`;
            } else {
                req_url = `${BASE_URL}${url}?page=${pageNumber}`;
            }
            let req = {...config};
            req.url = req_url;

            setError(null);
            setLoading(true);
            axios.request(req, { signal: abortController.signal })
            .then(res => {
                if (res.status !== 200) {
                    setError(res.data.detail);
                    setLoading(false);
                    setData(null);
                    //console.log(`NOT 200: ${req.url} -> ${res.data.detail}`);
                }
                else {   
                    setError(null);
                    setLoading(false);
                    setData(res.data);
                    //console.log(`SUCCESS: ${req.url} -> ${res.data}`);
                }
            })
            .catch(e => {
                if (e.name === "AbortError") {
                    //console.log(`FETCH IS ABORTED: ${url}`);
                } else {   
                    setError("Bitte aktualisieren Sie die Seite oder versuchen Sie es später erneut");
                    setLoading(false);
                    setData(null);
                    //console.log(`ERROR: ${req.url} ->`,e);
                }
            });
        }

        if (url!==null && config!==null) {
            fetchData();
        } 

        return () => {    
            abortController.abort();
        }

    },[url, config, pageNumber]);


    return {data, loading, error};
}

export default useFetch;
