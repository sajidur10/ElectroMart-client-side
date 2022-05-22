import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Service/Service.css';

const ServiceDelete = ({ service }) => {
    const { _id, name, img, description, price, quantity, supplierName } = service;
    const navigate = useNavigate();


    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);


    }
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure!?");
        if (proceed) {
            const url = `https://pacific-dusk-08945.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
    return (
        <div className='service my-5 shadow-lg'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier: {supplierName}</h5>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-success me-4'>Checkout</button>
            <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
        </div>
    );
};

export default ServiceDelete;