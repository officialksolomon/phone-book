import React from 'react'
import { MdDelete } from "react-icons/md"

function ContactItem ({ name, number, img, id, setContacts }) {

  const deleteContact = () => {
    const contacts = JSON.parse(window.localStorage.getItem('contacts')) ?? []
    if (contacts) {
      contacts.splice(id, 1)
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
      <div onClick={deleteContact} className='h-1/3 flex-none border-red-500 p-2  text-red-500 hover:bg-red-500 hover:text-white flex flex-col justify-center'><MdDelete /> </div>
    </div>
    
  )
}

export default ContactItem