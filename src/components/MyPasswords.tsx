import axios from "axios";
import { useEffect, useState } from "react";
import Password from "./Helper/Password";
import { BASE_URL } from "./Helper/BaseUrl";

const MyPasswords = ({ setShowPasswords }) => {
  const [passwordList, setPasswordList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/Passwords/showPasswords/?userId=${window.localStorage.getItem(
            "userID"
          )}`
        );
        setPasswordList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-sm mx-auto min-h-screen">
      {passwordList.length === 0 && (
        <h2 className="text-4xl text-center">
          You have not saved any passwords yet.
        </h2>
      )}
      {passwordList.length !== 0 &&
        passwordList.map((val, index) => {
          return <Password val={val} key={index} />;
        })}
      <button
        onClick={() => setShowPasswords(false)}
        className="bg-slate-700 hover:bg-slate-600 text-white my-8 px-6 py-3 rounded-lg w-full"
      >
        Add Passwords
      </button>
    </div>
  );
};

export default MyPasswords;
