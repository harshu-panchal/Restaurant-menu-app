import React from "react";
import "../styles/Menu.css";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-img" />
      <div className="menu-content">
        <h3 className="menu-name">{item.name}</h3>
        <p className="menu-desc">{item.description}</p>
        <div className="menu-footer">
          <span className="menu-category">{item.category}</span>
          <span className="menu-price">₹{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
