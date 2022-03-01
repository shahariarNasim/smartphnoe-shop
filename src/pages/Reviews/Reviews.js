import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://smartphone-shopp.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data)) 

    }, [])

    return (
        <div className="row my-5 mx-1 align-items-center justify-content-between">
            <h2 style={{ color: "#262339" }} className="fw-bold mt-5">
                Top Reviews   
            </h2>
            <hr />
            {
                reviews.slice(0, 4).map((review) => 
                    <div className="col-lg-6 mb-4">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-4">
                                <img width='60%' className="rounded-circle" src={review?.img} alt="" />
                            </div>
                            <div className="col-lg-9 col-8" style={{ textAlign: 'left' }}>
                                <h6 className="fw-bold mt-2">{review?.name}</h6>
                                <Rating size="small" value={parseInt(review?.rating)} />
                                <p style={{ color: "#A7A9AB" }}>{review?.description}</p>
                            </div>
                        </div>
                    </div>
            )}   
        </div>
    )
};

export default Reviews;