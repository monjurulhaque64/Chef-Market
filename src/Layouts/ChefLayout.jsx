import React from 'react';
import ChefPage from '../pages/ChefPage/ChefPage';
import NavBar from '../pages/shere/NavBar/NavBar';
import Footer from '../pages/shere/Footer/Footer';

const ChefLayout = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <ChefPage></ChefPage>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;