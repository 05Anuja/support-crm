import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <h1 className="text-2xl font-bold">
        Support CRM
      </h1>

      <Link
        to="/create"
        className="bg-white text-black px-4 py-2 rounded"
      >
        Create Ticket
      </Link>
    </nav>
  );
};

export default Navbar;