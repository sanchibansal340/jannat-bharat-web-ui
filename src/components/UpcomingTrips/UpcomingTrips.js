import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import TripCard from './TripCard'
import HomepageCarouselImg1 from '../../assets/homepage-carousel-img1.jpg'
import HomepageCarouselImg2 from '../../assets/homepage-carousel-img2.jpg'
import HomepageCarouselImg3 from '../../assets/homepage-carousel-img3.jpg'
import HomepageCarouselImg4 from '../../assets/homepage-carousel-img4.jpg'

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

const UpcomingTrips = () => {
    return (
        <Box my="3rem" id="upcoming_trips">
            <Typography
                variant="h3"
                sx={{
                    fontStyle: 'italic',
                    marginBottom: '1rem',
                }}
                color="primary.main"
            >
                Upcoming Trips
            </Typography>
            <Grid
                container
                spacing={4}
                width="100%"
                sx={{ margin: '0 auto', maxWidth: '1200px' }}
            >
                {trips.map((trip, index) => (
                    <TripCard key={index} trip={trip} />
                ))}
            </Grid>
            <Button
                sx={{ my: '2rem', textTransform: 'capitalize' }}
                variant="contained"
            >
                More adventures waiting ....
            </Button>
        </Box>
    )
}

export default UpcomingTrips
