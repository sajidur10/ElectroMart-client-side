import React, { useEffect, useState } from 'react';
import '../Home/Services/Services.css';
import Top from '../Top/Top';
const Tops = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://pacific-dusk-08945.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    return (
        <div id="services" className='container bg-light shadow-lg my-5'>
            <div className="row">
                <h1 className='text-warning text-center mt-5'>Top Products</h1>
                <div className="services-container">
                    {
                        services.slice(getRandomInt(0, 2), getRandomInt(3, 9)).map(service => <Top
                            key={service._id}
                            service={service}
                        >
                        </Top>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tops;