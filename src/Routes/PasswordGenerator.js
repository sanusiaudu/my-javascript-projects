import { useState, useRef } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  const generatePassword = () => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => alert("Copied!"))
        .catch(() => alert("Copy failed!"));
    }
  };

  return (
    <div className="bg-[#0581ca] flex justify-center items-center min-h-screen ">
      <div className="box-border bg-white p-7">
        <h2 className="mb-7 text-[#015a96] text-2xl text-center font-bold">
          Random Password Generater
        </h2>
        <input
          value={password}
          ref={inputRef}
          type="text"
          placeholder="Create password"
          readonly
          className="p-5 select-none h-12 w-96 text-[#015a96] text-2xl border-2 border-[#015a96] rounded-lg mb-5"
        />
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={generatePassword}
            className="border border-[#015a96] w-2/5 bg-[#015a96] text-white text-lg font-semibold px-4 py-2 rounded-lg hover:bg-[#014a7c] transition-colors duration-300"
          >
            Generate
          </button>
          <button
            onClick={handleCopy}
            className="border border-[#015a96] w-2/5 bg-[#015a96] text-white text-lg font-semibold px-4 py-2 rounded-lg hover:bg-[#014a7c] transition-colors duration-300"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
