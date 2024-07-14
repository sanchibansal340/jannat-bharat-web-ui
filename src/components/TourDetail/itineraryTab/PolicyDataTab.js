import CustomAccordionTab from "../CustomAccordionTab";
import React from "react";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const policies = {
    0: {
        heading:"Inclusions",
        headingIcon:<AllInclusiveIcon />,
        details: "Travelling Ac mode\n" +
            "• Accommodation for 2 nights\n" +
            "• Local guide while sightseeing\n" +
            "• Meals (2 breakfasts and 2\n" +
            "dinners)\n" +
            "• Sight transfers\n" +
            "• Bonfire and Music\n" +
            "• 4*4 Vehicle (Tungasi Dhar)"
    },
    1:{
        heading:"Terms And Conditions",
        headingIcon: <TextSnippetIcon />,
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
            "•Cost and consequences arising due to any force majeure situations including " +
            "but not limited to unforeseen circumstances like; natural calamities, " +
            "political disturbances, health issues, flight delays cancellations, things beyond our " +
            "control etc. will have to be borne by the guest."
    }

}
const PolicyDataTab=()=>{
    return(
        <>
            {Object.keys(policies).map((item, index) => {
                const policy = policies[item]
                return (
                    <div sx={{marginBottom: "10%"}}>
                        <CustomAccordionTab heading={policy.heading} details={policy.details} headingIcon={policy.headingIcon} index={index}/>
                    </div>
                )
            })}
        </>
    )
}

export default PolicyDataTab;