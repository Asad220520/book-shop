import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { RiShareFill } from "react-icons/ri";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, addToFavorite } from "../../redux/Actions";
const BookDetails = () => {
  window.scrollTo(0, 0);
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const { favorite, basket } = useSelector((r) => r);
  const dispatch = useDispatch();
  //
  const handleAddToFavorite = () => {
    dispatch(addToFavorite(book));
  };
  //
  const favor = favorite.some((some) => some.id === book.id);
  const bask = basket.some((some) => some.id === book.id);
  const nav = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Произошла ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, [bookId]);

  const stripHtmlTags = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  };
  return (
    <div id="detailsPage">
      <div className="container">
        <div className="detailsPage">
          <div className="detailsPage__img">
            <img
              src={book.volumeInfo?.imageLinks?.thumbnail}
              alt={book.volumeInfo?.title}
            />
          </div>
          <div className="detailsPage__block">
            <div className="detailsPage__block-title">
              <div className="detailsPage__block-title-hear">
                <h1>{book.volumeInfo?.title}</h1>
                {favor ? (
                  <div onClick={handleAddToFavorite}>
                    <FaHeart style={{ color: "red" }} />
                    <span>добавлено</span>
                  </div>
                ) : (
                  <div onClick={handleAddToFavorite}>
                    <FaHeart />
                    <span>избранный</span>
                  </div>
                )}

                <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <RiShareFill />
                  <span>поделиться</span>
                </div>
              </div>
              <span>{book.volumeInfo?.authors}</span>
              <p>{stripHtmlTags(book.volumeInfo?.description).slice(0, 200)}</p>
              <h2>$99</h2>
            </div>
            <div className="detailsPage__block-btn">
              {bask ? (
                <button
                  style={{ background: "#800080 " }}
                  onClick={() => {
                    nav("/basket");
                  }}
                >
                  added to Cart
                </button>
              ) : (
                <button onClick={() => dispatch(addToBasket(book))}>
                  Add to Cart
                </button>
              )}
              {/* <Link>
                <button className="btn">
                  <span onClick={() => dispatch({ type: "TAKE_COUNT" })}>
                    -
                  </span>
                  0
                  <span onClick={() => dispatch({ type: "ADD_COUNT" })}>+</span>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
