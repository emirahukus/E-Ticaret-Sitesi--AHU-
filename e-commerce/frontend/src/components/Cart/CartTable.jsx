import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartProvider";

const CartTable = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <table className="shop-table">
            <thead>
                <tr>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Ürün</th>
                    <th className="product-price">Fiyat</th>
                    <th className="product-quantity">Miktar</th>
                    <th className="product-subtotal">Ara Toplam</th>
                </tr>
            </thead>
            <tbody className="cart-wrapper">
                {cartItems.map((item) => (
                    <CartItem cartItem={item} key={item._id} />
                ))}
            </tbody>
        </table>
    );
};

export default CartTable;