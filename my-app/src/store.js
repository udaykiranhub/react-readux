
//npm install redux creation purpose

//npm install react-redux using purpose


import {createStore} from "redux";

const initial={
    balance:0,
    fullName:"",
    mobile:null
}

function AccountReducer(state=initial,action){
switch(action.type){
    case "deposit":
        return  {...state,balance:state.balance+ +action.payload}
        break;
    case "withdraw":
        return {...state,balance:state.balance-  -action.payload};
        break;
    case "mobile":
        return {...state,mobile:action.payload};
        break;
    case "fullName":
        return {...state,fullName:action.payload};
        break;
    default:
        return {...state};

}

}

const store=createStore(AccountReducer);
//console.log("store:",store.getState());before setting the values to the Reducer function 
//store.dispatch(({type:"deposit",payload:1000}));//after setting the values
export default store;
