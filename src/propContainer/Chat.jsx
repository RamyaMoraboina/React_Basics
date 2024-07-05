import React from 'react'
import { useState,useEffect } from 'react'

const Resize = () =>{

//assigning object to the screenSize variable
//we can access them like screenSize.width and screenSize.height

  const [ screenSize , setScreenSize] = useState({
    width : window.innerWidth,
    height : window.innerHeight,
  });

  const updateScrrenSize = () =>{
    setScreenSize(
      // object
      //updating value of screenSize 
      {
      width : window.innerWidth,
      height : window.innerHeight,
    });

  };

  useEffect(() => {
    window.addEventListener('resize',updateScrrenSize);
    return () =>{
      window.removeEventListener('resize',updateScrrenSize);
    };
  },[]);

  return (
    <div>
      <h1>screen size example</h1>
      <p>resize the window to see screen size:</p>
      <p style={{color :"red"}} >Width : {screenSize.width}px </p>
      <p style = {{color:"red"}}>Height :{screenSize.height}px </p>
    </div>
  );
  };
export default Resize;