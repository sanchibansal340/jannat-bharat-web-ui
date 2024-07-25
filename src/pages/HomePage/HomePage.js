import React from 'react'
import { Box } from '@mui/material'
import {
    Navbar,
    Banner,
    UpcomingTrips,
    Reviews,
    Footer,
    About,
    Gallery,
} from '../../components/utils'

const HomePage = () => {
    return (
        <Box>
            <Navbar />
            <Banner />
            <About />
            <UpcomingTrips />
            <Reviews />
            <Gallery />
            <Footer />
        </Box>
    )
}

export default HomePage
