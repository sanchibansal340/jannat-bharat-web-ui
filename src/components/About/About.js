import { Typography, Box } from '@mui/material'
import React from 'react'

function About() {
    const aboutUsContent = [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ]

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
                {aboutUsContent.map((content) => (
                    <Typography
                        variant="body1"
                        sx={{ color: 'secondary.main' }}
                    >
                        {content}
                        <br />
                        <br />
                    </Typography>
                ))}
            </div>
        </Box>
    )
}

export default About
