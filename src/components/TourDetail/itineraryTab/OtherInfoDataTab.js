import CustomAccordionTab from '../CustomAccordionTab'
import React from 'react'
import StarsIcon from '@mui/icons-material/Stars'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

const otherInfo = {
    0: {
        heading: 'Things To Carry',
        headingIcon: <StarsIcon />,
        details:
            '● Extra pair of socks\n' +
            '● one jacket / Upper\n' +
            '● Raincoat / you can buy it from there as well.\n' +
            '● Your Ids (aadhar card,etc)\n' +
            '● Small Backpack for trekking\n' +
            '● Mask and personal sanitizer\n' +
            '● Sport Shoes with good grip\n' +
            '● Power bank for your phone or the other\n' +
            'gadgets',
    },
    1: {
        heading: 'Why Choose Us?',
        headingIcon: <QuestionMarkIcon />,
        details:
            'Your safety is our topmost priority\n' +
            '• Secure payment methods\n' +
            '• Well informed and knowledgeable guides\n' +
            '• Comfortable and hygienic places to stay\n' +
            '• 24/7 customer support\n' +
            '• Sanitized cabs/travellers\n' +
            '• Regular sanitisation of all the properties\n' +
            '• Awe inspiring and fellow travellers\n' +
            '• All precautions and rules followed as\n' +
            'mandated by the government',
    },
}
const OtherInfoDataTab = () => {
    return (
        <>
            {Object.keys(otherInfo).map((index) => {
                const info = otherInfo[index]
                return (
                    <div sx={{ marginBottom: '10%' }}>
                        <CustomAccordionTab
                            heading={info.heading}
                            details={info.details}
                            headingIcon={info.headingIcon}
                            index={index}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default OtherInfoDataTab
