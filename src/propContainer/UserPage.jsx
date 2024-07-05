import React, { useState ,useEffect} from 'react'

const userDetails = "https://jsonplaceholder.typicode.com/posts"

const UserPage = () => {

    const[user,setUser] = useState([])

    const userHndler = async() => {
        const response =await fetch(userDetails);
        const newUser = await response.json();
        setUser(newUser)
    }

    useEffect( () => {
        console.log(userHndler())
    },[]);

    console.log(user)


  return (
    <div>
        {user.map( (item) =>{
            return(
                <div className="userSection">
                    <h2>{item.title}</h2>
                     <h4>{item.body}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default UserPage