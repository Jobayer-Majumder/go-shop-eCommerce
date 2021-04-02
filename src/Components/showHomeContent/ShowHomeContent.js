import React from 'react';
import { Link } from 'react-router-dom';

const ShowHomeContent = (props) => {
    const { pdName, price, imgUrl, wight, _id } = props.product;

    return (
        <div className='col-md-4 p-4'>
            <div className="card" style={{height:'300px'}}>
                <img src={imgUrl} className="card-img-top w-50 m-auto" alt="pdImage" />
                <div className="card-body text-center">
                    <h5 className="card-title">{pdName} <span>- {wight}</span></h5>
                </div>
                <div className="card-footer d-flex justify-content-around align-items-center">
                    <h4>&#2547; {price}</h4>
                    <Link to={`/checkOut/${_id}`} >
                        <button className="btn btn-primary font-weight-bold">
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowHomeContent;