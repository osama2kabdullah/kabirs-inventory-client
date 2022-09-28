import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firbase.init";
import ButtonMe from "../shared/ButtonMe";
import AltLogin from "./AltLogin";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, varificationError] = useSendEmailVerification(auth);
  
  console.log(createUserError, updateError, varificationError);
  const [wrongpass, setWrongpass] = useState(false);
  
  const registersubmitBtn = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const displayName = e.target.name.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if(password !== confirmPassword){
      setWrongpass(true);
    }
    if(password === confirmPassword){
      setWrongpass(false);
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({displayName});
      await sendEmailVerification();
    }
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 border w-2/6">
        <h2 className="text-2xl text-center">Register</h2>
        <form onSubmit={registersubmitBtn} className="grid gap-8 my-5">
          <input
            className="text-lg p-1 border w-full"
            type="text"
            placeholder="Full Name"
            name="name"
            required
          />
          <input
          style={createUserError ? {border: '1px solid red'}:{border: '1px solid #ddd'}}
            className="text-lg p-1 border w-full"
            type="email"
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
          <input
          style={wrongpass ? {border: '1px solid red'}:{border: '1px solid #ddd'}}
            className="text-lg p-1 border w-full"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          {
            createUserError &&  <small className="text-red-500">{createUserError.message}</small>
          }
          {
            updateError &&  <small className="text-red-500">{updateError.message}</small>
          }
          {
            varificationError &&  <small className="text-red-500">{varificationError.message}</small>
          }
          <ButtonMe>Register</ButtonMe>
        </form>
        <p>
          Don't have an account?{" "}
          <span
            onClick={()=>navigate("/login")}
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
        <AltLogin></AltLogin>
      </div>
    </div>
  );
};

export default Register;
