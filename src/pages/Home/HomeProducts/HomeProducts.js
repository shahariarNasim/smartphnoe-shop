import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './homeProducts.css'
import Fade from 'react-reveal/Fade';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://smartphone-shopp.herokuapp.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[])

    return (
        <div className='row mt-2 mx-2'>
           <div >
            <h4 style={{color:'#CFA52B', marginTop:'30px'}}>Choose you want to Buy</h4> <br/>
            <h2 style={{color:'#4452E9', marginBottom:'40px'}}>Products Start Here</h2>
           </div>
            {
                products.slice(0, 6).map((product) => 

                <Fade>
                    <div className='col-lg-4 col-md-12 border border-1 py-2 mb-4' key={product?._id}>
                      <img src={product?.img} alt='' />
                      <h5> {product.title}</h5>
                      <p style={{fontWeight:500, color:'gray'}}> Price: <span style={{color:"red",fontWeight:600}}>{product.price}</span></p>
                      <Link to={`/Details/${product?._id}`}>
                      <button className="btn-style" type="submit">Buy Now</button>
                      </Link>                     
                  </div>
                </Fade>
                  
                )
            }
             <div className="mb-4">
                 <Link to='/products'>
                 <button style={{border:'none', backgroundColor:'goldenrod', color:'white', fontWeight:600,  padding:'5px 22px', borderRadius:'4px'}} type="submit" to="/Products">See More ...</button>
                 </Link>
             
             </div>
            
        </div>
    );
};

export default HomeProducts;