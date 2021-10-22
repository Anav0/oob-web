import { Api } from "./Api";

const apiConfig = {
    baseURL: process.env.REACT_APP_API_URL
}

export const api = new Api(apiConfig)