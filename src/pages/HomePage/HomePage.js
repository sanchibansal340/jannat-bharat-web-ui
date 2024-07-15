import React from 'react';
import { Navbar } from '../../components/utils';
import { Grid, Container, Box } from '@mui/material';
import welcomePageImg from '../../assets/banner.jpg';
import './HomePage.css'

export const HomePage = () => {
    return (
        <Grid container xs={12}>
            <Navbar />
            <Grid item xs={12}>
                <Box style={{ position: 'relative' }}
                >
                    <img
                        style={{ height: 'auto', width: '100%' }}
                        src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-background-top.jpg"
                        alt='img'
                        // src={welcomePageImg}
                    />
                    <div className='welcome-banner-overlay'>
                        <h1 className='welcome-banner-heading'>
                            Travel and Explore the rich Culture of India with us
                        </h1>
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}