import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { BsEye } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { success } from "./Toast";
import { BASE_URL } from "./BaseUrl";

const Password = ({ val, deletePassword, updatePassword }) => {
  const [hide, setHide] = useState(true);
  const [edit, setEdit] = useState(false);
  const [password, setPassword] = useState<string>(val.password);
  let [newPassword, setNewPassword] = useState<string>(val.password);

  useEffect(() => {
    decryptPassword({ password: val.password, iv: val.iv });
  }, []);

  const decryptPassword = async (encryption) => {
    try {
      const res = await axios.post(`${BASE_URL}/Passwords/decryptPassword`, {
        password: encryption.password,
        iv: encryption.iv,
      });
      setPassword(res.data);
      setNewPassword(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    success("Password copied to clipboard.");
  };

  const handleUpdatePassword = () => {
    try {
      updatePassword(val._id, newPassword);
      setEdit(false);
      setHide(true);
      setPassword(newPassword);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelUpdatePassword = () => {
    setEdit(false);
    setHide(true);
    setNewPassword(password);
  };

  return (
    <div className="border my-4 px-4 py-2 rounded-lg bg-slate-800 ">
      <h3 className="text-xl font-bold">{val.title}</h3>
      <p className="text-white text-lg my-1.5">{val.id}</p>
      <div className="mx-auto w-fit mt-3 bg-slate-900 rounded-lg">
        {hide ? (
          <>
            <button
              className="text-white hover:-translate-y-1 duration-100 cursor-pointer bg-slate-700 rounded-md p-2"
              onClick={() => {
                setHide(false);
              }}
            >
              <BsEye size={20} />
            </button>
            <button
              className="p-2 hover:-translate-y-1 duration-100 text-white cursor-pointer mx-3 bg-slate-700 rounded-md"
              onClick={() => {
                setHide(false);
                setEdit(true);
              }}
            >
              <FiEdit size={20} />
            </button>
            <button
              className="p-2 hover:-translate-y-1 duration-100 text-white cursor-pointer bg-slate-700 rounded-md"
              onClick={() => {
                deletePassword(val._id);
              }}
            >
              <MdDeleteOutline size={20} />
            </button>
          </>
        ) : !edit ? (
          <div className="flex items-center px-4 py-2 justify-center">
            <div className="flex justify-between">
              <p className="text-white text-lg pr-2">{password}</p>
              <button onClick={copyPassword}>
                <HiOutlineClipboardCopy
                  color="white"
                  size={20}
                  className="cursor-pointer hover:scale-105"
                />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center px-4 py-2 justify-center">
              <input
                className="text-white text-lg bg-transparent border rounded-md p-2 border-green-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:inline-block">
              <button
                className="p-2 w-full sm-w-auto hover:bg-slate-800 text-white cursor-pointer mx-1.5 bg-slate-700 rounded-md"
                onClick={handleUpdatePassword}
              >
                <BsCheckLg
                  color="green"
                  size={20}
                  className="cursor-pointer hover:opacity-90"
                />
              </button>
              <button
                className="p-2 w-full sm-w-auto hover:bg-slate-800 text-white cursor-pointer ms-1.5 bg-slate-700 rounded-md"
                onClick={handleCancelUpdatePassword}
              >
                <RxCross1
                  color="red"
                  size={20}
                  className="cursor-pointer hover:opacity-90"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Password;
