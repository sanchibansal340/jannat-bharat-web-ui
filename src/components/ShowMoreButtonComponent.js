import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const ShowMoreButtonComponent = ({ linkTo, buttonText, target }) => {
    return (
        <Button
            component={Link}
            to={linkTo}
            sx={{ my: '2rem', textTransform: 'capitalize' }}
            variant="contained"
            target={target}
        >
            {buttonText}
        </Button>
    )
}
export default ShowMoreButtonComponent
