import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonMe from "../shared/ButtonMe";
import AltLogin from "./AltLogin";

const Login = () => {
    const navigate = useNavigate();
    const changeBtn = () => {
        navigate('/register')
    }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 border w-2/6">
        <h2 className="text-2xl text-center">Login</h2>
        <form className="grid gap-8 my-5">
          <input
            className="text-lg p-1 border w-full"
            type="email"
            placeholder="Email"
          />
          <input
            className="text-lg p-1 border w-full"
            type="password"
            placeholder="Password"
          />
          <span className="text-sky-500 w-fit cursor-pointer hover:underline">Fogot Password?</span>
          <ButtonMe>Login</ButtonMe>
        </form>
        <p>Not have an account? <span onClick={changeBtn} className="text-sky-500 cursor-pointer hover:underline">Register</span></p>
      <AltLogin></AltLogin>
      </div>
    </div>
  );
};

export default Login;
