import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../src/Redux/store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer position="top-center"></ToastContainer>
    <App />

    </Provider>
  </React.StrictMode>,
)
