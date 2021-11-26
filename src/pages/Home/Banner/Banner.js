import React from 'react';
import Button from "@restart/ui/esm/Button";


const Banner = () => {
    return (
        <>
        <div
          className="d-flex align-items-center mt-0"
          style={{
            backgroundImage:
      "url('https://i02.appmifile.com/371_operator_in/11/10/2021/c9fe370cfb8de53977e718c732dc1a81.jpg')",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "left",
          }}
        >
          <div className="mx-5">
            <h1 className="text-primary fw-bolder">The ultimate resource for Mobiles<br/>and information!</h1>
            <h5 className="text-info mb-4">
            Smart-Phone Shop official store helps you to discover IOS, <br/> and Android Mobiles accessories and ecosystem products including <br/> other features Phone Enjoy an extensive mobile phone specs database <br/> with the official Get all the latest tech news, rumors, and reviews.
            </h5>
            
            
            <p style={{}} className='text-light mt-4 p-3 fw-bolder'> 
           Scroll down for learn more 	&darr; </p> 

          </div> 
        </div>
       
      </>
    );
};

export default Banner;