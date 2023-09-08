import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../Api";

const NewBooks = () => {
  const [book, setBook] = useState([]);
  const getBooks = () => {
    axios(`${BASE_URL}books/v1/volumes?q=javascript`).then((res) =>
      setBook(res.data.items)
    );
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div id="newBooks">
      <div className="container">
        <div className="newBooks">
          <h1>New Books</h1>
          <div className="newBooks__img">
            {book.slice(0, 3).map((el) => (
              <div className="newBooks__img-block" key={el.id}>
                <Link to={`/book/details/${el.id}`}>
                  <img
                    src={el.volumeInfo.imageLinks?.thumbnail}
                    alt={el.volumeInfo.title}
                  />
                </Link>{" "}
                <p>{el.volumeInfo.title}</p>
                <span>{el.volumeInfo.authors}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooks;
