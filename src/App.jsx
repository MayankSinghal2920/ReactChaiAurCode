import { useState } from "react";
import Card from "./components/Card";
import BgChanger from "./components/BgChanger";


function App() {

let [counter, setCounter] = useState(0);

const addCount = () =>{
  if(counter<20){
  setCounter(prev => prev+1);
  
  }

}

const deleteCount = ()=>{
  if(counter>0){
  setCounter(prev => prev-1);
  }

}

  return (
    <>
     {/* <h3>Counter : {counter}</h3>
     <button onClick={addCount} >Add Count</button>
     <button onClick={deleteCount}>Delete Count</button>
     <hr></hr>

    <h1 className="bg-amber-200 text-blue-600 border-white p-8">Tailwind Test</h1>
    <hr className="mb-4"></hr>
    <Card username = "Mayank" price="1.24"/>
    <Card username = "Singhal" price="124"/>
    <Card username = "Mayandddk" price="1.24"/> */}

    <BgChanger/>


    
    </>
  )
}

export default App
