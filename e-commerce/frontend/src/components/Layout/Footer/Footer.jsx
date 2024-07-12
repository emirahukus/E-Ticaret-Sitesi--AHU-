import React from "react"
import Policy from "../Policy/Policy"
import "./Footer.css"

const Footer = () => {

    return (

        <React.Fragment>
            <Policy />
            <footer className="footer">
                <div className="subscribe-row">
                    <div className="container">
                        <div className="footer-row-wrapper">
                            <div className="footer-subscribe-wrapper">
                                <div className="footer-subscribe">
                                    <div className="footer-subscribe-top">
                                        <h3 className="subscribe-title">Yeni ürünler, indirimler ve daha fazlası hakkında bilgi almak için e-postalarımızı alın.</h3>
                                        <p className="subscribe-desc">Size e-postayla 1000₺ üzeri ilk siparişinizde 100₺ değerinde bir kupon göndereceğiz.</p>
                                    </div>
                                    <div className="footer-subscribe-bottom">
                                        <form>
                                            <input type="text" placeholder="Email adresinizi girin." />
                                            <button className="btn">Abone Ol</button>
                                        </form>
                                        <p className="privacy-text">
                                            <a href="#">Abone olarak Şartlar ve Koşullarımızı ve Gizlilik ve Çerez Politikamızı kabul etmiş olursunuz.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-contact-wrapper">
                                <div className="footer-contact-top">
                                    <h3 className="contact-title">
                                        Yardıma mı ihtiyacınız var? <br />
                                        (+90) 850 456 78 90
                                    </h3>
                                    <p className="contact-desc">Bize 8:00 – 17:00 arasında ulaşabilirsiniz.</p>
                                </div>
                                <div className="footer-contact-bottom">
                                    <div className="download-app">
                                        <a href="#">
                                            <img src="/img/footer/app-store.png" alt="" />
                                        </a>
                                        <a href="#">
                                            <img src="/img/footer/google-play.png" alt="" />
                                        </a>
                                    </div>
                                    <p className="privacy-text">
                                        <strong>Alışveriş Uygulaması:</strong> Odanızda Görüntüleme özelliğimizi deneyin, kayıtları yönetin ve ödeme bilgilerini kaydedin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widgets-row">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="brand-info">
                                <div className="footer-logo">
                                    <a href="index.html" className="logo">AHU</a>
                                </div>
                                <div className="footer-desc">
                                    <p> Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
                                        in
                                        termapol.</p>
                                </div>
                                <div className="footer-contact">
                                    <p>
                                        <a href="tel:555 555 55 55">(+90) 850 567 80 90</a> – <a
                                            href="mailto:info@example.com">ahuinfo@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Bilgi</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Hakkımızda</a>
                                    </li>
                                    <li>
                                        <a href="#">Gizlilik Politikası</a>
                                    </li>
                                    <li>
                                        <a href="#">İade Politikası</a>
                                    </li>
                                    <li>
                                        <a href="#">Kargo Politikası</a>
                                    </li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Hesap</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Favorilerim</a>
                                    </li>
                                    <li>
                                        <a href="#">Siparişlerim</a>
                                    </li>
                                    <li>
                                        <a href="#">İstek Listem</a>
                                    </li>
                                    <li>
                                        <a href="#">Hesap Detayları</a>
                                    </li>
                                    <li>
                                        <a href="#">Siparişlerimi takip et</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Mağaza</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Ortaklık</a>
                                    </li>
                                    <li>
                                        <a href="#">En Çok Satanlar</a>
                                    </li>
                                    <li>
                                        <a href="#">İndirim</a>
                                    </li>
                                    <li>
                                        <a href="#">Yeni Ürünler</a>
                                    </li>
                                    <li>
                                        <a href="#">İndirimli Ürünler</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Kategoriler</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Kadın</a>
                                    </li>
                                    <li>
                                        <a href="#">Erkek</a>
                                    </li>
                                    <li>
                                        <a href="#">Çantalar</a>
                                    </li>
                                    <li>
                                        <a href="#">Dış Giyim</a>
                                    </li>
                                    <li>
                                        <a href="#">Ayakkabılar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-row">
                    <div className="container">
                        <div className="footer-copyright">
                            <div className="site-copyright">
                                <p>
                                    Copyright 2024 ©. Bütün hakları saklıdır. Emir Ahukuş tarafından hazırlanmıştır.
                                </p>
                            </div>
                            <a href="#">
                                <img src="/img/footer/cards.png" alt="" />
                            </a>
                            <div className="footer-menu">
                                <ul className="footer-menu-list">
                                    <li className="list-item">
                                        <a href="#">Gizlilik Politikası</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Şartlar ve Koşullar</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">İade Politikası</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>



    )

}

export default Footer