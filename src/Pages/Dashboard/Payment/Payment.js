import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;
    return (
      <div>
        <h1 className="text-4xl">Payment for {treatment}</h1>
        <h1 className="text-2xl">
          Place pay {price} $ for your appointment {appointmentDate} at {slot}
        </h1>
        <div className='w-96 my-12'>
          <Elements stripe={stripePromise}>
            <Checkout 
            booking={booking}
            />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;