import React, { useState, useEffect } from "react";
import axios from "axios";
import MyPasswords from "./MyPasswords";
import AddPasswords from "./AddPasswords";
import { BASE_URL } from "./Helper/BaseUrl";

const PasswordManager = () => {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);


  const addPassword = () => {
    axios.post(`${BASE_URL}/Passwords/addPassword`, {
      id: id,
      password: password,
      title: title,
      userId: window.localStorage.getItem("userID"),
    });
    setPassword("");
    setId("");
    setTitle("");
  };

  
  return (
    <div className="bg-gray-900 text-green-400">
      <div className="px-4 py-16 text-center">
        {showPasswords ? (
          <MyPasswords
            setShowPasswords={setShowPasswords}
          />
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
    </div>
  );
};

export default PasswordManager;
