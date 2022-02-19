/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams()
    const { user } = useAuth()
    const placeRef = useRef()
    const numberRef = useRef()

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
        const place = placeRef.current.value;
        const number = numberRef.current.value;
        const status = "Pending"
        const data ={userName, img, productName, price, status, email, number, place }

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
                e.target.reset();
                
            }
        })
        e.preventDefault();
        
    }


    return (
        <div className='row my-5 justify-content-center align-items-center mx-2'>
            <div className='col-lg-5'>
                <img src={product.img} alt=""/>               
                
            </div>
            <div className='col-lg-5 text-start'>
                <h3>Details</h3>
                <hr />
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <input type="radio" checked />Cash on Delivery <br /> <br />
                <form onSubmit={AddOrder}>
                 <input
                     placeholder="Enter your Location"
                     style={{ border: "2px solid lightsteelblue" }}
                     type="text"
                     required
                     className="px-2 py-1 rounded w-100"
                     ref={placeRef}
                   /> <br />
                 <input
                     placeholder="Contact Number"
                     style={{ border: "2px solid lightsteelblue" }}
                     type="number"
                     required
                     className="px-2 py-1 mt-3 rounded w-50"
                     ref={numberRef}
                   /> <br />
                 <input type="submit" className='btn btn-danger py-1 mt-3' value="BUY NOW" />              
              </form>
            
            </div>
        </div>
    );
};

export default Details;