import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, googleSignIn } = useContext(AuthContext);

  const saveUserToDB = async (user) => {
    const userData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      created_at: new Date()
    };

    await fetch("https://assignment10-server-zeta.vercel.app/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain an Uppercase Letter");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain a Lowercase Letter");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }

    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;

        updateProfile(loggedUser, {
          displayName: name,
          photoURL,
        }).then(() => {
          saveUserToDB(loggedUser);
        });

        toast.success("Registration Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((res) => {
        saveUserToDB(res.user);
        toast.success("Google Login Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center px-5">
      <div className="card w-full max-w-md bg-white shadow-xl p-8 rounded-xl">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Your Account
        </h1>

        <form onSubmit={handleSignUp}>
          <input type="text" name="name" placeholder="Full Name"
            className="input input-bordered w-full mb-3" required />
          <input type="email" name="email" placeholder="Email"
            className="input input-bordered w-full mb-3" required />
          <input type="text" name="photo" placeholder="Photo URL"
            className="input input-bordered w-full mb-3" />
          <input type="password" name="password" placeholder="Password"
            className="input input-bordered w-full mb-3" required />

          {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}

          <button className="btn btn-primary w-full mt-2">Sign Up</button>
        </form>

        <button
          onClick={handleGoogleSignUp}
          className="btn btn-outline w-full mt-4"
        >
          Continue with Google
        </button>

        <p className="mt-4 text-center">
          Already have an account? {""}
          <Link className="text-blue-500 font-semibold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
