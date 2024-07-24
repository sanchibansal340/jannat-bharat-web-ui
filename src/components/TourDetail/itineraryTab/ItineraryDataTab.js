import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import React from "react";
import CustomAccordionTab from "../CustomAccordionTab";
import TodayIcon from '@mui/icons-material/Today';
import GridViewIcon from "@mui/icons-material/GridView";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";




const ItineraryDataTab = ({ itineraryData }) => {
    const overviewDetails = itineraryData.overviewDetails
    const dailyItinerary = itineraryData.dailyItinerary

    return (
        <>
            <Box sx={{
                border: "1px solid #e4e6e8", padding: "32px 32px 12px", marginBottom: "20px", borderRadius: "8px",
                '@media (max-width: 600px)': {
                    padding: '20px 20px 12px',
                },
            }}>
                <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                    <GridViewIcon />
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontSize: '24px',
                            fontWeight: '800',
                            fontFamily: 'var(--manrope)',
                            color: '#1D4D54',
                            lineHeight: '42px',
                        }}
                    >
                        Overview
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    paragraph
                    sx={{
                        fontSize: '15px',
                        fontWeight: '400',
                        lineHeight: '1.5',
                        fontFamily: 'ui-rounded',
                        backgroundColor: '#f5f5f5',
                        margin: '15px 0',
                        borderRadius: '2%',
                        padding: '2%',

                    }}
                >
                     <div dangerouslySetInnerHTML={{ __html: overviewDetails }} />
                    
                </Typography>
            </Box>
            {dailyItinerary.map((itinerary, index) => {
                const heading = "Day " + itinerary.day + "  :\t" + itinerary.title
                return (
                    <div sx={{ marginBottom: "10%" }}>
                        <CustomAccordionTab heading={heading} details={itinerary.details}
                            headingIcon={itinerary.headingIcon} index={index} />
                    </div>
                )
            })}
        </>
    )
}

export default ItineraryDataTab;