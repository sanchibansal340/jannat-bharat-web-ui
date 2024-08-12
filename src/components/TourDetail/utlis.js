import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import StarsIcon from '@mui/icons-material/Stars'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'



export const headingIcons = {
    inclusions: <AllInclusiveIcon sx={{ color: '#1D4D54' }} />,
    exclusions: <ErrorOutlineIcon sx={{ color: '#1D4D54' }} />,
    thingsToCarry: <StarsIcon sx={{ color: '#1D4D54' }} />,
    cancellation_policy: <CancelPresentationIcon sx={{ color: '#1D4D54' }} />,
    terms_and_conditions: <TextSnippetIcon sx={{ color: '#1D4D54' }} />,
    why_us: <QuestionMarkIcon sx={{ color: '#1D4D54' }} />,
}

export const getMustKnowDataFromMustKnow = (mustKnowInfo, mustKnowData) => {
    mustKnowInfo.map((mustKnowValue) => {
        Object.keys(mustKnowValue).map((key) => {
            if (mustKnowValue[key].length > 0) {
                mustKnowData.push({
                    heading: key,
                    headingIcon: headingIcons[key],
                    details: mustKnowValue[key],
                })
            }
        })
    })
}

export const getMustKnowDataFromPolicy = (mustKnowInfo, mustKnowData) => {
    Object.keys(mustKnowInfo).map((key) => {
        if (mustKnowInfo[key].length > 0) {
            mustKnowData.push({
                heading: key,
                headingIcon: headingIcons[key],
                details: mustKnowInfo[key],
            })
        }
    })
}