import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contact from './components/Contact'

function App () {
  return (
    <div className=" grid grid-cols-1 place-items-center h-screen sm:p-10">
      <Contact />
    </div>
  )
}

export default App
