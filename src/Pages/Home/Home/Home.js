import React from 'react';
import Header from '../Header/Header';
import Navvar from '../Navvar/Navvar';
import './Home.css';
const Home = () => {
    return (
        <div className="home-container">
            <Navvar/>
            <Header/>
        </div>
    );
};

export default Home;