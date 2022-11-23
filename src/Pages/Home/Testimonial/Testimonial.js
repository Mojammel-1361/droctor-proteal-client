import React from 'react';
import cot from '../../../assets/icons/quote.svg'
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import TestimonialReview from './TestimonialReview';

const Testimonial = () => {

    const reviewsData = [
      {
        _id: 1,
        name: "winson herry",
        img:img1,
        reviews:
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
        location: "Dhaka",
      },
      {
        _id: 2,
        name: "Jon herry",
        img:img2,
        reviews:
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
        location: "Mirpur",
      },
      {
        _id: 3,
        name: "Jos Batler",
        img:img3,
        reviews:
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
        location: "Rangpur",
      }
    ];

    return (
      <section className="my-16">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-bold text-primary">Testimonial</h1>
            <h1 className="text-4xl ">What our pashas </h1>
          </div>
          <figure>
            <img src={cot} className="w-24 lg:w-48" alt="" />
          </figure>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {reviewsData.map((review) => (
            <TestimonialReview
              key={review._id}
              review={review}
            ></TestimonialReview>
          ))}
        </div>
      </section>
    );
};

export default Testimonial;