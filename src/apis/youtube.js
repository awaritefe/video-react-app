import axios from 'axios';

const KEY = 'AIzaSyBTKHWH2odv6FLMuc_Ma-voAQ3Msjy82jI';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY
    }
});