import { useState, useEffect } from 'react';
import feedbackService from '../services/feedback.service';
import FeedbackCard from '../components/FeedbackCard';

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
                    <FeedbackCard key={feedback._id} {...feedback} />
                ))}
            </ul>
        </div>
    );
}

export default FeedbackPage
