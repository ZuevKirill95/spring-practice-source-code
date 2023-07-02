import {Button, Card} from "react-bootstrap";
import React, {useState} from "react";
import UserService from "../services/user.service";

export const ProductCard = ({id, name, price, imageSrc, getProducts}) => {
    const [productName, setProductName] = useState([name])
    const [productPrice, setProductPrice] = useState([price])
    const [isEdit, setIsEdit] = useState([false])

    const deleteProduct = () => {
        UserService.deleteProduct(id).then(() => getProducts())
    }

    return (
        <Card>
            {/*<Card.Img variant="top" src={`http://localhost:8080/products/images/${imageSrc}`}/>*/}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price} ₽
                </Card.Text>
                <div className="form-outline">
                    <label className="form-label" htmlFor="typeNumber">Количество</label>
                    <input type="number" id="typeNumber" className="form-control" defaultValue={1} min={0}/>
                </div>
                <br/>
                <Button variant="success" style={{marginTop: 10}}>В корзину</Button>
                <br/>
                <Button
                    variant="primary"
                    style={{marginTop: 10}}
                    onClick={() => deleteProduct()}
                >
                    Изменить
                </Button>
                <br/>
                <Button
                    variant="danger"
                    style={{marginTop: 10}}
                    onClick={() => deleteProduct()}
                >
                    Удалить
                </Button>
            </Card.Body>
        </Card>
    )
}