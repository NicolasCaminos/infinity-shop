import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setItem({
                    id: data.results[1].id,
                    descripcion: data.results[1].title,
                    precio: data.results[1].price,
                    foto: data.results[1].thumbnail_id,
                    estado: data.results[1].condition,
                });
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            {isLoading ? (
                <h4>Cargando...</h4>
            ) : (
                
                    <ItemDetail descripcion={item.descripcion} precio={item.precio} foto={item.foto} />
     
            )}
        </>
    );
}

export default ItemDetailContainer;