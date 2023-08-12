import { height } from "@mui/system";
import Item from "./Item";

function ItemList({ itemList = [] }) {
    return (
        <section
            style={{
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
                maxHeight: "700px"
            }}
        >
            {
                itemList.map((item) => {

                    return (
                        <Item
                            key={item.id}
                            descripcion={item.title}
                            precio={item.price}
                            foto={item.thumbnail_id}
                            estado={item.condition}

                        />
                    );
                })
            }
        </section >
    );
}

export default ItemList;