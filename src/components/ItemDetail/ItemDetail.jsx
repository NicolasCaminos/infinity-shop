// Dependencies
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Components
import ItemCount from "./ItemCount";


const ItemDetail = ({ nombre, precio, foto, descripcio }) => {
    const [quantity, setQuantity] = useState(1);


    return (
        <>
            <div className="card">
                <div className="row g-0 py-4">
                    <div className="col-md-5 px-3">
                        <div className="d-flex flex-column justify-content-center">
                            <img src={foto} className="card-img-top" alt="Product" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h1>{nombre}</h1>
                        <p className="text-secondary pb-3">{descripcio}</p>
                        <h2 className="pb-2">${precio}</h2>
                        <div className="text-secondary">
                            <small>Quantity:</small>
                            <ItemCount stock={5} initial={1} />
                        </div>
                        <div className="input">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
