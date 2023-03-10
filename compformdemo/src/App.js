import logo from './logo.svg';
import './App.css';
import ExternalComp from './ExternalComp';
import {useState} from 'react';
import Calculator from './Calculator';
import Welcome from './Welcome';
import Probdemo from './Probdemo';
import PropsObj from './PropsObj';

// function InternalComp(){
//   return(
//     <div>
//       <h1 className="internal">Inside Internal Component</h1>
//     </div>
//   )
// }

// const About=()=>{
//   return(
//     <div>
//       <h2 className="about">Inside About</h2>
//     </div>
//   )
// }

function Login(){
 
    const [mail,setMail] = useState('');
    const [pass,setPass] = useState('');

    function LoginRes(){
      alert(mail+" Login Successful");
    }

    return(
      <div className='Login'>
        <input type="text" placeholder="Enter gmail ID" value={mail} onChange={(e)=>setMail(e.target.value)}/><br></br>
        <input type="text" placeholder="Enter password" value={pass} onChange={(e)=>setPass(e.target.value)}/><br></br>
        <button onClick={()=>LoginRes()}>Login</button>
      </div>
    )
}

function App() {
  const colors = ["red", "blue", "green"]
  const stud = {
    rno:10,
    nm:"abc"
  }

  const [studArr,setStudarr] = useState([
    {
      name: "AY",
      roll: 76
    },
    {
      name: "AB",
      roll: 10
    }
  ])
  return (
    <div className="App">
      <header className="App-header">
        {/* Component Demo  3/3/2023
         <InternalComp/>
        <ExternalComp/>
        <About/> */}
        
        {/* <h1>Login Form 3/3/2023</h1>
        <Login/> */}


        {/* Calculator 4/3/2023*/}
        {/* <Calculator/> */}

        {/* Welcome msg accept only string 6/3/2023 */}
        {/* <Welcome/> */}

        {/* Probs demo 7/3/2023
        <h2>List of colors: </h2>
        <Probdemo demo="welcome" d={colors}/> */}

        {/* Array of object 7/3/2023 & 8/3/2023
        <PropsObj o={studArr}/> */}

        {/* Filter (search value) 8/3/2023 & 9/3/2023 */}
        <PropsObj o={studArr}/>
      </header>
    </div>
  );
}

export default App;
