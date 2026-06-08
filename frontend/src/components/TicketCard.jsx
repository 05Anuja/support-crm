import React from 'react'
import {Link} from 'react-router-dom'

const TicketCard = ({ticket}) => {
  return (
    <Link to={`/ticket/${ticket.ticketID}`}>
        <div className='border rounded-lg p-4 shadow hover:shadow-lg transition'>
            <div className='flex justify-between'>
                <h3 className='font-bold'>
                    {ticket.ticketID}
                </h3>
                <span className={`px-2 py-1 rounded text-white text-sm ${ticket.status === 'Open' ? "bg-blue-500" : ticket.status === "In Progress" ? "bg-yellow-500" : "bg-green-500"}`}>
                    {ticket.status}
                </span>
            </div>
            <h2 className='text-lg font-semibold mt-2'>
                {ticket.customerName}
            </h2>
            <p className='text-gray-600'>
                {ticket.subject}
            </p>

            <p className='text-sm text-gray-500 mt-2'>
                {new Date(ticket.createdAt).toLocaleDateString()}
            </p>
        </div>      
    </Link>
  )
}

export default TicketCard
