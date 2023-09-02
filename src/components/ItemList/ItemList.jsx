import React from "react";
import Item from "./Item";
import { BasicContext } from "../Context/BasicContext";
import Message from "../Message/Message";
// Dependencies
import { useContext, useEffect } from "react";

const ItemList = ({ list }) => {


    const basicContext = useContext(BasicContext);
    return (
        <>
            {list.length < 1 && basicContext.query && <Message type="warning" content="No search results found." />}
            < div id="container" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ gap: "10px" }
            }>
                {
                    list.map((item) => (
                        <Item key={item.id} item={item} />
                    ))
                }
            </div >
        </>
    );
};

export default ItemList;