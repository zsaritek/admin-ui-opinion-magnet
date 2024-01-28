import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { SelectedItemContext } from "../context/selectedItem.context";

import Dashboard from "./Dashboard"
import Feedback from "./Feedback";
import CompanyDetails from "./CompanyDetails";
import Analytics from "./Analytics";
import HelpCenter from "./HelpCenter";

function PanelLayout() {
    const { dashboard,
        feedback,
        companyDetails,
        helpCenter,
        analytics,
        selectDashboard,
        selectFeedback,
        selectHelpCenter,
        selectCompanyDetails,
        selectAnalytics } = useContext(SelectedItemContext)
    return (
        <div className="flex">
            <Sidebar selectDashboard={selectDashboard}
                selectFeedback={selectFeedback}
                selectAnalytics={selectAnalytics}
                selectCompanyDetails={selectCompanyDetails}
                selectHelpCenter={selectHelpCenter}
            />
            <main className="grow">
                <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
                    {dashboard && <Dashboard />}
                    {feedback && <Feedback />}
                    {companyDetails && <CompanyDetails />}
                    {analytics && <Analytics />}
                    {helpCenter && <HelpCenter />}
                </div>
            </main>
        </div>
    );
}

export default PanelLayout;