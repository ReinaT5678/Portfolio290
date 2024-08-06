import {useState} from 'react';
import { FaPlus, FaMinus} from "react-icons/fa";

function OrderQuantity({product}) {
    const [quantity, setQuantity] = useState(0);
    const subTotal = quantity * product.price;


    const plusQ = () => {
        if(quantity < 10) {
            setQuantity(quantity + 1);
            subTotal();
        }
    };

    const minusQ = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            subTotal();
        }
    };

    return (
        <>
            <div className="clicker">
                <i onClick={minusQ}><FaMinus/></i>
                <span>{quantity}</span>
                <i onClick={plusQ}><FaPlus/></i>
                <span class="subtotal">
                {subTotal.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}
            </span>
            </div>
        </>
    );
}

export default OrderQuantity;