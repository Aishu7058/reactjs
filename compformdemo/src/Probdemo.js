import { useState } from "react";
import AddList from "./AddList";
function Probdemo(props){
    //to display colors
    const d=props.demo
    const c = props.d

    //add to array
    const [name,setName] = useState('')
    const [names,setNames] = useState([])

    const addData=()=>{
        names.push(name)
        setNames(names)
    }
    return(
        // to display colors
        <div>
            {
                c.map((obj) =>{
                    return <p>{obj}</p>
                })
            }

        {/* dynamic adding             */}
        <h2>Add name to list</h2>
        <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={addData} style={{marginLeft: "30px"}}>Add Name</button>
        <h2>Displaying list</h2>
        {/* <ul>{names.length > 0 && names.map((item) => <li>{item} </li>)}</ul> */}
        {/* <p> {names.map((obj)=><h5>{obj}</h5>)}</p> */}

        {/* display using External Comp */}
        <AddList n={names}/>
        </div>
    )
}
export default Probdemo;