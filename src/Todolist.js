import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Todolist = () => {

    const [list,setlist] = useState([
        {
            id:1,
            work:"naan ganesh",
            checked : true
        },
        {
            id:2,
            work:"naan ganesh",
            checked : false
        },
        {
            id:3,
            work:"naan ganesh",
            checked : true
        },
        {
            id:4,
            work:"naan ganesh",
            checked : false
        },
    ])

    const  changefunction=(id)=>
        {
        
            const listid = list.map((item) =>
                 item.id === id ? {...item, checked :!item.checked} : item)
            setlist(listid)
        }
    function removeEvent (id)
    {

        const newlist =list.filter((l)=> l.id !== id)
        setlist(newlist)
    }


  return (
    <main>
    <ul>
    {
        list.map((l) => (
            <li className='item' key={l.id}>
            <input 
            type="checkbox"
            onChange={()=>changefunction(l.id)}
            checked={l.checked} />
            <label>{l.work}</label>
            <FaTrashAlt 
            role="button"  
            onClick={()=>removeEvent (l.id)
            }
            tabIndex="0"/>
            </li>
        ))
    }</ul>
    </main>
  )
}

export default Todolist