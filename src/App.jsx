import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import EditCompanyPage from './pages/EditCompanyPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FeedbackPage from './pages/FeedbackPage';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/company/details"
          element={<IsPrivate> <CompanyDetailsPage /> </IsPrivate>}
        />

        <Route
          path="/company/edit/:companyId"
          element={<IsPrivate> <EditCompanyPage /> </IsPrivate>}
        />

        <Route
          path="/feedback"
          element={<IsPrivate> <FeedbackPage /> </IsPrivate>}
        />


        <Route path="/register" element={<IsAnon> <RegisterPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  )
}

export default App
