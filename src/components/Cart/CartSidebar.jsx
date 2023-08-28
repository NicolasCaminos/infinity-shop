// Components
import CartItemList from "./CartItemList";

const CartSidebar = () => {
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="carrito" aria-labelledby="carrito">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        My cart
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <CartItemList />

                </div>
            </div >
        </>
    );
};

export default CartSidebar;