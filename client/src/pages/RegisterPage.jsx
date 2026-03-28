import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const attr = e.target.name;
    const value = e.target.value;

    setData((prev) => {
      return { ...prev, [attr]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", data);
      setData({ username: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  return (
    <div className="text-base">
      <div className="bg-neutral-800 rounded-xl p-8 mt-4 border-[.5px] border-neutral-600 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-1.5">
          <Logo small={true} />
          <h3 className="text-2xl font-semibold">Create your account</h3>
          <p className="text-sm text-gray-400">Start taking notes today</p>
        </div>
        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="johndoe123"
            value={data.username}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
            value={data.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="placeholder:tracking-wider "
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            value={data.password}
            onChange={handleChange}
          />
          <button className="btn mt-1.5 mb-3" type="submit">
            Create Account
          </button>
          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
