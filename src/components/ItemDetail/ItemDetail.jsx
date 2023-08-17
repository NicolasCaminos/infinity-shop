import Card from "react-bootstrap/Card";

function ItemDetail({ id, title, precio }) {
    return (
        <Card style={{ width: 320 }}>
            <Card.Header>{id}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <Card.Footer>Creado por: {precio}</Card.Footer>
        </Card>
    );
}

export default ItemDetail;
