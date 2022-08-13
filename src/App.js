

import React,{useStates, useEffect} from "react";
import Navbar from "./MemeGenerator/Navbar";
import './MemeGenerator/memeGenerator.css';
import Body from "./MemeGenerator/Body";
import Api from "./PracticeComponents/api";
import WindowTracer from "./PracticeComponents/WindowTracer";



export default function App(){

  return(
    <div className="App" >
        
      <Navbar />
      <Body /> 
  
      
  
     </div> 
  
  
  
  
    );


 
 
 
}
