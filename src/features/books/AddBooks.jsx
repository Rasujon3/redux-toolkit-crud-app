import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numberofBooks = useSelector((state) => state.booksReducer.books.length);

  const handleSubmit = (event) => {
    event.preventDefault();
    const book = { id: numberofBooks + 1, title, author };
    dispatch(addBook(book));
    navigate("/show-books");
  };
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
