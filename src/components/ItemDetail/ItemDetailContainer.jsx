import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({ itemId }) {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItems] = useState({});

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${itemId}`)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error("No se encontro una noticia con ese ID");
            })
            .then((result) => {
                console.log(result);
                setItems({ result });
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
                key={item.id}
                descripcion={item.title}
                precio={item.price}
            />
        </main>
    );
}

export default ItemDetailContainer;
