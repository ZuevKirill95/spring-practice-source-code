import './App.css';
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import BooksTable from "./components/BooksTable";

function App() {
    return (
        <Layout className="layout">
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <div style={{color: "white"}}>Библиотека</div>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <div className="site-layout-content">
                    <BooksTable/>
                </div>
            </Content>
        </Layout>
    );
}

export default App;
