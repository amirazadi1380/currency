import React, { Children, useEffect, useState } from 'react'
import User from './User'

export default function Users() {
  const [showPlus,setShowPlus] = useState(true)
  const [myUsers,setMyUsers] = useState([])
  const [showEmail,setShowEmail] = useState(false)
  const [myEmail ,setMyEmail] = useState('')


  useEffect(()=>{
    async function fetchData(){

      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setMyUsers(data)
 
        }
        fetchData()
  },[])
  return (
    <div>
      <button onClick={()=>setShowPlus((current)=>!current)}> {showPlus ? <span>+</span> : <span>-</span>}</button>
   {myUsers.map(item=><User name={item.name} email={item.email}/>)}
    </div>
  )
}
