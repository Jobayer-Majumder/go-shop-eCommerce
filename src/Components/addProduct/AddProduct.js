import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../sidebar/Sidebar';

const AddProduct = () => {
    const [imgUrl, setImgUrl] = useState();

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        const { pdName, wight, price } = data;
        const productInfo = {
            pdName,
            wight,
            price,
            imgUrl
        };

        fetch('http://localhost:8000/addProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productInfo)
        })
            .then(result => console.log(result));
        console.log(productInfo)
    };


    const handleImgUpload = event => {
        const imgData = new FormData()
        imgData.set('key', 'ab93c14ad00c0733b90a5cf408bcf7a2');
        imgData.append('image', event.target.files[0])
        axios.post(`https://api.imgbb.com/1/upload`, imgData)
            .then((response) => {
                setImgUrl(response.data.data.display_url)
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="container bg-light rounded p-5 mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="pdName">Product Name</label>
                                    <input className='form-control' name="pdName" ref={register} type="text" id='pdName' placeholder='Enter Name' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="Wight">Weight</label>
                                    <input className='form-control' name="wight" ref={register} type="text" id='Wight' placeholder='Enter Name' />
                                </div>
                            </div>
                            <div className="row mt-3 mb-2">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="price">Add Price</label>
                                    <input className='form-control' name="price" ref={register} type="number" id='price' placeholder='Enter Price' />
                                </div>
                                <div className="col-md-6">
                                    <input className='' onChange={handleImgUpload} type='file' />
                                </div>
                            </div>
                            {
                                imgUrl ? <button className="btn btn-success" type="submit" >Add Product</button> :
                                    <button className="btn btn-success" type="submit" disabled>Add Product</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;