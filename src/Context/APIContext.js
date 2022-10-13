import React, { useState } from 'react';
import axios from 'axios';

const APIContext = React.createContext();
const baseURL = "https://valorant-api.com/v1";

export const APIProvider = ({ children }) => {

    const [weapons,setWeapons]= useState([]);

    const fetchWeapons = async () =>{
        const response = await axios.get(`${baseURL}/weapons`);
        console.log(response)
        setWeapons(response.data.data);
    }

    return(
        <APIContext.Provider value={{
            fetchWeapons,
            weapons
        }}>
            {children}
        </APIContext.Provider>
    );

}

export default APIContext;