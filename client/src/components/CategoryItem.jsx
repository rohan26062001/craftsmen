import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  return (
    <div className='gallery p-2 mt-4'>
      <Link to={`products/${item.cat}`}>
        <img src={item.img} alt='Cinque Terre' style={{ objectFit: 'cover' }} />
      </Link>
    </div>
  );
};

export default CategoryItem;
