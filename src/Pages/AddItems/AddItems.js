import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

const AddItems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = `https://pacific-dusk-08945.herokuapp.com/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Add New Items Successfully")
            })
    };
    return (
        <div className='w-50 mx-auto service my-5 shadow-lg mb-5'>
            <h1 className='text-center mt-5'>Please Add New Items</h1>
            <form className='d-flex flex-column mb-5 ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description'{...register("description",)} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price",)} />
                <input className='mb-2' placeholder='Photo url'  {...register("img",)} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity",)} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplierName",)} />
                <input className='mb-5' value="Add Item" type="submit" />
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default AddItems;