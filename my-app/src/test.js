
/* import Provider from "react-redux";
and render App component with Provider 
like <Provider> <App store={store} />  </Provider>
*/
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { useState } from "react";
import "react-bootstrap";
function Test(){
    const dispatch=useDispatch();

const [amount,setAmount]=useState(null);

let data=useSelector((state)=>{

return state;

}

)
console.log(amount);
return(
    <>
    <h1>I am test ...</h1>
   Enter Balace:<input type="numer" onChange={(e)=>setAmount(e.target.value)} className="form-control"/>
    <h1>Balance is:{data.balance}</h1>
    <button className="btn btn-danger" onClick={()=>{
        dispatch({type:"deposit",payload:amount}) 
         setAmount(" ");
        }}>Deposit</button>
        <br/>
        <br/>
 <button className="btn btn-danger" onClick={()=>{
        dispatch({type:"withdraw",payload:amount}) 
         setAmount(" ");
        }}>withdraw</button>
    </>
)   


}
export default Test;