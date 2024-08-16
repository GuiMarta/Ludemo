import React from 'react';
import logo from '../pages/Home/imgs/LogoLudemo.png';

const Mobile = () => {
    return (
        <div className="mobile d-flex align-items-center justify-content-center" style={{ height: "100vh", color: "#374354" }}>
            <h1 style={{ fontSize: "24px" }}>A Ludemo não foi desenvolvida para este dispositivo móvel :( </h1>
            <img src={logo} ></img>
        </div>
    )
}

export default Mobile;