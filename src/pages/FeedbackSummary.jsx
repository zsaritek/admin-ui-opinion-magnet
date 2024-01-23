import { useState, useEffect } from "react";
import feedbackService from "../services/feedback.service";

function FeedbackSummaryPage(props) {
    const [average, setAverage] = useState(0);
    const [keywords, setKeywords] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const average = await feedbackService.getAverage();
                console.log(average.data)
                setAverage(average.data.averageRating)

                const words = await feedbackService.getMostPopularWords();
                setKeywords(words.data.popularWords);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    return (
        <div className="CompanyDetails">
            <h2>This is the average rating of your company: {average}</h2>
            {keywords && Object.entries(keywords).map(([key, value]) => {
                return(<div key={key}>
                    <p>{key}:{value}</p>
                </div>)
            })}
        </div>
    );
}

export default FeedbackSummaryPage;