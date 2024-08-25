import GridViewIcon from '@mui/icons-material/GridView'
import TodayIcon from '@mui/icons-material/Today'
import { Typography, Box } from '@mui/material'
import React from 'react'
import CustomAccordionTab from '../CustomAccordionTab'

const ItineraryDataTab = ({ itineraryData }) => {
    const overviewDetails = itineraryData.overviewDetails
    const dailyItinerary = itineraryData.dailyItinerary

    return (
        <>
            <Box
                backgroundColor="#FDFDFD"
                sx={{
                    border: '1px solid #e4e6e8',
                    padding: '32px 32px 12px',
                    marginBottom: '20px',
                    borderRadius: '8px',
                    '@media (max-width: 600px)': {
                        padding: '20px 20px 12px',
                    },
                }}
            >
                <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                    <GridViewIcon sx={{ color: '#1d4d54' }} />
                    <Typography
                        variant="h4"
                        sx={{
                            fontStyle: 'italic',
                            marginBottom: '1rem',
                        }}
                        color="primary.main"
                    >
                        Overview
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                    <div
                        dangerouslySetInnerHTML={{ __html: overviewDetails }}
                    />
                </Typography>
            </Box>
            {dailyItinerary.map((itinerary, index) => {
                const heading =
                    'Day ' + itinerary.day + '  :\t' + itinerary.title
                return (
                    <div sx={{ marginBottom: '10%' }}>
                        <CustomAccordionTab
                            heading={heading}
                            details={itinerary.details}
                            headingIcon={
                                <TodayIcon sx={{ color: '#1d4d54' }} />
                            }
                            index={index}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default ItineraryDataTab
