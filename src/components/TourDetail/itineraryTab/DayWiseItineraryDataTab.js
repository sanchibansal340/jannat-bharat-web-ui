import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import React from "react";
import CustomAccordionTab from "../CustomAccordionTab";
import TodayIcon from '@mui/icons-material/Today';

const dailyItinerary = {
    0: {
        day: "0",
        title: "",
        headingIcon:<TodayIcon/>,
        details: "Board an evening AC tempo traveller/" +
            "sedan car/ SUV car depending on the " +
            "group size Delhi/Chandigarh"
    },
    1: {
        day: "1",
        title: "Tirthan Valley Sightseeing",
        headingIcon:<TodayIcon/>,

        details: "" +
            "Wake up in the mountains. Tirthan is 496km from Delhi, we should reach there by 11:00 AM.\n" +
            "• Check-in in your rooms and relax a bit.\n" +
            "• After lunch, we take a stroll to the river, spend some leisure time by the riverside.\n" +
            "• Head to local sightseeing in Tirthan and visit Gadagusain village, Bhumasi temple and Sunset point at Alwah.\n" +
            "• Evenings will be cold, so get back to the hotel/homestay bySunset.\n" +
            "• Dinner with camfire, a session of dumb charades or Lotto or any other planned activity."
    },
    2: {
        day: "2",
        title: "Jalori Pass, Sirolsar Lake Trek/\n" +
            "Tungasi Dhar",
        headingIcon:<TodayIcon/>,
        details: "" +
            " After breakfast, we move towards Jalori pass, altitude 3120 mts. Trek to Sirolsar Lake which starts from Jalori Pass through a thickly narrow path.\n" +
            "Enjoy the occasional view of meadows beyond the thick curtain of the\n" +
            "forests.\n" +
            "• It is a moderate trek.\n" +
            "• Total trek duration should be 5 to 6 hrs depending on the weather conditions on the given day. Back to the hotel / homestay byevening.\n" +
            "*Due to high altitude and heavy snowfall, In December, it becomes risky and\n" +
            "trek to serolsar and Jalori pass is not accessible. So we have alternative\n" +
            "option, hidden gem and beautiful place – Tungasi dhar and Tungasi Mahadev\n" +
            "Temple.*\n" +
            "• We will head towards Tungasi top. Here you will see 360 view of mighty Himalayas and a magical sunset to end your day. There is one specialty" +
            "of this place, you can witness moonrise and sunset at the same time, if " +
            "the sky is clear and it would be once in a life time experience, if you arrive " +
            "on the day of full moon.\n" +
            "• In winters, there will be snow. So a 4*4 vehicle will take you to the top and " +
            "you can enjoy snow ride.\n" +
            "• Tungasi Mahadev Temple is also situated here. There is a small hike to " +
            "reach at the temple.\n" +
            "• Around 6-7 pm, it’s time to get back to hotel. One thing we can say, you " +
            "are going to remember this day for your whole life."

    },
    3: {
        day: "3",
        title: "JIBHI SIGHTSEEING",
        headingIcon:<TodayIcon/>,
        details: "• Breakfast will be served in the " +
            "morning.\n" +
            "• Later on, we'll move out for Jibhi " +
            "Waterfalls: For A Serene Escape " +
            "And mini Thailand of Jibhi.\n " +
            "• Spend some quality time in Jibhi\n" +
            "• We'll be departing for " +
            "Chandigarh/Delhi in theevening.\n" +
            "• Trip ends with some beautiful " +
            "memories"
    }
}


const DayWiseItineraryDataTab = ({day, title, details, index}) => {
    return (
        <>
            {Object.keys(dailyItinerary).map((day, index) => {
                const itinerary = dailyItinerary[day]
                const heading = "Day " + itinerary.day + "  :\t" + itinerary.title

                return (
                    <div sx={{marginBottom: "10%"}}>
                        <CustomAccordionTab heading={heading} details={itinerary.details} headingIcon={itinerary.headingIcon} index={index}/>
                    </div>
                )
            })}
        </>
    )
}

export default DayWiseItineraryDataTab;