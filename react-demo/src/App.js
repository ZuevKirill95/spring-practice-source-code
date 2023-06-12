import './App.css';
import {TopPanel} from "./components/TopPanel";
import {ProductCard} from "./components/ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import {Cart} from "./components/Cart";

function App() {
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
        <>
            <TopPanel/>

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
        </>
    );
}

export default App;
