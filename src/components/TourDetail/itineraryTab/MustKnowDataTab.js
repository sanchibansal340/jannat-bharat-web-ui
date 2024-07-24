import CustomAccordionTab from "../CustomAccordionTab";
import React from "react";



const MustKnowDataTab=({mustKnowData})=>{
    return(
        <>
            {mustKnowData.map(( info) => {
            
                return (
                    <div sx={{marginBottom: "10%"}}>
                        <CustomAccordionTab heading={info.heading} details={info.details} headingIcon={info.headingIcon} />
                    </div>
                )
            })}
        </>
    )
}

export default MustKnowDataTab