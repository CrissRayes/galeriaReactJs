import React from 'react';

const Header = (props) => {
  const { title } = props;
  return (
    <div className='text-center mb-5'>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
