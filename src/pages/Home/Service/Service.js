import React from 'react';
import img from '../../../images/img-2.jpg'

const Service = () => {
    return (
        <div className='row mt-5 gx-5 mx-1'> 
        <hr/>
            <div className="col-lg-4 col-md-12 ">
            <h3  style={{color:'orangered' }}>NEWS</h3>
            <p style={{ textAlign:"start", marginLeft:'40px'}}>Experience Online Shopping for Mobile Phones from comfort of your home.Your Online Mobile Phone Shop in Globally that lets you Buy Mobile Phones Online from Verified sellers across the World. Get a chance to Compare All Mobile Price in 2021 from Top Brands. Shoppers can Buy New Mobiles Online with Latest Smartphone at Low Prices with Brand Warranty and Home Delivery.Order Online and Get home-delivery of your favourite Smartphone across the world.</p>
            </div>
            <div className="col-lg-4 col-md-12 ">
                <h3  style={{color:'navy' }}>Latest Mobiles at Best Price</h3>
                <p style={{ textAlign:"start",marginLeft:'20px'}}>Experience Online Shopping for Mobile Phones from comfort of your home.Your Online Mobile Phone Shop in Globally that lets you Buy Mobile Phones Online from Verified sellers across the World. Get a chance to Compare All Mobile Price in 2021 from Top Brands. Shoppers can Buy New Mobiles Online with Latest Smartphone at Low Prices with Brand Warranty and Home Delivery.Order Online and Get home-delivery of your favourite Smartphone across the world.</p>
            </div>
            <div className='col-lg-4 col-md-12'>
                <img width='100%' src={img} alt=""/>
            </div>
        </div>
    );
};

export default Service;