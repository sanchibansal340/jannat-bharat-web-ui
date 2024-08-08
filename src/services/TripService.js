import axios from 'axios'

const API = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL_LOCAL}`,
})

export const fetchData = async (url, args = {}) => {
    const response = await API.get(url)

    if (response.statusText !== 'OK') {
        throw new Error('Failed to fetch items')
    }

    return response.data
}
