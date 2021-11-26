import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://smartphone-shopp.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

   

  // DELETE 
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
            const remainingUsers = orders.filter((user) => user._id !== id);
            setOrders(remainingUsers);
          }
        });
    }
  };


    return (
        <div className="text-center my-5">
            <h3 className="mt-5 pt-5">Total Orders: {orders.length}</h3>
            <hr />
            <ol>
              {orders.map((user) => (
                
                <li className="fw-bold my-4" key={user._id}>
                   Name: <span> {user?.userName} </span> || 
                   Product: <span> {user.productName} </span> --- <span className="text-success"> {user.status} </span>
                   <Link to={`/Orders/Update/${user._id}`}>
                   <button className="btn btn-outline-success px-3 py-1 ms-2" type="">Update</button>
                   </Link>
                   
                  <button
              className="btn btn-outline-danger px-3 py-1 ms-3"
              onClick={() => handleDeleteUser(user._id)}
            >
              Delete
            </button>
                </li>
        ))}
            </ol>
        </div>
    );
};

export default ManageOrders;