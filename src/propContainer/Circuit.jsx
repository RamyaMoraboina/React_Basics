import React ,{useState} from 'react'
 //short circuit evaluation
const Circuit = () => {

    const [game,setGame]=useState(true)
    const [name,setName] = useState(true)

    const Mygame=() =>{
        return(
            <div>
                <h2>i love india</h2>
            </div>
        )
            
    }

    // spread operator

    
    
    const Spread = () =>{
        const one = [1,2,3]
        const two = [4,5,6]
        const three= [7,8,9]

        const total = [...one,...two,...three]

        const obj1 = {a:1,b:2}
        const obj2 = {c:3,d:4}

        const obj ={...obj1,...obj2}

        console.log(obj)
        return(
            <div>
               <h2> {total}</h2>
               {/* <h2>{obj} </h2>  ---it results in error */}
            </div>
        )
    }

  return (
      <div>
        {game && <div>i love india</div>  }
        {name && <Mygame/>}
        <Spread/>
        
      </div>
  )
}

export default Circuit