import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = user?.email || 'unregister';
        const fullName = firstName + ' ' + lastName;
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: fullName,
            email,
            phone,
            message
        }

        if (phone.length < 10) {
            alert('please insert phone number value 10 or more');
            return;
        }
        // console.log(JSON.stringify(order));
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    alert('data inserted successfully');
                }
                console.log('data', data);
            })
            .catch(error => console.error('error from checkout ', error));
    }


    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>You are about to order{title}</h2>
                <h4 className='text-2xl'>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input w-full input-bordered" />
                    <input name='phone' type="number" placeholder="Your Phone" className="input w-full input-bordered" required />
                    <input name='email' type="text" readOnly defaultValue={user?.email} placeholder="Your email" className="input w-full input-bordered" />
                </div>
                <textarea name='message' className="textarea w-full input-bordered" placeholder="Your message" required></textarea>
                <input type='submit' className='btn' value='Place your order'></input>
            </form>
        </div>
    );
};

export default Checkout;