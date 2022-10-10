import React, { useContext, useEffect, useState } from 'react'
import avatarImg from "../images/avatar.png"
import ContactItem from './ContactItem'
import { FaExclamationCircle } from "react-icons/fa"
import ContactContext from '../context/ContactContext'

function EmptyList () {
  return (
    <div className='flex flex-col place-items-center opacity-90 mt-5'>
      <FaExclamationCircle className='text-red-500' size={50} />
      <p className='text-center text-red-500  text-xs'>No contacts available. <br /> Add Contacts</p>
    </div>
  )
}


// main component
function ContactList ({ addContactModalState }) {
  const [contacts, setContacts] = useContext(ContactContext)
  const sortedContacts = contacts?.sort((a, b) => a.name.localeCompare(b.name))

  const list = sortedContacts?.map((contact, index) => {
    return <ContactItem name={contact.name} number={contact.phoneNumber} img={avatarImg} id={index} key={index} />
  })
  return (
    <div id='contact-list' className={`h-96  p-4 overflow-y-scroll ${addContactModalState && "hidden"}`}>
      {list.length ? list : <EmptyList />}
    </div >
  )
}


export default ContactList