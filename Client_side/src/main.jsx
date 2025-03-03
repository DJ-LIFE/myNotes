import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import axios from 'axios';
//import './index.css'

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
