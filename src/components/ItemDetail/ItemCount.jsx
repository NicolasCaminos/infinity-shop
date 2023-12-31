
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


const ItemCount = ({ count, setCount, stock }) => {
    const onAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const onRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="input-group mb-3" style={{ maxWidth: "190px" }}>
            <button id="restar" className="btn btn-secondary" type="button" onClick={onRemove}>
                <i className="bi bi-dash"></i>
            </button>
            <input type="text" className="form-control text-center" value={count} disabled />
            <button className="btn btn-secondary" type="button" onClick={onAdd}>
                <i className="bi bi-plus"></i>
            </button>
        </div>
    );
};

export default ItemCount