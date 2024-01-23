function FeedbackCard({ feedback, rating, createdAt }) {

    return (
        <div className="FeedbackCard card">
            <p style={{ maxWidth: "500px" }}>Review:{feedback}</p>
            <p>Rating:{rating}</p>
            <p>Date:{createdAt} </p>
        </div>
    );
}

export default FeedbackCard;