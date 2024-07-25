import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import React from "react";
import { isNullOrUndefinedOrBlank } from "../../helper/utils";

const CustomAccordionTab = ({ heading, details, headingIcon, index, pickupDetail }) => {

    const shouldExpand = index === 0;
    return (
        <Box 
        sx={{ marginBottom: "28px", border: "1px solid #e4e6e8", borderRadius: "8px" }}
        >
            <Accordion defaultExpanded={shouldExpand}  >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Box display={"flex"} alignItems="center"
                        justifyContent="space-between" gap={2} sx={{ margin: "1%" }}>
                        {headingIcon}
                        <Typography
                        gutterBottom variant="h6" color="primary.main"
                        sx={{textTransform: "capitalize"}}
                        >{heading}</Typography>
                    </Box>

                </AccordionSummary>
                <AccordionDetails sx={{
                    '@media (max-width: 600px)': {
                        marginTop: '-50px',
                    },
                }}>
                    {isNullOrUndefinedOrBlank(pickupDetail) ?
                        <Typography 
                        sx={{ color: 'secondary.main' }}>
                            <div dangerouslySetInnerHTML={{ __html: details }} />
                        </Typography>
                        :
                        <Typography variant="body1"
                        sx={{ color: 'secondary.main' }}>
                            {pickupDetail}
                        </Typography>
                    }


                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
export default CustomAccordionTab