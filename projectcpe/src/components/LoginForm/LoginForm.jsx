import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/img/imagelogin.png')] to-skybg">
      <div className="bg-gradient-to-b from-bluebg to-skybg shadow-md rounded-lg p-12 w-90">
        <form action="">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Login</h1>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Username"
              required
              className="border border-gray-300 rounded-full w-full py-2 px-3 bg-white bg-opacity-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white"
            />
            <FaUser className="absolute right-4 top-3 text-white" />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              required
              className="border border-gray-300 rounded-full w-full py-2 px-3 bg-white bg-opacity-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white"
            />
            <FaLock className="absolute right-4 top-3 text-white" />
          </div>
          <div className="flex justify-between items-center mb-4 text-white ">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-black hover:underline ml-4">
              Forgot password?
            </a>
          </div>
          <button className="w-full bg-white text-black font-bold py-2 rounded-full hover:bg-gray-200 transition">
            Login
          </button>
          <div className="text-center mt-4">
            <p className="text-white">
              Don't have an account?{' '}
              <Link to="/Register" className="text-black hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
