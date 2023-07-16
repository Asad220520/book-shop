import React, { useState } from "react";
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
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <nav className="nav">
              <NavLink className="menu__logo" to={"/"}>
                Bookshop
              </NavLink>
              <ul className="menu">
                <li
                  className="menu__item"
                  onClick={() => setBurger(!burger)}
                  style={{
                    display: burger === false ? "flex" : "none",
                  }}
                >
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
                <div onClick={() => setBurger(!burger)} className="burger">
                  {burger === false ? "X" : "|||"}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
