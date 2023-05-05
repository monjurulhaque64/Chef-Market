import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const NotFoundPage = () => {
    const divStyle = {
        backgroundImage: 'url("https://geek.design/wp-content/uploads/2019/01/BlogGraphic_4_404.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',

    };
    
    return (
        <div className='container mx-auto' style={divStyle}>
            <NavBar></NavBar>
            <div className="flex flex-col items-center justify-center  h-screen">
                <img  src="/images/404.jpg" alt="404 Page Not Found" className=" w-80" />
             
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFoundPage;
