import "./campaign-item.css"

const CampaignItem = () => {
    return (
        <div className="campaign-item">
            <h3 className="campaign-title">Moda Ayı <br />
                Başkentte Hazır <br />
                Mağaza</h3>
            <p className="campaign-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <a href="#" className="btn btn-primary">
                Hepsini Gör 
                <i className="bi bi-arrow-right"></i>
            </a>
        </div>
    )
}

export default CampaignItem