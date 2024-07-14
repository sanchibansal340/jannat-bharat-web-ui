import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import React from "react";

const CustomAccordionTab = ({heading, details,headingIcon}) => {
    return (
        <Box sx={{marginBottom: "28px", border:"1px solid #e4e6e8", borderRadius:"8px"}}>
            <Accordion defaultExpanded >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{padding: "18px"}}
                >
                    <Box display={"flex"} alignItems="center"
                         justifyContent="space-between" gap={2}>
                        {headingIcon}
                        <Typography sx={{
                            fontSize: "24px",
                            fontWeight: "800",
                            fontFamily: "fangsong",
                            color: "#1D4D54"
                        }}>{heading}</Typography>
                    </Box>

                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:"#e0e0e0", margin:"15px", borderRadius:"2%", padding:"5%"}}>
                    <Typography style={{whiteSpace: 'pre-line', fontFamily: "ui-rounded"}}>
                        {details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
export default CustomAccordionTab