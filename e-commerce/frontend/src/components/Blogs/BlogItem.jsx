import "./blog-item.css"

const BlogItem = () => {
    return (
        <li className="blog-item">
            <a href="#" className="blog-image">
                <img src="/img/blogs/blog1.jpg" alt="" />
            </a>
            <div className="blog-info">
                <div className="blog-info-top">
                    <span>25 Şubat, 2024 </span>
                    -
                    <span> 0 Yorum</span>
                </div>
                <div className="blog-info-center">
                    <a href="#">Lorem ipsum dolor sit.</a>
                </div>
                <div className="blog-info-bottom">
                    <a href="#">Devamını Oku</a>
                </div>
            </div>
        </li>
    )
}

export default BlogItem