import React, {useState} from "react";

const Validations = (props) =>{
    const {name,age,children} = props;
    const [uName,setName] = useState(name);
    const [uAge,setAge] = useState(age);
    return(
        <div>
            <h1>name {uName}</h1>
            {uName.length < 3 && uName.length > 0 ?<p>needs to be longer</p>: null}
            <h1>age {uAge}</h1>
            <button onClick={()=>{setAge(uAge + 1)}} >click</button>
            <h1>{children}</h1>
            <input onChange={(e)=>setName(e.target.value)} type="text" />
        </div>
    )
}
export default Validations;