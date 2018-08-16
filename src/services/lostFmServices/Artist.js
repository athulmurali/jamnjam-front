
import axios from 'axios';



let _singleton;
const API_KEY="ce874f4ce1ad972d051f2a6c9fc82b4f";
const ARTIST_INFO_URL="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key="+API_KEY+
    "&format=json&mbid=MBID";
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


    getTopArtistsInLocation=(country)=>{
        const url ="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country="+country+"&api_key="+API_KEY+"&format=json";
        return fetch(url).then((response)=>{return response.json()})
    };


    getArtistInfo=(mbid)=>{
        return axios.get(ARTIST_INFO_URL.replace("MBID",mbid))
    }



}
