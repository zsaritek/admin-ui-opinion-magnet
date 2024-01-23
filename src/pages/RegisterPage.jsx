import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

function RegisterPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleCompany = (e) => setCompany(e.target.value);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, name, company };

        authService
            .register(requestBody)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    return (
        <div className="RegisterPage">
            <h1>Register</h1>

            <form onSubmit={handleRegisterSubmit}>
                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={handleEmail} />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Company:</label>
                <input type="text" name="company" value={company} onChange={handleCompany} />

                <button type="submit">Register</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have registration?</p>
            <Link to={"/login"}> Login</Link>
        </div>
    );
}

export default RegisterPage;
