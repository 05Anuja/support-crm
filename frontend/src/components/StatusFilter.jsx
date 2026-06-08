const StatusFilter = ({ status, setStatus }) => {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Status</option>
      <option value="Open">Open</option>
      <option value="In Progress">In Progress</option>
      <option value="Closed">Closed</option>
    </select>
  );
};

export default StatusFilter;