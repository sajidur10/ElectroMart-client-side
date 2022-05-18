import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, img, description, price, quantity, supplierName } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service my-5'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier: {supplierName}</h5>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Update Info</button>
        </div>
    );
};

export default Service;