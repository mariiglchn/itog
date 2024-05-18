import React from "react";
import classes from "./ProductCard.module.css";

const ProductCard = ({ title, category, desc, image, price }) => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>{title}</div>
      <div className={classes.category}>{category}</div>
      <img src={image} className={classes.photo} alt="" />
      <div>{desc}</div>
      <div className={classes.price}>${price}</div>
    </div>
  );
};

export default ProductCard;
