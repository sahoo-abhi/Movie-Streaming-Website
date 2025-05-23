import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key: "dbba0ee9bde0c97935ce2cc15f698144",
    },
})