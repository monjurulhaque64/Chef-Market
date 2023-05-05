import React from 'react';
import NavBar from '../../shere/NavBar/NavBar';
import Footer from '../../shere/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import Chef from '../Chef/Chef';
import Creators from '../Creators/Creators';
import Slider from '../Slider/Slider';
import WhyTry from '../WhyTry/WhyTry';



const Home = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Header></Header>
            <Chef></Chef>
            <Creators></Creators>
            <Slider></Slider>
            <WhyTry></WhyTry>
            <Footer></Footer>
        </div>
    );
};

export default Home;