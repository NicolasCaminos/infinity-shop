import React from 'react';
import '../../css/App.css'; // Importa el archivo de estilos CSS para el loader
import gif from './loading.gif';

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader-container">
                <div className="loader-content">
                    <img src={gif} alt="Cargando" className="loader-icon" />
                    <p className="loader-text">Please wait...</p>
                </div>
            </div>
        </div>
    );
}

export default Loader;