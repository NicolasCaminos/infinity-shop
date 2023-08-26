import ReactDOM from 'react-dom/client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer.jsx'
import Categoria from './routes/Categoria.jsx'
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import { ThemeProvider } from './components/ThemeContext';

function App() {

    return (

        <BrowserRouter>
            <ThemeProvider>
                <Routes>
                    <Route exact path='/' element={<><Navbar /><ItemListContainer defaultCategory={"MLA1648"} /></>} />
                    <Route exact path='/category/:id' element={<><Navbar /><Categoria /><Footer /></>} />
                    <Route exact path='/item/:id' element={<><Navbar /><ItemDetailContainer /><Footer /></>} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>

    )
}

export default App;