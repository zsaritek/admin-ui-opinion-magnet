import { useState, useEffect } from 'react';
import feedbackService from '../services/feedback.service';
import { Space, Table } from 'antd';

const columns = [
    {
        title: 'Review',
        dataIndex: 'review',
        key: 'review'
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
    },

]


function Feedback() {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const response = await feedbackService.getFeedbackData()
                const feedback = response.data
                const data = [];
                feedback.map(({ _id, feedback, rating, createdAt }, index) => {
                    data.push({
                        key: '1',
                        review: feedback,
                        rating: rating,
                        date: createdAt
                    })
                })
                setFeedbackData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFeedbackData();
    }, []);

    return (
        <div >
            <Table columns={columns} dataSource={feedbackData} />;
        </div>
    )
}

export default Feedback
