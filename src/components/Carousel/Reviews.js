import React from 'react'
import { Box, Typography } from '@mui/material'
import ReviewCard from './ReviewCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick'

const reviews = [
    {
        userImage: 'https://via.placeholder.com/150',
        userName: 'John Doe',
        reviewText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 4.5,
    },
    {
        userImage: 'https://via.placeholder.com/150',
        userName: 'Jane Smith',
        reviewText:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 5,
    },
    {
        userImage: 'https://via.placeholder.com/150',
        userName: 'Alice Johnson',
        reviewText:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        rating: 3.5,
    },
    {
        userImage: 'https://via.placeholder.com/150',
        userName: 'Sia',
        reviewText:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        rating: 5.0,
    },
    {
        userImage: 'https://via.placeholder.com/150',
        userName: 'Albert Einstein',
        reviewText:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        rating: 4.0,
    },
]

const Reviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <></>, 
        nextArrow: <></>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
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
        <Box
            sx={{ padding: '3rem', backgroundColor: 'background.main' }}
            id="reviews"
        >
            <Typography
                variant="h3"
                sx={{
                    fontStyle: 'italic',
                    marginBottom: '1rem',
                }}
                color="primary.main"
            >
                Reviews
            </Typography>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Slider>
        </Box>
    )
}

export default Reviews
