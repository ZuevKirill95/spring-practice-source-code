import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Form} from "react-bootstrap";
import {ProductCard} from "./ProductCard";
import {Cart} from "./Cart";
import UserService from "../services/user.service";

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
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
    }, []);

    const clearCart = () => {
        setProducts([])
    }

    return (
        <Container style={{padding: 20}}>
            <h2>Продукты</h2>
            <Row md={3} style={{padding: 20}}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Наименование</Form.Label>
                        <Form.Control size="sm" type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Цена</Form.Label>
                        <Form.Control size="sm" type="text"/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Изображение</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <Button variant="primary">
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
                                    name={product.name}
                                    price={product.price}
                                    imageSrc={product.image}
                                />
                            </Col>
                        })}
                    </Row>

                </Col>

                <Col xs lg="2">
                    <Cart products={products} clearCart={clearCart}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
