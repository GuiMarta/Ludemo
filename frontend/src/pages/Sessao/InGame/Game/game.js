import React from 'react';
import './ingame.css';



const FullHeightComponent = () => {
    return (
        <div className="h-full">
        <button onClick={() => console.log('Começar')}>Começar</button>
        </div>  
    );
};

export default FullHeightComponent;