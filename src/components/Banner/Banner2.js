import React, { useState, useEffect } from 'react'
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Box,
} from '@mui/material'
import seaImage from '../../assets/sea.png'
import { fetchData } from '../../services/HomePageService'

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
        pb: '3rem',
    },
}

function Banner() {
    const [homepageCarouselImages, setHomepageCarouselImages] = useState([])

    useEffect(() => {
        fetchData('banners/')
            .then((bannerImagesResponse) => {
                setHomepageCarouselImages(bannerImagesResponse)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const homepageCarouselImagesTransform = [
        'rotate(-3deg)',
        'rotate(2deg)',
        'rotate(-2deg)',
    ]

    return (
        <Box sx={styles.bannerImage} id="banner">
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <img
                        src={seaImage}
                        alt="Sea"
                        style={{ maxWidth: '100%', maxHeight: '80%' }}
                    />
                </div>
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    sx={{ fontWeight: 'bold', my: '2rem' }}
                >
                    Jannat Bharat
                </Typography>
                <Typography variant="subtitle1" align="center" paragraph>
                    For travellers looking to explore the rich Culture of India.
                </Typography>
                <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
                    {homepageCarouselImages.map(
                        (homepageCarouselImage, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={homepageCarouselImage.id}
                            >
                                <Card
                                    sx={{
                                        transform:
                                            homepageCarouselImagesTransform[
                                                index
                                            ],
                                        border: '0.7rem dashed white',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={homepageCarouselImage.image}
                                        alt={homepageCarouselImage.caption}
                                        sx={{
                                            height: {
                                                xs: '12.5rem',
                                                sm: '18.75rem',
                                                md: '10rem',
                                            },
                                        }}
                                    />
                                    {/* <CardContent
                                        // style={{ transform: 'translateY(5%)' }}
                                    >
                                        <Typography variant="h6">
                                            {homepageCarouselImage.caption}
                                        </Typography>
                                    </CardContent> */}
                                </Card>
                            </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner
