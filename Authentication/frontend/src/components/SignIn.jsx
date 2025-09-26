import { useState } from "react";
import {setToken} from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "SignIn Failed!");
      }
      setToken(data.token);
      navigate("/protected");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-gray-700  text-white shadow-lg rounded-lg w-[300px] h-[400px]"
      >
        <div className="text-center m-3">
          <h1 className="text-2xl font-bold p-4">SignIn</h1>
        </div>
        <div className="flex flex-col m-3">
          
          <label className="px-5">Email</label>
          <input
            type="email"
            className="m-3 p-2 rounded-xl border border-white text-white"
            placeholder="Enter your name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="px-5 mt-2">Password</label>
          <input
            type="password"
            className="m-3 p-2 rounded-xl border border-white text-white"
            placeholder="Enter your name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit" className="bg-blue-500 px-2 py-1 font-bold rounded-lg m-3 hover:bg-blue-700 transition duration 5s" >SignIn</button>
        </div>
      </form>
      {/* <p>Dont have an account? <Link   to={"/SignIn"}>SignUp</Link></p> */}
    </div>
  );
};
