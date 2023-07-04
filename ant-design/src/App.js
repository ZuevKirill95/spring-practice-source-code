import './App.css';
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import BooksTable from "./components/BooksTable";
import Search from "./components/Search";
import CreateBookForm from "./components/CreateBookForm";

function App() {
    return (
        <Layout className="layout">
            <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1 style={{color: "white"}}>Библиотека</h1>
                <Search style={{marginLeft: 'auto'}} />
            </Header>
            <Content style={{padding: '0 50px'}}>
                <CreateBookForm/>
                <div className="site-layout-content">
                    <BooksTable/>
                </div>
            </Content>
        </Layout>
    );
}

export default App;
