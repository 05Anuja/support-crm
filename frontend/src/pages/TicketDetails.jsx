import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTicket, updateTicket } from "../services/ticketService";

const TicketDetails = () => {
  const { ticketID } = useParams();

  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  const fetchTicket = async () => {
    try {
      const res = await getTicket(ticketID);
      setTicket(res.data);
      setStatus(res.data.status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  const handleUpdate = async () => {
    try {
      await updateTicket(ticketID, {
        status,
        note,
      });

      alert("Ticket Updated Successfully");

      setNote("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!ticket) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-xl font-semibold text-gray-600">
          Loading Ticket...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Ticket Information */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {ticket.ticketID}
              </h1>

              <p className="text-gray-500 mt-1">
                Customer Support Ticket
              </p>
            </div>

            <span
              className={`px-4 py-2 rounded-full text-white font-medium w-fit ${
                ticket.status === "Open"
                  ? "bg-blue-500"
                  : ticket.status === "In Progress"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {ticket.status}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-gray-500">
                Customer Name
              </p>

              <p className="font-semibold text-lg">
                {ticket.customerName}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Customer Email
              </p>

              <p className="font-semibold text-lg">
                {ticket.customerEmail}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Subject
              </p>

              <p className="font-semibold text-lg">
                {ticket.subject}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Created Date
              </p>

              <p className="font-semibold text-lg">
                {new Date(ticket.createdAt).toLocaleDateString()}
              </p>
            </div>

          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">
              Description
            </p>

            <div className="bg-gray-50 border rounded-lg p-4">
              {ticket.description}
            </div>
          </div>
        </div>

        {/* Notes History */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">
            Notes History
          </h2>

          {ticket.notes?.length > 0 ? (
            <div className="space-y-3">
              {ticket.notes.map((note, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border rounded-lg p-4"
                >
                  <p>{note.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border rounded-lg p-4 text-gray-500">
              No notes available yet.
            </div>
          )}
        </div>

        {/* Update Ticket */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-5">
            Update Ticket
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Open">
                  Open
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Closed">
                  Closed
                </option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Add Note
              </label>

              <textarea
                placeholder="Write your note here..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={handleUpdate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Update Ticket
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketDetails;