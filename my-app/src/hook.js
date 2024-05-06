
import Use from  "./use.js";
import context from "./context.js"

import store from "./store.js";


function Hook(){

store.dispatch({type:"deposit",payload:1000});
store.dispatch({type:"fullName",payload:"uday kiran"});
console.log(store.getState());
    const data={
        name:"uday",
        age:20
    }
    return(
<>
<h1>i am hook...</h1>
<context.Provider value={data}>
    <Use/>
</context.Provider>

</>
    )


}

export default Hook;