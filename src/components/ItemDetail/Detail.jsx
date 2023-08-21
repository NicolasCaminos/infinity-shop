// Dependencies
import { Link } from "react-router-dom";

const Detail = ({ id, nombre, precio, foto, descripcio }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <Link to={"/item/" + id}>
                    <img src={`https://http2.mlstatic.com/D_604790-${foto}-V.webp`} className="card-img-top" alt="Smartphone" />
                </Link>
                <div className="card-body">
                    <h3 className="card-title" style={{ minHeight: "52px" }} />
                    {nombre}
                    <p className="card-text text-secondary">
                        <small>{precio}</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Detail;