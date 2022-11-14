import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../component/ProductItem";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  
  console.log(state);
  return <div>
        {state.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
  </div>;
};

export default Cart;
