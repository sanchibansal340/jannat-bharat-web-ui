import React from 'react'
import { Container, Grid, Typography, Box, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'

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
                        <Box>
                            <Typography
                                variant="body1"
                                display="inline"
                                sx={{ mr: 1 }}
                            >
                                Connect with us on:
                            </Typography>
                            <IconButton
                                style={{ color: 'white' }}
                                aria-label="Instagram"
                                href="https://www.instagram.com/jannatbharat/"
                                target="_blank"
                                rel="noopener"
                            >
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Typography variant="body1" align="center" sx={{ mt: '3rem' }}>
                &copy; 2024 Jannat Bharat. All rights reserved.
            </Typography>
        </Box>
    )
}

export default Footer
