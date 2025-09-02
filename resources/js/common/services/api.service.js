import axios from 'axios';
export function handleError(e) {
    let code = parseInt(e.response && e.response.status);
    if (code === 401 || code === 403) {
        console.log(e);
        logout();
    }
}

const funcApi = {
    async fetchData(url) {

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
            handleError(error);
            return null;
        }
    },
    async post(url, data) {
        try {
            const response = await axios.post(url, data);
            return response;
        } catch (error) {
            console.log(error);
            handleError(error);
            throw error;
        }
    },
    async put(url, data) {
        try {
            const response = await axios.put(url, data);
            return response;
        } catch (error) {
            console.log(error);
            handleError(error);
            throw error;
        }
    },
};

export { funcApi };
