import React, { useContext, useState } from 'react'
import { MdClose, MdError } from "react-icons/md"
import ContactContext from "../context/ContactContext"
import saveContact from '../utils/saveContact'


function AddContactModal ({ open, closeOpenModal }) {
  const [contacts, , , , contactInputs, setContactInputs, saveDetails, , searchTerm, setSearchTerm, inputErrors, setInputErrors] = useContext(ContactContext)

  const validateInputs = () => {
    setInputErrors((prevState) => ({ ...prevState, name: 'Contact with same name already exist. Choose a different name.' }))
    if (contactInputs.name in contacts) {
      setInputErrors((prevState) => ({ ...prevState, name: 'Contact with same name already exist. Choose a different name.' }))
    } else {
      setInputErrors((prevState) => ({ ...prevState, name: '' }))
    }

  }

  const handleInputChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    setContactInputs(prevState => ({ ...prevState, [name]: value }))

  }


  const handleSubmit = (event) => {
    event.preventDefault()
    saveContact(contactInputs, setContactInputs, saveDetails)
    setInputErrors((prevState) => ({ ...prevState, name: '' }))
    closeOpenModal(event)
  }


  return (
    <div className={`${open ? '' : 'hidden'} absolute z-50 top-1/3 w-full h-auto  flex flex-col place-content-center p-5   animate__animated animate__fadeInUp  animate__faster`}>
      <form onSubmit={(event) => handleSubmit(event)} className='w-full h-1/2 bg-white p-3 rounded-lg shadow-lg border flex flex-col justify-center'>
        <div onClick={(event) => closeOpenModal(event)} className='self-end text-red-500'><MdClose /> </div>
        <p className='text-xs font-bold px-3'> {saveDetails.name === 'create' ? ' Add New Contact' : 'Edit Contact'}</p>

        <input onBlur={validateInputs} onChange={(event) => handleInputChange(event)} type="text" name='name' value={contactInputs.name ?? ""} placeholder='Name' required className='bg-gray-100 m-2 rounded-full p-1 px-4 placeholder:text-xs focus:outline focus:outline-1 focus:outline-green-500' />
        <p className='text-x text-red-500 font-bold m-0 p-0 px-4 flex place-content-center'> {inputErrors.name && saveDetails.name !== 'edit' ? inputErrors.name : ''}</p>
        <input onChange={(event) => handleInputChange(event)} type="number" name='phoneNumber' value={contactInputs.phoneNumber ?? ""} placeholder='Phone number' required className='bg-gray-100 m-2 rounded-full p-1 px-4 placeholder:text-xs focus:outline focus:outline-1 focus:outline-green-500' />
        <p className='text-x text-red-500 font-bold m-0 p-0 px-4 flex place-content-center'>{inputErrors.phoneNumber && saveDetails.name !== 'edit' ? inputErrors.phoneNumber : ''}</p>
        <div className='flex justify-between p-3'>
          <button onClick={(event) => closeOpenModal(event)} id='discard' className='p-2 px-4 w-2/3 border border-red-600 text-red-600 focus:bg-red-600 
          hover:text-white hover:bg-red-500 rounded-full outline-none focus:text-white text-sm mr-3'>Discard</button>
          {
            inputErrors.name && saveDetails.name !== 'edit' ? <button disabled id='save' type='submit' className='p-2 px-4 w-2/3 bg-green-600 rounded-full outline-none text-white border-none text-sm cursor-not-allowed'>Save </button> : <button id='save' type='submit' className='p-2 px-4 w-2/3 bg-green-600 rounded-full outline-none text-white border-none text-sm'>Save </button>
          }
        </div>
      </form>
    </div>
  )
}

export default AddContactModal