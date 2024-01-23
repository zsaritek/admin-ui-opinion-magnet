import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackPage() {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const response = await axios.get('/api/feedback');
                console.log("Response data:", response.data);
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
