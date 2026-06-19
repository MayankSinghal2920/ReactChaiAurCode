import React from 'react'
import { useState } from 'react'

function BgChanger() {

const [color , setColor] = useState("yellow")

const hexCode = function(){
    let hexChars = '0123456789abcdef';
    let colorCode = "#"
    for(let i =0; i<6; i++){
        const randomIndex = Math.floor(Math.random()*16);
        colorCode += hexChars[randomIndex];
    }
return colorCode;
}

const changeColor = ()=>{
const newColor = hexCode();
setColor(newColor)
}



  return (
  <div className="flex items-center justify-center min-h-screen" style={{backgroundColor : color}}>
  <button onClick={changeColor} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 hover:scale-105">
    Change Background Color
  </button>
</div>
  )
}

export default BgChanger