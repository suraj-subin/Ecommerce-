import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../Redux/Reducer/productSlice";
import "../Carousel/Carousel.css";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import { addToCart } from "../../Redux/Reducer/cartSlice";

const Home = (product) => {
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 715,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const AllProductsData = useSelector(productList);
  console.log(" Slider is AllProductsData", AllProductsData);
  
  return (
    <>
      <div className="CardContainer">
        <div className="CardMain">
          <Slider {...settings}>
            {AllProductsData.map((item) => {
              return (
                <>
                  <div className="CardWrapper">
                    <div className="CardBox">
                      <div className="ImgDiv">
                        <img src={item.image} alt="img" />
                      </div>
                      <div style={{display:'flex',alignItems:"center",justifyContent:"space-between"}}>
                      <div>
                      <div className="TITLE">
                        <h5>NAME : {item.name}</h5>
                      </div>
                      <div className="TITLE">
                        <h5>PRICE : {item.price}</h5>
                      </div>
                      <div className="TITLE">
                        <h5>COMPANY : {item.company}</h5>
                      </div>
                      <div className="TITLE">
                        <h5>COLOR : Black</h5>
                      </div>
                      </div>
                      <div>
                      <button
                      type="button"
                      className="btn"
                      style={{backgroundColor:"#40407a"}}
                      
                    >
                      BUY NOW
                    </button>
                    </div>
                    </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
