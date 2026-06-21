import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
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

    const res = await fetch(
      "http://localhost:5000/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const data = await res.json();

    alert(data.message);

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

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
            Register
          </button>

        </form>

      </div>
    </div>
  );
};

export default Register;