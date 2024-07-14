import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DayWiseItineraryDataTab from "../components/TourDetail/itineraryTab/DayWiseItineraryDataTab";
import InfoBox from "../components/TourDetail/InfoBox";
import ItineraryTab from "../components/TourDetail/itineraryTab/ItineraryTab";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Overview from "../components/TourDetail/itineraryTab/OverviewDataTab";
import PolicyDataTab from "../components/TourDetail/itineraryTab/PolicyDataTab";
import PriceDataTab from "../components/TourDetail/itineraryTab/PriceDataTab";
import OtherInfoDataTab from "../components/TourDetail/itineraryTab/OtherInfoDataTab";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const TourDetail=()=> {
    const infoData={
        duration:"6days",
        startingDate:"7-7-24",
        returnDate:"5-7-24",
        groupType:"all girls"
    }
    const detailedItinerary={
        0:{
            label:"OVERVIEW",
            component:<Overview />
        },
        1:{
            label:"ITINERARY",
            component:<DayWiseItineraryDataTab />
        },
        2:{
            label:"PRICE",
            component:<PriceDataTab />

        },
        3:{
            label:"Must Know",
            component:<OtherInfoDataTab />
        },
        4:{
            label:"POLICIES",
            component:<PolicyDataTab />
        }
    }
    return (
        <Box sx={{ flexGrow: 1, marginLeft:"15%", marginRight:"15%" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <InfoBox infoData= {infoData} />
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <ItineraryTab details={detailedItinerary} />
                </Grid>


                <Grid item xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>

            </Grid>
        </Box>
    );
}
export default TourDetail;

/*




 */