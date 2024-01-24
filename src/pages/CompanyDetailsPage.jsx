import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import companyService from "../services/company.service";


function CompanyDetailsPage(props) {
    const { user } = useContext(AuthContext)
    const [average, setAverage] = useState(0);
    const [company, setCompany] = useState();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const average = await axios.get(`http://localhost:5005/api/average/${user._id}`);
    //             console.log(average.data)
    //             setAverage(average.data.averageRating)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData();
    // }, [user._id])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await companyService.getCompany();
                setCompany(response.data);
            } catch (error) {
                // Handle the error
                console.error("Error fetching company data:", error);
            }
        };

        fetchData(); // Call the async function immediately

    }, [])

    const handleRegenerateToken = async () => {
        try {
            const response = await companyService.regenerateAccessToken();
            setCompany(response.data);
        } catch (error) {
            console.error("Error regenerating access token:", error);
        }
    };

    return (
        <div className="CompanyDetails">
            {company && (
                <>
                    <h1>{company.name}</h1>
                    <p>id:{company._id}</p>
                    <p>Access Token : {company.accessToken}</p>
                    <p>Created At: {company.createdAt}</p>
                    <button onClick={handleRegenerateToken}>
                        Regenerate Access Token
                    </button>
                </>
            )}
            <h2>This is the average rating of your company: {average}</h2>

            <Link to={`/companies/edit/companyId`}>
                <button>Edit Company</button>
            </Link>

        </div>
    );
}

export default CompanyDetailsPage;