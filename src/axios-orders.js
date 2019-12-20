import axios from 'axios';


const instance  = axios.create({
    baseURL : 'https://react-burgerbuilder-proj-f9ebe.firebaseio.com/'
});

export default instance;