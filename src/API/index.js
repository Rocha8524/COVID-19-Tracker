import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);

        const cornaData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            casualties: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return (cornaData);

    } catch (error) {

    }
}