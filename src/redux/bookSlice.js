import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: 'book',
    // The initial state is a direct Array, not an object containing a value property.
    initialState: [
        {
            id: 1,
            imgUrl: 'https://m.media-amazon.com/images/I/51+mLENPtyL._SY445_SX342_FMwebp_.jpg',
            title: 'The Three-Body Problem',
            author: 'Cixin Liu',
            rating: '4.5',
            category: 'fiction',
        },
        {
            id: 2,
            imgUrl: 'https://m.media-amazon.com/images/I/61ZDI0txDbL._SL1500_.jpg',
            title: 'The Midnight Library',
            author: 'Matt Haig ',
            rating: '4.4',
            category: 'fiction',
        },
        {
            id: 3,
            imgUrl: 'https://m.media-amazon.com/images/I/71BEFIV8EWL._SY466_.jpg',
            title: 'The Nightingale',
            author: 'Kristin Hannah',
            rating: '4.5',
            category: 'fiction',
        },
        {
            id: 4,
            imgUrl: 'https://m.media-amazon.com/images/I/61qTWmEi5GL._SL1500_.jpg',
            title: 'Never Lie',
            author: 'The Housemaid Freida McFadden',
            rating: '4.4',
            category: 'fiction',
        },
        {
            id: 5,
            imgUrl: 'https://m.media-amazon.com/images/I/61qTWmEi5GL._SL1500_.jpg',
            title: 'Human Edge in the AI Age',
            author: 'Nitin Seth ',
            rating: '4.7',
            category: 'non-fiction', // Matches URL param /books/non-fiction directly
        },
        {
            id: 6,
            imgUrl: 'https://m.media-amazon.com/images/I/81ETX16uZsL._SL1500_.jpg',
            title: 'Project Hail Mary',
            author: 'Andy Weir',
            rating: '4.7',
            category: 'sci-fi', // Matches URL param /books/sci-fi directly
        },
        {
            id: 7,
            imgUrl: 'https://m.media-amazon.com/images/I/81T05w0B3lL._SL1500_.jpg',
            title: 'You Can',
            author: 'George Matthew Adams',
            rating: '4.4',
            category: 'self-help', // Matches URL param /books/self-help directly
        },
    ],
    reducers: {
        // Redux Toolkit utilizes Immer to let you directly mutate arrays safely
        addBook: (state, action) => {
            state.push(action.payload);
        },
        // To delete elements from a plain array state, return a filtered array copy
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        }
    }
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
