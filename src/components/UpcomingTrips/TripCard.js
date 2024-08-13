import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
} from '@mui/material'
import { Link } from 'react-router-dom'
import hoveringIcon from '../../assets/compass.svg'

const TripCard = ({ trip }) => {
    const {
        banner_image,
        title,
        type_of_group,
        start_date,
        end_date,
        starting_from_price,
    } = trip
    const [isHovering, setIsHovering] = useState(false)
    const price = trip['pickupDetails'][0]['quad_sharing_price']

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Link to={`/tour/${trip.id}`} style={{ textDecoration: 'none' }}>
                <Card
                    sx={{ height: '100%' }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            image={banner_image}
                            height="auto"
                            alt={`${title} | ${type_of_group}`}
                            sx={{ objectFit: 'cover', height: '200px' }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                bgcolor: '#1d4d5464',
                                color: 'white',
                                padding: '0.7rem',
                                textAlign: 'left',
                            }}
                        >
                            <Typography variant="title">
                                {start_date} - {end_date}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 10,
                                right: 20,
                                textAlign: 'right',
                            }}
                        >
                            {isHovering && (
                                <img
                                    src={hoveringIcon}
                                    height="50em"
                                    alt="hovering on this trip icon"
                                />
                            )}
                        </Box>
                    </Box>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            color="primary.main"
                        >
                            {title} | {type_of_group}
                        </Typography>
                        <Typography variant="body1" color="secondary.main">
                            {price !== 0
                                ? `Starting from ₹${starting_from_price}`
                                : 'Sold out!'}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}

export default TripCard
