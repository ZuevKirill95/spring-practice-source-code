import {createSlice} from '@reduxjs/toolkit'

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [
            {
                id: '1',
                name: 'Метро 2033',
                author: 'Дмитрий Глуховский',
                year: 2002,
            },
            {
                id: '2',
                name: 'Преступление и наказание',
                author: 'Федор Достоевский',
                year: 1866,
            },
            {
                id: '3',
                name: 'Сумерки',
                author: 'Стефани Майер',
                year: 2005,
            },
        ],
    },
    reducers: {
        push: (state, action) => {
            const book = action.payload;
            book.id = Math.floor(Math.random() * 1_000_000);
            state.books = [action.payload, ...state.books]
        },
        remove: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload.id)
        },
    },
})

// Action creators are generated for each case reducer function
export const { push, remove } = booksSlice.actions

export default booksSlice.reducer
