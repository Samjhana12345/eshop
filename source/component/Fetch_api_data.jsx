import React, { useEffect, useState } from 'react';

function Fetch_api_data() {
    const [api_data, setApi_data] = useState([]);
    const [api_cat, setApi_cat] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setApi_data(data));
    }, []); // Dependency array added

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setApi_cat(data));
    }, []); // Dependency array added

    return (
        <>
            <div className='container-fluid'>
                <h3>Categories</h3>
                <div className='row bg-primary text-white'>
                    {api_cat.map((ac, index) => (
                        <div className='col-2' key={index}>
                            <h5>{ac}</h5>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className='row'>
                    {api_data.map((ad) => (
                        <div className='col-3 py-1' key={ad.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={ad.image} className="card-img-top" alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title">{ad.title}</h5>
                                    <p className="card-text">{ad.description}</p>
                                    <p className="card-text">Rs.{ad.price}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Fetch_api_data;
