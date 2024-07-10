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
            localStorage.setItem("todolist",JSON.stringify (list))
           
        }
    function removeEvent (id)
    {

        const newlist =list.filter((l)=> l.id !== id)
        setlist(newlist)
        localStorage.setItem("todolist",JSON.stringify (list))
    }
 

  return (
    <main>
    {(list.length) ? (
    <ul>
    {
        list.map((l) => (
            <li className='item' key={l.id}>
            <input className="cheakbox"
            type="checkbox"
            onChange={()=>changefunction(l.id)}
            checked={l.checked} />
            <label style={(l.checked)? {textDecoration:"line-through"}:null}
             onDoubleClick={()=>changefunction(l.id)}>{l.work}</label>
            <FaTrashAlt 
            role="button"  
            onClick={()=>removeEvent (l.id)
            }
            tabIndex="0"/>
            </li>
        ))
    }</ul>
) : <h2>your work is complete</h2>
    }
    </main>
  )
}

export default Todolist