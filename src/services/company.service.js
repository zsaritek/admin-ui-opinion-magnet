import axios from "axios";

class CompanyService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
        });

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }
    getCompany = () => {
        return this.api.get("/company");
    };

    regenerateAccessToken = () => {
        return this.api.patch("/company");
    }
}


const companyService = new CompanyService();

export default companyService;
