import {  Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css'
const HeaderMain = (props) => {
    const { data } = props;
    return (
        <div>
            <Grid container>
                <Grid  xs={12} sm={6} md={6} item>
                    <Typography className="typo" sx={{fontWeight: 500}} color="white" variant="h3" component="div">
                        {data?.name}
                    </Typography>
                    <Typography color="white" variant="overline" gutterBottom component="div">
                        {data?.description}
                    </Typography>
                    <Link to={`/booking/${data?._id}`}><button style={{border: 'none', cursor: 'pointer', fontSize:'20px', fontWeight: 400, marginTop: '10px'}} className="login-btn">Booking</button></Link>
                </Grid>
                <Grid xs={12} sm={6} md={6}item>
                    <img className="home-img" style={{width: '300px', marginTop: '10px'}} src={`data:image/png;base64,${data?.image}`} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default HeaderMain;