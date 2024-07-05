import React from 'react'
import { userData } from '../data'
let sampleArray = ["Apple","Mango",34,true,{UserName : "ramya"}]

let players = [
    {
        name : "praveen",
        age : 20,
        place : "ongole"
        
    },
    {
        name: "ramya",
        age : 22,
        place : "ongole"
    },
    
]


console.log(userData);


// template literals
const name ="Ramya"
console.log(`iam ramya
from ongole`)
console.log(`iam ${name}`)

const SampleArray = () => {
  return (
    <div>
        {/* accessing array elements */}
        {/* <h1> {sampleArray[0]} </h1>
        <h2> {sampleArray[2]} </h2>
        {sampleArray[3]} */}

        {/* array of objects */}

        {userData.map((item) => {
            return(
                
            <div style={{border:"1px solid black"}}>
                <h2>{item.name} </h2>
                <h2> {item.age} </h2>
                <h2>{item.place} </h2>
                 
                {/* accessing nested object values here address is a nested object and street is a key in the addres object */}
            </div>
            )
        })}

        {players[0].name}
    </div>
  )
}

export default SampleArray