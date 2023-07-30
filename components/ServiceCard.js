import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

const ServiceCard = ({ service }) => {
  const { Icon, title, about } = service;
  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(about) };
  };
  

  return (
    <div className='flex items-center p-2 space-x-4 '>
      <Icon className='w-12 h-12 text-green' />
      <div>
        <h6 className='font-bold'>{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
