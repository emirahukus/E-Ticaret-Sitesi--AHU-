import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "../../context/CartProvider";
import { message } from "antd";

const CartTotals = () => {
    const [fastCargoChecked, setFastCargoChecked] = useState(false);
    const { cartItems } = useContext(CartContext);
    const stripePublicKey = import.meta.env.VITE_API_STRIPE_PUBLIC_KEY;
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;

    const cartItemTotals = cartItems.map((item) => {
        const itemTotal = item.price * item.quantity;

        return itemTotal;
    });

    const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);

    const cargoFee = 45;

    const cartTotals = fastCargoChecked
        ? (subTotals + cargoFee).toFixed(2)
        : subTotals.toFixed(2);

    const handlePayment = async () => {
        if (!user) {
            return message.info("Ödeme yapabilmek için giriş yapmalısınız!");
        }

        const body = {
            products: cartItems,
            user: user,
            cargoFee: fastCargoChecked ? cargoFee : 0,
        };

        try {
            const stripe = await loadStripe(stripePublicKey);

            const res = await fetch(`${apiUrl}/api/payment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                return message.error("Ödeme işlemi başarısız oldu.");
            }

            const session = await res.json();

            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                throw new Error(result.error.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart-totals">
            <h2>Sepet Toplamı</h2>
            <table>
                <tbody>
                    <tr className="cart-subtotal">
                        <th>Ara Toplam</th>
                        <td>
                            <span id="subtotal">₺{subTotals.toFixed(2)}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Kargo</th>
                        <td>
                            <ul>
                                <li>
                                    <label>
                                        Hızlı Kargo: 45.00₺
                                        <input
                                            type="checkbox"
                                            id="fast-cargo"
                                            checked={fastCargoChecked}
                                            onChange={() => setFastCargoChecked(!fastCargoChecked)}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <a href="#">Adres Değiştir</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Toplam</th>
                        <td>
                            <strong id="cart-total">₺{cartTotals}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="checkout">
                <button className="btn btn-lg" onClick={handlePayment}>
                    Ödemeyi Tamamla
                </button>
            </div>
        </div>
    );
};

export default CartTotals;