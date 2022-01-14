import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="gallery px-2 mt-2">
      <Link to={`products/${item.cat}`}>
        <img src={item.img} alt="Cinque Terre" style={{objectFit: 'cover'}} />
        <div className="absolute">
          <div className="desc fw-bold">
            <h3>{item.title}</h3>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button className="btn btn-primary">SHOP NOW</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
