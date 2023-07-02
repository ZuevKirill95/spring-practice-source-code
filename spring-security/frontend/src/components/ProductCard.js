import {Button, Card} from "react-bootstrap";
import React from "react";

export const ProductCard = ({name, price, imageSrc}) => {
    return (
        <Card>
            {/*<Card.Img variant="top" src={`http://localhost:8080/products/images/${imageSrc}`}/>*/}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price} ₽
                </Card.Text>
                <Button variant="primary">В корзину</Button>
            </Card.Body>
        </Card>
    )
}