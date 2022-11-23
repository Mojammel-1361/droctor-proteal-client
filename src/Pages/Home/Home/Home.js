import React from 'react';
import InfoCards from '../../InfoCards/InfoCards';
import Services from '../../Services/Services';
import Teams from '../../Teams/Teams';
import Contuct from '../Contuct/Contuct';
import MacAppoiment from '../MacAppoiment/MacAppoiment';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
      <div className="mx-5">
        <Banner></Banner>
        <InfoCards></InfoCards>
        <Services></Services>
        <Teams></Teams>
        <MacAppoiment></MacAppoiment>
        <Testimonial></Testimonial>
        <Contuct></Contuct>
      </div>
    );
};

export default Home;