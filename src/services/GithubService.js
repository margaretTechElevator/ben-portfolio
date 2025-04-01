import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.github.com/users/BenDulavitch/repos'
});

export default {
    getRepos() {
        return http.get();
    }
}