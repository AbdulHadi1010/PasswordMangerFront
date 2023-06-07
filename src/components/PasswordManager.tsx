import { useState } from "react";
import axios from "axios";
import MyPasswords from "./MyPasswords";
import AddPasswords from "./AddPasswords";
import { BASE_URL } from "./Helper/BaseUrl";
import { ToastContainer } from "react-toastify";
import { error, success } from "./Helper/Toast";

const PasswordManager = () => {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);

  const addPassword = () => {
    if (title.trim() === '' || id.trim() === '' || password.trim() === '') {
      error('One or more empty fields.'); // Display an error message
      return;
    }

    try {
      axios.post(`${BASE_URL}/Passwords/addPassword`, {
        id: id,
        password: password,
        title: title,
        userId: window.localStorage.getItem("userID"),
      });
      setPassword("");
      setId("");
      setTitle("");
      success("Password added successfully.")
    } catch (err) {
      error("Something went wrong.");
    }
  };

  return (
    <div className="bg-gray-900 text-green-400">
      <div className="px-4 py-16 text-center">
        {showPasswords ? (
          <MyPasswords setShowPasswords={setShowPasswords} />
        ) : (
          <AddPasswords
            id={id}
            setId={setId}
            password={password}
            setPassword={setPassword}
            title={title}
            setTitle={setTitle}
            addPassword={addPassword}
            setShowPasswords={setShowPasswords}
          />
        )}
      </div>
      <ToastContainer />;
    </div>
  );
};

export default PasswordManager;
