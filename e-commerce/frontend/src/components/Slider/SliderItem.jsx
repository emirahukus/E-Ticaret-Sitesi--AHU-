import "./Sliders.css"

import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
    return (
        <div className="slider-item fade">
            <div className="slider-image">
                <img src={imageSrc} className="img-fluid" alt="" />
            </div>
            <div className="container">
                <p className="slider-title">2024 YAZ</p>
                <h2 className="slider-heading">30% a Kadar İndirim</h2>
                <a href="#" className="btn btn-lg btn-primary">Şimdi Keşfet</a>
            </div>
        </div>
    )
}

export default SliderItem

SliderItem.propTypes = {
    imageSrc: PropTypes.string,
};