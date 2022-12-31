import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import InfoCard from "../components/InfoCard";
import BorderInput from "../components/inputs/BorderInput";
import LinkButton from "../components/buttons/LinkButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ErrorText from "../components/ErrorText";

import LogoImage from "../assets/icon.svg";
import {
  validatePassword,
  validateNonEmpty,
  isEqual,
} from "../utils/validateInput";
import { isEmailAvailable, saveUser } from "../utils/apiRequests";

const SignupPage = () => {
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [isGenderInvalid, setIsGenderInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] =
    useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const validatePasswords = (password, confirmPassword) => {
    if (!validateNonEmpty(gender)) {
      setIsGenderInvalid(true);
      return false;
    }
    if (!validatePassword(password)) {
      setPasswordError("The password should contain at least 7 charecters.");
      setIsPasswordInvalid(true);
      return false;
    }
    if (!isEqual(password, confirmPassword)) {
      setPasswordError("The passwords does not match.");
      setIsConfirmPasswordInvalid(true);
      setIsPasswordInvalid(true);
      return false;
    }
    return true;
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const signupHandler = (event) => {
    event.preventDefault();
    const newUserDetails = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      age: ageRef.current.value,
      gender,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (
      !validatePasswords(
        newUserDetails.password,
        confirmPasswordRef.current.value
      )
    )
      return;

    //TODO ::: check if the email is already taken. If not, add the user to the database
    isEmailAvailable(newUserDetails.email)
      .then((response) => {
        if (response.data === "EMAIL_TAKEN") {
          setEmailError(
            "The email is already taken by another user. Try another email."
          );
          setIsEmailInvalid(true);
          return;
        }
        saveUser(newUserDetails)
          .then(() => {
            alert("Your account is registered. Login to continue.");
            navigate("/login");
          })
          .catch((error) => {
            console.log(
              "Couldn't register your new account at the moment: " +
                error.message
            );
          });
      })
      .catch((error) => {
        console.log("Something went wrong: " + error.message);
      });
  };

  return (
    <div className="flex p-3 min-h-screen">
      <div className="flex justify-evenly items-center min-h-full flex-1 p-2">
        <div className="min-h-full p-10 flex flex-col items-center justify-evenly w-1/2">
          <div className="flex flex-col items-center gap-2 min-w-full">
            <img className="w-16" src={LogoImage} alt="logo" />
            <h1 className="text-slate-700">Sign Up!</h1>
            <p className="text-slate-400 text-base">
              Create a free account and explore the whole new features of <br />
              this new and enhanced authentication system!
            </p>
          </div>
          <form
            onSubmit={signupHandler}
            className="flex flex-col gap-5 min-w-full"
          >
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <BorderInput
                  config={{
                    type: "text",
                    placeholder: "First Name",
                    required: "required",
                  }}
                  ref={firstnameRef}
                  label="First Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <BorderInput
                  config={{
                    type: "text",
                    placeholder: "Last Name",
                    required: "required",
                  }}
                  ref={lastnameRef}
                  label="Last Name"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <BorderInput
                  config={{
                    type: "number",
                    placeholder: "Age",
                    min: 0,
                    max: 100,
                    required: "required",
                  }}
                  ref={ageRef}
                  label="Age"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className={
                    !isGenderInvalid
                      ? "text-sm text-slate-400"
                      : "text-sm text-red-400"
                  }
                >
                  Gender
                </label>
                <div className="flex gap-5">
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-blue-400"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={(event) => setGender(event.target.value)}
                    />
                    <label className="text-sm text-slate-400" htmlFor="gender">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-blue-400"
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(event) => setGender(event.target.value)}
                    />
                    <label className="text-sm text-slate-400" htmlFor="gender">
                      Female
                    </label>
                  </div>
                </div>
                {isGenderInvalid && (
                  <ErrorText>This field is mandatory</ErrorText>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <BorderInput
                config={{
                  type: "email",
                  placeholder: "Email",
                  required: "required",
                }}
                ref={emailRef}
                label="Email"
                isInvalid={isEmailInvalid}
              />
              {isEmailInvalid && <ErrorText>{emailError}</ErrorText>}
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <BorderInput
                  config={{
                    type: "password",
                    placeholder: "Password",
                    required: "required",
                  }}
                  ref={passwordRef}
                  label="Password"
                  isInvalid={isPasswordInvalid}
                />
                {isPasswordInvalid && <ErrorText>{passwordError}</ErrorText>}
              </div>
              <div className="flex flex-col gap-2">
                <BorderInput
                  config={{
                    type: "password",
                    placeholder: "Confirm Password",
                    required: "required",
                  }}
                  ref={confirmPasswordRef}
                  label="Confirm Password"
                  isInvalid={isConfirmPasswordInvalid}
                />
                {isPasswordInvalid && <ErrorText>{passwordError}</ErrorText>}
              </div>
            </div>
            <PrimaryButton type="submit">Signup</PrimaryButton>
          </form>
          <p className="text-base dark:text-slate-400">
            Already have an account? &nbsp;
            <LinkButton type="button" onClick={loginHandler}>
              Login
            </LinkButton>
          </p>
        </div>
      </div>
      <InfoCard title="Start your journey with us" />
    </div>
  );
};

export default SignupPage;
