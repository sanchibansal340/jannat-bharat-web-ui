import React, { lazy, Suspense } from 'react'
import { Box } from '@mui/material'
import { Banner } from '../../components/utils'
import LoaderComponent from "../../components/Loader/Loader"


const About = lazy(() =>
    import('../../components/utils').then((module) => ({
        default: module.About,
    }))
)
const UpcomingTrips = lazy(() =>
    import('../../components/utils').then((module) => ({
        default: module.UpcomingTrips,
    }))
)
const Reviews = lazy(() =>
    import('../../components/utils').then((module) => ({
        default: module.Reviews,
    }))
)
const Gallery = lazy(() =>
    import('../../components/utils').then((module) => ({
        default: module.Gallery,
    }))
)
const Footer = lazy(() =>
    import('../../components/utils').then((module) => ({
        default: module.Footer,
    }))
)

const HomePage = () => {
    return (
        <Box>
            <Banner />
            <Suspense fallback={<p>Loading...</p>}>
                <About />
                <UpcomingTrips isPage={false} />
                <Reviews />
                <Gallery />
                <Footer />
            </Suspense>
        </Box>
    )
}

export default HomePage
