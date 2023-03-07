import { useState } from "react";

function ProbObj(props){
    const oo = props.o
    // const [name,setName]=useState('')
    // const [roll,setRoll]=useState('')
    return(
        <div>
            <p>{oo.nm}</p>
            {/* <input type="text" placeholder="Enter Roll No" value={roll} onChange={(e)=>setRoll(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <button onClick={()=>LoginRes()}>Login</button> */}
            
        </div>
    )
}
export default ProbObj;