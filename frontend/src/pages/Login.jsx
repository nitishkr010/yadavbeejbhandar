import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://yadavbeejbhandarr.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await res.json();

      if (res.ok) {
        // User Save in LocalStorage
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        alert("Login Successful");

        // Profile Page
     window.location.href = "/profile";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="pt-65 min-h-screen bg-green-50">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;