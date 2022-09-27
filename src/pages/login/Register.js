import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonMe from '../shared/ButtonMe';
import AltLogin from './AltLogin';

const Register = () => {
    const navigate = useNavigate();
    const changeBtn = () => {
        navigate('/login');
    }
    return (
        <div className="h-screen flex justify-center items-center">
      <div className="p-6 border w-2/6">
        <h2 className="text-2xl text-center">Register</h2>
        <form className="grid gap-8 my-5">
          <input
            className="text-lg p-1 border w-full"
            type="text"
            placeholder="Full Name"
          />
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
          <ButtonMe>Register</ButtonMe>
        </form>
        <p>Don't have an account? <span onClick={changeBtn} className="text-sky-500 cursor-pointer hover:underline">Login</span></p>
      <AltLogin></AltLogin>
      </div>
    </div>
    );
};

export default Register;