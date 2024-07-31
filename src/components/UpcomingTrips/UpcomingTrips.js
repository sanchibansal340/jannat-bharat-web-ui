import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import TripCard from './TripCard'
import HomepageCarouselImg1 from '../../assets/homepage-carousel-img1.jpg'
import HomepageCarouselImg2 from '../../assets/homepage-carousel-img2.jpg'
import HomepageCarouselImg3 from '../../assets/homepage-carousel-img3.jpg'
import HomepageCarouselImg4 from '../../assets/homepage-carousel-img4.jpg'
import landingPlaneImg from '../../assets/landing-plane-img.png'

const trips = [
    {
        image: HomepageCarouselImg1,
        tripDestination: 'Triund Trek',
        tripType: 'Women Only',
        startDate: '16 Aug',
        endDate: '23 Aug',
        price: 5000,
    },
    {
        image: HomepageCarouselImg2,
        tripDestination: 'Ladakh',
        tripType: 'Mixed',
        startDate: '6 Sept',
        endDate: '13 Sept',
        price: 21000,
    },
    {
        image: HomepageCarouselImg3,
        tripDestination: 'Manali',
        tripType: 'Men Only',
        startDate: '27 July',
        endDate: '31 July',
        price: 0,
    },
    {
        image: HomepageCarouselImg4,
        tripDestination: 'Udaipur',
        tripType: 'Mixed',
        startDate: '15 Aug',
        endDate: '19 Aug',
        price: 8000,
    },
]

const UpcomingTrips = ({ isPage }) => {
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
                        <TripCard key={index} trip={trip} />
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
