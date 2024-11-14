import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState(0);
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  const [userlist, setUserlist] = useState([]);

  const getUsers = () => {
    
    Axios.get('http://localhost:3000/test').then((response) => {
      setUserlist(response.data);
    });
  };

  const addUsers = () => {
    
    Axios.post('http://localhost:3000/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      school: school,
      degree: degree,
      description: description,
      password: password
    }).then(() => {
      setUserlist([
        ...userlist,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          school: school,
          degree: degree,
          description: description,
          password: password
        }
      ]);
    });
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-bluebg to-skybg pt-20'>
      <div className="w-full max-w-2xl bg-gradient-to-b from-bluebg to-skybg text-white rounded-lg p-5 shadow-lg">
        <form action=''>
          <h1 className="text-4xl font-bold text-center mb-6">Register</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="First Name" 
                required 
                className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
                onChange={(event) => setFirstName(event.target.value)}
              />
              <FaUser className="absolute right-4 top-3 text-white" />
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Last Name" 
                required 
                className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
                onChange={(event) => setLastName(event.target.value)}
              />
              <FaUser className="absolute right-4 top-3 text-white" />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
                onChange={(event) => setEmail(event.target.value)}
              />
              <MdEmail className="absolute right-4 top-3 text-white" />
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="School" 
                required 
                className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
                onChange={(event) => setSchool(event.target.value)}
              />
              <FaUser className="absolute right-4 top-3 text-white" />
            </div>
            <div className="relative">
              <input 
                type="number" 
                placeholder="Degree" 
                required 
                className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
                onChange={(event) => setDegree(event.target.value)}
              />
              <FaUser className="absolute right-4 top-3 text-white" />
            </div>

            <div className="relative col-span-2">
              <textarea 
                placeholder="Short Description" 
                required 
                className="w-full h-32 px-4 py-2 bg-transparent border border-white rounded-lg text-white placeholder-white focus:outline-none focus:border-white resize-none"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>

          <div className="relative mt-6 mb-6">
            <input 
              type="password" 
              placeholder="Password" 
              required 
              className="w-full h-12 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white focus:outline-none focus:border-white"
              onChange={(event) => setPassword(event.target.value)}
            />
            <FaLock className="absolute right-4 top-3 text-white" />
          </div>

          <button onClick={addUsers}  className="w-full h-12 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition duration-300">
            Register
          </button>

          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account? 
              <Link to="/login" className="text-black font-semibold hover:underline ml-1">Go to login</Link>
            </p>
          </div>

          <div className='user mt-6'>
            <button className="btn btn-primary" onClick={getUsers}>Show Users</button>
            {userlist.map((val, key) => (
              <div className="user card mt-4" key={key}>
                <div className="card-body text-left">
                  <p className="card-text">First Name: {val.firstName}</p>
                  <p className="card-text">Last Name: {val.lastName}</p>
                  <p className="card-text">Description: {val.description}</p>
                  <p className="card-text">School: {val.school}</p>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
