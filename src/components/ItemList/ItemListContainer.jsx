
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ parrafo }) => {
    return (
        <main className="base-content">
            <div className="container">
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Bienvenido</h4>
                    <hr />
                    <h5>{parrafo}</h5>
                </div>
            </div>
            <ItemDetailContainer />
        </main>
    );
};

export default ItemListContainer;
