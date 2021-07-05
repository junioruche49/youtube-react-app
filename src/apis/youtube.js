import axios from 'axios';
const KEY = 'AIzaSyBnrf9aFKiCGnr2jXIBbuNeNfLFHrk14mI'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})