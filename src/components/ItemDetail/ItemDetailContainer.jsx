
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ItemDetailContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState({});
    const parames = useParams();

    useEffect(() => {
        console.log(parames)

        fetch(`https://api.mercadolibre.com/items/${parames.id}`)
            .then((response) => {
                if (response.ok) return response.json();

            })
            .then((result) => {
                console.log(result);

                setItems({
                    title: result.title,
                    price: result.price,
                    thumbnail_id: result.thumbnail,
                    descripcion: result.descripcion
                });// Check the response content here
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <Loader />;

    return (
        <main
            style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
            }}
        >
            <ItemDetail
                key={items.id}
                title={items.title}
                precio={items.price}
                foto={items.thumbnail_id}
            />
        </main>
    );
}

export default ItemDetailContainer;

