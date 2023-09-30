import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4" >

                <div className='cardIndex card'>
                    <Link to={`/item/${item.id}`} >
                        <img loading="lazy"
                            src={`../img/${item.image}`}
                            className="card-img-top"
                            alt="Smartphone"
                        />
                    </Link>
                    <div className="card-body">
                        <Link to={`/item/${item.id}`} >
                            <h5 className="card-title" style={{ minHeight: "52px" }}>
                                {item.title}
                            </h5>´
                            <p className="card-text text-secondary">
                                {item.description}
                            </p>
                            <p className="card-text text-secondary">
                                ${item.price}
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