import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categoria from './routes/Categoria.jsx'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route exact path='/Category/:id' element={<Categoria />} />
                <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
)
