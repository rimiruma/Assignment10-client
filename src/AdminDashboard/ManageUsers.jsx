import { useEffect, useState } from "react";
import { FaUserShield, FaTrash } from "react-icons/fa";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/all")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const makeAdmin = (id) => {
    fetch(`http://localhost:3000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setUsers(prevUsers =>
            prevUsers.map(user =>
              user._id === id ? { ...user, role: "admin" } : user
            )
          );
        }
      });
  };

  const deleteUser = id => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter(u => u._id !== id));
    });
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="table table-zebra w-full transition-all duration-300 ease-in-out 
                        bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-lg">
        <thead>
          <tr className="bg-orange-500 dark:bg-orange-700 text-white">
            <th className="transition-colors duration-300">Name</th>
            <th className="transition-colors duration-300">Email</th>
            <th className="transition-colors duration-300">Role</th>
            <th className="transition-colors duration-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className={`badge transition-colors duration-300 
                  ${user.role === "admin" ? "bg-orange-500 text-white" : "badge-warning"}`}>
                  {user.role}
                </span>
              </td>
              <td className="flex gap-2">
                <button
                  disabled={user.role === "admin"}
                  onClick={() => makeAdmin(user._id)}
                  className="btn btn-sm btn-outline hover:bg-orange-500 hover:text-white font-bold flex items-center gap-1 
                             disabled:opacity-50 transform hover:scale-105 transition-transform duration-200"
                >
                  <FaUserShield />
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-sm bg-red-600 text-white flex items-center gap-1 
                             transform hover:scale-105 transition-transform duration-200"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
