import { useState} from "react";
import LogOrSign from './components/logOrSign/LogOrSign';

function App() {
  const [setLoggedIn] = useState(false);

  return (  
    <div>
      <LogOrSign setLoggedIn={setLoggedIn} />
    </div>
    )
    
  }

export default App;
