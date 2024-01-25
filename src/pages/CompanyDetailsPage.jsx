import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import companyService from "../services/company.service";
import Spinner from '../components/Spinner';


function CompanyDetailsPage(props) {
    const { user } = useContext(AuthContext)
    const [average, setAverage] = useState(0);
    const [company, setCompany] = useState();
    const [loading, setLoading] = useState(false);
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
                setLoading(true);

                const response = await companyService.getCompany();
                setCompany(response.data);
            } catch (error) {
                // Handle the error
                console.error("Error fetching company data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Call the async function immediately

    }, [])

    const handleRegenerateToken = async () => {
        try {
            setLoading(true);

            const response = await companyService.regenerateAccessToken();
            setCompany(response.data);
        } catch (error) {
            console.error("Error regenerating access token:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="CompanyDetails">
            {loading ? (
                <Spinner />
            ) : (
                company && (
                    <>
                        <h1>{company.name}</h1>
                        <p>id:{company._id}</p>
                        <p>Access Token : {company.accessToken}</p>
                        <p>Created At: {company.createdAt}</p>
                        <button onClick={handleRegenerateToken}>
                            Regenerate Access Token
                        </button>
                    </>
                )
            )}
        </div>
    );
}

export default CompanyDetailsPage;