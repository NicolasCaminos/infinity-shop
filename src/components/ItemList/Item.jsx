import ItemCount from '../ItemDetail/ItemCount';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Item({ id, descripcion, precio, foto, estado }) {

    return (


        <Card raised
            sx={{
                maxWidth: 280,
                margin: "0 auto",
                padding: "0.1em",
            }}
            className="card">
            <CardContent>
                <CardMedia
                    objectFit
                    component="img"
                    height="250"
                    src={`https://http2.mlstatic.com/D_604790-${foto}-V.webp`}
                    title={descripcion}
                />
                <Typography gutterBottom variant="h6" component="div">
                    {descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {estado}
                </Typography>
                <Typography variant="p" color="text.secondary">
                    $ {precio}
                </Typography>
                <ItemCount stock={5} initial={1} />
            </CardContent>

        </Card>

    );
}

export default Item;