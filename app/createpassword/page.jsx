"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const createpassword = () => {
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <section className="flex h-screen bg-[#F9F9F9]">
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-[#F9F9F9]">
        <img src="/assets/logo.png" alt="vconnet" className="mb-6" />
        <h1 className="text-3xl font-bold text-[#B22222] mb-2">You are Welcome!</h1>
        <p className="text-sm text-primary mb-8">Please login/Signup to your account.</p>
        <form className="w-full max-w-md">
          <p className="block text-gray-700 text-sm font-bold mb-2 text-center text-[18px]" htmlFor="staff-id">
            Please create your password
          </p>
          <input
            className="appearance-none border w-full py-3 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={inputValue}
            onChange={handleInputChange}
          />

          <input
            className="appearance-none border w-full py-3 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value=""
            onChange={handleInputChange}
          />
          
          <div className="flex items-center justify-center mt-5">
            <button
              className={`font-normal py-3 px-10 w-[150px] focus:outline-none focus:shadow-outline rounded-full ${
                inputValue ? 'bg-primary text-white' : 'bg-gray-300 text-[#A0A0A0]'
              }`}
              type="button"
            >
              Continue
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
  )
}

export default createpassword