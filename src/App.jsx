import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import CompanyListPage from './pages/CompanyListPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import EditCompanyPage from './pages/EditCompanyPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/companies"
          element={<IsPrivate> <CompanyListPage /> </IsPrivate>}
        />

        <Route
          path="/companies/:companyId"
          element={<IsPrivate> <CompanyDetailsPage /> </IsPrivate>}
        />

        <Route
          path="/companies/edit/:companyId"
          element={<IsPrivate> <EditCompanyPage /> </IsPrivate>}
        />

        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  )
}

export default App
