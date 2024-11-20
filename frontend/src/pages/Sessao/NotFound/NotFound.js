import React from 'react';
import logo from './LUDEMO.png';


const notfound = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
            <div className="mobile d-block align-items-center justify-content-center" style={{ color: "#374354", textAlign: "center", padding: "20px" }}>
                <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
                    A Ludemo não encontrou essa sessão :(            </h1>
                <img
                    className='logo-mobile'
                    style={{
                        maxWidth: "20vw",
                        filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))"
                    }}
                    src={logo}
                    alt="Logo Ludemo"
                />
            </div>
        </div>
    );
};

export default notfound;
