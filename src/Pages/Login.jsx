import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
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
        toast.error(err.message);
      });
  };

  const handleDemoLogin = (type) => {
    let email = "";
    let password = "";

    if (type === "user") {
      email = "demo@user.com";
      password = "demo123";
    } else if (type === "admin") {
      email = "admin@site.com";
      password = "admin123";
    }

    signIn(email, password)
      .then(() => {
        toast.success(`${type === "user" ? "User" : "Admin"} Demo Login Successful!`);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="card w-full max-w-sm shadow-2xl rounded-xl p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6"
        >
          Login
        </motion.h1>

        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            required
            className="input input-bordered w-full mb-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            required
            className="input input-bordered w-full mb-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline hover:bg-orange-500 hover:text-white w-full mt-4"
          >
            Login
          </motion.button>
        </motion.form>

        {/* Google Login */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mt-3"
        >
          Login with Google
        </motion.button>

        {/* Demo Buttons */}
        <motion.div
          className="flex gap-2 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => handleDemoLogin("user")}
            className="btn btn-sm btn-outline hover:bg-orange-500 hover:text-white w-1/2"
          >
            Demo User
          </button>
          <button
            onClick={() => handleDemoLogin("admin")}
            className="btn btn-sm btn-outline hover:bg-orange-500 hover:text-white w-1/2"
          >
            Demo Admin
          </button>
        </motion.div>

        <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
          New here?{" "}
          <Link className="text-blue-500 dark:text-blue-400" to="/signUp">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
