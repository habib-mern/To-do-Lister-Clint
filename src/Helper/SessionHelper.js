const setAuthToken = (token)=>{
    localStorage.setItem("authToken", token)
}
const getAuthToken = ()=>{
    return localStorage.getItem("authToken");
}
const setEmail = (email)=>{
    localStorage.setItem('email', email)
}
const getEmail = ()=>{
    return localStorage.getItem('email')
}

const setOtp = (otp)=>{
   return localStorage.setItem('otp', otp)
}
const getOtp = ()=>{
    return localStorage.getItem('otp')
}

export{
    setAuthToken,
    getAuthToken,
    setEmail,
    getEmail,
    setOtp,
    getOtp
}