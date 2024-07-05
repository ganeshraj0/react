import React from 'react'

const Footer = () => {
    const year = new Date()
  return (
    <footer className='footer'>ganesh &copy; {year.getFullYear()}</footer>
  )
}

export default Footer