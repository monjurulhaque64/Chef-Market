import React from 'react';
import ChefPage from '../pages/ChefPage/ChefPage';
import NavBar from '../pages/shere/NavBar/NavBar';

const ChefLayout = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <ChefPage></ChefPage>
        </div>
    );
};

export default ChefLayout;