import { Link, UNSAFE_DataRouterStateContext } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function CompanyDetailsPage(props) {
    const {user} = useContext(AuthContext)
    const [average, setAverage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const average = await axios.get(`http://localhost:5005/api/average/${user._id}`);
                console.log(average.data)
                setAverage(average.data.averageRating)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [user._id])

    return (
        <div className="CompanyDetails">
            <h2>This is the average rating of your company: {average}</h2>
            <Link to="/companies">
                <button>Back to companies</button>
            </Link>

            <Link to={`/companies/edit/companyId`}>
                <button>Edit Company</button>
            </Link>

        </div>
    );
}

export default CompanyDetailsPage;