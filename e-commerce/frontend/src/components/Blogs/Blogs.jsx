import BlogItem from "./BlogItem"
import "./Blogs.css"

const Blogs = () => {
    return (
        <section className="blogs">
            <div className="container">
                <div className="section-title">
                    <h2>Blogumuzdan</h2>
                    <p>Yaz Koleksiyonu Yeni Modern Tasarım</p>
                </div>
                <ul className="blog-list">
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                </ul>
            </div>
        </section>
    )
}

export default Blogs