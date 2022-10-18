import React, { useContext, useEffect, useState } from 'react'
import avatarImg from "../images/avatar.png"
import ContactItem from './ContactItem'
import { FaExclamationCircle } from "react-icons/fa"
import ContactContext from '../context/ContactContext'
import AlphabeticalScrollBar from './AlphabeticalScrollBar'

function EmptyList () {
  return (
    <div className='flex flex-col place-items-center opacity-90 mt-5'>
      <FaExclamationCircle className='text-red-500' size={50} />
      <p className='text-center text-red-500  text-xs'>No contacts available. <br /> Add Contacts</p>
    </div>
  )
}

function NoMatch () {
  return (
    <div className='flex flex-col place-items-center opacity-90 mt-5'>
      <FaExclamationCircle className='text-red-500' size={50} />
      <p className='text-center text-red-500  text-xs'>No match found. <br /> Try a different keyword.</p>
    </div>
  )
}


// main component
function ContactList ({ addContactModalState }) {

  const [contacts, setContacts, , , , , , , searchTerm] = useContext(ContactContext)
  let sortedContacts = Object.keys(contacts).sort((a, b) => a.localeCompare(b))
  let filteredContacts = sortedContacts.filter((contact) => contact.toLowerCase().includes(searchTerm.toLowerCase()))

  let previousId = ''
  const list = filteredContacts.map((key, index) => {
    let id = previousId === key[0] ? '' : key[0]
    previousId = key[0]
    return <ContactItem name={contacts[key].name} number={contacts[key].phoneNumber} img={avatarImg} key={index} id={id} />
  })
  return (
    <div id='contact-list' className={`h-96  p-5 overflow-y-scroll  ${addContactModalState && "hidden"} `}>
      {list.length ? list : searchTerm ? <NoMatch /> : <EmptyList />}
    </div >
  )
}


export default ContactList