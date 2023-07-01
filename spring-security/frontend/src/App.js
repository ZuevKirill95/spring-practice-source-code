import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";

import {logout} from "./slices/auth";

import EventBus from "./common/EventBus";
import {Container, Nav, Navbar} from "react-bootstrap";

const App = () => {
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return (
        <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to={"/"} className="navbar-brand">
                                Хрум-хрум
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            {currentUser ? (
                                <Nav>
                                    <Nav.Link href="#profile">
                                        <Link to={"/profile"} className="nav-link">
                                            {currentUser.username}
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        <a href="/login" className="nav-link" onClick={logOut}>
                                            Выход
                                        </a>
                                    </Nav.Link>
                                </Nav>
                            ) : (
                                <Nav>
                                    <Nav.Link href="#profile">
                                        <Link to={"/login"} className="nav-link">
                                            Вход
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        <Link to={"/register"} className="nav-link">
                                            Регистрация
                                        </Link>
                                    </Nav.Link>
                                </Nav>
                            )}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
