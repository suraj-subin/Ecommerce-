import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartList, removeToCart } from "../../Redux/Reducer/cartSlice";

const RemoveCart = () => {
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(removeToCart(productId));
  };

  const items = useSelector(cartList);
  return (
    <>
      <div className="cartWrapper">
        <h2 style={{ paddingTop: "12px" }}>Cart</h2>
        {items.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <p className="ProductDetail">{product.name}</p>
            <p className="ProductDetail">Rs: {product.price}</p>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default RemoveCart;
