import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth"

const AddReviews = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const {user} = useAuth()

    const onSubmit = (data) => {

        data.img = user.photoURL
        data.name = user.displayName

        fetch('https://smartphone-shopp.herokuapp.com/reviews',
        {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(data)
          }
        )
        .then((res) => res.json())
        .then((data) => {
            if(data){
                alert('Review SuccessFull')
                reset()
            }
        })
        
    }

    return (
        <div className='my-5'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='mb-4'>Write a Review </h4>
                <textarea rows="5" className='w-50' placeholder='Share your experience with us...' maxLength='200' required {...register('description')} /> <br /> <br />
                <input className='w-25' type="number" {...register('rating')} 
                required
                placeholder="Rate this site between (0-5)"
                 />
                 <br />
                 <br />           
                <input type="submit" />

            </form>
        
        </div >
    );
};

export default AddReviews;