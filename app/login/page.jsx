"use client"
import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push(`/login`);
  };

  const handleSignup = () => {
    router.push(`/signup`);
  };
  return (
    <section className="flex h-screen bg-[#F9F9F9]">
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-[#F9F9F9]">
        <img src="/assets/logo.png" alt="vconnet" className="mb-6" />
        <h1 className="text-3xl font-bold text-[#B22222] mb-2">Welcome back!</h1>
        <p className="text-sm text-primary mb-8">
          Please{" "}
          <span onClick={handleLogin} className="underline cursor-pointer">
            login
          </span>
          /
          <span onClick={handleSignup} className="underline cursor-pointer">
            Signup
          </span>{" "}
          to your account.
        </p>
        <form className="w-full max-w-md">
          <p className="block text-gray-700 text-sm font-bold mb-2 text-center text-[18px]" htmlFor="staff-id">
            Please enter your Staff Identity number
          </p>
          <input
            className="appearance-none border w-full py-3 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="staff-id"
            type="text"
            placeholder="Enter Staff ID"
          />
          <input
            className="appearance-none border w-full py-3 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your Password"
          />
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm text-gray-600">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-[#B22222] hover:underline">Forgot Password?</a>
          </div>
          <div className="flex items-center justify-between ml-5 mr-5">
            <Link
              href="/welcome"
              className="bg-primary text-[#ffffff] font-bold py-3 px-10 focus:outline-none focus:shadow-outline rounded-full"
              type="button"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-white text-[#000000] font-bold py-3 px-10 rounded-full border-2 border-[#B22222] hover:bg-[#B22222] hover:text-white transition focus:outline-none focus:shadow-outline"
              type="button"
            >
              Signup
            </Link>
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

export default Login;
