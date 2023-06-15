import axios from "axios";
import { useState } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { BsEye } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { success } from "./Toast";
import { BASE_URL } from "./BaseUrl";

const Password = ({ val, deletePassword }) => {
  const [decrypted, setDecrypted] = useState(false);
  const [hide, setHide] = useState(true);
  const [edit, setEdit] = useState(false);
  const [password, setPassword] = useState(val.password);

  const decryptPassword = async (encryption) => {
    try {
      const res = await axios.post(`${BASE_URL}/Passwords/decryptPassword`, {
        password: encryption.password,
        iv: encryption.iv,
      });
      setPassword(res.data);
      setDecrypted(true);
      setHide(false);
    } catch (error) {
      console.log(error);
    }
  };


  
  // const deletePassword = async () => {
  //   try {
  //     const res = await axios.delete(
  //       `${BASE_URL}/Passwords/deletePassword/${
  //         val._id
  //       }?userId=${window.localStorage.getItem("userID")}`
  //     );

  //     // Remove the deleted password from the passwordList state
  //     setPasswordList((prevList) =>
  //       prevList.filter((pw) => pw._id !== val._id)
  //     );
  //     success("Password deleted.");
  //   } catch (error) {
  //     console.error(error);
  //     error("something went wrong.");
  //   }
  // };

 

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    success("Password copied to clipboard.");
  };

  return (
    <div className="border my-4 px-4 py-2 rounded-lg bg-slate-800 ">
      <h3 className="text-xl font-bold">{val.title}</h3>
      <p className="text-white text-lg my-1.5">{val.id}</p>
      <div className="mx-auto w-fit mt-3 bg-slate-900 rounded-lg">
        {hide ? (
          <>
            <button
              className=" text-white hover:-translate-y-1 duration-100 cursor-pointer bg-slate-700 rounded-md p-2"
              onClick={() => {
                decryptPassword({ password: val.password, iv: val.iv });
              }}
            >
              <BsEye size={20} />
            </button>
            <button
              className="p-2 hover:-translate-y-1 duration-100 text-white cursor-pointer mx-3 bg-slate-700 rounded-md"
              onClick={() => {
                deletePassword();
              }}
            >
              <FiEdit size={20} />
            </button>
            <button
              className="p-2 hover:-translate-y-1 duration-100 text-white cursor-pointer bg-slate-700 rounded-md"
              onClick={() => {
                deletePassword();
              }}
            >
              <MdDeleteOutline size={20} />
            </button>
          </>
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
