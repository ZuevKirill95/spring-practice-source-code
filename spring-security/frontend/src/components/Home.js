import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ProductCard} from "./ProductCard";
import {Cart} from "./Cart";

const Home = () => {
    const [products, setProducts] = useState([])

    const putInCart = (name, price) => {
        const foundProduct = products.find(p => p.name === name);

        let newProducts;

        if (foundProduct) {
            newProducts = products.map(p => {
                if (p.name === name) {
                    p.count++;
                    return p;
                } else {
                    return p;
                }
            })
        } else {
            const product = {
                name,
                price,
                count: 1
            }

            newProducts = products.concat(product);
        }

        setProducts(newProducts)
    }

    const clearCart = () => {
        setProducts([])
    }

    return (
        <Container style={{padding: 20}}>
            <h2>Продукты</h2>
            <Row>
                <Col>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <Col>
                            <ProductCard
                                name={'Яблоко'}
                                price={80}
                                imageSrc={'/img/apple.png'}
                                putInCart={putInCart}
                            />
                        </Col>
                        <Col>
                            <ProductCard
                                name={'Банан'}
                                price={30}
                                imageSrc={'/img/banana.png'}
                                putInCart={putInCart}
                            />
                        </Col>
                        <Col>
                            <ProductCard
                                name={'Апельсин'}
                                price={70}
                                imageSrc={'/img/orange.png'}
                                putInCart={putInCart}
                            />
                        </Col>
                        <Col>
                            <ProductCard
                                name={'Персик'}
                                price={30}
                                imageSrc={'/img/peach.png'}
                                putInCart={putInCart}
                            />
                        </Col>
                        <Col>
                            <ProductCard
                                name={'Груша'}
                                price={20}
                                imageSrc={'/img/pear.png'}
                                putInCart={putInCart}
                            />
                        </Col>
                        <Col>
                            <ProductCard
                                name={'Арбуз'}
                                price={100}
                                imageSrc={'/img/watermelon.png'}
                                putInCart={putInCart}
                            />
                        </Col>
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
