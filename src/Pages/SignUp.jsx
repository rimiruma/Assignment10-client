import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, googleSignIn } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      setError("Password must include at least one Uppercase letter.");
      toast.error("Password must contain an Uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must include at least one Lowercase letter.");
      toast.error("Password must contain a Lowercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      toast.error("Password must be minimum 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;

        updateProfile(loggedUser, {
          displayName: name,
          photoURL: photoURL,
        });

        toast.success("Registration Successful!");
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleSignUp = () => {
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

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-8">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Create Account</h1>

          <form onSubmit={handleSignUp}>
            <label className="label">Full Name</label>
            <input type="text" name="name" className="input" />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" />

            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" />

            {error && <p className="text-red-500 mt-1">{error}</p>}

            <button className="btn btn-primary mt-4 w-full">Sign Up</button>
          </form>

          {/* Google Signup */}
          <button onClick={handleGoogleSignUp} className="btn btn-outline mt-2 w-full">
            Continue with Google
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
