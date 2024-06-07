import axios from "axios";

export const api = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/weather'
})

export const apiKey = '803cedebb5830491a9bde9716fded8fc';


export const apiUser = axios.create({
    baseURL:'http://localhost:3000'
})