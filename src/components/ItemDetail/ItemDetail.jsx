import ItemCount from '../ItemDetail/ItemCount'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ItemDetail({ id, nombre, precio, foto, descripcion }) {

    return (

        <Card style={{ width: 320 }}>
            <Card.Header>{nombre}</Card.Header>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <FavsToggle />
            </Card.Body>
            <Card.Footer>{descripcion}</Card.Footer>
        </Card>
    );
}

export default ItemDetail;