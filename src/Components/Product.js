import React, { useEffect, useState } from 'react'
import { Alert, CardFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//--------------imporing things----------------------------------

import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

import StatusCode from '../utils/StatusCode';

//---------------imporing things---------------------------------


const Product = () => {
    const dispatch = useDispatch();
    const {data: products,status} = useSelector(state => state.products); // "{data: products}" ithil ulla products is from map function and "data" is from productSlice.js and "(state => state.products)" ithil ulla "products" isn from store.js

    // const [products, getProduct] = useState([]); ===> i don't need this because my product will come from my product slice

    useEffect(() => {

        //dispatch an action for fetchProducts
        dispatch(getProducts());

        // //api call
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProduct(result))
    }, []);


    // ...................................................................................................................................

    // ----------------To handle the error code of the promises----------------------------------

//first if condition => loading kanich varm page
//second if condition => ippo thettaya url okk aan fetch ne koduthathenkil error kanikkm
    if (status===StatusCode.LOADING) {
        return <p>Loading...</p>
    }

    if (status===StatusCode.ERROR) {
        return <Alert key="danger" variant='danger'>Something went wrong!!! Please try again later</Alert>
    }

    // ----------------To handle the error code of the promises----------------------------------
    
    // ee step store and slice okk create cheythathine shesham aan

    
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