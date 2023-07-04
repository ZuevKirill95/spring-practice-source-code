import './App.css';
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import BooksTable from "./components/BooksTable";
import Search from "./components/Search";
import CreateBookForm from "./components/CreateBookForm";
import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {


    return (
        <Layout className="layout">
            <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                <h1 style={{color: "white"}}>Библиотека</h1>
                <div style={{padding: '0 10px'}}>
                    <Link to="/">Главная</Link>
                </div>
                <div style={{padding: '0 10px'}}>
                    <Link to="/about">О нас</Link>
                </div>
                <Search style={{marginLeft: 'auto'}}/>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Content>
        </Layout>
    );
}

export default App;
