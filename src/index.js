import ReactDOM from 'react-dom';
import React,{useState,useReducer} from 'react';
import './index.css';
import Apple from './images/apple.png';
import Orange from './images/orange.png';
import Banana from './images/banana.png';

//step 01;
const initialState={count:0};
//step 02;
function Welcome(State,action){
  switch(action.category){
    case 'increment':{
      return{count:State.count+1}
    }
    case 'decrement':{
      return{count:State.count-1}
    }
    case 'reset':{
      return{count:0}
    }
    default:
      throw new Error();
  }
}
  function CounterOne(){
    const[state,dispatch]=useReducer(Welcome,initialState)
    return(
      <div>
        <h1>Fruits</h1>
        <div class="fruits">
        <div class="apple">
        <img src={Apple}></img>
        <h1>Apple</h1>
        <p>count:{state.count}</p>
        <button onClick={()=>dispatch({category:'increment'})}>+</button>
        <button onClick={()=>dispatch({category:'decrement'})}>-</button>
        <button onClick={()=>dispatch({category:'reset'})}>Reset</button>
        </div>
        <div class="Orange">
        <img src={Orange}></img>
        <h1>Orange</h1>
        <p>count:{state.count}</p>
        <button onClick={()=>dispatch({category:'increment'})}>+</button>
        <button onClick={()=>dispatch({category:'decrement'})}>-</button>
        <button onClick={()=>dispatch({category:'reset'})}>Reset</button>
        </div>
        <div class="banana">
        <img src={Banana}></img>
        <h1>banana</h1>
        <p>count:{state.count}</p>
        <button onClick={()=>dispatch({category:'increment'})}>+</button>
        <button onClick={()=>dispatch({category:'decrement'})}>-</button>
        <button onClick={()=>dispatch({category:'reset'})}>Reset</button>
        </div>
       


    
        
      </div>
      </div>
    )
  }

export default CounterOne;



ReactDOM.render(<CounterOne/>,document.getElementById("root"));