import React from 'react'

const Contaner = () => {
    function changeName()
    {
        const names =["sarath","chandru","suri"]
        const num =Math.floor(Math.random()*3)
        return names[num]
    }

  return (
    <h2 className='main'>My Friend Is {changeName()}</h2>
  )
}

export default Contaner