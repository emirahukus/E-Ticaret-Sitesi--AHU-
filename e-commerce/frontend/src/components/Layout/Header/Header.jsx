import { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css"

const Header = ({ setIsSearchShow }) => { //Header bileşenini bir fonksiyon bileşeni olarak tanımlar. Bu, bir fonksiyonun döndürdüğü JSX yapıyı içerir.
    const { cartItems } = useContext(CartContext);

    const user = localStorage.getItem("user");
    const { pathname } = useLocation();

    return (
        <header>
            <div className="global-notification">
                <div className="container">
                    <p>
                        TÜM T-SHIRTLERDE YAZ İNDİRİMİ VE ÜCRETSİZ KARGO - %50 İNDİRİM! ŞİMDİ SATIN AL
                        <a href="shop.html"> SATIN AL</a>
                    </p>
                </div>
            </div>
            <div className="header-row">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-mobile">
                            <i className="bi bi-list" id="btn-menu"></i>
                        </div>
                        <div className="header-left">
                            <Link to={"/"} className="logo">AHU</Link>
                        </div>
                        <div className="header-center" id="sidebar">
                            <nav className="navigation">
                                <ul className="menu-list">
                                    <li className="menu-list-item">
                                        <Link
                                            to={"/"}
                                            className={`menu-link ${pathname === "/" && "active"}`}
                                        >
                                            Anasayfa
                                            <i className="bi bi-chevron-down"></i>
                                        </Link>
                                        <div className="menu-dropdown-wrapper">
                                            <ul className="menu-dropdown-content">
                                                <li>
                                                    <a href="#">Kategoriler</a>
                                                </li>
                                                <li>
                                                    <a href="#">Özel Ürünler</a>
                                                </li>
                                                <li>
                                                    <a href="#">Markalar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Öne Çıkanlar</a>
                                                </li>
                                                <li>
                                                    <a href="#">İndirim</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-list-item megamenu-wrapper">
                                        <Link
                                            to={"/shop"}
                                            className={`menu-link ${pathname === "/shop" && "active"
                                                }`}
                                        >
                                            ALIŞVERİŞ
                                            <i className="bi bi-chevron-down"></i>
                                        </Link>
                                        <div className="menu-dropdown-wrapper">
                                            <div className="menu-dropdown-megamenu">
                                                <div className="megamenu-links">
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-products-title">
                                                            Erkek
                                                        </h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Ayakkabı</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirt</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Şort</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Ceket</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Gömlek</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Çorap</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Çanta</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-products-title">
                                                            Kadın
                                                        </h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Ayakkabı</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Ceket</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Çanta</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Aksesuar</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-products-title">
                                                            İndirim
                                                        </h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Erkekler için indirimli ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Kadınlar için indirimli ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Çocuklar için indirimli ürünler</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="megamenu-single">
                                                    <a href="#">
                                                        <img src="/img/ERK.jpg" alt=""></img>
                                                    </a>
                                                    <h3 className="megamenu-single-title">AHU GRUBUNA KATILIN</h3>
                                                    <h4 className="megamenu-single-subtitle">Daha hızlı haberdar olmak için...</h4>
                                                    <a href="#" className="megamenu-single-button btn btn-sm">Kaydol</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li className="menu-list-item">
                                        <Link
                                            to={"/blog"}
                                            className={`menu-link ${pathname === "/blog" && "active"
                                                }`}
                                        >
                                            BLOG
                                        </Link>
                                    </li> */}
                                    <li className="menu-list-item">
                                        <Link
                                            to={"/contact"}
                                            className={`menu-link ${pathname === "/contact" && "active"
                                                }`}
                                        >
                                            İLETİŞİM
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <i className="bi-x-circle" id="close-sidebar"></i>
                        </div>
                        <div className="header-right">
                            <div className="header-right-links">
                                <Link to={"/auth"} className="header-account">
                                    <i className="bi bi-person"></i>
                                </Link>
                                <button
                                    className="search-button"
                                    onClick={() => setIsSearchShow(true)}
                                >
                                    <i className="bi bi-search"></i>
                                </button>
                                {/* <a href="#">
                                    <i className="bi bi-heart"></i>
                                </a> */}
                                <div className="header-cart">
                                    <Link to={"/cart"} className="header-cart-link">
                                        <i className="bi bi-bag"></i>
                                        <span className="header-cart-count">
                                            {cartItems.length}
                                        </span>
                                    </Link>
                                </div>
                                {user && (
                                    <button
                                        className="search-button"
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Çıkış yapmak istediğinize emin misiniz?"
                                                )
                                            ) {
                                                {
                                                    localStorage.removeItem("user");
                                                    window.location.href = "/";
                                                }
                                            }
                                        }}
                                    >
                                        <i className="bi bi-box-arrow-right"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

};

export default Header;

Header.propTypes = {
    setIsSearchShow: PropTypes.func,
};