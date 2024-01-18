import React from 'react'
import "./LogOrSign.css";
import Signup from '../signup/Signup';
import Login from '../login/Login';

const LogOrSign = ({ setLoggedIn, loggedIn}) => {
  return (
   <div className='logorsign-wrapper'>
      <div className='logorsign-inner-container'>
        <div className='logorsign-box'>
          <Signup />
        </div>
        <div className='logorsign-box'>
          <Login setLoggedIn= {setLoggedIn} loggedIn ={loggedIn} />
        </div>
      </div>
    </div>
  );
};

export default LogOrSign;


