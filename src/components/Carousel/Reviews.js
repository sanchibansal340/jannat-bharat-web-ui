import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import ReviewCard from './ReviewCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick'
import { fetchData } from '../../services/HomePageService'

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

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchData('reviews/')
            .then((reviewsResponse) => {
                setReviews(reviewsResponse)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

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
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Slider>
        </Box>
    )
}

export default Reviews
