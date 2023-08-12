import { useEffect, useState } from "react";
import Item from './Item';
import ItemList from './ItemList';
import Loader from '../Loader/Loader';


// eslint-disable-next-line react/prop-types
function ItemListContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error("No se encontraron noticias");
            })
            .then((result) => {
                console.log(result);
                setItem(result.results);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <Loader />;


    return (
        <main className='base-content'
            style={{
                padding: "1rem",
            }}
        >
            <ItemList itemList={item} />
        </main>
    );
}
export default ItemListContainer;