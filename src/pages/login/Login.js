import React, { useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firbase.init";
import ButtonMe from "../shared/ButtonMe";
import AltLogin from "./AltLogin";

const Login = () => {
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending, Reseterror] =
    useSendPasswordResetEmail(auth);
  console.log(Reseterror?.message);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.error(error?.message);
  if (error?.message === "(auth/wrong-password)") {
    console.log(error?.message);
  }
  const loginsubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const [email, setEmail] = useState("");
  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const [emailNot, setEmailNot] = useState("");
  const resetpassBtn = () => {
    if (!email) {
      setEmailNot("Please type email");
    }
    if (email) {
      sendPasswordResetEmail(email);
      setEmailNot("");
    }
  };

  const [loggedUser] = useAuthState(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loggedUser) {
    navigate(from, { replace: true });
  }
  
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 border w-2/6">
        <h2 className="text-2xl text-center">Login</h2>
        <form onSubmit={loginsubmit} className="grid gap-8 my-5">
          <input
            className="text-lg p-1 border w-full"
            type="email"
            onChange={emailInput}
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="text-lg p-1 border w-full"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          {error?.message && (
            <small className="text-red-500">{error?.message}</small>
          )}
          {Reseterror?.message && (
            <small className="text-red-500">{Reseterror?.message}</small>
          )}
          {emailNot && <small className="text-red-500">{emailNot}</small>}
          <span
            onClick={resetpassBtn}
            className="text-sky-500 w-fit cursor-pointer hover:underline"
          >
            Fogot Password?
          </span>
          <ButtonMe>Login</ButtonMe>
        </form>
        <p>
          Not have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
        <AltLogin></AltLogin>
      </div>
    </div>
  );
};

export default Login;
