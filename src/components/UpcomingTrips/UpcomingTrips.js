import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TripCard from './TripCard'
import landingPlaneImg from '../../assets/landing-plane-img.png'
import { fetchData } from '../../services/TripService'
import ShowMoreButtonComponent from '../ShowMoreButtonComponent'
import { useLoading } from '../Loader/LoaderContext'

const UpcomingTrips = ({ isPage }) => {
    const [trips, setTrips] = useState([])
    const { startLoading, stopLoading } = useLoading()

    useEffect(() => {
        if (trips.length === 0) {
            const fetchTrips = async () => {
                startLoading()
                try {
                    const trips = await fetchData(
                        'getTrips?ordering=-start_date'
                    )
                    setTrips(trips)
                } catch (error) {
                    console.error(error)
                } finally {
                    setTimeout(() => {
                        stopLoading()
                    }, 400)
                }
            }
            fetchTrips()
        }
    }, [])

    return (
        <Box sx={{ my: '3rem', px: '2rem' }} id="upcoming_trips">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '0.7rem',
                    textAlign: 'center',
                    px: '2rem',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontStyle: 'italic',
                    }}
                    color="primary.main"
                >
                    Upcoming Trips
                </Typography>
                <img
                    src={landingPlaneImg}
                    alt="Landing Plane after Upcoming Trips heading"
                    style={{ marginTop: '-3rem', zIndex: '-1' }}
                />
            </Box>
            <div>
                <Grid
                    container
                    spacing={3}
                    width="100%"
                    sx={{ margin: '0 auto', maxWidth: '1200px' }}
                >
                    {trips.map((trip, index) => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </Grid>
            </div>
            {!isPage && (
                <ShowMoreButtonComponent
                    linkTo={'/upcoming-trips'}
                    buttonText="More adventures waiting ...."
                />
            )}
        </Box>
    )
}

export default UpcomingTrips
