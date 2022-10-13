import React, { useContext } from 'react'
import ContactContext from '../context/ContactContext'

function ContactHeader ({ closeOpenModal }) {
  const [, , , , , , , , searchTerm, setSearchTerm] = useContext(ContactContext)


  const handleChange = (event) => {
    setSearchTerm(event?.target.value)
  }

  return (
    <div onClick={(event) => { closeOpenModal(event) }} className='bg-gray-100 p-4'>
      <h1 className="text-4xl text font-bold ">Contacts</h1>
      <div className=' mt-3'>
        <input onChange={(event) => handleChange(event)} value={searchTerm} id='search-contact' type="text" placeholder='🔍 Search by name or number...' className='w-full p-2 rounded-md focus:outline focus:outline-1 focus:outline-green-500' />
      </div>
    </div>
  )
}

export default ContactHeader