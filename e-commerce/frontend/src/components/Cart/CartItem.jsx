import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ cartItem }) => {
    const { removeFromCart } = useContext(CartContext);

    // cartItem'in price özelliğinin bir sayı olup olmadığını kontrol ediyoruz
    const price = typeof cartItem.price === 'number' ? cartItem.price : 0;

    return (
        <tr className="cart-item">
            <td></td>
            <td className="cart-image">
                <img src={cartItem.img[0]} alt="" />
                <i
                    className="bi bi-x delete-cart"
                    onClick={() => removeFromCart(cartItem._id)}
                ></i>
            </td>
            <td>{cartItem.name}</td>
            <td>₺{price.toFixed(2)}</td> {/* price değişkenini kullanıyoruz */}
            <td className="product-quantity">{cartItem.quantity}</td>
            <td className="product-subtotal">
                ₺{(price * cartItem.quantity).toFixed(2)} {/* price değişkenini kullanıyoruz */}
            </td>
        </tr>
    );
};

export default CartItem;

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired, // cartItem prop'unun bir obje olduğunu belirtiyoruz ve zorunlu olduğunu belirtiyoruz
};
