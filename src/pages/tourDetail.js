import * as React from 'react';
import {css, styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ItineraryDataTab from "../components/TourDetail/itineraryTab/ItineraryDataTab";
import InfoBox from "../components/TourDetail/InfoBox";
import ItineraryTab from "../components/TourDetail/itineraryTab/ItineraryTab";
import PriceDataTab from "../components/TourDetail/itineraryTab/PriceDataTab";
import MustKnowDataTab from "../components/TourDetail/itineraryTab/MustKnowDataTab";
import InquireForm from "../components/TourDetail/InquireForm";
import {Typography} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useEffect} from "react";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const TourDetail = ({tripData,getTripDetail}) => {
    useEffect(() => {
        if (tripData===null){
            getTripDetail(1)
        }

    }, []);

    console.log("----tripData-----",tripData)

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const infoData = {
        duration: "6 days",
        startingDate: "7-7-24",
        returnDate: "5-7-24",
        groupType: "All Girls"
    }
    const detailedItinerary = {

        0: {
            label: "ITINERARY",
            component: <ItineraryDataTab/>
        },
        2: {
            label: "PRICE",
            component: <PriceDataTab/>

        },
        3: {
            label: "Must Know",
            component: <MustKnowDataTab/>
        }
    }

    return (
        <Box sx={{flexGrow: 1, marginLeft: "7%", marginRight: "7%", padding: "5%",
            '@media (max-width: 600px)': {
                marginLeft: "0.5%", marginRight: "0.5%"
            },
        }}>
            <Grid item xs={12} md={8} lg={8}>
                <Box sx={{marginBottom: "4%"}}>
                    <Typography variant={"h4"} sx={{
                        fontSize: "36px",
                        lineHeight: "48px",
                        fontFamily: "fangsong",
                        fontWeight: "800",
                        color: "#1D4D54",
                        '@media (max-width: 600px)': {
                            fontSize:"32px"
                        }
                    }}>
                        Trip To: TIRTHAN VALLEY
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6} md={8} lg={8}>
                <Box sx={{marginBottom: "4%"}}>
                    <img
                        src={"https://www.fabhotels.com/blog/wp-content/uploads/2020/05/road-trip-hacks-tips-600.jpg"}
                        style={{
                            width: "100%",
                            height: isSmallScreen ? "200px"  : '550px',
                        }}  />
                </Box>

            </Grid>


            {/*infoBox, tab and inquiryform*/}
            <Box sx={{
                '@media (max-width: 600px)': {
                    margin:"0px"
                },
            }}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={8}>
                        <InfoBox infoData={infoData} />
                        <ItineraryTab details={detailedItinerary}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InquireForm />
                    </Grid>
                </Grid>
            </Box>


        </Box>
    );
}
export default TourDetail;

/*




 */