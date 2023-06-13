import axios from "axios";
import { useState } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { success } from "./Toast";
import { BASE_URL } from "./BaseUrl";

const Password = ({ val }) => {
  const [decrypted, setDecrypted] = useState(false);
  const [hide, setHide] = useState(true);
  const [password, setPassword] = useState(val.password);

  const decryptPassword = async (encryption) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/Passwords/decryptPassword`,
        {
          password: encryption.password,
          iv: encryption.iv,
        }
        
      );
      setPassword(res.data);
      setDecrypted(true);
      setHide(false);
    } catch (error) {
      console.log(error);
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    success("Password copied to clipboard.");
  };

  return (
    <div className="border my-4 px-4 py-2 rounded-lg bg-slate-800 ">
      <h3 className="text-xl font-bold">{val.title}</h3>
      <p className="text-white text-lg my-1.5">{val.id}</p>
      <div className="mx-auto w-1/2 mt-3 bg-slate-900 hover:scale-105 duration-200 rounded-lg">
        {hide ? (
          <button
            className="p-2 text-white cursor-pointer "
            onClick={() => {
              decryptPassword({ password: val.password, iv: val.iv });
            }}
          >
            Show Password
          </button>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-white px-4 py-2 text-lg">{password}</p>
            <button onClick={copyPassword}>
              <HiOutlineClipboardCopy
                color="white"
                size={20}
                className="cursor-pointer hover:scale-105"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Password;
