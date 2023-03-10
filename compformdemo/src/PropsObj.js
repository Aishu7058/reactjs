import { useState } from "react";

function Display(props)
{
    const tbl = props.tb
    return(
        <div>
        <table border={1} align="center">
                <tr>
                    <th>Name</th>
                    <th>Roll</th>
                </tr>
                        {
                            tbl.map((obj)=>{
                                    return(
                                        <tr>
                                            <td>{obj.name}</td>
                                            <td>{obj.roll}</td>
                                        </tr>
                                    )
                            })
                        }
                    
        </table>
        </div>
    )
}

function Search(props){
    const sr = props.s
    const stb = props.srtb
    const [sroll,setSroll] = useState('')
    const [sname,setSname] =useState('')
    const [res,setRes] = useState([{}])
    if(sr==1){
        return(
            <div>
                <input type="text" placeholder="Enter roll no" value={sroll} onChange={(e)=>setSroll(e.target.value)}/>
                {stb.filter(n=>n.roll==sroll).map(fp=>(<p>{fp.name}      {fp.roll}</p>))}
            </div>
    )}
    if(sr==2){
        return(
            <div>
                <input type="text" placeholder="Enter name" value={sname} onChange={(e)=>setSname(e.target.value)}/>
                {stb.filter(n=>n.name==sname).map(fp=>(<p>{fp.name}      {fp.roll}</p>))} 
            </div>
    )}
}

function ProbObj(props){
    const oo = props.o
    const [search,setSearch] = useState('')
    //    alert()

    //dynamic array of obj
    const [s,setStud] = useState([{}])
    const [name,setName]=useState('')
    const [roll,setRoll]=useState('')
    
    const LoginRes=()=>{
        var data={
            nm:{name},
            rno:{roll}
        }
        s.push({name,roll})
        setStud(s)
        setName('')
        setRoll('')

    }

    return(
        <div>
            {/* <h3>Static Array Of Object</h3>
            {
                oo.map((obj)=><h5 style={{color:"grey"}}>{obj.name} {obj.roll}</h5>)
            } */}
            {/* {oo.filter(n=>n.name=="AY").map(fp=>(<li>{fp.name}</li>))} */}
           
            <br></br>
            <h3>Dynamic Array Of Object</h3>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter Roll No" value={roll} onChange={(e)=>setRoll(e.target.value)} style={{marginLeft:"25px"}}/>
            <button onClick={LoginRes} style={{marginLeft:"25px"}}>Add Record</button> <br></br><br></br>
            <Display tb={s}/>  
              
            
            <p>1- Roll 2-Name</p>
            <input type="text" placeholder="Enter your choice" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <Search s={search} srtb={s}/>
           
        </div>
    )
}
export default ProbObj;