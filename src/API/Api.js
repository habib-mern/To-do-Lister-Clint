import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = 'https://backend-structer.onrender.com/api/v1'

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