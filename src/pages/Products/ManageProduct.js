import React, { useEffect, useState } from 'react';


const ManageProduct = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://smartphone-shopp.herokuapp.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[])


  // DELETE A DATA
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://smartphone-shopp.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = products.filter((product) => product._id !== id);
            setProducts(remainingUsers);
          }
        });
    }
  };


    return (
       <div className='row g-5 my-2 mx-2'>
           <span> <h3>Total Products: {products.length}</h3> <hr/></span>
        {
            products.map((product) => 
              <div className='col-lg-2 col-md-12' key={product?._id}>
                  <img src={product?.img} alt='' />
                  <h5> {product.title}</h5>
            <button
              className="btn btn-outline-danger px-3 py-1 ms-3"
              onClick={() => handleDeleteUser(product._id)}
            >
              X
            </button>
              </div>
            )
        }
       
    </div>
    );
};

export default ManageProduct;