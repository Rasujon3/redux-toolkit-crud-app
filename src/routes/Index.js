import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import BooksView from "./../features/books/BooksView";
import AddBooks from "./../features/books/AddBooks";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBooks />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
