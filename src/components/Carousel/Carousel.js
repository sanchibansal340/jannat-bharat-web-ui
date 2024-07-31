import React, { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    Typography,
    Rating,
    Box,
    Avatar,
    Grid,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

const Carousel = (props) => {
    const reviews = props['reviews']
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000) // Change card every 5 seconds

        return () => clearInterval(interval)
    }, [reviews.length])

    return (
        <Grid container spacing={3} justifyContent="center">
            {reviews.map((review, index) => (
                <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                        display:
                            index >= activeIndex % 3 &&
                            index < (activeIndex % 3) + 3
                                ? 'block'
                                : 'none',
                    }}
                >
                    <Card
                        sx={{
                            display: 'flex',
                            marginBottom: '2em',
                            textAlign: 'left',
                            height: '11rem',
                        }}
                    >
                        <CardContent sx={{ flex: 1 }}>
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
                                    alt={review.userName}
                                    src={review.userImage}
                                />
                                <Typography variant="h6" component="div">
                                    {review.userName}
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                color="secondary.main"
                                paragraph
                            >
                                {review.reviewText}
                            </Typography>
                            <Rating
                                name="rating"
                                value={review.rating}
                                readOnly
                                emptyIcon={
                                    <StarIcon style={{ color: '#ccc' }} />
                                }
                                icon={<StarIcon style={{ color: '#fdd835' }} />}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Carousel
