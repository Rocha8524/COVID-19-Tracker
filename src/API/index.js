import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        
        const cornaData = {
            confirmed: response.confirmed,
            recovered: response.recovered,
            casualties: response.casualties,
            lastUpdate: response.lastUpdate
        }
        
        return (cornaData);

    } catch (error) {

    }
}