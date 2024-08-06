import OrderRow from './OrderRow.jsx';
import products from '../data/products.js';

function OrderPage({ product, subTotal }){
    return (
        <>
           <h2>Order</h2>
           <article>
            
                <table>
                    <caption>Product list displayed here!</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity and Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => 
                            <OrderRow 
                                product={product} 
                                subTotal={subTotal}
                                key={i} 
                            />
                        )}
                    </tbody>
                </table>
           </article>
        </>
    )
}

export default OrderPage;