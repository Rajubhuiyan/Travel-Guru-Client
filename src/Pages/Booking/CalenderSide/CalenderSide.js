import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './CalenderSide.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Link } from 'react-router-dom';
const CalenderSide = ({ data }) => {
    const [fromValue, setFromValue] = useState(new Date());
    const [toValue, setToValue] = useState(new Date());

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <TextField sx={{ m: 2, pr: 4 }} fullWidth label="Origin" defaultValue="DHAKA" id="fullWidth" />
                <TextField sx={{ m: 2, pr: 4 }} fullWidth label="Destination" defaultValue={data?.name} id="fullWidth" />
                <CardContent>
                    <Grid container>
                        <Grid xs={12} sm={12} md={6} item>
                            <LocalizationProvider className="date-content" dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                    <DatePicker
                                        disablePast
                                        openTo="day"
                                        views={["day", "month", "year"]}
                                        value={fromValue}
                                        onChange={(newValue) => {
                                            newValue && setFromValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} label="From" />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} sx={{mt:{xs: 3, sm:3, md:0}}} item>
                            <LocalizationProvider className="date-content" dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                    <DatePicker
                                        disablePast
                                        openTo="day"
                                        views={["day", "month", "year"]}
                                        value={toValue}
                                        onChange={(newValue) => {
                                            newValue && setToValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} label="To" />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                </CardContent>
                <CardActions>
                    <Link to={`/search/${data?.name}`} style={{border: 'none', cursor: 'pointer', width: '100%', textDecoration:"none", textAlign: 'center'}} className="login-btn">Start Booking</Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default CalenderSide;