import {useState} from 'react';
import {signupFetch, testFetch} from "../../utils/fetch";
import "./Signup.css";

const Signup = (signupFetch,testFetch) => {
      const [username, setUsername] = useState ("");
      const [password, setPassword] = useState("");
      const [email, setEmail]= useState("");

     const changeHandler = (e, setter, state) => {
     setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello from handlesubmit");
    try {
       const data = await signupFetch(username, email, password);
       
    } catch (error) {
      
    }
 };

  return (
    <div className='signup-wrapper'>
     <div className='signup-inner-container'>
      <h3 className='signup-title'>Signup</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
      <input 
          className='signup-input'
          placeholder= "Username"
          onChange={(event)=> changeHandler(event ,setUsername, username)} 
            />
      <input 
          className='signup-input' 
          placeholder= "Email"
          onChange={(event)=> changeHandler(event ,setEmail, email)} 
          />
      <input 
           className='signup-input' 
           placeholder= "Password"
           onChange={(event)=> changeHandler(event ,setPassword, password)} 
          />
      <button type="submit">Sign Up</button>
          </form>
       </div>
    </div>
  );
};

export default Signup;