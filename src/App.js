import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmitBtn = () => {
    if (
      fullName == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == ""
    ) {
      setIsEmpty(true);
    } else setIsEmpty(false);
    if (!(password === confirmPassword)) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };
  return (
    <>
      <div className=" p-36">
        <h1 className="text-3xl font-bold pb-4">Create Account</h1>
        <form className="flex flex-col">
          <input
            onChange={(e) => setFullName(e.target.value)}
            className=" mb-4 pb-1 outline-none border-b-2 border-gray-800 w-1/2"
            type="text"
            placeholder="FULL NAME"
          ></input>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 pb-1 outline-none border-b-2 border-gray-800 w-1/2"
            type="text"
            placeholder="EMAIL ADDRESS"
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 pb-1 outline-none border-b-2 border-gray-800 w-1/2"
            type="password"
            placeholder="PASSWORD"
          ></input>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-4 pb-1 outline-none border-b-2 border-gray-800 w-1/2"
            type="password"
            placeholder="CONFIRM PASSWORD"
          ></input>
        </form>
        <button
          onClick={() => handleSubmitBtn()}
          className=" mt-2  pl-8 pr-8 pt-2 pb-2 bg-teal-500 rounded-md hover:bg-lime-300"
        >
          Create Account
        </button>
        {isEmpty && (
          <p className="pt-4 text-red-600">
            Error: Please ensure to update all the fields
          </p>
        )}
        {!passwordMatch && (
          <p className="pt-4 text-red-600">
            Error: Make sure your password and confirm password is matching
          </p>
        )}
        {passwordMatch && !isEmpty && (
          <p className="pt-4 text-green-700">Successfully created!</p>
        )}
      </div>
    </>
  );
}

export default App;
