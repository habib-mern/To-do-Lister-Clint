import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { RegistrationRequest } from '../API/Api';

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // First Name validation
    if (firstName.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, firstName: 'First Name is required' }));
      valid = false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, firstName: '' }));
    }

    // Last Name validation
    if (lastName.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, lastName: 'Last Name is required' }));
      valid = false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, lastName: '' }));
    }

    // Email validation
    if (!emailRegex.test(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email address' }));
      valid = false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    }

    // Password validation
    if (password.length < 6) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Password must be at least 6 characters long' }));
      valid = false;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, password: '' }));
    }

    return valid;
  };

  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
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
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      let photo = `https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`;
      RegistrationRequest(firstName, lastName, email, password, photo)
        .then(result => {
          if (result === true) {
            navigate('/login');
          } else {
            setErrors({ email: "Email already exists" });
          }
        });
    } else {
      console.log('Form validation failed. Please check errors.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className="text-center font-bold mb-5 text-3xl text-white">Welcome To <span className='text-primary'>TaskQuest</span> Please <span className="text-center font-bold mb-5 text-3xl text-third">Register</span></h1>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input className='text-primary'
            type="text"
            id="firstName"
            value={firstName}
            onChange={e => handleInputChange('firstName', e.target.value)}
          />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input className='text-primary'
            type="text"
            id="lastName"
            value={lastName}
            onChange={e => handleInputChange('lastName', e.target.value)}
          />
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className='text-primary'
            type="email"
            id="email"
            value={email}
            onChange={e => handleInputChange('email', e.target.value)}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className='relative text-primary'
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={e => handleInputChange('password', e.target.value)}
          />
          <span onClick={handleTogglePassword} style={{ cursor: 'pointer' }}>
            {showPassword ? <AiOutlineEyeInvisible className='absolute left-[68%] top-[70%] text-[20px]' /> : <AiOutlineEye className='absolute left-[68%] top-[69%] text-primary text-[20px]' />}
          </span>
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button  className='btn_v1'>Register</button>
        <p>Already have an account? Please <Link to={'/login'} className='font-bold text-third cursor-pointer'>Login</Link> </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
