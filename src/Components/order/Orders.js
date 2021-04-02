import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowOrder from './ShowOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCamera, faInfoCircle, faShoppingCart, faUserShield } from '@fortawesome/free-solid-svg-icons';


const Orders = () => {
    const [loggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([]);
    const [showSnipper, setShowSnipper] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:8000/getOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setShowSnipper(false)
            })
    }, [loggedInUser.email])

    return (
        <>
            <div style={{position: 'absolute', top: '35%', left:'50%'}} className={`spinner-border text-primary ${showSnipper ? 'd-block' : 'd-none'}`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className='container bg-light p-4 mt-4'>
                <h5 className='text-primary'><FontAwesomeIcon icon={faInfoCircle} /> Buyer Information</h5>
                <div className="row row-cols-lg-3 text-md-center pt-3">
                    <div className="col-md-6 col-lg-4 pb-2">
                        <h6><FontAwesomeIcon icon={faUserShield} /> Buyer </h6>
                        <p>{orders[0]?.displayName}</p>
                    </div>
                    <div className="col-md-6 col-lg-4 pb-2">
                        <h6><FontAwesomeIcon icon={faEnvelope} /> Email</h6>
                        <p>{orders[0]?.email}</p>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <h6><FontAwesomeIcon icon={faCamera} /> Photo</h6>
                        <img className='w-25 rounded-circle' src={orders[0]?.photoUrl} alt="" />
                    </div>
                </div>
            </div>
            <div className="container p-4">
                <h5 className='text-primary'><FontAwesomeIcon icon={faShoppingCart} /> Ordered Product</h5>
                <table className="table text-center text-primary">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <ShowOrder key={order._id} order={order} />)
                    }
                </table>
            </div>
        </>
    );
};

export default Orders;