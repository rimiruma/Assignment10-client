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
    <table className="table">
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Role</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button
                disabled={user.role === "admin"}
                onClick={() => makeAdmin(user._id)}
              >
                <FaUserShield />
              </button>
              <button onClick={() => deleteUser(user._id)}>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageUsers;
