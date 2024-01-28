import React, { useState, useEffect } from "react";

const SelectedItemContext = React.createContext();

function SelectedItemProviderWrapper(props) {
    const [dashboard, setDashboard] = useState(false)
    const [feedback, setFeedback] = useState(false)
    const [companyDetails, setCompanyDetails] = useState(false)
    const [analytics, setAnalytics] = useState(false)
    const [helpCenter, setHelpCenter] = useState(false)

    useEffect(() => {
        setDashboard(true)
    }, []);

    const reset = () => {
        setDashboard(false)
        setFeedback(false)
        setCompanyDetails(false)
        setAnalytics(false)
        setHelpCenter(false)
    }

    const selectDashboard = () => {
        reset()
        setDashboard(true)
    }

    const selectFeedback = () => {
        reset()
        setFeedback(true)
    }

    const selectCompanyDetails = () => {
        reset()
        setCompanyDetails(true)
    }
    const selectAnalytics = () => {
        reset()
        setAnalytics(true)
    }
    const selectHelpCenter = () => {
        reset()
        setHelpCenter(true)
    }

    return (
        <SelectedItemContext.Provider
            value={{
                dashboard,
                feedback,
                companyDetails,
                helpCenter,
                analytics,
                selectDashboard,
                selectFeedback,
                selectHelpCenter,
                selectCompanyDetails,
                selectAnalytics
            }}
        >
            {props.children}
        </SelectedItemContext.Provider>
    );
}

export { SelectedItemProviderWrapper, SelectedItemContext };