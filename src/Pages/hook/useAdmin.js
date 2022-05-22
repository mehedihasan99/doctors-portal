import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://fathomless-gorge-92385.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setLoadingAdmin(false);
        });
    }
  }, [user]);
  return [admin, loadingAdmin];
};
export default useAdmin;
