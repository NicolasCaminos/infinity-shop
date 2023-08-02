
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const remove = () => {
        setCount(count - 1);
    }
    const addProduct = () => {
        setCount(count + 1);
    }

    function onAdd() {
        if (count === 1) {
            Swal.fire(
                'Good Job!!',
                `Usted compro ${count} producto`,
                'success'
            )
        } else {
            Swal.fire(
                'Good Job!!',
                `Usted compro ${count} productos`,
                'success'
            )
        }
    };

    return (
        <>
            <div className='btnCard'>
                <Button className='removeProduct' variant="outlined" color="error" disabled={count <= 1} onClick={remove} >
                    <RemoveShoppingCartIcon />
                </Button>
                <span>{count}</span>
                <Button className='AddProduct' variant="outlined" color="success" disabled={count >= stock} onClick={addProduct} aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </Button>
                <div>
                    <Button className='addChart' variant="contained" onClick={onAdd}>
                        Agregar al Carrito
                    </Button>
                </div>
            </div>

        </>
    );
}

export default ItemCount;