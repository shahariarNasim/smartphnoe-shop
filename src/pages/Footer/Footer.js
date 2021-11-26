import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className='footerStyle'>
            
            <div>
                <h4 style={{color:'indigo'}}>Smart-Phone <span style={{color:'brown'}}>Shop</span></h4>  <br />
                <p><i className="fas fa-envelope"> Example.smart@gmail.com </i></p>
              <p><i className="fas fa-envelope "> Mail.phone@gmail.com </i> </p>
               <p><i className="fas fa-phone-alt "> +123456789</i> </p>
            <i className="fas fa-map-marker-alt">
            <span className="ms-2">Londoni Road Street 202</span> <br />
            <span className=" ms-3">East Subidbazer, Sylhet</span>
            </i>
         
            </div>
            <div className='support-style' style={{textDecoration:'underline'}}>
                <h4> Support</h4> <br />
                <p > Contact Us</p> 
                <p > About Us</p>
                <p > Privacy </p>
                <p>Find Help</p>
               
           
              
            </div>
            <div className='direction-set' >
              <h4>Find More</h4> <br />
              <p>Your Orders</p>
              <p>Your Account</p>
              <p>Other Devices</p>
              <p>Our services</p>
           
            </div>
           
            <div>
                <h4>Social-info</h4> <br />
                <p><span>Facebook || Twitter</span></p> 
                <p><span>instagram || Linkedin</span></p> 
                 <p>YouTube</p>
                 <p className="fs-4" style={{ color: "tomato" }}> 
            <i className="fab fa-facebook me-2"></i>{"  "} 
            <i className="fab fa-instagram me-2"></i>{" "}
            <i className="fab fa-twitter me-2"></i>{" "}
            <i className="fas fa-basketball-ball"></i>
          </p>
            </div>
        </div>
        
        <div className='footerLast'>
          
          <h6>© 2021 SmartPhone Shop | All rights reserved.</h6>
        </div>
        </div>
    );
};

export default Footer;