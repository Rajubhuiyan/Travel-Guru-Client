import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const HeaderMain = (props) => {
    const { data } = props;
    return (
        <div>
            <Grid container>
                <Grid  xs={6} sm={6} item>
                    <Typography sx={{fontWeight: 500}} color="white" variant="h2" component="div">
                        {data?.name}
                    </Typography>
                    <Typography color="white" variant="overline" gutterBottom component="div">
                        {data?.description}
                    </Typography>
                    <button onClick={() => console.log(data.id)} style={{border: 'none', cursor: 'pointer', fontSize:'20px', fontWeight: 400, marginTop: '10px'}} className="login-btn">Booking</button>
                </Grid>
                <Grid xs={6} sm={6} item>
                    <img style={{width: '300px'}} src={data?.img} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default HeaderMain;