import React from 'react'

const Contaner = () => {
    function changeName()
    {
      const names = ["sarath","chandru","suri"]
      const num =Math.floor(Math.random()*3)
      return names[num]
    }
  
  return (
    <div>   
    <h1>My Friend Names..</h1>
    <p>my friend {changeName()}</p>
    
        </div>
  )
}

export default Contaner