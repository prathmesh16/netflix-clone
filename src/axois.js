import axois from 'axios';

const instance = axois.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default instance;