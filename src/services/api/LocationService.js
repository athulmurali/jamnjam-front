import * as axios from 'axios'
export default class LocationService {
    // getCountryNameByCoOrdinates=()=>axios.get();
    getCountryNameByCoOrdinates (latitude, longitude) {
        return new Promise((res, rej) =>{

            res({country: 'United States'})


        } )};


}


