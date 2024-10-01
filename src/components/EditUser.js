import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function EditUser() {
  const {id} = useParams()
  const {register, handleSubmit, reset, setValue} = useForm()
  const nav = useNavigate()

  function fetchUserById(){
    axios.get(`http://localhost:5000/users/${id}`).then(
      (response) =>{
        setValue('first_name', response.data.first_name)
        setValue('last_name', response.data.last_name)
        setValue('email', response.data.email)
        setValue('contact', response.data.contact)
        setValue('address', response.data.address)
        setValue('zip', response.data.zip)
        setValue('city', response.data.city)
      }
    ).catch(
      (error) =>{
        console.log(error)
      }
    )
  }

  function updateUserById(userData) {
    axios.patch(`http://localhost:5000/users/${id}`, userData).then(
      (response) =>{
        nav('/show')
      }
    ).catch(
      (error) =>{
        console.log(error)
      }
    )
  }
  useEffect(()=>{
    fetchUserById()
  },[])
  return (
    <div className='container bg-dark'>
        <form onSubmit={handleSubmit(updateUserById)} className='row g-3 w-80 mx-auto mt-2 bg-dark rounded-2 form opacity-80'>
            <h1 className='text-center text-primary'>User Update Form</h1>
            <div className='col-md-6'>
                <label className='form-label text-info fw-bold'>First Name</label>
                <input type='text' className='form-control' {...register('first_name')} />
            </div>
            <div className='col-md-6'>
                <label className='form-label text-info fw-bold'>Last Name</label>
                <input type='text' className='form-control' {...register('last_name')} />
            </div>
            <div className='col-md-6'>
                <label className='form-label text-info fw-bold'>Email</label>
                <input type='email' className='form-control' {...register('email')} />
            </div>

            <div className='col-md-6'>
                <label className='form-label text-info fw-bold'>Contact</label>
                <input type='text' className='form-control' {...register('contact')} />
            </div>
            <div className='col-md-6'>
                <label className='form-label text-info fw-bold'>Address</label>
                <textarea className='form-control' {...register('address')} />
            </div>
            <div className='col-md-4'>
                <label className='form-label text-info fw-bold'>City</label>
                <input type='text' className='form-control' {...register('city')} />
            </div>
            <div className='col-md-2'>
                <label className='form-label text-info fw-bold'>Zip</label>
                <input type='number' className='form-control' {...register('zip')} />
            </div>
            <button type='submit' className='btn btn-outline-success col-md-6 mb-3'>Update User</button>
            <NavLink to={'/show'}  className='btn btn-outline-warning col-md-5 mb-3 ms-1 float-end'>Cancel</NavLink>

        </form>

    </div>
  )
}

export default EditUser