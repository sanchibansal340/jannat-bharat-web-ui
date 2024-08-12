import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ItineraryDataTab from '../TourDetail/itineraryTab/ItineraryDataTab'
import InfoBox from '../TourDetail/InfoBox'
import ItineraryTab from '../TourDetail/itineraryTab/ItineraryTab'
import PriceDataTab from '../TourDetail/itineraryTab/PriceDataTab'
import MustKnowDataTab from '../TourDetail/itineraryTab/MustKnowDataTab'
import InquireForm from '../TourDetail/InquireForm'
import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Button } from '@mui/material'
import { DownloadForOffline } from '@mui/icons-material'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { getMustKnowDataFromMustKnow,getMustKnowDataFromPolicy } from './utlis'


const TripComponent = ({ tripData }) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const infoData = {
        duration: tripData.duration,
        startingDate: tripData.start_date,
        returnDate: tripData.end_date,
        groupType: tripData.type_of_group,
    }

    const itineraryData = {
        overviewDetails: tripData.overview,
        dailyItinerary: tripData.itineraries,
    }
    const mustKnowData = []
    getMustKnowDataFromMustKnow(tripData.mustKnow, mustKnowData)
    getMustKnowDataFromPolicy(tripData.policy_details, mustKnowData)
    const pickupAndPriceData = tripData.pickupDetails

    const detailedItinerary = {
        0: {
            label: 'ITINERARY',
            component: <ItineraryDataTab itineraryData={itineraryData} />,
        },
        2: {
            label: 'PRICE',
            component: <PriceDataTab pickupData={pickupAndPriceData} />,
        },
        3: {
            label: 'Must Know',
            component: <MustKnowDataTab mustKnowData={mustKnowData} />,
        },
    }

    const handleDownload = async () => {
        try {
            const response = await axios.get(tripData.pdf, {
                responseType: 'blob',
            })

            const blob = new Blob([response.data], {
                type: response.headers['content-type'],
            })
            saveAs(blob, `${tripData.title}.pdf`)
        } catch (error) {
            console.error('Error downloading the file', error)
        }
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                padding: '5%',
                backgroundColor: 'background.main',
                '@media (max-width: 600px)': {
                    marginLeft: '0.5%',
                    marginRight: '0.5%',
                },
            }}
        >
            <Grid item xs={12} md={8} lg={8}>
                <Box sx={{ marginBottom: '4%' }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontStyle: 'italic',
                            marginBottom: '1rem',
                            '@media (max-width: 600px)': {
                                fontSize: '32px',
                            },
                        }}
                        color="primary.main"
                    >
                        Trip To: {tripData.title}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6} md={8} lg={8}>
                <Box sx={{ marginBottom: '4%' }}>
                    <img
                        src={tripData.banner_image}
                        style={{
                            width: '100%',
                            height: isSmallScreen ? '200px' : '550px',
                        }}
                    />
                </Box>
            </Grid>

            {/*infoBox, tab and inquiryform*/}
            <Box
                sx={{
                    '@media (max-width: 600px)': {
                        margin: '0px',
                    },
                }}
            >
                <Grid container spacing={6}>
                    <Grid item xs={12} md={8}>
                        <InfoBox infoData={infoData} />
                        <ItineraryTab details={detailedItinerary} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button
                            onClick={handleDownload}
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: '##3b8791',
                                fontWeight: '700',
                                lineHeight: '26px',
                                height: '80px',
                            }}
                            fullWidth
                        >
                            <Box display={'flex'}>
                                <DownloadForOffline
                                    sx={{ fontSize: '40px', mr: '10px' }}
                                />
                                <Typography
                                    color="#fff"
                                    sx={{ fontSize: '20px' }}
                                >
                                    {' '}
                                    Download Itinerary
                                </Typography>
                            </Box>
                        </Button>
                        <br />
                        <br />
                        <InquireForm />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default TripComponent