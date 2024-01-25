import { useState, useEffect } from "react";
import feedbackService from "../services/feedback.service";
import { PieChart, AreaChart, BarChart, ColumnChart } from 'react-chartkick';
import 'chartkick/chart.js'

function FeedbackSummaryPage(props) {
    const [average, setAverage] = useState(0);
    const [keywords, setKeywords] = useState(null);
    const [clusters, setClusters] = useState(null);
    const [ratings, setRatings] = useState(null);
    const [histogram, setHistogram] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const average = await feedbackService.getAverage();
                //console.log(average.data)
                setAverage(average.data.averageRating)

                const words = await feedbackService.getMostPopularWords();
                setKeywords(words.data.popularWords);
                console.log(keywords)
                const clusters = await feedbackService.getClusters();
                setClusters(clusters.data.clusters);

                const ratings = await feedbackService.getRatings();
                setRatings(ratings.data.ratings);
                setHistogram(ratings.data.histogram)
                console.log(ratings.data.histogram)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    return (
        <div className="CompanyDetails">
            <h2>This is the average rating of your company: {average}</h2>
            <h2>Most frequently used words:</h2>
            {keywords && <PieChart data={keywords} />}
            {/* {keywords && Object.entries(keywords).map(([key, value]) => {
                return(<div key={key}>
                    <p>{key}:{value}</p>
                </div>)
            })} */}

            {keywords && <AreaChart data={ratings} />}
            {histogram && <ColumnChart data={histogram} />}

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