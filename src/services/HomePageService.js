import { ApiInstance } from './ApiInstance'

export const fetchData = async (url, args = {}) => {
    const response = await ApiInstance.get(`/home/${url}`)

    if (response.statusText !== 'OK') {
        throw new Error('Failed to fetch items')
    }

    return response.data
}
