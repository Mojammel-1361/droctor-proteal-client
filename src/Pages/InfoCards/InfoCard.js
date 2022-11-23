import React from 'react';

const InfoCard = ({card}) => {
    const{name, description, icon, bgClass} =card;
    return (
      <div className="text-white mt-5">
        <div className={` px-6 py-6 card md:card-side shadow-xl ${bgClass}`}>
          <figure>
            <img src={icon} alt="Movie" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-medium">{name}</h2>
            <p className="text-center">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default InfoCard;