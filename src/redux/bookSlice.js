// redux/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allBooks: [],
    myBooks: [],
    loading: false,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        fetchBooksRequest: (state) => { state.loading = true; },
        fetchBooksSuccess: (state, action) => {
            state.loading = false;
            state.allBooks = action.payload;
        },
        fetchMyBooks: (state, action) => {
            state.myBooks = action.payload;
        },
        addBookToUserList: (state, action) => {
            state.myBooks.push(action.payload);
        },
        updateBookStatus: (state, action) => {
            const book = state.myBooks.find(b => b.id === action.payload.bookId);
            if (book) book.status = action.payload.status;
        },
        updateBookRating: (state, action) => {
            const book = state.myBooks.find(b => b.id === action.payload.bookId);
            if (book) book.rating = action.payload.rating;
        }
    }
});

export const {
    fetchBooksRequest, fetchBooksSuccess, fetchMyBooks,
    addBookToUserList, updateBookStatus, updateBookRating
} = booksSlice.actions;

export default booksSlice.reducer;
