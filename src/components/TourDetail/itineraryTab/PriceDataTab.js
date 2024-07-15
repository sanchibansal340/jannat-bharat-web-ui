import CustomAccordionTab from "../CustomAccordionTab";
import React from "react";
import {Tooltip, Typography} from "@mui/material";
import CustomizedTable from "../../CustomizedTable";
import Box from "@mui/material/Box";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TourIcon from '@mui/icons-material/Tour';
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import InfoBox from "../InfoBox";

const tableDataHeading = {
    0: "Sharing Type",
    1: "Price"
}

const tableDataRows = {
    0: {
        "sharingType": "Quad Sharing",
        "price": "6500"
    },
    1: {
        "sharingType": "Triple Sharing",
        "price": "6500"
    },
    2: {
        "sharingType": "Double Sharing",
        "price": "7000"
    }
}

const DataPoints = ({title, infoIcon, value}) => {
    return (
        <div>
            <Box display="flex" alignItems="center" gap={1} sx={{fontSize: "15px"}}>
                <Tooltip title={title}>
                    <Box>
                        {infoIcon}
                    </Box>
                </Tooltip>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Typography variant="body2" color="textSecondary" sx={{lineHeight: 1}}>
                        {title}
                    </Typography>

                    <Typography variant="body" sx={{lineHeight: 1.5,overflowWrap:"anywhere"}}>
                        <b>{value}</b>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}
const LocationDetails = ({pickupPoint, pickupTime, departureTime}) => {
    return (
        <div elevation={3} sx={{p: 3}}>
            <DataPoints title={"Pickup Point"} value={pickupPoint} infoIcon={<LocationOnIcon/>}/>
<br />
            <Box display="flex" alignItems="center" gap={10} >
                    <DataPoints title={"Pickup Time"} value={pickupTime} infoIcon={<AccessTimeFilledIcon />}/>
                    <DataPoints title={"Departure Time"} value={departureTime} infoIcon={<DepartureBoardIcon />} />
                </Box>

            <br/>
            <br/>
            <CustomizedTable tableHeading={tableDataHeading} tableRow={tableDataRows}/>
        </div>
    )
}


const priceDetails = {
    0: {
        heading: "Chandigarh",
        headingIcon: <TourIcon/>,
        details: <LocationDetails pickupPoint={"Chandigarh"} pickupTime={"7:00"} departureTime={"7:30"}/>
    },
    1: {
        heading: "Delhi",
        headingIcon: <TourIcon/>,
        details: <LocationDetails
            pickupPoint={"Kashmere gate metro station gate1dfghjklewsrdtfyguiop[sdfghjkljhgftrewrtyuiouytdrsefdghjksdfghjkljhgftrewrtyuiouytdrsefdghjk"}
            pickupTime={"7:00"} departureTime={"7:30"}/>
    }
}

const PriceDataTab = () => {
    return (
        <>
            {Object.keys(priceDetails).map((data, index) => {
                const locationData = priceDetails[data]

                return (
                    <div sx={{marginBottom: "10%"}}>
                        <CustomAccordionTab heading={locationData.heading} details={locationData.details}
                                            headingIcon={locationData.headingIcon} index={index}/>
                    </div>
                )
            })}
        </>
    )
}

export default PriceDataTab;
