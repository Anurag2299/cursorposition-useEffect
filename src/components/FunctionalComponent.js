import React,{useState,useEffect} from 'react';

function FunctionalComponent( ) {

    const [x , setX]=useState(0)
    const [y , setY]=useState(0)

 const Position = e =>{
     console.log('mouse event')
     setX(e.clientX)
     setY(e.clientY)
 }
    useEffect( () =>{
      console.log('use effect called')
      window.addEventListener('mousemove',Position)
    
     return() =>{
         console.log('component unmoount')
         window.removeEventListener('mousemove',Position)
     }
    
    },[])
  
    return (
        <div>
           X-axis -{x}  Y-axis -{y}
        </div>
    );
}

export default FunctionalComponent;