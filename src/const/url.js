export const  BASE_URL = "https://jamnjam-backend.herokuapp.com"
// export const  BASE_URL = "http://localhost:3000"


 const usernameAvailability_URL = '/user/userRole/isUserNameAvailable/username'

 const emailAvailability_URL = '/user/userRole/isEmailAvailable/emailId'

export const CREATE_USER_URL = BASE_URL + '/user/'

export const GET_USER_BY_ROLE_ID_URL =(role,id)=> {
 return  BASE_URL + '/user/' + role+'/profile/'+ id.toString()}




export const DEL_USER_BY_ROLE_ID_URL =(role,id)=> {
    return  BASE_URL + '/user/'+ role+'/'+ id.toString()}


export const USERNAME_AVAILABILITY_URL =(userRole, username)=>
     BASE_URL + usernameAvailability_URL
         .replace('userRole', userRole)
         .replace('username',username)


export const EMAIL_AVAILABILITY_URL =(userRole, email)=>
    BASE_URL + emailAvailability_URL
        .replace('userRole', userRole)
        .replace('emailId',email)


export const LOGIN_URL   =BASE_URL + '/auth/login'

export const USER_PROFILE_URL =BASE_URL + '/user/profile'

export  const TOKEN_NAME = 'Authorization'

export const UPDATE_USER_URL = BASE_URL +'/update/user'



export const ADD_DEL_MEMBER_URL = BASE_URL + '/artist/band'
