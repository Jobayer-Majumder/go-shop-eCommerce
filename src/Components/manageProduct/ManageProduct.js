import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import ShowManageProduct from './ShowManageProduct';

const ManageProduct = () => {
    const [product, setProduct] = useState([]);
    const [showSnipper, setShowSnipper] = useState(true)

    useEffect(() => {
        fetch('https://mysterious-sands-64603.herokuapp.com/manageProduct')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setShowSnipper(false)
            })
    }, [])

    return (
        <>
            <div className="container bg-light rounded p-5 mt-5">
                <div style={{ position: 'absolute', top: '35%', left: '50%' }} className={`spinner-border text-primary ${showSnipper ? 'd-block' : 'd-none'}`} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <h5> Manage Product</h5>
                        <table className="table text-primary">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {
                                product.map(pd => <ShowManageProduct key={pd._id} product={pd} />)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;