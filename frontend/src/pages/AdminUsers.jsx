import { useEffect, useState } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://yadavbeejbhandarr.onrender.com/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-60 min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-green-700 mb-10">
          All Users
        </h1>

        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white p-5 rounded-lg shadow mb-4"
          >
            <h2 className="text-xl font-bold">
              {user.name}
            </h2>

            <p>{user.email}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AdminUsers;