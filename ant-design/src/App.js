import './App.css';
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import BooksTable from "./components/BooksTable";
import Search from "./components/Search";
import CreateBookForm from "./components/CreateBookForm";
import {useState} from "react";

const data = [
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
];

function App() {
    const [books, setBooks] = useState(data)

    const handleCreateBooks = (book) => {
        setBooks([book, ...books]);
    }

    const handleDeleteBooks = (book) => {
        const newBooks = books.filter(b => b.id !== book.id);
        setBooks(newBooks);
    }

    return (
        <Layout className="layout">
            <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1 style={{color: "white"}}>Библиотека</h1>
                <Search style={{marginLeft: 'auto'}} books={books}/>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <CreateBookForm books={books} handleCreateBooks={handleCreateBooks}/>
                <div className="site-layout-content">
                    <BooksTable books={books} handleDeleteBooks={handleDeleteBooks}/>
                </div>
            </Content>
        </Layout>
    );
}

export default App;
