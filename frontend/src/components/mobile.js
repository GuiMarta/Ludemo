import React from 'react';
import logo from '../pages/Home/imgs/LogoLudemo.png';


const Mobile = () => {
    return (
        <div className="mobile d-flex align-items-center justify-content-center" style={{ height: "100vh", color: "#374354", textAlign: "center", padding: "20px" }}>
            <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
                A Ludemo não foi desenvolvida para este dispositivo móvel :(
            </h1>
            <img
                className='logo-mobile'
                style={{
                    maxWidth: "20vh",
                    filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))"
                }}
                src={logo}
                alt="Logo Ludemo"
            />
        </div>
    );
};

export default Mobile;
