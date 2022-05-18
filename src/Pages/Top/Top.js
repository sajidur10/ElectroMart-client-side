import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Service/Service.css';

const Top = ({ service }) => {
    const { name } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service my-2 bg-info shadow-lg'>
            <h2>{name}</h2>
        </div>
    );
};

export default Top;