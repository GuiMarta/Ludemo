import React from 'react';
import HomePage from './imgs/Banner.png';

const Main = () => {
    const mainContainerStyle = {
        backgroundImage: `url(${HomePage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        width: '100%',
        height: '100vh', 
    };

    return (
        <div className="main-container" style={mainContainerStyle}>
           
        </div>
    );
};

export default Main;