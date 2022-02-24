import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <div className='w-100 d-sm-flex justify-content-around px-2 mt-5'>
            {categories.map((item)=>(
                <CategoryItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Categories
