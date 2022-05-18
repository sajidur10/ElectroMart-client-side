import React, { useEffect, useState } from 'react';
import ProductImg from '../ProducImg/ProductImg';
import '../Home/Services/Services.css';

const ProductImgs = () => {

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
        <div id="services" className='container bg-light shadow-lg my-3'>
            <div className="row ">
                <h1 className='text-warning text-center mt-5 '>Photo Galary</h1>
                <div className="services-container">
                    {
                        services.slice(getRandomInt(0, 3), getRandomInt(4, 9)).map(service => <ProductImg
                            key={service._id}
                            service={service}>
                        </ProductImg>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductImgs;