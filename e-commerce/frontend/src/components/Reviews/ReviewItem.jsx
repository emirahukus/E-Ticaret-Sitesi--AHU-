import PropTypes from "prop-types";

const ReviewItem = ({ reviewItem }) => {
    const { review, user } = reviewItem;
    const { text, createdAt, rating } = review;
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(createdAt).toLocaleDateString("tr-TR", options);
    const defaultAvatar = "https://via.placeholder.com/60"; // Varsayılan avatar

    return (
        <li className="comment-item">
            <div className="comment-avatar">
                <img src={user.avatar || defaultAvatar} alt={`${user.username} avatar`} width={60} />
            </div>
            <div className="comment-text">
                <ul className="comment-star">
                    {Array.from({ length: rating }, (_, index) => (
                        <li key={index}>
                            <i className="bi bi-star-fill"></i>
                        </li>
                    ))}
                </ul>
                <div className="comment-meta">
                    <strong>{user.username}</strong>
                    <span> - </span>
                    <time>{formattedDate}</time>
                </div>
                <div className="comment-description">
                    <p>{text}</p>
                </div>
            </div>
        </li>
    );
}

ReviewItem.propTypes = {
    reviewItem: PropTypes.shape({
        review: PropTypes.shape({
            text: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        user: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            avatar: PropTypes.string
        }).isRequired
    }).isRequired,
};

export default ReviewItem;
