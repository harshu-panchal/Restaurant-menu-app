import React from "react";
import MenuItem from "./MenuItem";
import menuData from "../data/menudata";
import "../styles/Menu.css";

const MenuList = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Delicious Menu 🍴</h1>
      <div className="menu-grid">
        {menuData.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
