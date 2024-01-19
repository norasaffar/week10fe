import { useState, useEffect} from "react";
import LogOrSign from './components/logOrSign/LogOrSign';
import PicContainer from "./components/picContainer/PicContainer";

console.log(process.env.REACT_APP_URL)
function App() {
  const [loggedIn , setLoggedIn ] = useState(false);
  const [photos , setPhotos] = useState([]);
  

  const fetchData = async () =>{
    console.log("hello")
    const response = await fetch(process.env.REACT_APP_URL)
    const data = await response.json()
    console.log("photos fetch",data)
    const mappedPhotos = data.map((photo, index) => {
      // console.log(photo.user.links.self)
       return  {
         id: photo.id,
         smallpic: photo.urls.small
      }
    })
   setPhotos(mappedPhotos);
   console.log("hello photos state", photos)
  }
  useEffect (() =>{
    fetchData()
  },[])   





  return (  
    <div>
      <LogOrSign setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <PicContainer photos={photos}/>
    </div>
    )
  
  };

export default App;
