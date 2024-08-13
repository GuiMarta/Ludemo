import React from 'react';
import axios from 'axios';

function Dashboard() {
    
    const handleAuth = () => {
        const token = localStorage.getItem("token");
        if (!token) {
        console.error("TOKEN NÃO ENCONTRADO");
            return;
        }
        console.log(token);
        axios.get('http://localhost:5000/verifyToken', {
            headers: {
                'authorization': token
            }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleAuth} className="btn btn-primary">verifyToken</button>
        </div>
    );
}

export default Dashboard;