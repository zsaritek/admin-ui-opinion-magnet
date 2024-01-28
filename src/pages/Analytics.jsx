import { useState, useEffect } from "react";
import feedbackService from "../services/feedback.service";
import { PieChart, AreaChart, BarChart, ColumnChart } from 'react-chartkick';
import 'chartkick/chart.js'

function Analytics() {
    const [average, setAverage] = useState(0);
    const [keywords, setKeywords] = useState(null);
    const [clusters, setClusters] = useState(null);
    const [clusterwords, setClusterwords] = useState(null);
    const [timedata, setTimedata] = useState(null);
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
                setClusterwords(clusters.data.clusterKeywords)


                const ratings = await feedbackService.getRatings();
                setTimedata(ratings.data.timeData);
                setHistogram(ratings.data.histogram)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    console.log("Timedata", timedata)
    return (
        <div className="CompanyDetails">
            <h2>This is the average rating of your company: {average}</h2>
            <h2>Ratings distribution:</h2>
            {histogram && <PieChart data={histogram} />}
            {/* {keywords && Object.entries(keywords).map(([key, value]) => {
                return(<div key={key}>
                    <p>{key}:{value}</p>
                </div>)
            })} */}
            <h2>Ratings over time:</h2>
            {timedata && <AreaChart data={timedata} />}
            <h2>10 most frequently used words:</h2>
            {keywords && <ColumnChart data={keywords} />}

            <h2>Here are your customer cluster:</h2>
            <h2>Cluster 1:</h2>
            {clusters && clusters[0].map(element => {
                return (
                    <div key={element._id}>
                        {element.feedback}
                    </div>
                )
            })}
            {clusterwords && <PieChart data={clusterwords[0]} />}
            <h2>Cluster 2:</h2>
            {clusters && clusters[1].map(element => {
                return (
                    <div key={element._id}>
                        {element.feedback}
                    </div>
                )
            })}
            {clusterwords && <PieChart data={clusterwords[1]} />}
            <h2>Cluster 3:</h2>
            {clusters && clusters[2].map(element => {
                return (
                    <div key={element._id}>
                        {element.feedback}
                    </div>
                )
            })}
            {clusterwords && <PieChart data={clusterwords[2]} />}
        </div>
    );
}


export default Analytics
