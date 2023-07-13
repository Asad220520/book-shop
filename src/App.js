import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Recent from "./components/Recent";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import Details from "./pages/DetailsPage";
import ViewAllBooks from "./pages/ViewAllBooks";
import ViewAllGenres from "./pages/ViewAllGenres";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Recent" element={<Recent />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/book/details/:bookId" element={<Details />} />
          <Route path="/viewAllBooks" element={<ViewAllBooks />} />
          <Route path="/viewAllGenres" element={<ViewAllGenres />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
