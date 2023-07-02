import {Button, Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";

export const Cart = ({products, clearCart}) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title className={"text-center"}>Корзина</Card.Title>

                <Card.Text className={"text-center"}>
                    Пусто
                </Card.Text>

                <Card.Text className={"text-start"}>
                    <b>Всего:</b> {0} ₽
                </Card.Text>

                <Button className={"card-link "} variant="primary" onClick={() => clearCart()}>Очистить</Button>
                <Button className={"card-link"} variant="primary">Оплатить</Button>
            </Card.Body>
        </Card>
    )
}

