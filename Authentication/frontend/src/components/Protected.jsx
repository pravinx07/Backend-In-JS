import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, logout } from "../utils/auth";

export const Protected = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      if (!token) {
        navigate("/signin");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Unauthorized");
        }

        setData(result.message);
      } catch (error) {
        alert(error.message);

        logout();
        navigate("/signin");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-xl mb-4">{data}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          logout();
          navigate("/signin");
        }}
      >
        Logout
      </button>
    </div>
  );
};
