import React from 'react';

const TestimonialReview = ({review}) => {
    const { img, reviews, name, location } = review;
    return (
      <div>
        <div className="card shadow-xl">
          <div className="card-body">
            <p>{reviews}</p>
            <div className="flex card-actions mt-3 items-center">
              <div className="avatar ">
                <div className="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="mx-5">
                {location}
                <h2 className="card-title">{name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TestimonialReview;