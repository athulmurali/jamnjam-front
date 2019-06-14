export const  BASE_URL = "http://jamnjam-be.us-east-2.elasticbeanstalk.com";
// export const  BASE_URL = "https://jamnjam-backend.herokuapp.com";
// export const  BASE_URL = "http://localhost:3000"


 const usernameAvailability_URL = '/user/userRole/isUserNameAvailable/username';

 const emailAvailability_URL = '/user/userRole/isEmailAvailable/emailId';

export const CREATE_USER_URL = BASE_URL + '/user/';

export const GET_USER_BY_ROLE_ID_URL =(role,id)=> {
 return  BASE_URL + '/user/' + role+'/profile/'+ id.toString()};


export const DEL_USER_BY_ROLE_ID_URL =(role,id)=> {
    return  BASE_URL + '/user/'+ role+'/'+ id.toString()};


export const USERNAME_AVAILABILITY_URL =(userRole, username)=>
     BASE_URL + usernameAvailability_URL
         .replace('userRole', userRole)
         .replace('username',username);


export const EMAIL_AVAILABILITY_URL =(userRole, email)=>
    BASE_URL + emailAvailability_URL
        .replace('userRole', userRole)
        .replace('emailId',email);


export const LOGIN_URL   =BASE_URL + '/auth/login';
export const GOOGLE_LOGIN_URL =  BASE_URL + "/auth/googleLogin";


export const USER_PROFILE_URL =BASE_URL + '/user/profile';
export  const TOKEN_NAME = 'Authorization';

export const UPDATE_USER_URL = BASE_URL +'/update/user';



export const ADD_DEL_MEMBER_URL = BASE_URL + '/artist/band';
export const ARTIST_LOOKOUT_URL = BASE_URL +'/artistLookOut';
export const NO_IMG_PICTURE = "https://image.ibb.co/go2kO9/assassins_avatar_by_multispeedking_d6380y4.png";
export const MAGIC_DP = "https://image.ibb.co/jHnGwU/magic.jpg";
export const SUCCESS_IMG ="https://image.ibb.co/fZ2LSe/success.png";
export const CALENDAR_BOOKING =  "https://image.ibb.co/jwoPLz/calendar_booking.png";


export const REG_BAND_COVER     = "https://preview.ibb.co/mxyWFz/band.jpg";
export const REG_ADMIN_COVER        = "https://image.ibb.co/im1h5z/admin_cover.png";
export const REG_ARTIST_COVER       = "https://image.ibb.co/dzvEJK/artist_cover.png";


// appointments  urls
export const  GET_MY_APPOINTMENTS =  BASE_URL + "/appointmentsApp/appointments";
export const  CREATE_APPOINTMENT  = BASE_URL + "/appointmentsApp/appointments";

export const DELETE_APPOINTMENT = BASE_URL + "/appointmentsApp/appointments";
export const ERROR_IMG = "https://preview.ibb.co/d48GHe/error.jpg";
// export const LOADING_GIF="https://preview.ibb.co/jUYfAz/loading_GIf.gif"
export const LOADING_GIF ="https://i.stack.imgur.com/ATB3o.gif";
export const LOOK_OUTS_FROM_MY_BANDS="/artist/:artistId/lookOutsFromByBands/";

