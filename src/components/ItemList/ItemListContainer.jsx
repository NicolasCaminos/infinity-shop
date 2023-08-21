// Dependencies
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Components
import ItemList from "./ItemList";
// Context

const ItemListContainer = ({ loader }) => {
    const { categoryId } = useParams();
    const [list, setList] = useState([]);


    // Listado de productos Mercado Libre
    const getItemsML = async () => {
        const category = categoryId ? categoryId : "MLA1055";
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}&limit=9&offset=0`);
        const result = await response.json();
        setList(result.results);

    };



    // Llama a la función cuando se recibe la variable categoryId
    useEffect(() => {
        getItemsML();
    }, [categoryId]);

    //

    return (
        <main className="album">
            <div className="container-xxl pt-4 pb-3">
                <ItemList list={list} />
            </div>
        </main>
    );
};

export default ItemListContainer;
