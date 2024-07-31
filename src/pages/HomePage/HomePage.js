import React from 'react'
import { Box } from '@mui/material'
import {
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
            <Banner />
            <About />
            <UpcomingTrips isPage={false} />
            <Reviews />
            <Gallery />
            <Footer />
        </Box>
    )
}

export default HomePage
