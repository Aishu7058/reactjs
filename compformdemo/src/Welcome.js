import { useState } from "react"


function Welcome()
{
    const [name,setName] = useState('');

    function Check()
    {
        const re = /^[A-Za-z]+$/;
        if(name.match(re))
        {
            return(
            <h1>Welcome {name}</h1>
            )
        }
    }

    return(
        <div>
            Enter Name: <input type="text" className="inp" value={name} onChange={(e)=>setName(e.target.value)} /><br></br>
            <Check/>
        </div>
    )
}
export default Welcome;