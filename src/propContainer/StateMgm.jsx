import React, { useEffect } from 'react'
import {useState,useEffect} from 'react'

const StateMgm = () => {

    const[city, setCity] = useState("kerala")
    useEffect(() => {
      if(city==="hyderabad"){
        setCity("Bangolore")
      }
      else{
        setCity("Delhi")
      }
    },[city])
   
  return (
    <div><h1>{city}</h1></div>
  )
}

export default StateMgm