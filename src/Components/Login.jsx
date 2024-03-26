import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { LoginRequest } from '../API/Api';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    // Password validation
    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters long',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    return valid;
  };

  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }

    validateForm();
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the login logic here
      LoginRequest(email, password)
        .then((result) => {
          if(result===true){
            toast.success('Login Sucessfull')
            window.location.href='/'
            console.log(result.token)
          }
          else{
            if(result.error==='User not found'){
              toast.error('User not found')
            }
            else if(result.error==="Wrong Password"){
              toast.error('Wrong password')
            }
            else{
              toast.error('Somthing went wrong')
            }
          }
        })
        .catch((error) => {
          console.log("Login failed");
        });
    } else {
      console.log('Form validation failed. Please check errors.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className="text-center font-bold mb-5 text-3xl text-white">Welcome To  <span className='text-primary'>TaskQuest</span> Please <span className="text-center font-bold mb-5 text-3xl text-third">Log In</span></h1>
        <div>
          <label htmlFor="email">Email :</label>
          <input className='text-primary'
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <p style={{ color: 'red' }}>{errors.email}</p>
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input className='relative text-primary'
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          <span className='' onClick={handleTogglePassword} style={{ cursor: 'pointer' }}>
            {showPassword ? <AiOutlineEyeInvisible className='absolute left-[67%] top-[53%] text-[20px] text-primary' /> : <AiOutlineEye className='absolute left-[67%] top-[53%] text-[20px] text-primary' />}
          </span>
          <p style={{ color: 'red' }}>{errors.password}</p>
        </div>
        <button  className='btn_v1'>Log In</button>
        <Link to={'/forgot-password'} className='block text-right text-primary hover:underline'>Forgotten password?</Link>
        <p>Don't have an account? Please <Link to={'/registration'} className='font-bold text-third cursor-pointer'>Register</Link>  </p>
      </form>
    </div>
  );
};

export default Login;
