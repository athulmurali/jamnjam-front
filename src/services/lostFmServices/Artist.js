
import axios from 'axios';



let _singleton;
const API_KEY="ce874f4ce1ad972d051f2a6c9fc82b4f";

const BASE_URL ="https://ws.audioscrobbler.com/2.0/"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
})
export default class  Artist{
    constructor(singletonToken) {

        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new Artist(_singleton);
        return this[_singleton]
    }

    getTopArtistsInLocation=(country)=>(axiosInstance.get('/',{
            params: {
                method : 'geo.gettopartists',
                country: country,
                api_key : API_KEY,
                format :'json'

            }
        }));

    getArtistInfo=(mbid)=>{
        return axiosInstance.get('/',
            {
            params:
                {
                method : 'artist.getinfo',
                mbid : mbid,
                api_key : API_KEY,
                format :'json'

            }
        })
    }
}
