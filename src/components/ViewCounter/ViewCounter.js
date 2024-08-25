import { Typography, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { fetchData } from '../../services/HomePageService'
import { useViewCounter } from './ViewContextProvider'

const ViewCounter = () => {
    const { count, setCount } = useViewCounter()

    useEffect(() => {
        const fetchVisitCount = async () => {
            try {
                const response = await fetchData('visit/')
                if (response.count <= 10000) {
                    console.log('Fetched count:', response.count) // Log the fetched count
                    setCount(response.count)
                }
            } catch (error) {
                console.error('Error fetching visit count:', error)
            }
        }

        fetchVisitCount()
    }, [])

    return (
        count && (
            <Box display="flex" marginLeft="1.2rem">
                <Typography variant="h6">
                    <RemoveRedEyeIcon
                        style={{ transform: 'translateY(20%)' }}
                    />{' '}
                    {count > 10000 ? count + '+ ' : count}
                </Typography>
            </Box>
        )
    )
}

export default ViewCounter
