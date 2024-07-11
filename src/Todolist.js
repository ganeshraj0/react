import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
export const Todolist = () => {
    const [list,setlist] = useState([
        {
            id:1,
            hoby:"blender learn",
            chaeck: true
        },
        {
            id:2,
            hoby:"react learn",
            chaeck: false
        },
        {
            id:3,
            hoby:"website learn",
            chaeck: false
        },
        {
            id:3,
            hoby:"bio-tech learn",
            chaeck: false
        },
    ])
    // const [number,setnumber]= useState(10)
    // function add()
    // {
    //     const num = number+1
    //     setnumber(num)
    // }
    // function down()
    // {
    //     const num = number-1
    //     setnumber(num)
    // }

    function removelist(id)
    {
        const remove = list.filter((l) => l.id !==id) 
        setlist(remove)
        localStorage.setItem("todolist",JSON.stringify(remove))
    }
    function chnagefun(id)
    {
const change = list.map((l) => l.id===id ? {...l,chaeck:!l.chaeck}:l)
setlist(change)
localStorage.setItem("todolist",JSON.stringify(change))
    }
  return (
    <main>
    {(list.length)?(
    <ul>
    {
        list.map((l)=>(
            <li className='item' key={l.id}>
            <input type="checkbox"
            onChange={()=>chnagefun(l.id)}
            checked={l.chaeck} />
            <label style={ (l.chaeck)? {textDecoration:"line-through" }:null} 
            onDoubleClick={()=>chnagefun(l.id)} > {l.hoby}</label>
            <FaTrashAlt role="button"
            onClick={()=>removelist(l.id)}/></li>
            
        ))
    }
    </ul>
):<h1>list complete</h1>}
    </main>
  )
}

export default Todolist