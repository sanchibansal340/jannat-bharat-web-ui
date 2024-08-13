import React, { useState } from 'react'
import { Box, Grid, TextField, Button, Typography, Paper } from '@mui/material'
import DynamicFormIcon from '@mui/icons-material/DynamicForm'
import { sendMail } from '../../services/TripService'

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        numberOfPeople: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = sendMail('send-email/', formData)
            alert(response.data.message)
        } catch (error) {
            alert('Failed to send email')
        }
    }
    return (
        <Box
            sx={{
                mt: 2,
                '@media (max-width: 600px)': {
                    marginTop: '0%',
                },
            }}
        >
            <Grid container spacing={2} justifyContent={'center'}>
                <Grid item xs={12} md={6} lg={12}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontStyle: 'italic',
                                    marginBottom: '1rem',
                                }}
                                color="primary.main"
                            >
                                <DynamicFormIcon /> Inquiry Form
                            </Typography>
                        </Box>

                        <form
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Box sx={{ mb: 2, marginTop: '10px' }}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    variant="outlined"
                                    type="tel"
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Number of People"
                                    variant="outlined"
                                    type={'number'}
                                    required
                                    name="numberOfPeople"
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                                sx={{
                                    backgroundColor: '#1D4D54',
                                    fontWeight: '700',
                                    lineHeight: '26px',
                                    fontSize: '16px',
                                    height: '50px',
                                }}
                            >
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default InquiryForm
