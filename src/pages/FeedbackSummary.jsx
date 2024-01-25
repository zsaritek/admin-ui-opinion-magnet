import { useState, useEffect } from "react";
import feedbackService from "../services/feedback.service";

function FeedbackSummaryPage(props) {
    const [average, setAverage] = useState(0);
    const [keywords, setKeywords] = useState(null);
    const [clusters, setClusters] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const average = await feedbackService.getAverage();
                console.log(average.data)
                setAverage(average.data.averageRating)

                const words = await feedbackService.getMostPopularWords();
                setKeywords(words.data.popularWords);

                const clusters = await feedbackService.getClusters();
                setClusters(clusters.data.clusters);
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

            <h2>Here are your customer cluster:</h2>
            <h2>Cluster 1:</h2>
            {clusters && clusters[0].map(element => {
                return (
                    <div key={element._id}>
                    {element.feedback}
                     </div>
                )
            })}
            <h2>Cluster 2:</h2>
            {clusters && clusters[1].map(element => {
                return (
                    <div key={element._id}>
                    {element.feedback}
                     </div>
                )
            })}
            <h2>Cluster 3:</h2>
            {clusters && clusters[2].map(element => {
                return (
                    <div key={element._id}>
                    {element.feedback}
                     </div>
                )
            })}
        </div>
    );
}

export default FeedbackSummaryPage;