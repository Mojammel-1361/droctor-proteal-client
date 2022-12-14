import { useState } from "react";
import { useEffect } from "react";
const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://droctor-proteal-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
  // return;
};

export default useAdmin;
