import React from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'

const images = [
    { src: '/images/image1.jpg', width: 1, height: 1 },
    { src: '/images/image2.jpg', width: 2, height: 1 },
    { src: '/images/image3.jpg', width: 1, height: 2 },
    { src: '/images/image4.jpg', width: 2, height: 2 },
    { src: '/images/image5.jpg', width: 1, height: 1 },
    { src: '/images/image6.jpg', width: 1, height: 1 },
    { src: '/images/image7.jpg', width: 1, height: 1 },
    { src: '/images/image8.jpg', width: 2, height: 1 },
    { src: '/images/image9.jpg', width: 1, height: 2 },
    { src: '/images/image10.jpg', width: 1, height: 1 },
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: theme.spacing(1),
    },
}))

const TravelGallery = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {images.map((image, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                        <img
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            className={classes.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default TravelGallery
