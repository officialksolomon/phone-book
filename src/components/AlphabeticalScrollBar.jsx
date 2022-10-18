import React, { useContext } from 'react'
import ContactContext from '../context/ContactContext'

function AlphabeticalScrollBar () {
  const [contacts, , , , , , , , searchTerm] = useContext(ContactContext)
  const contactKeys = Object.keys(contacts)
  const contactAlphabets = [...new Set(contactKeys.map(key => key[0]))]
  const sortedContactAlphabets = contactAlphabets.sort((a, b) => a.localeCompare(b))

  const list = sortedContactAlphabets.map((alphabet, index) => <a className='hover:text-green-500' href={`#${alphabet}`} key={`${alphabet}${index}`} >{alphabet}</a>)
  return (
    <div className='absolute right-0 top-1/4 px-2  h-100  flex flex-col bg-slate-50'>
      {searchTerm ? '' : list}
    </div>
  )
}

export default AlphabeticalScrollBar