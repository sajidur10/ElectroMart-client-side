import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import '../Home/Service/Service.css'

const ServiceDetail = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://pacific-dusk-08945.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [service])

    // Handle Deliverwd quantity
    const handleDelivered = id => {
        const quantity = (service?.quantity) > 0 ? (service?.quantity) - 1 : (service?.quantity);
        const url = `https://pacific-dusk-08945.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ quantity }),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                toast.success("Product Delivered Successfully")
            });


    };

    // add item quantity
    const onSubmit = data => {
        const quantity = service?.quantity + Number(data.quantity);
        const url = `https://pacific-dusk-08945.herokuapp.com/service/${serviceId}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ quantity }),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then(data => {
                // console.log(data);
                toast.success("Product Delivered Successfully")
            });
    };
    return (
        <div>
            <div className='service my-5'>
                <img className='w-100' src={service.img} alt="" />
                <h2>{service.name}</h2>
                <p>Price: ${service.price}</p>
                <p><small>{service.description}</small></p>
                <h5>Quantity: {service.quantity}</h5>
                <h5>Supplier: {service.supplierName}</h5>
                <button onClick={() => handleDelivered(service._id)} className='btn btn-danger'>Delivered</button>
                <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity",)} />
                    <input className='mb-5' value="Add Item" type="submit" />
                </form>
                <ToastContainer></ToastContainer>
            </div>


        </div>
    );
};

export default ServiceDetail;