import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import { fetchData } from '../../services/AboutService'

function About() {
    const [aboutUsContent, setAboutUsContent] = useState('')

    useEffect(() => {
        fetchData('1')
            .then((aboutUsResponse) => {
                setAboutUsContent(aboutUsResponse["about_content"])
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])


    return (
        <Box
            sx={{ padding: '3rem', backgroundColor: 'background.main' }}
            id="about_us"
        >
            <Typography
                variant="h3"
                sx={{
                    fontStyle: 'italic',
                    marginBottom: '1rem',
                }}
                color="primary.main"
            >
                About Us
            </Typography>
            <div>
                <Typography
                    variant="body1"
                    sx={{ color: 'secondary.main' }}
                >
                    <span dangerouslySetInnerHTML={{ __html: aboutUsContent }} />
                </Typography>
            </div>
        </Box>
    )
}

export default About
