import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  id: '',
  title: '',
  author: '',
  completion: '',
  currentChapter: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      book: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      books: state.books.filter((prev) => prev.id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
