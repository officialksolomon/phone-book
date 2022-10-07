import React, { useState } from 'react'
import { MdClose } from "react-icons/md"

function AddContactModal ({ open, closeOpenModal }) {
  const [contact, setContact] = useState({ name: '', phoneNumber: '' })

  const handleInputChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    setContact(prevState => ({ ...prevState, [name]: value }))
  }

  const saveContact = () => {
    const previousContacts = JSON.parse(window.localStorage.getItem('contacts')) ?? []
    window.localStorage.setItem('contacts', JSON.stringify([...previousContacts, contact]))
    setContact({ name: '', phoneNumber: '' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    saveContact()
    closeOpenModal(event)
  }

  return (
    <div className={`${open ? '' : 'hidden'} absolute z-50 top-1/3 w-full h-auto  flex flex-col place-content-center p-5   animate__animated animate__fadeInUp  animate__faster`}>
      <form onSubmit={(event) => handleSubmit(event)} className='w-full h-1/2 bg-white p-3 rounded-lg shadow-lg border flex flex-col justify-center'>
        <div onClick={(event) => closeOpenModal(event)} className='self-end text-red-500'><MdClose /> </div>
        <p className='text-sm font-bold px-3'> Add New Contact</p>

        <input onChange={(event) => handleInputChange(event)} type="text" name='name' value={contact.name ?? ""} placeholder='Name' required className='bg-gray-100 m-2 rounded-full p-1 px-4 placeholder:text-xs focus:outline focus:outline-1 focus:outline-green-500' />

        <input onChange={(event) => handleInputChange(event)} type="number" name='phoneNumber' value={contact.phoneNumber ?? ""} placeholder='Phone number' required className='bg-gray-100 m-2 rounded-full p-1 px-4 placeholder:text-xs focus:outline focus:outline-1 focus:outline-green-500' />

        <div className='flex justify-between p-3'>
          <button onClick={(event) => closeOpenModal(event)} id='discard' className='p-2 px-4 w-2/3 border border-red-600 text-red-600 focus:bg-red-600 
          hover:text-white hover:bg-red-500 rounded-full outline-none focus:text-white text-sm mr-3'> Discard</button>
          <button id='save' type='submit' className='p-2 px-4 w-2/3 bg-green-600 rounded-full outline-none text-white border-none text-sm'>Save </button>
        </div>
      </form>
    </div>
  )
}

export default AddContactModal