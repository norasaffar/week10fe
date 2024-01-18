import { useState} from "react";
import LogOrSign from './components/logOrSign/LogOrSign';
import Login from "./components/login/Login";

function App() {
  const [loggedIn , setLoggedIn ] = useState(false);

  return (  
    <div>
      <LogOrSign setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
    </div>
    )
  
  }

export default App;
