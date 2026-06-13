import React, { useEffect, useState } from "react";
import { getTickets } from "../services/ticketService";
import TicketCard from "../components/TicketCard";
import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const fetchTickets = async () => {
    try {
      const res = await getTickets(search, status);
      setTickets(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [search, status]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading Tickets...
        </h2>
      </div>
    );
  }

  const totalTickets = tickets.length
  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;
  const closedTickets = tickets.filter(
    (ticket) => ticket.status === "Closed"
  ).length;

  return (
    <div className="min-h-screen bg-gray-200 py-8">
      {/* Header */}
      {/* <div className="max-w-7xl mx-auto px-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Support Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage customer support tickets efficiently
        </p>
      </div> */}

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-md flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="md:w-60">
            <StatusFilter
              status={status}
              setStatus={setStatus}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-3">
        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-purple-600">
          <h3 className="text-gray-500 text-sm">
            Total Tickets
          </h3>
          <p className="text-3xl font-bold">
            {totalTickets}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm">
            Open Tickets
          </h3>
          <p className="text-3xl font-bold">
            {openTickets}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500">
          <h3 className="text-gray-500 text-sm">
            In Progress Tickets
          </h3>
          <p className="text-3xl font-bold">
            {inProgressTickets}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm">
            Closed Tickets
          </h3>
          <p className="text-3xl font-bold">
            {closedTickets}
          </p>
        </div>
      </div>

      {/* Tickets Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            All Tickets
          </h2>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            {tickets.length} Tickets
          </span>
        </div>

        {tickets.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              No Tickets Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try changing your search or filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket._id}
                ticket={ticket}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;