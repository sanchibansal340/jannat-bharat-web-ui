import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.dark',
                color: 'white',
                padding: '3rem 0',
            }}
            id="contact_us"
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1">
                            Email: example@example.com
                        </Typography>
                        <Typography variant="body1">
                            Phone: +1234567890
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} container justifyContent="center">
                        <Typography variant="body1" align="center">
                            &copy; 2024 Jannat Bharat. All Rights Reserved.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} />
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer
