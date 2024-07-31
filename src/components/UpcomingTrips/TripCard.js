import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
} from '@mui/material'
import hoveringIcon from '../../assets/compass.svg'

const TripCard = (props) => {
    const { image, tripDestination, tripType, startDate, endDate, price } =
        props['trip']
    const [isHovering, setIsHovering] = useState(false)

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card
                sx={{ height: '100%' }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        image={image}
                        height="auto"
                        alt={`${tripDestination} | ${tripType}`}
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
                            {startDate} - {endDate}
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
                    <Typography gutterBottom variant="h6" color="primary.main">
                        {tripDestination} | {tripType}
                    </Typography>
                    <Typography variant="body1" color="secondary.main">
                        {price !== 0 ? `Starting from ₹${price}` : 'Sold out!'}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default TripCard
