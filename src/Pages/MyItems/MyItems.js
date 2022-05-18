import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';


const MyItems = () => {
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
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-warning text-center mt-5'>My Items</h1>
                <div className="services-container">
                    {
                        services.slice(getRandomInt(0, 5), getRandomInt(6, 9)).map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;