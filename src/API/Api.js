import axios from "axios";
import { toast } from "react-toastify";
import { getAuthToken, logout, setAuthToken, setEmail, setOtp, setUserDetails } from "../Helper/SessionHelper";




const baseUrl = 'https://backend-structer.onrender.com/api/v1'

const token = {headers:{token:getAuthToken}}
// Registration api call Start

export function RegistrationRequest(firstName, lastName, email, password, profilePicture){
    let url = `${baseUrl}/registraion`

    let body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        profilePicture: profilePicture
    }
    return axios.post(url, body)
    .then(response =>{
        if(response.status === 200){
            if(response.data.status ==="fail"){
                if(response.data.data.email === 1){
                    
                    toast.error("Email already exist")
                    return false
                }
            }
            else{

                toast.success("Ragistration Successfull")
                return true
            }
        }
    })
    .catch(error =>{
        toast.error("Something went wrong")
        return false
    })
}
// Registration api call end

//Login Api call Start

export function LoginRequest(email, password){
    let url = `${baseUrl}/login`
    let postBody = {
        email : email,
        password : password
    }
    return axios.post(url, postBody)
    .then((response)=>{
        if(response.status===200){
            if(response.data.status==="fail"){
                if(response.data.data==="User not found"){
                    return {error:"User not found"}
                }
                else if(response.data.data==="Invalide Password"){
                    return {error:"Wrong Password"}
                }
                else{
                    // return{error:"Somthing went wrong"}
                    return false
                }
            }
            else{
                setAuthToken(response.data.token)
                setUserDetails(response.data.data)
                // toast.success("Login Successful")
                return true
            }
        }
        else{

            // toast.error("Somthing went erong")
            return false
        }
    })
    .catch((error)=>{
        // toast.error("Somthing went erong")
        return false
    })
}
//Login Api call End

//Email verify Start

export function EmailVerifyRequest(email){
    let url = `${baseUrl}/email-verify/${email}`
    return axios.post(url)
    .then((response)=>{
        if(response.status===200){
            if(response.data.status==='fail'){
                toast.error('User not found')
                return false
            }
            else{
                toast.success('OTP sent successfully')
                setEmail(email)
                return true
            }
        }
        else{
            toast.error('Somthing went wrong')
        }
    })
}

//Email verify End

//OTP verify Start

export function OTPVerifyRequest(email, otp) {
  let url = `${baseUrl}/otp-verify/${email}/${otp}`;
  return axios.get(url)
    .then((response) => {
        if(response.status===200){

            if(response.data.status==="fail"){
                toast.error('Wrong OTP')
                return false
            }
            else{
                setOtp(otp)
                toast.success('OTP verify successfull')
                return true
            }
        }
        
        else{
            toast.error('Somthing went wrong')
            return false
        }
    })
    .catch((error) => {
      console.error('Error verifying OTP:', error);
      return false;
    });
}


//OTP verify End


//Update password Start

export function ResetPasswordRequest(email, otp, password){
    let url = `${baseUrl}/reset-password`;
    let postBody = {
        email: email,
        otp: otp,
        password: password
    }
    return axios.post(url, postBody)
    .then((response)=>{
        if(response.status===200){
            return true
        }
    })
    .catch((error)=>{
        toast.error('Somthing went wrong')
    })
}

//Update password End


//Profile update start 
// export function UpdateProfile() {
//     let url = `${baseUrl}/profile-info`;
//     return axios.get(url, token)
//     .then((response)=>{
//         if(response.status===200){
//             console.log(response.data.data)
//             // store.dispatch(setProfile(response.data.data))
//             return true
//         }
//         else{
//             toast.error('Somthing went wrong')
//         }
//     })
//     .catch((error)=>{
//         if(error.response && error.response.status===401){

//             toast.error('somthing went wrong')
//         logout()
//         }
//     else{
//         toast.error('Somthing went wrong')
//     }
//     })
// }
//Profile update end 

//Update profile api Start
export function ProfileUpdateApi( firstName, lastName, profilePicture) {
    
    let url = `${baseUrl}/user-profile-update`;
    
    let postBody = {
        firstName: firstName,
        lastName: lastName,
        profilePicture: profilePicture
    };
    let userDetails = {
        firstName: firstName,
        lastName: lastName,
        profilePicture: profilePicture
    };

    return axios.post(url, postBody, token)
        .then((response) => {
            if (response.status === 200) {
                setUserDetails(userDetails);
                return true;
            } else {
                toast.error('Something went wrong');
                return false;
            }
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                toast.error('Unauthorized');
                logout();
            } else {
                toast.error('Something went wrong');
            }
            return false;
        });
}

//Update profile api End

//Create todo call api Start

export function CreateTodoApi(title, description) {
    let url = `${baseUrl}/create-todo`;

    let postBody = {
        title: title,
        description: description,
        status: 'New'
    }

    return axios.post(url, postBody)
        .then((response) => {
            if (response.status === 200) {
                toast.success('Todo Created successfully');
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                toast.error('Unauthorized');
                 // Call the logout function
            } else {
                toast.error('Something  wrong');
            }
            return false;
        });
}

//Create todo call api End