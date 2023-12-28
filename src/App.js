import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");

  const [allData,setAllData]=useState([]);

  const [getUsername,setGetUsername]=useState("");

  const submitData=()=>{
    const data={
      Username:username,
      Password:password,
      Email:email
    }

 

    axios.post("http://localhost:8000/v1/postData",data)
    .then((res)=>{
      console.log(res);
      setUsername("");
      setPassword("");
      setEmail("");
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const displayData=()=>{
    axios.get(`http://localhost:8000/v1/getData/${getUsername}`)
    .then((res)=>{
      console.log(res);
      setAllData(res.data);
      setGetUsername("");
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return (
    <div className="App">
      <div>
        username 
        <input type="text"  value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div>
        password
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </div>
        <div>
        email
        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>  
        <div>
        <button onClick={submitData}>Submit</button>
        </div>

        <div>
          <h1>Get Data</h1>
           <input type="text" value={getUsername} onChange={(e)=>setGetUsername(e.target.value)} />
          <button onClick={displayData}>Get Data</button>
        </div>

        <div>
          {/* {allData && allData.map((val)=>{
            return(
              <div>
                <h1>{val.username}</h1>
                <h1>{val.password}</h1>
                <h1>{val.email}</h1>
              </div>
            )
          })} */}
          </div>
      

    </div>
  );
}

export default App;
