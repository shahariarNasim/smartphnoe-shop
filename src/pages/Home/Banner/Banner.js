import React from 'react';
import Bounce from "react-reveal/Bounce"


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
            <Bounce right>
            <h1 className="text-primary fw-bolder mb-4">The ultimate resource for Mobiles<br/>and information!</h1>
            </Bounce>
            
            <h5 className="text-info mb-4">
            Smart-Phone Shop official store helps you to discover IOS, <br/> and Android Mobiles accessories and ecosystem products including <br/> other features Phone Enjoy an extensive mobile phone specs database <br/> with the official Get all the latest tech news, rumors, and reviews.
            </h5>
            
            <p style={{color: '#DA2B7D'}} className='fw-bold mt-4'>Scroll down for learn more  <img style={{width: '14px', marginLeft: '10px'}} src="https://thumbs.gfycat.com/PhonyOffensiveBarbet.webp" alt=""/> </p>

          </div> 
        </div>
       
      </>
    );
};

export default Banner;