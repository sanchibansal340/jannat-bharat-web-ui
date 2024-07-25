import React, { useState, useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import HomepageCarouselImg1 from '../../assets/homepage-carousel-img1.jpg'
import HomepageCarouselImg2 from '../../assets/homepage-carousel-img2.jpg'
import HomepageCarouselImg3 from '../../assets/homepage-carousel-img3.jpg'
import HomepageCarouselImg4 from '../../assets/homepage-carousel-img4.jpg'

const homepageCarouselImages = [
    HomepageCarouselImg1,
    HomepageCarouselImg2,
    HomepageCarouselImg3,
    HomepageCarouselImg4,
]

const styles = {
    bannerImage: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        backgroundImage: `url("https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-background-top.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: '3rem',
    },
}

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % homepageCarouselImages.length
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <Box sx={styles.bannerImage} id="banner">
            <Grid container alignItems="center">
                <Grid item xs={12} md={7}>
                    <Typography
                        variant="h4"
                        component="div"
                        color="primary.main"
                        style={styles.bannerHeading}
                    >
                        Explore the rich Culture of India with <br />
                        <b> Jannat Bharat </b>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <img
                        src={homepageCarouselImages[currentIndex]}
                        alt="Foreground"
                        style={{
                            maxWidth: '20rem',
                            height: '30rem',
                            border: '2rem solid white',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner
