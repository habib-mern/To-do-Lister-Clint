import { useState } from "react";
import VerificationInput from "react-verification-input";
import { OTPVerifyRequest } from "../API/Api";
import { getEmail } from "../Helper/SessionHelper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OtpVerify = () => {
    const [otp, setOTP] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Here you can implement your logic for OTP verification
      if (otp.length === 6) {
        OTPVerifyRequest(getEmail(),otp)
        .then((result)=>{
          if(result===true){
            navigate('/new-password')
          }
        })
        .catch((error)=>{
          toast.error('Somthing went wrong')
        })
        
      }
       else {
        setMessage("Enter 6 digit OTP");
      }
    };
    
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              OTP Verification
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="">
              <div className='block text-center mb-2 font-semibold'>Enter the 6-digit OTP sent to your email</div>
              <div>
              <VerificationInput onChange={(e)=>setOTP(e)}
               validChars="0-9" inputProps={{ inputMode: "numeric" }}
                                  classNames={{
                                  container: "ml-[75px]",
                                  character: "rounded-lg",
                                  characterInactive: "character--inactive",
                                  characterSelected: "border-primary",
                                  characterFilled: "border-green-500",}} 
              
              />
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="group active:bg-green-500 relative w-[67%] mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Verify OTP
              </button>
            </div>
          </form>
          {message && (
            <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
          )}
        </div>
      </div>
    );
};

export default OtpVerify;