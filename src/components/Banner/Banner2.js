import React from 'react'
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Box,
} from '@mui/material'
import HomepageCarouselImg2 from '../../assets/homepage-carousel-img2.jpg'
import HomepageCarouselImg3 from '../../assets/homepage-carousel-img3.jpg'
import HomepageCarouselImg4 from '../../assets/homepage-carousel-img1.jpg'
import seaImage from '../../assets/sea.png'

const homepageCarouselImages = [
    {
        image: HomepageCarouselImg2,
        title: 'Ladakh',
        subtitle: 'Meet the Photographer Who Chases Stars',
        transform: 'rotate(-3deg)',
    },
    {
        image: HomepageCarouselImg3,
        title: 'Agra',
        subtitle: 'The most beautiful token of love',
        transform: 'rotate(2deg)',
    },
    {
        image: HomepageCarouselImg4,
        title: 'Meghalaya',
        subtitle: 'Explore the north easts',
        transform: 'rotate(-2deg)',
    },
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
        pb: '3rem',
    },
}

function Banner() {
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
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        transform:
                                            homepageCarouselImage.transform,
                                        border: '0.7rem dashed white',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={homepageCarouselImage.image}
                                        alt={homepageCarouselImage.title}
                                        sx={{
                                            height: {
                                                xs: '12.5rem',
                                                sm: '18.75rem',
                                                md: '10rem',
                                            },
                                        }}
                                    />
                                    {/* <CardContent
                                    
                                >
                                    <Typography variant="h6">
                                        {homepageCarouselImage.title}
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
