import React from 'react'
import { Avatar, Box, Typography, Rating } from '@mui/material'

const ReviewCard = ({ userImage, userName, reviewText, rating }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            m: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            boxShadow: 1,
            backgroundColor: "white",
            height: '11.4rem',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0.7rem',
            }}
        >
            <Avatar
                sx={{
                    width: 24,
                    height: 24,
                    marginRight: '0.7em',
                }}
                alt={userName}
                src={userImage}
            />
            <Typography variant="h6" component="div">
                {userName}
            </Typography>
        </Box>
        <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
            {reviewText}
        </Typography>
        <Rating value={rating} readOnly precision={0.5} />
    </Box>
)

export default ReviewCard
