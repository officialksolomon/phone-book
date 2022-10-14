import React, { useEffect, useState } from 'react'
import { MdAdd } from "react-icons/md"
import { FaSave, FaUserPlus } from "react-icons/fa"
import ContactHeader from './ContactHeader'
import ContactList from './ContactList'
import AddContactModal from './AddContactModal'
import ContactContext from '../context/ContactContext'

function Contact () {
  const [isOpen, setIsOpen] = useState(false)
  const [contactInputs, setContactInputs] = useState({ name: '', phoneNumber: '' })
  const [inputErrors, setInputErrors] = useState({ name: '', phoneNumber: '' })
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? {})
  const [searchTerm, setSearchTerm] = useState('')
  const [saveDetails, setSaveDetails] = useState({ name: 'create', id: null })

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('contacts')) ?? {}
    setContacts(data)
  }, [isOpen])

  // 
  const openOrCloseModal = () => {
    setSaveDetails({ name: 'create', id: null })
    setInputErrors({ name: '', phoneNumber: '' })
    setIsOpen(!isOpen)

  }
  // 
  const closeOpenModal = (event) => {
    setContactInputs({ name: '', phoneNumber: '' })
    setInputErrors({ name: '', phoneNumber: '' })
    isOpen === true ? setIsOpen(!isOpen) : ''


  }

  const contextValues = [contacts, setContacts, isOpen, setIsOpen, contactInputs,
    setContactInputs, saveDetails, setSaveDetails, searchTerm, setSearchTerm, inputErrors, setInputErrors]
  return (
    <ContactContext.Provider value={contextValues}>
      <div id='contact' className='w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-white shadow-lg relative'>
        <AddContactModal closeOpenModal={closeOpenModal} open={isOpen} />
        <ContactHeader closeOpenModal={closeOpenModal} />
        <ContactList addContactModalState={isOpen} />
        <button onClick={openOrCloseModal} className='bg-green-600 hover:bg-green-500 rounded-full p-3 text-white text-lg absolute bottom-20 md:bottom-12 right-5  shadow'> <FaUserPlus /> </button>
      </div>
    </ContactContext.Provider>
  )
}

export default Contact