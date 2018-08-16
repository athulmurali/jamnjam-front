import axios from 'axios';
import {BASE_URL} from "../../const/url";

export class Users{


     getAllUsers =()=>{
         console.log("hi");
         const GET_ALL_USERS = "/users";


         return axios.get(BASE_URL  + GET_ALL_USERS)

     }


}
