import {Button, Card} from "react-bootstrap";
import React from "react";

export const ProductCard = ({name, price, imageSrc, putInCart}) => {
    return (
        <Card>
            <Card.Img variant="top" src={`http://localhost:3000${imageSrc}`}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price} ₽
                </Card.Text>
                <Button variant="primary" onClick={() => putInCart(name, price)}>В корзину</Button>
            </Card.Body>
        </Card>
    )
}