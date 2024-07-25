import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';


const ItineraryTab=({details})=> {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
                <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
            >
            {Object.keys(details).map((index,_)=>{
                const itineraryDetails=details[index]
                return (
                    <Tab value={_} label={itineraryDetails.label} sx={{color:"primary.main",fontWeight:"800"}} >
                        {itineraryDetails.component}
                    </Tab>
                )
            })}

            </Tabs>
                </Box>
                {Object.keys(details).map((index,_)=>{
                    const itineraryDetails=details[index]
                    return (
                        <TabPanel value={_}  sx={{

                            '@media (max-width: 600px)': {

                                padding: '0px',
                                marginTop:"5%"
                            },
                        }} >
                            {itineraryDetails.component}
                        </TabPanel>
                    )
                })}

            </TabContext>
        </Box>
    );
}

export default ItineraryTab;
