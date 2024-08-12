import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick'
import { fetchData } from '../../services/HomePageService'
import './Gallery.css'
import ShowMoreButtonComponent from '../ShowMoreButtonComponent'

const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <></>,
        nextArrow: <></>,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const [galleryImages, setGalleryImages] = useState([])

    useEffect(() => {
        fetchData('gallery/')
            .then((galleryResponse) => {
                setGalleryImages(galleryResponse)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <Box sx={{ padding: '4rem 0' }} id="gallery">
            <Typography
                variant="h3"
                sx={{
                    fontStyle: 'italic',
                    marginBottom: '1.3rem',
                }}
                color="primary.main"
            >
                Gallery
            </Typography>
            <Slider {...settings}>
                {galleryImages.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.image}
                        alt={`Travel ${index + 1}`}
                        style={{ maxHeight: '400px' }}
                    />
                ))}
            </Slider>
            <ShowMoreButtonComponent
                linkTo={
                    'https://www.instagram.com/jannatbharat/?igsh=bTcycnRnOHpwOWNq'
                }
                buttonText="Let's sneek peek into more"
            />
        </Box>
    )
}

export default Gallery
