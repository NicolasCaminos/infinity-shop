// Dependencies
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Components
import ItemCount from "./ItemCount";
import Offcanvas from 'react-bootstrap/Offcanvas';



const ItemDetail = ({ nombre, precio, foto, plain_text }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            <div className="row g-0 py-4">
                <div className="col-md-5 px-3">
                    <div className="d-flex flex-column justify-content-center">
                        <img src={`https://http2.mlstatic.com/D_NQ_NP_2X_${foto}-F.webp`} className="card-img-top" alt="Product" />
                    </div>
                </div>

                <div className="col-md-7">

                    <h2 className="text-secondary pb-3">{nombre}</h2>
                    <h5>Descripción: </h5>
                    <p>{plain_text}</p>
                    <h5>Costo: </h5>
                    <h2 className="pb-2">${numeral(precio).format("0,0.00")}</h2>
                    <div className="text-secondary">
                        <small>Quantity:</small>
                        <ItemCount stock={5} initial={1} />
                    </div>
                    <div className="input">

                    </div>
                </div>
            </div>

        </>
    );
};

export default ItemDetail;