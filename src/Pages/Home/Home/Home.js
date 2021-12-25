import React from 'react';
import Navvar from '../../Shared/Navvar/Navvar';
import Header from '../Header/Header';
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