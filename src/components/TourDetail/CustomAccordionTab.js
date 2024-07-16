import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import React from "react";

const CustomAccordionTab = ({heading, details,headingIcon,index}) => {
const shouldExpand=index===0;
    return (
        <Box sx={{marginBottom: "28px", border:"1px solid #e4e6e8", borderRadius:"8px"}}>
            <Accordion defaultExpanded={shouldExpand} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Box display={"flex"} alignItems="center"
                         justifyContent="space-between" gap={2} sx={{margin:"2%"}}>
                        {headingIcon}
                        <Typography sx={{
                            fontSize: "23px",
                            fontWeight: "800",
                            fontFamily: "fangsong",
                            color: "#1D4D54",
                            '@media (max-width: 600px)': {
                                fontSize: '18px',
                            },
                        }}>{heading}</Typography>
                    </Box>

                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:"#f5f5f5", margin:"15px", borderRadius:"2%", padding:"3%",
                    '@media (max-width: 600px)': {
                        marginTop: '-15px',
                    },}}>
                    <Typography style={{whiteSpace: 'pre-line', fontFamily: "ui-rounded", }}>
                        {details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
export default CustomAccordionTab