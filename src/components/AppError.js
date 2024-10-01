import React from 'react'
import ErrImage from '../Assets/404.jpg'
import { NavLink } from 'react-router-dom'
function AppError() {
  
  return (
    <div className='text-center bg-dark mt-3'>
      <img height={"500"} src={ErrImage} alt='no-preview'/><br/>
      <NavLink to={'/'} className="btn btn-primary w-50">Home</NavLink>
      
    </div>
  )
}

export default AppError