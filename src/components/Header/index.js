import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "./index.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((r) => r);
  const { hear } = useSelector((s) => s);
  const [search, setSearch] = useState(false);
  const [burger, setBurger] = useState(false);
  const { favorite } = useSelector((r) => r);

  const navRef = useRef();
  const showBurger = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <nav className="nav">
              <ul ref={navRef} onClick={showBurger} className="menu">
                <NavLink className="menu__logo" to={"/"}>
                  Bookshop
                </NavLink>
                <li className="menu__item">
                  <NavLink to={"/Categories"} className="menu__NavLink">
                    Categories
                  </NavLink>
                  <NavLink to={"/Recent"} className="menu__NavLink">
                    Recent
                  </NavLink>
                  <NavLink to={"/Books"} className="menu__NavLink">
                    Books
                  </NavLink>
                  <NavLink to={"/AboutUs"} className="menu__NavLink">
                    About Us
                  </NavLink>
                </li>
                <ul className="nav-btn nav-close-btn"></ul>
              </ul>
              <div className="nav__icon">
                <div className="search">
                  <input
                    style={{
                      width: search === false ? "0" : "180px",
                      transform: search === false ? "scale(1)" : "scaleX(1)",
                      transition: "0.5s",
                      opacity: search === false ? 0 : 1,
                    }}
                    type="text"
                    placeholder="search"
                  />
                  <FiSearch
                    onClick={() => setSearch(!search)}
                    className="search__ser"
                  />
                </div>
                <div className="div">
                  <div className="div__icon">
                    <AiOutlineHeart />
                    <sup>{favorite.length}</sup>
                  </div>
                  <Link to={"/basket"} className="div__icon">
                    <AiOutlineShopping />
                    <sup>{basket.length}</sup>
                  </Link>
                </div>
              </div>
              <ul onClick={showBurger} className="nav-btn">
                <li></li>
                <li className="li"></li>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
