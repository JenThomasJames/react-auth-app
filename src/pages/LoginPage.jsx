import React, { useRef, useState } from "react";

import LogoImage from "../assets/icon.svg";

import BorderInput from "../components/inputs/BorderInput";
import LinkButton from "../components/buttons/LinkButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import InfoCard from "../components/InfoCard";

import { validateNonEmpty } from "../utils/validateInput";
import { authenticateUser } from "../utils/apiRequests";
import { useNavigate } from "react-router-dom";
import ErrorText from "../components/ErrorText";

const LoginPage = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [isInvalidLogin, setIsInvalidLogin] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!validateNonEmpty(email)) {
      alert("Please enter your email.");
      return;
    }
    if (!validateNonEmpty(password)) {
      alert("Please enter your password.");
      return;
    }
    authenticateUser(email, password)
      .then((response) => {
        localStorage.setItem("email", response.data.email);
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setIsInvalidLogin(true);
          return;
        }
        console.log("Something went wrong: " + error.message);
      });
  };

  const signupHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="flex p-3 min-h-screen">
      <InfoCard title="Change the quality of your life" />
      <div className="flex justify-evenly items-center min-h-full flex-1 p-2">
        <div className="min-h-full p-10 flex flex-col items-center justify-evenly w-1/2">
          <div className="flex flex-col items-center gap-2 min-w-full">
            <img className="w-16" src={LogoImage} alt="logo" />
            <h1 className="text-slate-700 dark:text-slate-200">Hello Again!</h1>
            <p className="text-slate-400 text-base">
              Login to explore the whole new features of <br /> this new and
              enhanced authentication system!
            </p>
          </div>
          <form
            onSubmit={loginHandler}
            className="flex flex-col gap-5 min-w-full"
          >
            <BorderInput
              config={{
                type: "text",
                placeholder: "Enter Email",
              }}
              ref={emailRef}
              label="Email"
            />
            <BorderInput
              config={{
                type: "password",
                placeholder: "Enter Password",
              }}
              ref={passwordRef}
              label="Password"
            />
            {isInvalidLogin && (
              <div className="min-w-full flex justify-center">
                <ErrorText>Invalid username or password</ErrorText>
              </div>
            )}
            <div className="min-w-full flex justify-end">
              <LinkButton type="button">Forgot Password</LinkButton>
            </div>
            <PrimaryButton type="submit">Login</PrimaryButton>
          </form>
          <p className="text-base dark:text-slate-400">
            Don't have an account yet? &nbsp;
            <LinkButton type="button" onClick={signupHandler}>
              Sign up
            </LinkButton>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
