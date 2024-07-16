import CustomAccordionTab from "../CustomAccordionTab";
import React from "react";
import StarsIcon from '@mui/icons-material/Stars';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const otherInfo={
    0:{
        heading:"Things To Carry",
        headingIcon:<StarsIcon sx={{color:"#1D4D54"}} />,
        details:"● Extra pair of socks\n" +
            "● one jacket / Upper\n" +
            "● Raincoat / you can buy it from there as well.\n" +
            "● Your Ids (aadhar card,etc)\n" +
            "● Small Backpack for trekking\n" +
            "● Mask and personal sanitizer\n" +
            "● Sport Shoes with good grip\n" +
            "● Power bank for your phone or the other\n" +
            "gadgets"
    },
    1:{
        heading:"Why Choose Us?",
        headingIcon: <QuestionMarkIcon sx={{color:"#1D4D54"}} />,
        details:"Your safety is our topmost priority\n" +
            "• Secure payment methods\n" +
            "• Well informed and knowledgeable guides\n" +
            "• Comfortable and hygienic places to stay\n" +
            "• 24/7 customer support\n" +
            "• Sanitized cabs/travellers\n" +
            "• Regular sanitisation of all the properties\n" +
            "• Awe inspiring and fellow travellers\n" +
            "• All precautions and rules followed as\n" +
            "mandated by the government"
    },
    3: {
        heading:"Inclusions",
        headingIcon:<AllInclusiveIcon  sx={{color:"#1D4D54"}} />,
        details: "Travelling Ac mode\n" +
            "• Accommodation for 2 nights\n" +
            "• Local guide while sightseeing\n" +
            "• Meals (2 breakfasts and 2\n" +
            "dinners)\n" +
            "• Sight transfers\n" +
            "• Bonfire and Music\n" +
            "• 4*4 Vehicle (Tungasi Dhar)"
    },
    4:{
        heading:"Terms And Conditions",
        headingIcon: <TextSnippetIcon sx={{color:"#1D4D54"}} />,
        details:"• The travelling will be through AC traveller.\n" +
            "• The booking amount of the trip is 1500/-.\n" +
            "•The remaining amount is to be paid on the day of the journey in the decided " +
            "mode of payment.\n" +
            "•No action related to payment cutting after the deal is signed, will be " +
            "accepted.\n" +
            "• Once the booking is confirmed, the amount is nonrefundable.\n" +
            "• However, if the tour gets cancelled from our side, the amount will be " +
            "refunded.\n" +
            "• No travel insurance is included with thepackage.\n" +
            "• No cheques are allowed for payment.\n" +
            "•Cost and consequences arising due to any force majeure situations including but not limited to unforeseen circumstances like; natural calamities, " +
            "political disturbances, health issues, flight delays cancellations, things beyond our " +
            "control etc. will have to be borne by the guest."
    }
}
const MustKnowDataTab=()=>{
    return(
        <>
            {Object.keys(otherInfo).map(( index,_) => {
                const info = otherInfo[index]
                return (
                    <div sx={{marginBottom: "10%"}}>
                        <CustomAccordionTab heading={info.heading} details={info.details} headingIcon={info.headingIcon} index={_}/>
                    </div>
                )
            })}
        </>
    )
}

export default MustKnowDataTab