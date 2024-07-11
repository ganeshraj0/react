import React from 'react'

const Header = ({title}) => {
  return (
    <header >{title}</header>
  )
}

Header.defaultProps = {
  title :<h1>Ganesh Raj</h1>
}
export default Header