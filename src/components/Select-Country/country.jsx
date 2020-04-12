import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import style from "./country.module.css";

import {fetchCountriesData} from "../../API";

const Country = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect (() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountriesData());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={style.FormControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => 
                <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country;