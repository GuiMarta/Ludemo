import React, { useEffect, useState } from 'react';
import axios from 'axios';

const INFOcontainer = () => {
    const [data, setData] = useState([]);

    return (
        <div>
            <h1>InfoContainer</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {JSON.stringify(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default INFOcontainer;