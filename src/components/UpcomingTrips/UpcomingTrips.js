import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import TripCard from './TripCard'
import landingPlaneImg from '../../assets/landing-plane-img.png'
import { fetchData } from '../../services/TripService'

const UpcomingTrips = ({ isPage }) => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetchData('/trips/getTrips?ordering=-start_date')
            .then((trips) => {
                setTrips(trips)
            })
            .catch((e) => {
                console.log(e)
            })
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
                <Button
                    component={Link}
                    to="/upcoming-trips"
                    sx={{ my: '2rem', textTransform: 'capitalize' }}
                    variant="contained"
                >
                    More adventures waiting ....
                </Button>
            )}
        </Box>
    )
}

export default UpcomingTrips
