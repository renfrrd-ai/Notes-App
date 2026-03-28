import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="text-base">
      <div className="bg-neutral-800 rounded-xl p-8 mt-4 border-[.5px] border-neutral-600 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-1.5">
          <Logo small={true} />
          <h3 className="text-2xl font-semibold">Welcome Back</h3>
          <p className="text-sm text-gray-400">Log in to your notes</p>
        </div>
        <form action="" method="post">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
          />
          <label htmlFor="password">Password</label>
          <input
            className="placeholder:tracking-wider "
            type="text"
            name="password"
            id="password"
            placeholder="••••••••"
          />
          <button className="btn mt-1.5 mb-3" type="submit">
            Log in
          </button>
          <p className="text-sm text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
