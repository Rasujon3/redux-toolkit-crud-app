const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "Ruhul Amin" },
    { id: 2, title: "Bangladeshi", author: "Sujon" },
    { id: 3, title: "Padma Bridge", author: "RA Sujon" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;
