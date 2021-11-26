/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams()
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://smartphone-shopp.herokuapp.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    },[])

    const AddOrder = (e) => {
        const userName = user.displayName
        const email = user.email
        const img = product.img
        const productName = product.title
        const price = product.price
        const status = "Pending"
        const data ={userName, img, productName, price, status, email }

        fetch('https://smartphone-shopp.herokuapp.com/orders',
        {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(data)
          }
        )
        .then((res) => res.json())
        .then((data) => {
            if(data){
                alert('Order SuccessFull')
                
            }
        })
        e.preventDefault();
        
    }


    return (
        <div className='row my-5 justify-content-center align-content-center mx-2'>
            <div className='col-lg-5'>
                <img src={product.img} alt=""/>               
                
            </div>
            <div className='col-lg-5 text-start'>
                <h3>Details</h3>
                <hr />
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <input type="radio" checked />Cash on Delivery <br /> <br />
                <button className="btn btn-danger" onClick={AddOrder} type="submit">Buy{product.price}</button>
            
            </div>
        </div>
    );
};

export default Details;