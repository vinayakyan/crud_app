import React from 'react'
import { useForm } from 'react-hook-form'

import './AddUser.css';
import axios from 'axios';

function AddUser() {
    const { register, handleSubmit, reset } = useForm()

    function saveDataToDB(userData) {
        console.log(userData)
        axios.post("http://localhost:5000/users", userData).then(
            (response) =>{
                if(response.status===201){
                    alert('data saved')
                }
            }
        ).catch(
            (error) =>{
                console.error(error)
            }
        )
    }

  return (
    <div className='container bg-dark'>
        <form onSubmit={handleSubmit(saveDataToDB)} className='row g-3 w-80 mx-auto mt-2 bg-dark rounded-2 form opacity-80'>
            <h1 className='text-center text-primary'>User Form</h1>
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
            <button type='submit' className='btn btn-outline-success col-md-6 mb-3'>Add User</button>
            <button type='button' className='btn btn-outline-warning col-md-5 mb-3 ms-1 float-end' onClick={()=>{reset()}}>Reset</button>

        </form>

    </div>
  )
}

export default AddUser