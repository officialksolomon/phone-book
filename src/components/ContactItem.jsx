import React, { useContext } from 'react'
import { MdDelete, MdEdit } from "react-icons/md"
import ContactContext from '../context/ContactContext'

function ContactItem ({ name, number, img }) {
  const [contacts, setContacts, isOpen, setIsOpen, contactInputs, setContactInputs, , setSaveDetails, inputErrors, setInputErrors] = useContext(ContactContext)



  const editContact = () => {
    const currentContact = contacts[name]
    setSaveDetails({ name: 'edit', id: name })
    setContactInputs({ name: currentContact.name, phoneNumber: currentContact.phoneNumber })
    setIsOpen(!isOpen)
    
  }

  const deleteContact = () => {
    const contacts = JSON.parse(window.localStorage.getItem('contacts')) ?? {}
    if (contacts) {
      delete contacts[name]
      window.localStorage.setItem('contacts', JSON.stringify(contacts))
      setContacts(JSON.parse(window.localStorage.getItem('contacts')))
    }
  }

  return (

    <div className='flex justify-start items-center mb-5 p-3 hover:bg-gray-100 border-b  animate__animated animate__fadeInUp animate__faster'>
      <div className=' mr-2'>
        <img className='opacity-70' width={45} height={45} src={img} alt="avatar" />
      </div>
      <div className='flex-grow'>
        <h3 className='text-md font-bold m-0 p-0'>{name}</h3>
        <p className='text-sm m-0 p-0 text-gray-400 z-0'>{number}</p>
      </div>
      <div onClick={editContact} className='h-1/3 flex-none border-green-500 p-2  text-green-500 hover:bg-green-500 hover:text-white flex flex-col justify-center'><MdEdit /> </div>
      <div onClick={deleteContact} className='h-1/3 flex-none border-red-500 p-2  text-red-500 hover:bg-red-500 hover:text-white flex flex-col justify-center'><MdDelete /> </div>
    </div>

  )
}

export default ContactItem