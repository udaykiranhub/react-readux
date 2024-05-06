import {useContext} from "react";
import context from "./context.js";


function Use(){
    const data=useContext(context);
 //console.log("data is:",data);
    return (
        <>
        
        <h1>use me...</h1>
        <h1> My name is:{data.name}</h1>
        </>
    )
}

export default Use;