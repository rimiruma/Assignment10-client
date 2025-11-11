import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn, googleSignIn } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success(" Login Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error("" + err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Login Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error("" + err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-8">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Login</h1>

          <form onSubmit={handleLogin}>
            <label className="label">Email</label>
            <input type="email" name="email" className="input" />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" />

            {error && <p className="text-red-500 mt-1">{error}</p>}

            <button className="btn btn-primary mt-4 w-full">Login</button>
          </form>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline mt-2 w-full"
          >
            Login with Google
          </button>

          <p className="mt-4 text-center">
            New here?{" "}
            <Link className="text-blue-500" to="/signUp">
              signUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
