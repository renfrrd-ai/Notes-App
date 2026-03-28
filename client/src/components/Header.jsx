import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import axios from "axios";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  async function handleClick() {
    try {
      await axios.post("/api/auth/logout");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

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
          <li>
            <Link to="/notes">Notes</Link>
          </li>{" "}
          |
          <li>
            <Link to="/me">Dashboard</Link>
          </li>{" "}
          |
          <li>
            {isLoggedIn ? (
              <button onClick={handleClick}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <hr className="border-gray-300 my-5 opacity-25" />
    </header>
  );
}

export default Header;
