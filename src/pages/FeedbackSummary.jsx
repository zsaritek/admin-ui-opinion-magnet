import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import companyService from "../services/company.service";
import feedbackService from "../services/feedback.service";

function FeedbackSummaryPage(props) {
    const [average, setAverage] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const average = await feedbackService.getAverage();
                console.log(average.data)
                setAverage(average.data.averageRating)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    return (
        <div className="CompanyDetails">
            <h2>This is the average rating of your company: {average}</h2>
        </div>
    );
}

export default FeedbackSummaryPage;