import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Helper/BaseUrl";
import { errorToast, success } from "../Helper/Toast";
import { ToastContainer } from "react-toastify";

const SignIn = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (event: any) => {
    event.preventDefault();
    if (id.trim() === "" || password.trim() === "") {
      errorToast("One or more empty fields.");
      return;
    }

    try {
      const result = await axios.post(`${BASE_URL}/User/signin`, {
        id: id,
        password: password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      success("Successfully signed in.") 
      navigate("/passwordManager");
    } catch (error) {
      console.error(error);
      errorToast("Id or password is wrong.")
    }
  };

  return (
    <div className="bg-gray-900 h-screen">
      <div className="px-4 py-16 text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-12 text-green-400">Sign In</h2>
        <div className="max-w-xs mx-auto">
          <form>
            <input
              required
              type="text"
              placeholder="Email/Username"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="focus:outline-none text-slate-800   w-full mb-6 px-6 py-3 rounded"
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:outline-none text-slate-800   w-full mb-6 px-6 py-3 rounded"
            />
            <button
              type="submit"
              onClick={handleSignIn}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SignIn;
