import React, { useState, useEffect } from 'react'
import {
    Container,
    Grid,
    Typography,
    Box,
    IconButton,
    Link,
} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { fetchData } from '../../services/HomePageService'

const Footer = () => {
    const [emailContact, setEmailContact] = useState('')
    const [phoneContact, setPhoneContact] = useState('')
    const [igContact, setIgContact] = useState('')
    const [fbContact, setFbContact] = useState('')

    const setOtherContacts = (allContacts) => {
        allContacts.some((contact) => {
            if (contact.contact_name === 'Email') {
                setEmailContact(contact.contact_value)
            } else if (contact.contact_name === 'Phone') {
                setPhoneContact(contact.contact_value)
            } else if (contact.contact_name === 'Instagram') {
                setIgContact(contact.contact_value)
            } else if (contact.contact_name === 'Facebook') {
                setFbContact(contact.contact_value)
            }
        })
    }

    useEffect(() => {
        fetchData('contacts/')
            .then((contactsResponse) => {
                setOtherContacts(contactsResponse)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <Box
            sx={{
                backgroundColor: 'primary.dark',
                color: 'white',
                py: '3rem',
            }}
            id="contact_us"
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {(emailContact !== '' || phoneContact !== '') && (
                        <Grid item xs={12} md={6}>
                            {emailContact !== '' && (
                                <Typography variant="body1">
                                    Email: {emailContact}
                                </Typography>
                            )}
                            {phoneContact !== '' && (
                                <Typography variant="body1">
                                    Phone: {phoneContact}
                                </Typography>
                            )}
                        </Grid>
                    )}

                    {(igContact !== '' || fbContact !== '') && (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            container
                            justifyContent="center"
                        >
                            <Box>
                                <Typography
                                    variant="body1"
                                    display="inline"
                                    sx={{ mr: 1 }}
                                >
                                    Connect with us on:
                                </Typography>
                                {igContact !== '' && (
                                    <IconButton
                                        style={{ color: 'white' }}
                                        aria-label="Instagram"
                                        href={igContact}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <InstagramIcon />
                                    </IconButton>
                                )}
                                {fbContact !== '' && (
                                    <IconButton
                                        style={{ color: 'white' }}
                                        aria-label="Facebook"
                                        href={fbContact}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FacebookIcon />
                                    </IconButton>
                                )}
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Container>

            <Typography variant="body1" align="center" sx={{ mt: '3rem' }}>
                &copy; 2024 Jannat Bharat. All rights reserved.
                <br />
                Developed by{' '}
                <Link
                    sx={{ color: 'white', textDecorationColor: 'white' }}
                    variant="h6"
                    underline="always"
                    target="_blank"
                    rel="noopener"
                    href="https://sanchibansal340.github.io/"
                >
                    Sanchi
                </Link>{' '}
                and{' '}
                <Link
                    sx={{ color: 'white', textDecorationColor: 'white' }}
                    variant="h6"
                    underline="always"
                    target="_blank"
                    rel="noopener"
                    href="https://jaya2320.github.io/jaya752/"
                >
                    Jaya
                </Link>
            </Typography>
        </Box>
    )
}

export default Footer
