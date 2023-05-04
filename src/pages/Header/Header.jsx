import React from 'react';
import backgroundImage1 from '../../assets/da294b9b-ded0-4206-a44d-219ec21b3488.jpg';
import './Header.css';

const Header = () => {
  const styles= {
    backgroundImage: `url(${backgroundImage1})`
  };

  return (
    <div className="header" style={styles}>
      <h1 className='text-emerald-700/100 text-base font-mono font-bold lg:text-4xl
      '>I'm not a chef. But I'm passionate about food - 
        <br />
        the tradition of it, cooking it, and sharing it.</h1>
    </div>
  );
};

export default Header;
