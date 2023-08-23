// Dependencies
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, foto, descripcio }) => {
    return (

        <div className="col-md-4">
    
            <div className="card">
                <Link to={"/item/" + id}>
                    <img src={`https://http2.mlstatic.com/D_604790-${foto}-V.webp`} className="card-img-top" alt="Smartphone" />
              
                <div className="card-body">
                    <h3 className="card-title" style={{ minHeight: "52px" }} />
                    {nombre}
                    <p className="card-text text-secondary">
                            <small>${numeral(precio).format("0,0.00")}</small>
                    </p>
                    </div>
                </Link>
            </div>

        </div >
        )

};

export default Item;
