//How to do the fetch data using "fetch" method


import React, { useEffect, useState } from 'react';
import { CardFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products, getProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProduct(result));
    }, []);

    return (
        <div>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {products.map(product => (
                    <div key={product.id} className='col-md-3' style={{ marginBottom: '10px' }}>
                        <Card className='h-100'>
                            <div className='text-center'>
                                <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                            </div>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>INR: {product.price}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Add to cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
