import axios from "axios";
import "../Navbar/Navbar.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList, setProductData } from "../../Redux/Reducer/productSlice";
import { addToCart } from "../../Redux/Reducer/cartSlice";
import LoadingSpinner from "./LoadingSpinner";
import NoData from "./NoData";

const AllProduct = ({ item, search }) => {
  const AllProductsData = useSelector(productList);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const ApiUrl = "https://api.pujakaitem.com/api/products";

  const ApiData = async () => {
    try {
      const Response = await axios.get(ApiUrl);
      setIsLoading(true);

      dispatch(
        setProductData({
          producted: Response.data,
        })
      );
    } catch (error) {
      // Error Message
    }
  };

  useEffect(() => {
    ApiData();
  }, []);

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
  };
  

  if (!isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>    
      <div className="Box">
        {item
          ?.filter((value) => {
            if (search === "") {
              return value;
            } else {
              let listItem = value.name
                .toLowerCase()
                .includes(search.toLowerCase());
              // console.log(listItem)

              if (listItem === false) {
                console.log("No data Shown");
                // <NoData />;
              }
              return listItem;
            }
          })
          .map((product) => {
            return (
              <>
                <div className="Middle" key={product.id}>
                  <div className="LeftDiv">
                    <div className="card">
                      <div>
                        <h3 className="Title">Name</h3>
                        <p className="Paragraph">{product.name}</p>
                      </div>
                      <div>
                        <h3 className="Title">Company</h3>
                        <p className="Paragraph">{product.company}</p>
                      </div>
                      <div>
                        <h3 className="Title">Color</h3>
                        <p className="Paragraph">Red</p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "15px" }}>
                      <div>
                        <h3 className="Title">Price:</h3>
                        <p className="Paragraph">Rs {product.price}</p>
                      </div>
                      <div>
                        <h3 className="Title">Category:</h3>
                        <p className="Paragraph">{product.category}</p>
                      </div>
                      <div>
                        <h3></h3>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "15px" }}>
                      <div>
                        <h3 className="Title">Description:</h3>
                        <p className="description">Rs {product.description}</p>
                      </div>
                      <div>
                        <h3></h3>
                      </div>
                      <div>
                        <h3></h3>
                      </div>
                    </div>
                  </div>
                  <div className="PicDiv">
                    <div className="RightDiv">
                      <div className="imageDiv">
                        <img src={product.image} alt="pic" />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="Btn"
                      onClick={() => handleAddCart(product)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default AllProduct;