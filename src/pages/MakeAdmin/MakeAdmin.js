import { Alert } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://smartphone-shopp.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className='my-5'>
            <h2>Make an Admin</h2>
            <hr />
            <form className='mt-5' onSubmit={handleAdminSubmit}>
                <input className='w-50 py-1'
                    type="email"
                    placeholder='Enter Email Address'
                    onBlur={handleOnBlur} required/>
                <button type="submit" className='btn btn-success mb-1 ms-2 px-2'>Make Admin</button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;