import axios from 'axios'

export const ApiInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL_LOCAL}`,
})
