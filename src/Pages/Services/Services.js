import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';

const Services = () => {

    const servicesData = [
      {
        id: 1,
        name: "Fluride Reenactment",
        img: fluride,
        description:
          "Lorem ipsum dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:",
      },
      {
        id: 2,
        name: "cavity Reenactment",
        img: cavity,
        description:
          "Lorem ipsum dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:",
      },
      {
        id: 3,
        name: "whitening Reenactment",
        img: whitening,
        description:
          "Lorem ipsum dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:",
      },
    ];

    return (
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary uppercase">
            Our Services
          </h1>
          <h1 className="text-3xl">Services We providers </h1>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {servicesData.map((services) => (
            <ServicesCard key={services.id} services={services}></ServicesCard>
          ))}
        </div>
      </div>
    );
};

export default Services;