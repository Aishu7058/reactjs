function AddList(props){
     const nm = props.n;
    return(
           <div>
                {
                    nm.map((obj) =>{
                        return <p>{obj}</p>
                    })
                }
            </div>
    )
}
export default AddList;