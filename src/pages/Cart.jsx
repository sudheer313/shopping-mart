import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const handleDeleteProduct = (product) => {
    dispatch(deleteProduct({cartItemId:product.cartItemId}));
  };
  return (
    <div>
      {cart.products.map((product) => (
        <>
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
            key={product.image}
          />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <button
            onClick={() => {
              handleDeleteProduct(product);
            }}
          >
            remove
          </button>
        </>
      ))}
    </div>
  );
};

export default Cart;
