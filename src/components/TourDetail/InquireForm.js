import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
const InquiryForm = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ mt: 2 }}>
            <Grid container spacing={2} justifyContent={isSmallScreen ? 'center' : 'flex-end'}>
                <Grid item xs={12} md={6} lg={12}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Box sx={{backgroundColor:"#f2f4f6"}}>

                            <Typography variant="h5" component="h1" gutterBottom sx={{color:"#1D4D54",padding:"20px",fontFamily:"monospace",fontWeight:"700",align:"center"}}>

                                <DynamicFormIcon /> Inquiry Form
                            </Typography>
                        </Box>

                        <form noValidate autoComplete="off">
                            <Box sx={{ mb: 2 ,marginTop:"10px"}}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    required
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    required
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    variant="outlined"
                                    type="tel"
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Number of Adults"
                                    variant="outlined"
                                    type={"number"}
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
                                />
                            </Box>
                            <Button variant="contained" color="primary" type="submit" fullWidth sx={{backgroundColor:"#1D4D54",fontWeight:"700",lineHeight:"26px", fontSize:"16px",height:"50px"}}>
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InquiryForm;
