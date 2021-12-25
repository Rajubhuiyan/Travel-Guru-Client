import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import HotelSide from '../HotelSide/HotelSide';
import MapSide from '../MapSide/MapSide';

const SearchMain = () => {
    const { searchId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getHotels?loc=${searchId}`)
            .then(res => res.json())
            .then(data => { data && setSearchData(data.slice(0, 3)); setIsLoading(false); })
            .catch(err => console.error(err))
    }, [searchId])

    return (
        <Container>
            {isLoading === true ? <Loader /> :
                <Grid sx={{mt:2}} container>
                    <Grid md={7} item>
                        {searchData.map(data => <HotelSide key={data._id} data={data} />)}
                    </Grid>
                    <Grid md={5} item>
                        <MapSide />
                    </Grid>
                </Grid>
            }
        </Container>
    );
};

export default SearchMain;