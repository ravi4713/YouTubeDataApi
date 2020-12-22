import axios from 'axios';
const KEY = 'AIzaSyDuCvYxVl31BoKcnF8yeyejH18lGlT6n6c';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});

