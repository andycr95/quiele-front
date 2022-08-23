import axios from "axios";
import config from "../../config";

//Base url for the API
const baseUrl = config.baseUrl+'/api/users';

//Login
const login = async (data) => {
    const response = await axios.post(`${baseUrl}/login`, data, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.status) {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    } else {
        throw new Error(response.message);
    }
}

//Logout
const logout = () => {
    localStorage.removeItem("user");
}


const authService = {
    login,
    logout
}

export default authService;
