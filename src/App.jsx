import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import HomePage from '../src/Pages/HomePage'
import NewTodoPage from './Pages/NewTodoPage'
import CreateTodoPage from './Pages/CreateTodoPage'
import CompleteTodoPage from './Pages/CompleteTodoPage'
import ProgressTodoPage from './Pages/ProgressTodoPage'
import CancelledTodoPage from './Pages/CancelledTodoPage'
import ForgotPassword from './Components/ForgotPassword'
import LoginPage from './Pages/LoginPage'
import OtpVerifyPage from './Pages/OtpVerifyPage'
import ProfilePage from './Pages/ProfilePage'
import RegistrationPage from './Pages/RegistrationPage'
import Page404 from './Pages/Page404'
import NewPasswordPage from './Pages/NewPasswordPage'
import { getAuthToken } from './Helper/SessionHelper'

function App() {

 if(getAuthToken()){
  return(

  <BrowserRouter>
    <Routes>

      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/profile' element={<ProfilePage/>}></Route>
      <Route path='/create-todo' element={<CreateTodoPage/>}></Route>
      <Route path='/new-todo' element={<NewTodoPage/>}></Route>
      <Route path='/complete-todo' element={<CompleteTodoPage/>}></Route>
      <Route path='/progress-todo' element={<ProgressTodoPage/>}></Route>
      <Route path='/cancelled-todo' element={<CancelledTodoPage/>}></Route>

      <Route path='/registration' element={<Navigate to={'/'}></Navigate>}></Route>
      <Route path='/login' element={<Navigate to={'/'}></Navigate>}></Route>
      <Route path='/forgot-password' element={<Navigate to={'/'}></Navigate>}></Route>
      <Route path='/otp-verify' element={<Navigate to={'/'}></Navigate>}></Route>
      <Route path='/new-password' element={<Navigate to={'/'}></Navigate>}></Route>
      
      <Route path='*' element={<Page404/>}></Route>
    </Routes>
  </BrowserRouter>
  )

 }
 else{
  return(
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Navigate to={'/login'}></Navigate>}></Route>
      <Route path='/registration' element={<RegistrationPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
      <Route path='/otp-verify' element={<OtpVerifyPage/>}></Route>
      <Route path='/new-password' element={<NewPasswordPage/>}></Route>
      
      <Route path='*' element={<Page404/>}></Route>
    </Routes>
  </BrowserRouter>
  )
  
 }
 

}

export default App

// https://backend-structer.onrender.com