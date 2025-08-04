
import './App.css'
import { useState, useEffect } from 'react';
import { LoginForm } from './components/LoginForm.jsx';

function App() {
      const [showPassword, setShowPassword ] = useState(false);
      const [time, setTime]=useState('14:12:00');
      useEffect(()=>{
        setInterval(()=>{
          
         
        }, 1000)
      })
      return (
        <>
          <h1>Hello, welcome to my website</h1>
          <LoginForm showPassword={showPassword} setShowPassword={setShowPassword}/>
        </>
      );
    }

export default App
