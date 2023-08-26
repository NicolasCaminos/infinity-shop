
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from '../ThemeContext'; // Ajusta la ruta según tu estructura



const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState({});
    const [detail, setDetail] = useState({});
    const detailId = useParams();
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
                    id: result.id,
                    title: result.title,
                    price: result.price,
                    thumbnail_id: result.thumbnail_id,
                });// Check the response content here
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {

        fetch(`https://api.mercadolibre.com/items/${detailId.id}/description`)
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((result) => {

                setDetail({
                    plain_text: result.plain_text

                });
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <Loader />;

    return (
        <main className="base-content"
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
                id={items.id}
                nombre={items.title}
                precio={items.price}
                foto={items.thumbnail_id}
                plain_text={detail.plain_text}
            />
        </main>
    );
}

export default ItemDetailContainer;


