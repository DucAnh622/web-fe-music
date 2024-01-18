import axios from './setup/axios';


const getSong = () => {
    return axios.get('/song/top');
}

const getArtist = () => {
    return axios.get('/artist/top');
}

const ex = {getSong, getArtist}

export default ex;