import * as React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLoading } from '../components/Loader/LoaderContext'
import TripComponent from '../components/TourDetail/TripComponent'

const TourDetail = ({ tripData, getTripDetail }) => {
    const { tripId } = useParams()
    const { startLoading, stopLoading } = useLoading()

    useEffect(() => {
        const fetchTrip = async () => {
            startLoading()
            try {
                getTripDetail(tripId)
            } catch (error) {
                console.error(error)
            } finally {
                setTimeout(() => {
                    stopLoading()
                }, 500)
            }
        }
        fetchTrip()

    }, [tripId])

    return tripData !== null && <TripComponent tripData={tripData} />
}
export default TourDetail
