
// Dependencies
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Components
import ItemList from "../components/ItemList/ItemList"
import Loader from "../components//Loader/Loader";


const ItemListContainer = ({ defaultCategory }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [list, setItems] = useState({});
    const categoryId = useParams();

    useEffect(() => {

        console.log(categoryId)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId.id}&limit=9&offset=0`)
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((result) => {
                console.log(result.results)
                setItems(result.results);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, [categoryId]);

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
            {list && <ItemList list={list} />}
        </main>
    );
}

export default ItemListContainer;
