import React from 'react';

const Footer = (props) => {
  const { description } = props;
  return (
    <footer className='bg-dark text-white text-center p-5 fixed-bottom'>
      <h4>{description}</h4>
    </footer>
  );
};

export default Footer;
