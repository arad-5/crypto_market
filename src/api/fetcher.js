import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/";
export const  fetcher =  async (URL_PATH) =>  {
    const response  = await axios.get(BASE_URL + URL_PATH);
    return response.data;
}
