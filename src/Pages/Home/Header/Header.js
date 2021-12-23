import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from 'react-slick';
import HeaderMain from '../HeaderMain/HeaderMain';
import Loader from '../../Shared/Loader/Loader';


const Header = () => {

    const [locationData, setLocationData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/getLoctionData')
            .then(res => res.json())
            .then(data => { data && setLocationData(data); setIsLoading(false) })
            .catch(err => console.error(err))
    }, [])


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (

        <Container sx={{ mt: 5 }}>
            {isLoading === true ? <Loader /> :
                <div>
                    <Slider {...settings}>
                        {locationData.map(data => <HeaderMain key={data.id} data={data} />)}
                    </Slider>
                </div>
            }



        </Container>
    );
};

export default Header;