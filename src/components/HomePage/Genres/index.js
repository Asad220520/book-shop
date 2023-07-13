import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import img from "../../../img/genres.svg";
const Genres = () => {
  return (
    <div id="genres">
      <div className="container">
        <div className="genres">
          <div className="genres__block">
            <h1>Genres</h1>
            <Link to={'/viewAllGenres'}>View all</Link>
          </div>
          <div className="genres__img">
            <div className="genres__img-block">
              <img src={img} alt="" />
              <p>Sci-Fi</p>
            </div>
            <div className="genres__img-block">
              <img src={img} alt="" />
              <p>Sci-Fi</p>
            </div>
            <div className="genres__img-block">
              <img src={img} alt="" />
              <p>Sci-Fi</p>
            </div>
            <div className="genres__img-block">
              <img src={img} alt="" />
              <p>Sci-Fi</p>
            </div>
            <div className="genres__img-block">
              <img src={img} alt="" />
              <p>Sci-Fi</p>
            </div>
            <div className="genres__img-block">
              <img src={img} alt="" />
              <p>Sci-Fi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
