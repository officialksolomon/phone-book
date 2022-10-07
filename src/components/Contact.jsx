import React, { useEffect, useState } from 'react'
import { MdAdd } from "react-icons/md"
import { FaSave, FaUserPlus } from "react-icons/fa"
import ContactHeader from './ContactHeader'
import ContactList from './ContactList'
import AddContactModal from './AddContactModal'


function Contact () {
  const [open, setOpen] = useState(false)

  // 
  const openOrCloseModal = () => {
    setOpen(!open)
  }
  // 
  const closeOpenModal = (event) => {
    open === true ? setOpen(!open) : ''
  }
  // onClick = { closeOpenModal }
  return (
    <div id='contact' className='w-full h-full sm:w-1/2+ md:w-1/3 lg:w-1/4  bg-white shadow-lg relative'>
      <AddContactModal closeOpenModal={closeOpenModal} open={open} />
      <ContactHeader closeOpenModal={closeOpenModal} />
      <ContactList addContactModalState={open} />
      <button onClick={openOrCloseModal} className='bg-green-600 hover:bg-green-500 rounded-full p-3 text-white text-lg absolute bottom-20 right-5  shadow'> <FaUserPlus /> </button>
    </div>
  )
}

export default Contact