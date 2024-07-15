import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DayWiseItineraryDataTab from "../components/TourDetail/itineraryTab/DayWiseItineraryDataTab";
import InfoBox from "../components/TourDetail/InfoBox";
import ItineraryTab from "../components/TourDetail/itineraryTab/ItineraryTab";
import Overview from "../components/TourDetail/itineraryTab/OverviewDataTab";
import PolicyDataTab from "../components/TourDetail/itineraryTab/PolicyDataTab";
import PriceDataTab from "../components/TourDetail/itineraryTab/PriceDataTab";
import OtherInfoDataTab from "../components/TourDetail/itineraryTab/OtherInfoDataTab";
import InquireForm from "../components/TourDetail/InquireForm";
import {Typography} from "@mui/material";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const TourDetail = () => {
    const infoData = {
        duration: "6 days",
        startingDate: "7-7-24",
        returnDate: "5-7-24",
        groupType: "All Girls"
    }
    const detailedItinerary = {
        0: {
            label: "OVERVIEW",
            component: <Overview/>
        },
        1: {
            label: "ITINERARY",
            component: <DayWiseItineraryDataTab/>
        },
        2: {
            label: "PRICE",
            component: <PriceDataTab/>

        },
        3: {
            label: "Must Know",
            component: <OtherInfoDataTab/>
        },
        4: {
            label: "POLICIES",
            component: <PolicyDataTab/>
        }
    }
    return (
        <Box sx={{flexGrow: 1, marginLeft: "7%", marginRight: "7%", padding: "5%"}}>
            <Grid item xs={6} md={8} lg={8}>
                <Box sx={{marginBottom: "4%"}}>
                    <Typography variant={"h4"} sx={{
                        fontSize: "36px",
                        lineHeight: "48px",
                        fontFamily: "fangsong",
                        fontWeight: "800",
                        color: "#1D4D54"
                    }}>
                        Trip To: TIRTHAN VALLEY
                    </Typography>
                </Box>

            </Grid>
            <Grid item xs={6} md={8} lg={8}>
                <Box sx={{marginBottom: "4%"}}>
                    <img
                        src={"https://www.fabhotels.com/blog/wp-content/uploads/2020/05/road-trip-hacks-tips-600.jpg"}
                        width={"100%"} height="550px"/>
                </Box>

            </Grid>
            <Grid container spacing={6}>
                {/*leftside*/}
                <Grid item xs={6} md={8} lg={8}>
                    <Grid item>
                        <InfoBox infoData={infoData}/>
                    </Grid>

                    <Grid item>
                        <ItineraryTab details={detailedItinerary}/>
                    </Grid>
                </Grid>

                {/*rightside*/}
                <Grid item lg={4}>
                    <InquireForm/>
                </Grid>

            </Grid>


        </Box>
    );
}
export default TourDetail;

/*




 */