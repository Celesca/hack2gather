import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Axios from 'axios'
import {useState} from 'react'
import imagelogin from './assets/imagelogin.png';
const Register = () => {
  const [userlist,setuserlist] = useState([])
  const getusers = () => {
    Axios.get('http://localhost:3000/test').then((response) =>{
      setuserlist(response.data)
    })
  }
  return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${imagelogin})` }}>      
         <div className="mt-20 w-full max-w-2xl bg-gradient-to-b from-bluebg to-skybg text-white rounded-lg p-5 shadow-lg">
        <form>
          <h1 className="text-4xl font-bold text-center mb-6">Register</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form Fields */}
            {['First Name', 'Last Name', 'Enter your email' ,'School', 'Degree', 'Education Level', 'Skills', 'Experience', 'rating'].map((placeholder, index) => (
              <div className="relative" key={index}>
                <input 
                  type={placeholder === 'Enter your email' ? 'email' : 'text'}
                  placeholder={placeholder} 
                  required 
                  className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
                />
                {placeholder === 'Enter your email' ? <MdEmail className="absolute right-4 top-3 text-white" /> : <FaUser className="absolute right-4 top-3 text-white" />}
              </div>
            ))}

            <div className="relative">
              <input 
                type="date" 
                required 
                className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
              />
            </div>

            <div className="relative col-span-2">
              <textarea 
                placeholder="Short Description" 
                required 
                className="w-full h-32 px-4 py-2 bg-transparent border border-white rounded-lg text-white placeholder-white focus:outline-none focus:border-white resize-none"
              />
            </div>
          </div>

          {/* Password Fields */}
          {['Password', 'Confirm Password'].map((placeholder, index) => (
            <div className="relative mt-6 mb-6" key={index}>
              <input 
                type="password" 
                placeholder={placeholder} 
                required 
                className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
              />
              <FaLock className="absolute right-4 top-3 text-white" />
            </div>
          ))}

          {/* Submit Button */}
          <button className="w-full h-12 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition duration-300">
            Send
          </button>

          {/* Link to Login */}
          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account? 
              <Link to="/login" className="text-black font-semibold hover:underline ml-1">Go to login</Link>
            </p>
          </div>
          <div className='user'>
            <button className="btn btn-primary" onClick={getusers}>show user</button>
            {userlist.map((val) => {
                return (
                    <div className="user card" key={val.firstName}>
                    <div className="card=body text-left">
                        <p className="card-text">firstName :{val.firstName}</p>
                        <p className="card-text">lastName :{val.lastName}</p>
                        <p className="card-text">description :{val.description}</p>
                    </div>
                    </div>
                );
                })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;