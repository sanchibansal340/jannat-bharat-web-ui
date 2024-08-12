import React from 'react'
import { Box } from '@mui/material'
import forestImage from '../../assets/forest.jpg'

const styles = {
    forestBannerImage: {
        position: 'relative',
        width: '100%',
        height: '83vh',
        backgroundImage: `url(${forestImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: '3rem',
        overflowY: 'hidden',
    },
    error404text: {
        fontWeight: 'bold',
        position: 'relative',
        color: 'white',
        backgroundClip: 'text',
        top: '25%',
    },
}

function PageNotFound() {
    return (
        <Box sx={styles.forestBannerImage} className="page-not-found">
            <h1 style={styles.error404text}>404</h1>
            <h3 style={styles.error404text} sx={{ mt: '1rem' }}>
                Looks like you've wandered too far
            </h3>
        </Box>
    )
}

export default PageNotFound
