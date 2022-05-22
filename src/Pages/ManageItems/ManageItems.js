import React, { useEffect, useState } from 'react';
import ServiceDelete from '../ServiceDelete/ServiceDelete';

const ManageItems = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://pacific-dusk-08945.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services])

    return (
        <div id="services" className='container shadow-lg'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Manage Item</h1>
                <div className="services-container">
                    {
                        services.map(service => <ServiceDelete
                            key={service._id}
                            service={service}
                        >
                        </ServiceDelete>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageItems;