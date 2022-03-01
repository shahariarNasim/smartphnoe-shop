import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Nav.css'

const Navigation = () => {
    const { user, logout, admin } = useAuth()
    return (
        <div className='bg-success'>
            <Navbar className='py-2' collapseOnSelect style={{ backgroundColor: 'rgb(11, 57, 104 )' }} expand="lg">
                <Navbar.Brand href="#home" style={{ color: 'indigo' }} ></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link className="nav-style" as={Link} to="/Home">Home</Nav.Link>
                <Nav.Link className="nav-style" as={Link} to="/products">Products</Nav.Link>
                {!admin && <>
                    <Nav.Link className="nav-style" as={Link} to="/Allreviews">Reviews</Nav.Link>
                    <Nav.Link className="nav-style" as={Link} to="/Order">My Orders</Nav.Link>
                    <Nav.Link className="nav-style" as={Link} to="/pay">Pay</Nav.Link> </>
                }
                
                {
                    admin && <>
                    <Nav.Link className="nav-style" as={Link} to="/ManageOrders">Manage Orders</Nav.Link>
                <Nav.Link className="nav-style" as={Link} to="/ManageProduct">Manage Product</Nav.Link>
                <Nav.Link className="nav-style" as={Link} to="/AddService">Add Product</Nav.Link>
                <Nav.Link className="nav-style" as={Link} to="/MakeAdmin">Make Admin</Nav.Link>
                    </>
                }
                
                

                    <h5 className="mt-2 mx-2 text-success text-decoration-underline  p-0 fs-6">{user?.displayName}</h5>
                    {user.email ? (
                        <button className="btn btn-outline-danger px-2 py-1 me-2" onClick={logout}>Logout</button>
                    ) :
                        (
                            <Link to='/Login'>
                                <button className="btn btn-outline-success px-2 py-1 me-2" to="/Login">LOGIN</button>
                            </Link>
                        )}
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Navigation;