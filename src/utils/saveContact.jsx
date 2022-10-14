const saveContact = (contactInputs, setContactInputs, saveDetails) => {
  const previousContacts = JSON.parse(window.localStorage.getItem('contacts')) ?? {}

  if (saveDetails.name === 'edit') {
    delete previousContacts[saveDetails.id]
    window.localStorage.setItem('contacts', JSON.stringify({ ...previousContacts, [contactInputs.name]: contactInputs }))
    setContactInputs({ name: '', phoneNumber: '' })
  }
  else {
    window.localStorage.setItem('contacts', JSON.stringify({ ...previousContacts, [contactInputs.name]: contactInputs }))

  }
  setContactInputs({ name: '', phoneNumber: '' })




}

export default saveContact