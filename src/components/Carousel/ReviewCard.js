import React from 'react'
import { Avatar, Box, Typography, Rating } from '@mui/material'

const ReviewCard = ({ name, review, rating }) => (
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
            backgroundColor: 'white',
            height: '30rem',
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
                alt={name}
                src="https://via.placeholder.com/150"
            />
            <Typography variant="h6" component="div">
                {name}
            </Typography>
        </Box>
        <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
            <span dangerouslySetInnerHTML={{ __html: review }} />
        </Typography>
        <Rating value={rating} readOnly precision={0.5} />
    </Box>
)

export default ReviewCard
