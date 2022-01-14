import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'

const ProductItem = ({item}) => {
    return (
        <div className="galleryCard p-3 mt-2">
            <div className='circle'>
                <img src={item.img} alt="Cinque Terre" />
                <div className='absolute over d-flex justify-content-center align-items-center w-100 h-100'>
                    <button className='btn icon'><ShoppingCartOutlined /></button>
                    <button className='icon mx-3'><SearchOutlined /></button>
                    <button className='icon'><FavoriteBorderOutlined /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
