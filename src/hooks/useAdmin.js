import { use, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
  const { user, loading } = use(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:3000/users/admin/${user.email}`)
        .then(res => setIsAdmin(res.data.admin))
        .finally(() => setAdminLoading(false));
    }
  }, [user]);

  return [isAdmin, adminLoading];
};

export default useAdmin;
