import React from "react";
import Item from "./Item";

const ItemList = ({ list }) => {
    return (
        <div id="container" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ gap: "10px" }}>
            {list.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    nombre={item.title}
                    precio={item.price}
                    foto={item.thumbnail_id}
                />
            ))}
        </div>
    );
};

export default ItemList;