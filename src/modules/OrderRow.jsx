/* eslint-disable react/prop-types */
import OrderQuantity from "./OrderQuantity";

function OrderRow({product, subTotal}) {
    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</td>
            <td><OrderQuantity product={product} subTotal={subTotal}/></td>
        </tr>
    );
}

export default OrderRow;