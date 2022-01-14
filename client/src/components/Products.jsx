import React from 'react';
import { popularProducts } from '../data';
import ProductItem from './ProductItem';

const Products = () => {
    return (
        <div className='mt-5 gallery1 px-2 mt-5'>
            {popularProducts.map((item)=>(
                <ProductItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Products
