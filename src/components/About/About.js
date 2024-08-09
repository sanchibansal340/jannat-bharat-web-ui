import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'

function About() {
    const [aboutUsContent, setAboutUsContent] = useState('')
    

    useEffect(() => {
        
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
                    {aboutUsContent}
                    <br />
                    <br />
                </Typography>
            </div>
        </Box>
    )
}

export default About
