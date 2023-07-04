import {Space, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {remove, set} from "../slices/booksSlice";
import BookService from "../services/bookService";
import {useEffect} from "react";


const BooksTable = () => {
    const books = useSelector((state) => state.books.books)
    const dispatch = useDispatch()

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = () => {
        BookService.getBooks(dispatch);
    }

    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Автор',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Год',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, book) => (
                <Space size="middle" onClick={() => BookService.deleteBook(book.id, dispatch)}>
                    <a>Удалить</a>
                </Space>
            ),
        },
    ];

    return (
        <Table rowKey="id" columns={columns} dataSource={books}/>
    );
}
export default BooksTable;
