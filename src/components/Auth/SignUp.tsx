import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Helper/BaseUrl";

const SignUp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    try {
      await axios.post(`${BASE_URL}/User/signup`, {
        name,
        id,
        password,
      });

      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen">
      <div className="px-4 py-16 text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-12 text-green-400">Sign Up</h2>
        <div className="max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus:outline-none text-slate-800 w-full mb-6 px-4 py-3 rounded"
          />
          <input
            type="text"
            placeholder="Email/Username"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="focus:outline-none text-slate-800 w-full mb-6 px-4 py-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:outline-none text-slate-800 w-full mb-6 px-4 py-3 rounded"
          />
          <button
            type="submit"
            onClick={handleSignUp}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
