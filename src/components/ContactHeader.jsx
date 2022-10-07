import React from 'react'



function ContactSearchBar () {
  return (
    <div className=' mt-3'>
      <input id='search-contact' type="text" placeholder='🔍 Search by name or number...' className='w-full p-2 rounded-md focus:outline focus:outline-1 focus:outline-green-500' />
    </div>
  )
}



function ContactHeader ({ closeOpenModal }) {
  return (
    <div onClick={(event) => { closeOpenModal(event) }} className='bg-gray-100 p-4'>
      <h1 className="text-4xl text font-bold ">Contacts</h1>
      <ContactSearchBar />
    </div>
  )
}

export default ContactHeader