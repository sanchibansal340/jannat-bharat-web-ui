import Box from "@mui/material/Box";
import {Tooltip, Typography} from "@mui/material";
import TimelapseIcon from '@mui/icons-material/Timelapse';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Groups3Icon from '@mui/icons-material/Groups3';
const InfoxBoxCard=({infoIcon,infoHeading,infoData})=>{

    return(
        <Box display="flex" alignItems="center" gap={1} >
            <Tooltip title={infoHeading}>

                <Box
                    sx={{
                        backgroundColor: '#A7C6CB', // Light blue background
                        p: 1, // Padding around the icon
                        borderRadius: '50%', // Circular background
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 1,
                    }}
                >
                    {infoIcon}
                </Box>
            </Tooltip>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1 }}>
                    {infoHeading}
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                    {infoData}
                </Typography>
            </Box>
        </Box>
    )

}


const InfoBox=({infoData})=>{

    const tripInfo={
        0:{
            heading:"Duration",
            icon:<TimelapseIcon sx={{  fontSize: 30 }} />,
            data:infoData.duration
        },
        1:{
            heading:"Starting Date",
            icon:<CalendarMonthIcon sx={{  fontSize: 30 }} />,
            data:infoData.startingDate
        },
        2:{
            heading:"Return Date",
            icon:<CalendarMonthIcon sx={{  fontSize: 30 }} />,
            data:infoData.returnDate

        },
        3:{
            heading:"Group Type",
            icon:<Groups3Icon sx={{  fontSize: 30 }} />,
            data:infoData.groupType

        }
    }
    return (
        <Box
            flexDirection={{ xs: 'column', md: 'row' }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            border={1}
            borderRadius={2}
            boxShadow={2}
            marginBottom="2%"
        >
            {Object.keys(tripInfo).map((index)=>{
                const info=tripInfo[index]
                return(
                    <InfoxBoxCard infoIcon={info.icon} infoHeading={info.heading} infoData={info.data} />
                )
            })}


        </Box>
    );
}

export default InfoBox