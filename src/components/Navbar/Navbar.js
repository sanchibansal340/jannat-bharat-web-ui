import { Menu as MenuIcon } from '@mui/icons-material'
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import { ViewCounter } from '../utils'

const pages = [
    { text: 'Upcoming Trips', id: 'upcoming_trips' },
    { text: 'Reviews', id: 'reviews' },
    { text: 'Gallery', id: 'gallery' },
    { text: 'Contact Us', id: 'contact_us' },
]

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'primary.main' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 600,
                            wordSpacing: '0.2em',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Jannat Bharat
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    component={NavHashLink}
                                    smooth
                                    to={`/#${page['id']}`}
                                    key={page['text']}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page['text']}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontWeight: 600,
                            wordSpacing: '0.2em',
                            flexGrow: 1,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Jannat Bharat
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex',
                                justifyContent: 'flex-end',
                            },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                component={NavHashLink}
                                smooth
                                to={`/#${page['id']}`}
                                key={page['text']}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    textTransform: 'capitalize',
                                }}
                            >
                                {page['text']}
                            </Button>
                        ))}
                    </Box>
                    <ViewCounter />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
