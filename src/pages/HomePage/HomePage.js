import React from 'react'
import { Box } from '@mui/material'
import {
    Navbar,
    Banner,
    UpcomingTrips,
    Reviews,
    Footer,
    About,
} from '../../components/utils'

const HomePage = () => {
    return (
        <Box>
            <Navbar />
            <Banner />
            <About />
            <UpcomingTrips />
            <Reviews />
            <Footer />
        </Box>
    )
}

export default HomePage
