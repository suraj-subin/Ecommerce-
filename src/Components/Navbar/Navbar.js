import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { cartList } from "../../Redux/Reducer/cartSlice";
import { productList } from "../../Redux/Reducer/productSlice";
import AllProduct from "../Body/AllProduct";
import "./Navbar.css";

const Navbar = () => {
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");

  // const  { category }  = useParams();

  const filteritems = (categitem) => {
    const updateitems = AllProductsData.filter((curElem) => {
      return curElem.category === categitem;
    });
    setItem(updateitems);
  };

  const AllProductsData = useSelector(productList);

  const items = useSelector(cartList);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="menu-btn">
        <i className="fas fa-bars fs-4"> </i>
      </div>
      <div className="Container">
        <div className="wrapper">
          <nav className="main-nav">
            <div className="logo">
              <NavLink to="/home" onClick={() => setItem()}>
                LOGO
              </NavLink>
            </div>
            <ul className="main-menu">
              <li>
                <NavLink
                  to="/home"
                  activeclassname="active"
                  onClick={() => setItem()}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all"
                  activeclassname="active"
                  onClick={() => setItem(AllProductsData)}
                >
                  all
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mobile"
                  activeclassname="active"
                  onClick={() => filteritems("mobile")}
                >
                  Mobile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/laptop"
                  activeclassname="active"
                  onClick={() => filteritems("laptop")}
                >
                  laptop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/watch"
                  activeclassname="active"
                  onClick={() => filteritems("watch")}
                >
                  watch
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/computer"
                  activeclassname="active"
                  onClick={() => filteritems("computer")}
                >
                  compuer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/accessories"
                  activeclassname="active"
                  onClick={() => filteritems("accessories")}
                >
                  accessories
                </NavLink>
              </li>
            </ul>
            <ul className="right-menu">
              <li>
                {/* <NavLink to="#" className="Icon" id="suraj">
                  <i className="fas fa-search"></i>
                </NavLink> */}
                <input
                  type="text"
                  placeholder="search"
                  onChange={handleSearch}
                />
              </li>
              <li>
                <NavLink to="#" className="Icon">
                  <i className="far fa-user-circle"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="Icon">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/removecart"
                  className="Icon"
                  onClick={() => setItem()}
                >
                  <div style={{ display: "flex", width: "55px" }}>
                    <i className="fas fa-shopping-cart"></i>
                    <p
                      style={{
                        fontSize: "20px",
                        color: "#e74c3c",
                        fontWeight: "600",
                      }}
                    >
                      {items.length}
                    </p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <AllProduct item={item} search={search} />
    </>
  );
};

export default Navbar;
