import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const booksUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eouLEYJAiisxShhFZwHR';

export const addBook = createAsyncThunk('books/postBook', async (book) => {
  try {
    await axios.post(`${booksUrl}/books`, book);
  } catch (err) {
    throw new Error(err);
  }
  return book;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${booksUrl}/books`);
    const books = Object.entries(response.data).map((item) => (
      {
        ...item[1][0],
        item_id: item[0],
      }
    ));
    return books;
  } catch (err) {
    throw new Error(err);
  }
});

export const removeBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    await axios.delete(`${booksUrl}/books/${id}`);
  } catch (err) {
    throw new Error(err);
  }
  return id;
});

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    })
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      });
  },
});

export default bookSlice.reducer;
