import { useState, useEffect } from 'react';
import feedbackService from '../services/feedback.service';

function Feedback() {
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
        <div >
            {feedbackData.map(({ _id, feedback, rating, createdAt }) => {
                return (
                    <div key={_id} >
                        <div>
                            <p>Review: {feedback} </p>
                            <p>Rating: {rating}</p>
                            <p>Date: {createdAt}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Feedback
