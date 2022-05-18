import React from 'react';
import '../Home/Service/Service.css';

const ProductImg = ({ service }) => {
    const { img } = service;

    return (
        <div className='service my-2 shadow-lg'>
            <img className='w-100' src={img} alt="" />

        </div>
    );
};

export default ProductImg;