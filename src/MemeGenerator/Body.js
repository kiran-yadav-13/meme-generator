import React, { useState , useEffect} from "react";
// import MemeData from "./MemeData";

export default function Body(){
  const [meme, setMeme]=React.useState({
    TopText:'',
    BottomText:'',
    randomImage:'https://i.imgflip.com/30b1gx.jpg'
  });
  /*
useEffect takes a function as its parameter. If that function returns something , its need to be a cleanup function
Otherwise, it should return nothing . if we make it async function , it automatically returns a promise instead of a function or nothing .
Therefore, if you want to use async operations inside of useEffect, you need to define the function seperately inside of callback function , as seen below;

  */

  const [allMemes ,setAllMemes]=React.useState([]);

  React.useEffect(function(){
    async function getMemes(){
      const res=await  fetch("https://api.imgflip.com/get_memes")
      const data=await res.json()
      setAllMemes(data.data.memes)
    }
    // fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemes(data.data.memes))
    getMemes()
  
  },[])
  

  function changeHandler(event){
    const{name,value}=event.target
    setMeme(prevMeme=>{
     return{
        ...prevMeme,
        [name]:value
     }
    })

}


  function getMemeImage(event){
    // const MemesArray=allMemes;
    const randomNum=Math.floor(Math.random()*allMemes.length)
   const url=allMemes[randomNum].url;
    // console.log(url)
    // console.log("memeImage : ",meme.randomImage)
   
    setMeme(prevMeme=>{
        return{
            ...prevMeme,
            randomImage:url,
           
        }
    })


  }
    return(
        <div className="body-container">
            <div className="body">
                <div className="form">

                <input type="text" 
                  placeholder="Upper Text"
                  id="firstInput" 
                  name="TopText"
                  value={meme.TopText} 
                  onChange={changeHandler}  />

                <input type="text"  
                 placeholder="Bottom Text"
                 id="secondInput" 
                 name="BottomText" 
                 value={meme.BottomText} 
                 onChange={changeHandler} />

                <button className='formButton' 
                onClick={getMemeImage}>
                Get a new meme image &#128307;
                </button>

                  <div className='image-holder' > 
                     <img src={meme.randomImage}  className='memeImage' />
                     <h2 className="meme--text top" style={{top:'5px'}}> {meme.TopText}</h2>
                     <h2 className="meme--text bottom" style={{bottom:'5px'}}>{meme.BottomText}</h2>
                  </div> 
                

                 </div>

                </div>

            
            </div>
                  
 
       
    )
}


// let url;
//   function getMemeImage(){
//     const MemesArray=MemeData.data.memes;
//     const randomNum=Math.floor(Math.random()*MemesArray.length)
//     url=MemesArray[randomNum].url;
//     console.log(url)
//     console.log("memeImage : ",meme.randomImage)
//     setUrl(url)
//   }