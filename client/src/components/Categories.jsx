import React from 'react';
// import { categories } from '../data';
// import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    // <div
    //   className='w-100 d-sm-flex justify-content-around px-2'
    // style={{
    //   marginTop: '8rem',
    //   marginBottom: '2rem',
    // }}
    // >
    //   {categories.map((item) => (
    //     <CategoryItem item={item} key={item.id} />
    //   ))}
    // </div>

    <div
      className='d-flex align-items-center justify-content-center'
      style={{

        marginTop: '14rem',
        marginBottom: '2rem',
      }}
    >
      <img
        className='img-fluid'
        style={{
          width: '90%',
        }}
        src='https://i.pinimg.com/originals/e4/02/b7/e402b77ddad66e99db60b0abe5ca4755.png'
        alt='banner'
      />
      {/* <img
        src='https://i.pinimg.com/originals/bc/1c/cc/bc1ccce5ee4c1a7a488ea843a0477002.jpg'
        alt='banner'
      /> */}
    </div>
  );
};
export default Categories;
