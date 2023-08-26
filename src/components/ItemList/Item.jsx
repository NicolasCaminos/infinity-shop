import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, foto }) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4" >

                <div className='cardIndex card'>
                    <Link to={`/item/${id}`}>
                        <img loading="lazy"
                            src={`https://http2.mlstatic.com/D_604790-${foto}-V.webp`}
                            className="card-img-top"
                            alt="Smartphone"
                        />
                    </Link>
                    <div className="card-body">
                        <Link to={`/item/${id}`}>
                            <h5 className="card-title" style={{ minHeight: "52px" }}>
                                {nombre}
                            </h5>
                            <p className="card-text text-secondary">
                                ${numeral(precio).format("0,0.00")}
                            </p>
                            <button className="btn btn-primary">Ver Detalle</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>

    );
};

export default Item;