// Dependencies
import { useContext, useEffect } from "react";
// Components
import Item from "./Item";
import { Link } from "react-router-dom";


const ItemList = ({ list }) => {

    /*
    // Probando lógica para entender el funcionamiento de los ciclos
    useEffect(() => {
        console.log("Cargando...");
    }, []);
    useEffect(() => {
        lista.length > 0 && console.log("Carga completa.");
    }, [list]);
    */

    return (
        <>

            <div id="container" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {list.map((item) => (
                    <Link key={item.id} to={`/item/${item.id}`} >
                        <Item
                            id={item.id}
                            nombre={item.title}
                            precio={item.price}
                            foto={item.thumbnail_id}
                    
            
                        />
                    </Link>
                ))}
            </div >
        </>
    );
};

export default ItemList;
