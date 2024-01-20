import { Link } from "react-router-dom"

function CompanyDetailsPage(props) {


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