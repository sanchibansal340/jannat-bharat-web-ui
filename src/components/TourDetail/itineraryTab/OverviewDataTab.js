import React from "react";
import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import GridViewIcon from '@mui/icons-material/GridView';


const details = "Elevate your Las Vegas experience to new heights with a journey aboard The High Roller at The LINQ. As the tallest observation wheel in the world, standing at an impressive 550 feet tall, The High Roller offers a bird's-eye perspective of the iconic Las Vegas Strip and its surrounding desert landscape. From the moment you step into one of the spacious cabins, you'll be transported on a mesmerizing adventure, where every turn offers a new and breathtaking vista of the vibrant city below.\n" +
    "\n" +
    "Whether you're a first-time visitor or a seasoned Las Vegas aficionado, The High Roller promises an unparalleled experience that will leave you in awe. With its climate-controlled cabins and immersive audio commentary, this attraction provides a unique opportunity to see Las Vegas from a whole new perspective, while learning about its rich history and famous landmarks along the way."
const OverviewDataTab = () => {
    return (

        <Paper elevation={3} sx={{p: 3}}>
            <Box display={"flex"} alignItems="center"
               gap={2} >
                <GridViewIcon/>
                <Typography variant="h4" component="h1"  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    fontFamily: "fangsong",
                    color: "#1D4D54",
                    lineHeight: "42px"
                }}>
                    Overview
                </Typography>
            </Box>

            <Typography variant="body1" paragraph
                        sx={{
                            fontSize: "15px",
                            fontWeight: "400",
                            lineHeight: "1.5",
                            fontFamily: "ui-rounded",
                            backgroundColor: "#e0e0e0",
                            margin: "15px",
                            borderRadius: "2%",
                            padding: "5%"
                        }}>
                {details}
            </Typography>
        </Paper>
    )
}

export default OverviewDataTab