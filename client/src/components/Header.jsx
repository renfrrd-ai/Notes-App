import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-1 text-center gap-1 md:grid-cols-2 md:text-left">
        <Link to="/" className="flex justify-center md:justify-start gap-3">
          <Logo />
          <h2 className="text-4xl font-semibold">My Notes</h2>
        </Link>
        <p className="text-sm text-gray-400 md:col-start-1">
          Backend: Express + Postgres | Frontend: React + Tailwind
        </p>
        <ul className="flex  gap-3 justify-center md:justify-end md:col-start-2 md:row-start-1 items-center">
          <Link to="/notes">Notes</Link> |<Link to="/me">Dashboard</Link>|
          <Link to="/login">Login</Link>
        </ul>
      </div>
      <hr className="border-gray-300 my-5 opacity-25" />
    </header>
  );
}

export default Header;
