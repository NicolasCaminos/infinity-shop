
import React, { useState } from "react";
import ReactDOM from "react-dom"; // Importa ReactDOM correctamente
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import BasicProvider from "./components/Context/BasicProvider";
import CartProvider from "./components/Context/CartProvider";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import { ThemeProvider } from "./components/Context/ThemeContext";
import CartSidebar from "./components/Cart/CartSidebar";
import Loader from "./components/Loader/Loader";

function App() {
    const [loading, setLoading] = useState(false);
    return (
        <BrowserRouter>
            <ThemeProvider>
                <BasicProvider>
                    {loading && <Loader />}
                    <CartProvider>
                        <Navbar />
                        <CartSidebar />
                        <Routes>
                            <Route path="/" element={<ItemListContainer loader={setLoading} />} />
                            <Route path="category/:categoryId" element={<ItemListContainer loader={setLoading} />} />
                            <Route path="item/:itemId" element={<ItemDetailContainer loader={setLoading} />} />
                            <Route path="checkout" element={<Checkout loader={setLoading} />} />
                            <Route path="search" element={<ItemListContainer loader={setLoading} />} />
                        </Routes>
                    </CartProvider>
                </BasicProvider>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    );
}


export default App;