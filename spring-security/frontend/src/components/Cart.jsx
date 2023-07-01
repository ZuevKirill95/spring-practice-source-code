import {Button, Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";

export const Cart = ({products, clearCart}) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let resultTotalPrice = 0
        products.forEach(product => {
            resultTotalPrice += product.price * product.count;
        })

        setTotalPrice(resultTotalPrice);
    }, [products]);


    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title className={"text-center"}>Корзина</Card.Title>

                {products.length === 0 &&
                    <Card.Text className={"text-center"}>
                        Пусто
                    </Card.Text>
                }

                {products.map(product => {
                    return <Card key={product.name} style={{margin: 10}}>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.price} ₽ за {product.count} шт.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}

                <Card.Text className={"text-start"}>
                    <b>Всего:</b> {totalPrice} ₽
                </Card.Text>

                <Button className={"card-link "} variant="primary" onClick={() => clearCart()}>Очистить</Button>
                <Button className={"card-link"} variant="primary">Оплатить</Button>
            </Card.Body>
        </Card>
    )
}

