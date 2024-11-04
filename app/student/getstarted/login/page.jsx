"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const handleContinue = () => {
    router.push(`/student`);
  };

  const handleLogin = () => {
    router.push(`/student/getstarted/login`);
  };

  const handleSignup = () => {
    router.push(`/student/getstarted`);
  };
  
  // Password states
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Password strength states
  

  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section className="flex h-screen bg-[#F9F9F9]">
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-[#F9F9F9]">
        <img src="/assets/logo.png" alt="vconnet" className="mb-6" />
        <h1 className="text-3xl font-bold text-[#B22222] mb-2">
          Welcome Back!
        </h1>
        <p className="text-sm text-primary mb-8">
          Please <span onClick={handleLogin} className="underline cursor-pointer">login</span>/<span onClick={handleSignup} className="underline cursor-pointer">Signup</span> to your account.
        </p>
        <form className="w-full max-w-md">
          <p className="block text-gray-700 text-sm font-bold mb-2 text-center text-[18px]">
            Please enter your matriculation number
          </p>
          <input
            className="appearance-none border w-full py-3 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="matric-id"
            type="text"
            placeholder="Enter matric number"
            value={inputValue}
            onChange={handleInputChange}
          />

          <input
            className="appearance-none border w-full py-3 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="password-id"
            type="password"
            placeholder="Enter your password"
          />
          <div className="flex justify-between items-center">
            <div className="gap-2 flex justify-between">
              <input type="checkbox" id="checkbox" className="" />
              <p className="text-[#0000005b] text-[12px]">Remember Me</p>
            </div>

            <div className="cursor-pointer">
              <p className="text-[#0000005b] text-[12px]">Forgot Password?</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-5">
            <button
              className={`font-normal py-3 px-10 w-[150px] focus:outline-none focus:shadow-outline rounded-full ${
                inputValue
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-[#A0A0A0]"
              }`}
              type="button"
              onClick={handleContinue}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 flex justify-center items-center p-10 bg-[#FFFFFF]">
        <div className="flex flex-col justify-center items-center">
          <img src="/assets/diploma.png" alt="Diploma" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
