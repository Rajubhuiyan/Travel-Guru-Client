import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import CalenderSide from '../CalenderSide/CalenderSide';

const BookingMain = () => {
    const { bookingId } = useParams();

    const [locaionData, setLocationData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/getLocationById/${bookingId}`)
            .then(res => res.json())
            .then(data => { data && setLocationData(data); setIsLoading(false) })
            .catch(err => console.error('error', err))
    }, [bookingId]);


    return (
        <Container>
            {isLoading === true ? <Loader /> :
                <Grid container display="flex" alignItems="center" minHeight="80vh">

                    <Grid md={6} item>
                        <Typography color="white" variant="h3" gutterBottom component="div">
                            {locaionData?.name}
                        </Typography>
                        <Typography color="white" variant="subtitle1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolorem? Obcaecati explicabo libero sint nobis quod, reiciendis voluptatum, doloribus voluptate nesciunt adipisci ex temporibus quia rem dolor minus consectetur blanditiis magni consequuntur, illum aut facere beatae quibusdam in? Vero aliquam sequi nesciunt aliquid asperiores in, beatae id nulla cupiditate voluptates!
                        </Typography>
                    </Grid>
                    <Grid md={6} item>
                        <CalenderSide data={locaionData}/>
                    </Grid>

                </Grid>
            }
        </Container>
    );
};

export default BookingMain;