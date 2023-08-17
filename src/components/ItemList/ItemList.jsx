import { height } from "@mui/system";
import Item from "./Item";
import { Link } from 'react-router-dom'

function ItemList({ itemList = [] }) {
    return (
        <div
        >
            {
                itemList.map((item) => {

                    return (
                        <Link to={`/Item/${item.id}`} >
                            <Item
                                key={item.id}
                                descripcion={item.title}
                                precio={item.price}
                                foto={item.thumbnail_id}
                                estado={item.condition}

                            />
                        </Link>
                    );
                })
            }
        </div >
    );
}

export default ItemList;