import { useState, useEffect } from 'react';
import feedbackService from '../services/feedback.service';

function FeedbackPage() {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const response = await feedbackService.getFeedbackData()
                setFeedbackData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFeedbackData();
    }, []);



    return (
        <div>
            <h2>Feedback Page</h2>
            <ul>
                {feedbackData.map((feedback) => (
                    <li key={feedback._id}>
                        <p>Rating : {feedback.rating}</p>
                        <p>Feedback : {feedback.feedback}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeedbackPage
