import React, { useState } from 'react'

const Contaner = () => {
    const [name ,setName] = useState("Sarath")
    function changeName()
    {
        const names =["sarath","chandru","suri"]
        const num =Math.floor(Math.random()*3)
        setName(names[num])
    }
  return (
    <main>
    <h2>My Friend Is {name} </h2>
    <button onClick={() => changeName()}>Change Name</button>
    </main>
  )
}

export default Contaner