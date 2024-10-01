import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function ShowUsers() {
  const [users, setUsers] = useState([])

  function fetchAllUsersFromDB() {
    axios.get("http://localhost:5000/users").then(
      (response) =>{
        setUsers(response.data)
      }
    ).catch(
      (error)=>{
        console.error(error)
      }
    )
  }

  useEffect(()=>{
    fetchAllUsersFromDB()
  },[])
  return (
    <div className='container bg-light'>
        <h1 className='text-center text-primary mt-2'>User List</h1>
        <div className='row'>
          {
            users.map(
              (user)=>{
                return(
                  <div className='col-md-6 center'>
                    <div className='row'>
                      <label className='col-md-4 form-label fw-bold text-info'>First Name :</label>
                      <p className='fw-bold col-md-8'>{user.first_name}</p>
                    </div>
                    <div className='row'>
                      <label className='col-md-4 form-label fw-bold text-info'>Last Name :</label>
                      <p className='fw-bold col-md-8'>{user.last_name}</p>
                    </div>
                    <div className='row'>
                      <label className='col-md-4 form-label fw-bold text-info'>Email :</label>
                      <p className='fw-bold col-md-8'>{user.email}</p>
                    </div>
                    <div className='row'>
                      <label className='col-md-4 form-label fw-bold text-info'>Contact :</label>
                      <p className='fw-bold col-md-8'>{user.contact}</p>
                    </div>
                    <div className='row'>
                      <label className='col-md-4 form-label fw-bold text-info'>Address :</label>
                      <p className='fw-bold col-md-8'>{user.address}</p>
                    </div>
                    <div className='row'>
                      <label className='col-md-4 form-label fw-bold text-info'>City :</label>
                      <p className='fw-bold col-md-8'>{user.city}</p>
                    </div>
                    <div className='row'>
                      <label className='col-md-4 form-label fw-bold text-info'>Zip :</label>
                      <p className='fw-bold col-md-8'>{user.zip}</p>
                    </div>
                    
                      <NavLink to={`/edit/${user.id}`} className="btn btn-outline-warning col-md-3" >Update</NavLink>
                      <NavLink className="btn btn-outline-danger col-md-3 ms-5" >Delete</NavLink>
                    
                    <hr/>
                  </div>
                )
              }
            )
          }
        </div>

    </div>
  )
}

export default ShowUsers