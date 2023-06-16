import axios from "axios";
import { useEffect, useState } from "react";
import Password from "./Helper/Password";
import { BASE_URL } from "./Helper/BaseUrl";
import { success, errorToast } from "./Helper/Toast";

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

  const encryptPassword = async (password) => {
    try {
      const res = await axios.post(`${BASE_URL}/Passwords/encryptPassword`, {
        password,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deletePassword = async (_id) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/Passwords/deletePassword/${_id}?userId=${window.localStorage.getItem(
          "userID"
        )}`
      );
      setPasswordList((prevList) => prevList.filter((pw) => pw._id !== _id));
      success("Password successfully deleted.");
    } catch (error) {
      console.log(error);
      errorToast("Something went wrong.");
    }
  };

  const updatePassword = async (_id, newPassword) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/Passwords/updatePassword/${_id}`,
        {
          newPassword: newPassword,
          userId: window.localStorage.getItem("userID"),
        }
      );
      newPassword = encryptPassword(newPassword);
      setPasswordList((prevList) =>
        prevList.map((pw) => (pw._id === _id ? { ...pw, newPassword } : pw))
      );
      success("Password successfully updated.");
    } catch (error) {
      console.error(error);
      errorToast("something went wrong.");
    }
  };

  return (
    <div className="max-w-sm mx-auto min-h-screen">
      {passwordList.length === 0 && (
        <h2 className="text-4xl text-center mb-4">
          You have not saved any passwords yet.
        </h2>
      )}
      {passwordList.length !== 0 && (
        <h2 className="text-2xl font-bold mb-8">Your Passwords</h2>
      )}
      <button
        onClick={() => setShowPasswords(false)}
        className="bg-slate-700 hover:bg-slate-600 text-white my-2 px-6 py-3 rounded-lg w-full"
      >
        Add Passwords
      </button>

      {passwordList.length !== 0 &&
        passwordList.map((val, index) => {
          return (
            <Password
              val={val}
              key={index}
              // passwordList={passwordList}
              // setPasswordList={setPasswordList}
              deletePassword={deletePassword}
              updatePassword={updatePassword}
            />
          );
        })}
    </div>
  );
};

export default MyPasswords;
