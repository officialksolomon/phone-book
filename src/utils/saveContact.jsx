const saveContact = (contactInputs, setContactInputs, saveDetails) => {
  const previousContacts = JSON.parse(window.localStorage.getItem('contacts')) ?? []
  if (saveDetails.name === 'edit') {
    console.log(previousContacts[saveDetails.id])
    previousContacts[saveDetails.id] = contactInputs
    window.localStorage.setItem('contacts', JSON.stringify(previousContacts))
    setContactInputs({ name: '', phoneNumber: '' })
  }
  else {
    window.localStorage.setItem('contacts', JSON.stringify([...previousContacts, contactInputs]))
    setContactInputs({ name: '', phoneNumber: '' })
  }
}

export default saveContact