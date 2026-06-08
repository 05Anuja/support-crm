import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateTicket from './pages/CreateTicket'
import TicketDetails from './pages/TicketDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<CreateTicket />} />
        <Route path='/ticket/:ticketId' element={<TicketDetails />} />
      </Routes>
    </>
  )
}

export default App
