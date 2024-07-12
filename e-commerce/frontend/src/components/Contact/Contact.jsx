import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
    // Form verilerini saklamak için state kullanıyoruz
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    // Form verilerini değiştiren işlev
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Form gönderme işlevi
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Form verilerini bir API'ye gönder
            const response = await axios.post("/api/contact", formData);
            // Başarılı gönderim durumunda kullanıcıya bilgilendirme mesajı göster
            if (response.status === 200) {
                message.success("Mesajınız başarıyla gönderildi.");
                // Formu sıfırla
                setFormData({
                    fullName: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            }
        } catch (error) {
            // Hata durumunda kullanıcıya hata mesajı göster
            message.error("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    return (
        <div>
            <section className="contact">
                <div className="contact-top">
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12599.20031066334!2d32.41238325085558!3d37.86496804283053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d086c1bf62f8f3%3A0x707045fe545b6c95!2sNecmettin%20Erbakan%20%C3%9Cniversitesi%20K%C3%B6yce%C4%9Fiz%20Yerle%C5%9Fkesi!5e0!3m2!1str!2str!4v1715684511281!5m2!1str!2str"
                            width="100%" height="500" style={{ border: "0", }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className="contact-bottom">
                    <div className="container">
                        <div className="contact-titles">
                            <h4>Bize Ulaşın</h4>
                            <h2>Temasta Olmak İçin</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo sed aspernatur vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta illum suscipit eum reiciendis inventore nobis natus voluptatum, delectus totam?</p>
                        </div>
                        <div className="contact-elements">
                            {/* Form */}
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="">
                                    <label>
                                        Ad Soyad
                                        <span>*</span>
                                    </label>
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                                </div>
                                <div className="">
                                    <label>
                                        Email
                                        <span>*</span>
                                    </label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="">
                                    <label>
                                        Konu
                                        <span>*</span>
                                    </label>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                                </div>
                                <div className="">
                                    <label>
                                        Mesajınız
                                        <span>*</span>
                                    </label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-sm form-button">Mesaj Gönder</button>
                            </form>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-texts">
                                        <strong> Ahu Store</strong>
                                        <p className="contact-street">
                                            Ahu Store
                                            Türkiye — Lorem Caddesi, Ofis 478/B İstanbul</p>
                                        <a href="tel:Phone: +1 1234 567 88">Telefon: (+90) 850 456 78 90</a>
                                        <a href="mailto:Email: contact@example.com">Email: ahuinfo@gmail.com</a>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-texts">
                                        <strong> Açılış Saati</strong>
                                        <p className="contact-date">
                                            Pazartesi - Cuma : 09.00 - 17.00</p>
                                        <p>Haftasonu Kapalı</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
