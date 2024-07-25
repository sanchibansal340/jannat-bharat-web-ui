import Box from "@mui/material/Box";
import { Tooltip, Typography } from "@mui/material";
import TimelapseIcon from '@mui/icons-material/Timelapse';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Groups3Icon from '@mui/icons-material/Groups3';
import React from "react";
import Grid from "@mui/material/Grid";

const InfoxBoxCard = ({ infoIcon, infoHeading, infoData }) => {

    return (
        <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
                flexBasis: '30%',
                width: '100%',
                paddingBottom: "2px",
            }}
        >
            <Tooltip title={infoHeading}>
                <Box
                    sx={{
                        backgroundColor: '#A7C6CB',  // Light blue background
                        p: 1,  // Padding around the icon
                        borderRadius: '50%',  // Circular background
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 1
                    }}
                >
                    {infoIcon}
                </Box>
            </Tooltip>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Typography gutterBottom variant="body1" color="primary.main">
                    {infoHeading}
                </Typography>
                <Typography
                    gutterBottom variant="h6" color="secondary.main"
                >
                    <b>{infoData}</b>
                </Typography>
            </Box>
        </Box>
    )

}


const InfoBox = ({ infoData }) => {

    const tripInfo = {
        0: {
            heading: "Starting Date",
            icon: <CalendarMonthIcon sx={{ fontSize: 30 }} />,
            data: infoData.startingDate
        },
        1: {
            heading: "Return Date",
            icon: <CalendarMonthIcon sx={{ fontSize: 30 }} />,
            data: infoData.returnDate

        },
        2: {
            heading: "Group Type",
            icon: <Groups3Icon sx={{ fontSize: 30 }} />,
            data: infoData.groupType

        },
        3: {
            heading: "Duration",
            icon: <TimelapseIcon sx={{ fontSize: 30 }} />,
            data: infoData.duration
        },
    }
    return (
        <Grid
            container
            spacing={2}  // Space between grid items
            p={1}
            alignItems="center"
            justifyContent="space-between"
            border={"1px solid #e4e6e8"}
            borderRadius={2}
            boxShadow={2}
            marginBottom="2%"
            backgroundColor={"#ffff"}

            sx={{
                '@media (max-width: 600px)': {
                    marginTop: "4%",

                },
            }}
        >
            {Object.keys(tripInfo).map((index) => {
                const info = tripInfo[index];
                return (
                    <Grid
                        item
                        xs={6}  // Full width on extra-small screens
                        sm={6}   // Half width on small screens
                        md={3}   // Quarter width on medium screens (4 columns per row)
                        key={index}  // Add a unique key prop for each card
                    >
                        <InfoxBoxCard
                            key={index}  // Add a unique key prop for each card
                            infoIcon={info.icon}
                            infoHeading={info.heading}
                            infoData={info.data}
                        />
                    </Grid>
                );
            })}


        </Grid>
    );
}

export default InfoBox