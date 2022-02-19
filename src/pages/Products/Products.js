import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://smartphone-shopp.herokuapp.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[])
    return (
        <div className='row my-4 mx-1'>
            <h4 className='text-primary text-decoration-underline mb-3'>More Products :</h4>
         
        {
            products.map((product) => 
            <Flip left>
        <div className='col-lg-3 col-md-12 py-4 px-4' key={product?._id}>
                  <img src={product?.img} alt='' />
                  <h5> {product.title}</h5>
                  <p> Price: <span style={{color:"red"}}>{product.price}</span></p>
                  <Link to={`/Details/${product?._id}`}>
                      <button className="btn-style" type="submit">Buy Now</button>
                  </Link>
              </div>
        </Flip> 
              
            )
        }
    </div>
    );
};

export default Products;