import { Grid, Typography } from '@mui/material';
import React from 'react';

const HotelSide = ({data}) => {

    
    return (
        <div>
            <Grid spacing={2} container>
                <Grid sx={{mb: 2}} xs={12} sm={12} md={6} item>
                    <img style={{width:'280px', height:'169px', borderRadius:'5px'}} src={data?.img} alt="" />
                </Grid>
                <Grid sx={{mb: 2}} xs={12} sm={12} md={5} item>
                    <Typography variant="h6">{data?.name}</Typography>
                    <Typography variant="subtitle1">{data?.guest} Guest {data?.bedrooms} Bedrooms {data?.bed} Bed {data?.bath} Bath</Typography> <br />
                    <span>Wif Air conditioning Kitchen</span> <br />
                    <span>Cancellation fexibility availiable</span>
                </Grid>
            </Grid>
        </div>
    );
};

export default HotelSide;