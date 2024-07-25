import React from 'react'
import Carousel from './Carousel'
import { Box, Typography } from '@mui/material'

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
            <Carousel reviews={reviews} />
        </Box>
    )
}

export default Reviews
