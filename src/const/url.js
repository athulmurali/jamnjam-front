export const  BASE_URL = "https://jamnjam-backend.herokuapp.com"


 const usernameAvailability_URL = '/user/userRole/isUserNameAvailable/username'

 const emailAvailability_URL = '/user/userRole/isEmailAvailable/emailId'


 export const USERNAME_AVAILABILITY_URL =(userRole, username)=>
     BASE_URL + usernameAvailability_URL
         .replace('userRole', userRole)
         .replace('username',username)


export const EMAIL_AVAILABILITY_URL =(userRole, email)=>
    BASE_URL + emailAvailability_URL
        .replace('userRole', userRole)
        .replace('emailId',email)


