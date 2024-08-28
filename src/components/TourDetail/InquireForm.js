import React, { useState } from 'react'
import { Box, Grid, TextField, Button, Typography, Paper } from '@mui/material'
import DynamicFormIcon from '@mui/icons-material/DynamicForm'
import emailjs from 'emailjs-com'

const InquiryForm = ({ trip }) => {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        numberOfPeople: '',
        message: '',
    }

    const [errorMessage, setErrorMessage] = useState({})
    const [formData, setFormData] = useState(initialFormData)

    const handleValidation = (validateFormData) => {
        const errors = {}

        for (let key in validateFormData) {
            if (key !== 'phone' && validateFormData[key].trim() === '') {
                errors[key] = 'Please enter a value!'
            } else if (
                key === 'phone' &&
                !validateFormData[key].match('[789][0-9]{9}')
            ) {
                errors[key] = 'Please enter a valid value!'
            }
        }

        setErrorMessage(errors)
        return Object.keys(errors).length === 0
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!handleValidation(formData)) {
            return
        }

        let mergedFormData = { ...formData, ...trip }

        emailjs
            .send(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                mergedFormData,
                process.env.REACT_APP_EMAIL_USER_ID
            )
            .then(
                (result) => {
                    alert('Email sent successfully!')
                    setFormData(initialFormData)
                },
                (error) => {
                    console.log(error.text)
                    alert('Failed to send email. Please try again.')
                }
            )
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
                                    error={errorMessage['name']}
                                    helperText={errorMessage['name']}
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
                                    error={errorMessage['email']}
                                    helperText={errorMessage['email']}
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
                                    error={errorMessage['phone']}
                                    helperText={errorMessage['phone']}
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
                                    error={errorMessage['numberOfPeople']}
                                    helperText={errorMessage['numberOfPeople']}
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
                                    error={errorMessage['message']}
                                    helperText={errorMessage['message']}
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
