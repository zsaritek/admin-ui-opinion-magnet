import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function CompanyDetailsPage(props) {
    const {user} = useContext(AuthContext)
    

    return (
        <div className="CompanyDetails">

            <Link to="/companies">
                <button>Back to companies</button>
            </Link>

            <Link to={`/companies/edit/${companyId}`}>
                <button>Edit Company</button>
            </Link>

        </div>
    );
}

export default CompanyDetailsPage;