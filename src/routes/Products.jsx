import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from '../components/ItemDetail/ItemCount'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Products() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&results")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setProducts([...json]);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading)
        return (
            <div>
                <h3>Cargando...</h3>
            </div>
        );

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <Link key={product.id} to={`/productos/${product.id}`}>
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

                                title={descripcion}
                            />
                            <Typography gutterBottom variant="h6" component="div">
                                {descripcion}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            <Typography variant="p" color="text.secondary">
                                $ {precio}
                            </Typography>
                            <ItemCount stock={5} initial={1} />
                        </CardContent>

                    </Card>
                </Link>
            ))}
        </div>
    );
}

export default Products;
