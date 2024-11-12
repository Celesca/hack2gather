import React,{useEffect,useState} from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Axios from "axios";
const App =() => {

  /*const [data, setData] = useState("");
  const getData =async()=>{
    const response = await Axios.get('http://localhost:3000/test');
    setData(response.data);
  }

  useEffect(() => {
    getData()
  }, []);*/ 
  
  return (
    //<div>{data}</div>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      </div>
      
  );
};

export default App;