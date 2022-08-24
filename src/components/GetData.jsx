import axios from "axios";

export const GetData = () => {
    return axios.get("https://saurav.tech/NewsAPI/everything/bbc-news.json");
};
