import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Form} from "react-bootstrap";
import {ProductCard} from "./ProductCard";
import {Cart} from "./Cart";
import UserService from "../services/user.service";

const Home = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState([])
    const [price, setPrice] = useState([])

    useEffect(() => {
        getProducts();
    }, []);

    const clearCart = () => {
        setProducts([])
    }

    const createProduct = () => {
        UserService.createProduct({name, price}).then(() => getProducts())
    }

    const getProducts = () => {
        UserService.getProducts().then(
            (response) => {
                setProducts(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setProducts([]);
            }
        );
    }

    return (
        <Container style={{padding: 20}}>
            <h2>Продукты</h2>
            <Row md={3} style={{padding: 20}}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Наименование</Form.Label>
                        <Form.Control size="sm" type="text" onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Цена</Form.Label>
                        <Form.Control size="sm" type="text" onChange={e => setPrice(e.target.value)}/>
                    </Form.Group>
                    {/*<Form.Group controlId="formFile" className="mb-3">*/}
                    {/*    <Form.Label>Изображение</Form.Label>*/}
                    {/*    <Form.Control type="file"/>*/}
                    {/*</Form.Group>*/}
                    <Button variant="primary" onClick={() => createProduct()}>
                        Добавить
                    </Button>
                </Form>
            </Row>

            <Row>
                <Col>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {products.map(product => {
                            return <Col key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    imageSrc={product.image}
                                    getProducts={getProducts}
                                />
                            </Col>
                        })}
                    </Row>
                </Col>

                <Col xs lg="2">
                    <Cart/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
