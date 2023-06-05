const AddPasswords = ({
  id,
  setId,
  password,
  setPassword,
  title,
  setTitle,
  addPassword,
  setShowPasswords
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-8">Add Passwords</h2>
      <div className="max-w-xs mx-auto">
      <input
          type="text"
          value={title}
          placeholder="Enter identifier. e.g: Facebook"
          onChange={(e) => setTitle(e.target.value)}
          className="focus:outline-none text-slate-800 px-6 py-3 mb-4 rounded w-full"
        />
        <input
          type="text"
          value={id}
          placeholder="Enter your email/username"
          onChange={(e) => setId(e.target.value)}
          className="focus:outline-none text-slate-800 px-6 py-3 mb-4 rounded w-full"
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="focus:outline-none text-slate-800 px-6 py-3 mb-4 rounded w-full"
        />
        <button
          onClick={addPassword}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-full"
        >
          Save Entry
        </button>
        <button
          onClick={() => setShowPasswords(true)}
          className="bg-slate-700 hover:bg-slate-600 text-white my-8 px-6 py-3 rounded w-full"
        >
          Show Passwords
        </button>
      </div>
    </>
  );
};

export default AddPasswords;
