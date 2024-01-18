import React from 'react'
import "./LogOrSign.css";
import Signup from '../signup/Signup';

const LogOrSign = ({ setLoggedIn }) => {
  return (
   <div className='logorsign-wrapper'>
      <div className='logorsign-inner-container'>
        <div className='logorsign-box'>
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default LogOrSign;




