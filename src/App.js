import './App.css';
import axios from "axios";
import Card from "./Card"
import { useState, useEffect} from "react"

function App() {
  const [info, setInfo] = useState([])
  const myUrl = "https://randomuser.me/api/"

  const fetchCard = () => {
     axios.get(myUrl)
    .then((res)=>setInfo(res.data.results))
    .catch((err)=>console.log(err)) 
    
    }
  
console.log(info);
  useEffect(() => {
      fetchCard();
  }, [])

  return (
    <div className="container">
      <Card info = {info}/>
      <button onClick={()=>fetchCard()}>Random User</button>
      
    </div>
  );
}

export default App;
