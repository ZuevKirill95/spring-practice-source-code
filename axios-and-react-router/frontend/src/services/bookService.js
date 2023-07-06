import axios from "axios";
import {set} from "../slices/booksSlice";

const API_URL = "http://localhost:8081/books";

const getBooks = (dispatch) => {
    return axios.get(API_URL).then(
        (response) => {
            dispatch(set(response.data));
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)

            dispatch(set([]));
        });

};

const createBook = (book, dispatch) => {
    return axios.post(API_URL, book).then(
        (response) => {
            getBooks(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const deleteBook = (id, dispatch) => {
    return axios.delete(API_URL + `/${id}`).then(
        (response) => {
            getBooks(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const bookService = {
    getBooks,
    createBook,
    deleteBook,
};

export default bookService
