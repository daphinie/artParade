import axios from 'axios';

const URL = 'http://localhost:5001/arts';

export const fetchArts = () => axios.get(URL);
export const createArt = (newArt) => axios.post(URL, newArt);
