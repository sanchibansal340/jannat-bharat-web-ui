import React from 'react'
import { Box, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick'
import './Gallery.css'

const images = [
    {
        src: 'https://images.unsplash.com/photo-1505069446780-4ef442b5207f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
        width: 1,
        height: 2,
    },
    {
        src: 'https://images.unsplash.com/photo-1477064996809-dae46985eee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D',
        width: 2,
        height: 2,
    },
    {
        src: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
        width: 1,
        height: 1,
    },
    {
        src: 'https://images.unsplash.com/photo-1478860002487-680cc42afbeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D',
        width: 2,
        height: 1,
    },
    {
        src: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D',
        width: 1,
        height: 2,
    },
    {
        src: 'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D',
        width: 1,
        height: 1,
    },
]

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
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Travel ${index + 1}`}
                        style={{ maxHeight: '400px' }}
                    />
                ))}
            </Slider>
        </Box>
    )
}

export default Gallery
