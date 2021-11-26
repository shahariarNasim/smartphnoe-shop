/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  

  useEffect(() => {
    fetch("https://smartphone-shopp.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const orders = order.filter((or) => or.email === user.email);
  console.log(orders);

  // DELETE AN 
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://smartphone-shopp.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = order.filter((user) => user._id !== id);
            setOrder(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="text-center my-5">
      <h2 className="mt-5 pt-3 fw-bolder text-success">
        All Order Informations
      </h2>

      <hr className="mb-5" />

      <div className="row gap-5 justify-content-center mx-2">
        {orders.map((ord) => (
          <div style={{
            backgroundImage:
              `linear-gradient(rgba(5, 10, 30, 0.8), rgba(5, 10, 30, 0.8)), url(${ord.img})`,
            backgroundRepeat: "no-repeat",
            height: "35vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "3px 3px 15px gray", borderRadius: "10px"
          }}
            className="col-lg-3 py-2 mx-2">
            <h6 className="text-primary mt-4">
              <i class="far fa-user"></i> {ord?.userName}
            </h6>
            <h6 className="text-success">
            <i className="fas fa-mobile"></i> {ord?.productName}
            </h6>
            <h6 className="text-danger">
             <i className="fas fa-money-check-alt"></i> {ord?.price}
            </h6>
            <p className='text-light'>{ord?.status}</p>
            <button
              className="btn btn-outline-danger px-3 py-1"
              onClick={() => handleDeleteUser(ord._id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
