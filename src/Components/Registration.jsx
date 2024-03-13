import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: 'First Name is required',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
    }

    // Last Name validation
    if (lastName.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: 'Last Name is required',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
    }

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
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the registration logic here
      console.log('Registration successful', firstName, lastName, email, password);
    } else {
      console.log('Form validation failed. Please check errors.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='form' onSubmit={handleSubmit}>
     <h1 className="text-center font-bold mb-5 text-3xl text-white">Welcome To  <span className='text-primary'>TaskQuest</span> Please <span className="text-center font-bold mb-5 text-3xl text-third">Register</span></h1>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          <p style={{ color: 'red' }}>{errors.firstName}</p>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
          <p style={{ color: 'red' }}>{errors.lastName}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <p style={{ color: 'red' }}>{errors.email}</p>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className='relative'
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          <span className='' onClick={handleTogglePassword} style={{ cursor: 'pointer' }}>
            {showPassword ? <AiOutlineEyeInvisible className='absolute left-[68%] top-[77%] text-[20px]' /> : <AiOutlineEye className='absolute left-[68%] top-[77%] text-[20px]' />}
          </span>
          <p style={{ color: 'red' }}>{errors.password}</p>
        </div>
        <button className='btn_v1' type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
