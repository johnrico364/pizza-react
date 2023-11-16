import React, { useState } from 'react';
import './LoginForm.css';



const LoginForm = () => {
  

  const [mobilenumber, setMobilenumber] = useState({mobilenumber: ""});
  const [password, setPassword] = useState('');
  

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log('mobilenumber:', mobilenumber);
    console.log('Password:', password);
    
    setMobilenumber('');
    setPassword('');
  };

 

  return (
    <body>
      
    
    <div className="container">
      <div>
        <h2>Login your account</h2>
        <form onSubmit={handleFormSubmit}>

        <label htmlFor="mobilenumber">Mobile Number:</label>
        <input
          type="mobilenumber"
          id="mobile-number"
          value={mobilenumber}
          onChange={(e) => setMobilenumber(e.target.value)}
          required
        />


        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p className="rememberme">
            <input type="checkbox" className="check-box" />
            <span className="span-text">
                Remember me
            </span>
        </p>
        <button type="submit">Log in</button>
          

      </form>
      </div>
    </div>
    </body>
  );
};


export default LoginForm;
