import React, { useEffect, useState } from 'react';
import ShowHomeContent from '../showHomeContent/ShowHomeContent';

const Home = () => {
    const [product, setProduct] = useState([]);
    const [showSnipper, setShowSnipper] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/getProducts')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setShowSnipper(false)
            })
    }, [])

    return (
        <div>
            <div style={{position: 'absolute', top: '45%', left:'50%'}} className={`spinner-border text-primary ${showSnipper ? 'd-block' : 'd-none'}`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="container row m-auto">
                {
                    product.map(pd => <ShowHomeContent key={pd._id} product={pd} />)
                }
            </div>

        </div>
    );
};

export default Home;