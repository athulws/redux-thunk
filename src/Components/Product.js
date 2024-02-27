import React, { useEffect, useState } from 'react'
import { CardFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//--------------imporing things----------------------------------

import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

//---------------imporing things---------------------------------
const Product = () => {
    const [products, getProduct] = useState([]);

    useEffect(() => {
        //api call
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProduct(result))
    }, []);


    // ...................................................................................................................................

    // ee step store and slice okk create cheythathine shesham aan

    const dispatch = useDispatch();

    //map function nte ullil il ulla "product" aan ithilum koduthath
    const addToCart = (product) => {
        // dispatch an add action // ith cheyyan "dispatch" and "add"(add to cart aakkan ulla add -> it is from cartSlice.js file) um import cheyyanam //
        dispatch(add(product)) 
    }

    // ...................................................................................................................................


    const cards = products.map(product => (
        <div className='col-md-3' style={{ marginBottom: '10px' }}>
            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>INR: {product.price}</Card.Text>

                </Card.Body>
                <Card.Footer>

                    {/* map function nte ullil il ulla "product" aan ith */}
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>

                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <div>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {cards}

            </div>
        </div>

    )
}

export default Product