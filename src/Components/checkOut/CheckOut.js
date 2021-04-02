import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App'

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [product, setProduct] = useState([]);
    const [showSnipper, setShowSnipper] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://mysterious-sands-64603.herokuapp.com/checkOut/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data[0])
                setShowSnipper(false)
            })
    }, [id]);

    const handleCheckOut = () => {
        const checkOutInfo = {
            ...product,
            ...loggedInUser,
            date: new Date()
        };
        
        fetch('https://mysterious-sands-64603.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(checkOutInfo)
        })
        .then(result => {
            console.log(result)
        });

        console.log(checkOutInfo);
    };

    const { pdName, wight, price } = product;

    return (
        <div>
            <div className="container p-5">
                <h3 className='text-primary'>Check Out</h3>
                <div style={{position: 'absolute', top: '45%', left:'50%'}} className={`spinner-border text-primary ${showSnipper ? 'd-block' : 'd-none'}`} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <table className="table table-striped bg-light shadow rounded">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6>{pdName}</h6>
                                <p>Weight -{wight}</p>
                            </td>
                            <td>1</td>
                            <td>&#2547; {price}</td>
                        </tr>
                        <tr>
                            <td>Total including 10% vat /-</td>
                            <td></td>
                            <td>&#2547; {parseInt(price) + parseInt(price / 10)}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handleCheckOut} className="btn btn-primary">Check Out</button>
            </div>
        </div>
    );
};

export default CheckOut;