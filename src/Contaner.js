import React, { useState } from 'react'

const Contaner = () => {
    function changeName()
    {
        const names =["sarath","chandru","suri"]
        const num =Math.floor(Math.random()*3)
        return names[num]
    }
    function changeName2(e)
    {
        alert(e.target.textContent)
    }
    let [count , setCount] = useState(99)

    function increment ()
    {
        setCount (count  +1)
    }

    function decrement ()
    {
        setCount(count-1)
    }

  return (
    <main>
    <h2>My Friend Is {() => changeName () }</h2>
    <button onClick={(e) => changeName2(e)}>Change Name</button>
    <button onClick={()=>decrement()}>-</button>
    <span>{count}</span>
    <button onClick={()=> increment ()}>+</button>
    </main>
  )
}

export default Contaner