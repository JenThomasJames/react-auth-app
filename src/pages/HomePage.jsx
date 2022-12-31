import React from "react";
import { useNavigate } from "react-router-dom";
import LinkButton from "../components/buttons/LinkButton";

const HomePage = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-w-full min-h-screen flex flex-col gap-7 justify-center items-center bg-slate-100 dark:bg-slate-800">
      <h1 className="text-slate-800 dark:text-slate-500 text-9xl font-manrope text-center">
        THIS IS WHERE <br />
        <span className="text-blue-400  dark:text-blue-800">
          THE MAGIC HAPPENS...
        </span>
      </h1>
      <div className="flex items-center gap-2">
        <p className="text-base dark:text-slate-500">I have seen enough</p>
        <LinkButton onClick={logoutHandler}>Logout</LinkButton>
      </div>
    </div>
  );
};

export default HomePage;
