import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
};

export const fetchDataFromApi = async (url) => {
    console.log("anmol"+BASE_URL);
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};