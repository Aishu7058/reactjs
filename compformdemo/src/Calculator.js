import App from "./App.css";
import { useState } from "react";
function Calculator(){

    const [no1,setNo1] = useState('')
    const [no2,setNo2] = useState('')
    const [op,setOp] = useState('')
    
    function DoCal(){
        var n1=parseInt(no1)
        var n2=parseInt(no2)

        if(op === "+"){
            alert("Addition: "+(n1+n2))
        }
        else if(op==="-"){
            alert("Substraction: "+(n1-n2))
        }
        else if(op==="*"){
            alert("Multiplication: "+(n1*n2))
        }
        else if(op==="/"){
            alert("Division: "+(n1/n2))
        }
        else if(op==="%"){
            alert("Modulus: "+(n1%n2))
        }
    }

    return(
        <div>
            <center>
                <h3>Calculator</h3>
                <br></br>
                Enter Number 1: <input type="text" className="inp" value={no1} onChange={(e)=>setNo1(e.target.value)} /><br></br>
                Enter Number 2: <input type="text" className="inp" value={no2} onChange={(e)=>setNo2(e.target.value)} /><br></br>
                Operation: <input type="text" value={op} onChange={(e)=>setOp(e.target.value)}/><br></br>
                <button onClick={()=>DoCal()}>Calculate</button>
            </center>
        </div>
    )
}
export default Calculator;