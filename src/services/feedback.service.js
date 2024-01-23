import axios from "axios";

class FeedbackService {
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

    getFeedbackData = () => {
        return this.api.get("/feedback");
    };
    getAverage = () => {
        return this.api.get("/average");
    }
    getMostPopularWords = () => {
        return this.api.get("/keywords");
    }


}

const feedbackService = new FeedbackService();

export default feedbackService;