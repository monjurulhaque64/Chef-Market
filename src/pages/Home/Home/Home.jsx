import React from 'react';
import NavBar from '../../shere/NavBar/NavBar';
import Footer from '../../shere/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import Chef from '../Chef/Chef';



const Home = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Header></Header>
            <Chef></Chef>
            <Footer></Footer>
        </div>
    );
};

export default Home;