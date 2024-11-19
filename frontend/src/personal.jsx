import  { useState } from 'react';
import Axios from 'axios';

const Personal = () => {
  const [personaltype, setPersonaltype] = useState('');
  const [userlist, setUserlist] = useState([]);

  const addpersonal = () => {
    Axios.post(`http://localhost:3000/profile/personal`, { 
      personaltype: personaltype 
    }).then(() => { 
      setUserlist([ 
        ...userlist, 
        { personaltype: personaltype } 
      ]); 
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Personal Type DISC</h1>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-gray-700 text-center">
            โปรดทำการคลิ๊กที่ปุ่มด้านล่างเพื่อทำการเริ่มแบบทดสอบ
          </p>
          
          <a 
            href='https://www.arealme.com/disc-personality-test/th/' 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full block text-center px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            ประเมิน personal type
          </a>
          
          <p className="text-sm text-red-600 text-center">
            หลังจากทำแบบประเมินกลับมายังหน้านี้เพื่อเติมผลลัพธ์และกด submit เพื่อบันทึกข้อมูล
          </p>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="กรอกผลลัพธ์ Personal Type"
              value={personaltype}
              onChange={(event) => setPersonaltype(event.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button 
              onClick={addpersonal}
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;