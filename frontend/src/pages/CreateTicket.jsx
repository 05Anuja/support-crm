import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {createTicket} from '../services/ticketService'
import { toast } from 'react-toastify';

const CreateTicket = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    subject: "",
    description: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await createTicket(formData)
      // alert("Ticket created Successfully!")
      toast.success("Ticket created successfully!")
      navigate('/')
    } catch (error) {
      console.log(error)
      // alert("Failed to create ticket")
      toast.error("Failed to create ticket")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h2 className='text-3xl font-bold mb-6'>
        Create New Ticket
      </h2>

      <form className='space-y-4' onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="customerName" 
        placeholder= "Customer Name" 
        value={formData.customerName}
        onChange={handleChange}
        required
        className='w-full border p-3 rounded'
        />

        <input 
        type="email" 
        name="customerEmail" 
        placeholder= "Customer Email" 
        value={formData.customerEmail}
        onChange={handleChange}
        required
        className='w-full border p-3 rounded'
        />

        <input 
        type="text" 
        name="subject" 
        placeholder= "Issue Title" 
        value={formData.subject}
        onChange={handleChange}
        required
        className='w-full border p-3 rounded'
        />

        <textarea
        name='description'
        placeholder='Issue Description'
        value={formData.description}
        onChange={handleChange}
        required
        rows={5}
        className='w-full border p-3 rounded'
        />

        <button
        type='submit'
        disabled={loading}
        className='bg-blue-600 text-white px-6 py-3 rounded'
        >
          {loading ? "Creating..." : "Create Ticket"}
        </button>
      </form>
    </div>
  )
}

export default CreateTicket
