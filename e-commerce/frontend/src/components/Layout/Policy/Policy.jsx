import "./Policy.css"

const Policy = () => {
    return (
        <section className="policy">
            <div className="container">
                <ul className="policy-list">
                    <li className="policy-item">
                        <i className="bi bi-truck"></i>
                        <div className="policy-texts">
                            <strong>ÜCRETSİZ TESLİMAT</strong>
                            <span>1500₺ ve üstü</span>
                        </div>
                    </li>
                    <li className="policy-item">
                        <i className="bi bi-headset"></i>
                        <div className="policy-texts">
                            <strong>DESTEK 24/7</strong>
                            <span>Online 24 saat</span>
                        </div>
                    </li>
                    <li className="policy-item">
                        <i className="bi bi-arrow-clockwise"></i>
                        <div className="policy-texts">
                            <strong> 30 GÜNDE İADE</strong>
                            <span>30 gün içinde iade etmeniz yeterli</span>
                        </div>
                    </li>
                    <li className="policy-item">
                        <i className="bi bi-credit-card"></i>
                        <div className="policy-texts">
                            <strong> ÖDEME YÖNTEMİ</strong>
                            <span>Güvenli Ödeme</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Policy
