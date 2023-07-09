import './App.css';
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Search from "./components/Search";
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./slices/authSlice";

function App() {
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

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
                {currentUser ?
                    <a style={{padding: '0 10px', color: "white"}}
                       onClick={() => {
                           dispatch(logout())
                           localStorage.removeItem("user")
                       }}
                    >
                        Выход
                    </a>
                    :
                    <>
                        <div style={{padding: '0 10px'}}>
                            <Link to="/register">Регистрация</Link>
                        </div>
                        <div style={{padding: '0 10px'}}>
                            <Link to="/login">Вход</Link>
                        </div>
                    </>
                }
                <Search style={{marginLeft: 'auto'}}/>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/register" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Content>
        </Layout>
    );
}

export default App;
