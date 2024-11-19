// import Axios from 'axios';

const Personal = () => {
//   const [personaltype, setpersonaltype] = useState('');
//   const [userlist, setUserlist] = useState([]);
//   const addpersonal = () => {
    
//     Axios.post(`http://localhost:3000/profile/personal`, {
//         personaltype: personaltype
//     }).then(() => {
//       setUserlist([
//         ...userlist,
//         {
//             personaltype: personaltype
//         }
//       ]);
//     });
//   }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-bluebg to-skybg pt-20'>
      <div className="w-full max-w-2xl h-96 bg-gradient-to-b from-blue-100 to-blue-500 text-white rounded-lg p-5 shadow-lg">
        <form action=''>
          <h1 className="text-4xl font-bold text-center mb-6">Personal type DISC</h1>
            <p className='text-xl mb-6'>โปรดทำการคลิ๊กที่ปุ่มด้านล่างเพื่อทำการเริ่มแบบทดสอบ</p>
            <a href='https://www.arealme.com/disc-personality-test/th/' className="w-96 h-12 px-4 py-2  bg-red-500 border border-black rounded-lg text-white placeholder-white " >ประเมิน personal type</a>
            <p className='text-l text-red-600 mb-5 mt-5'>หลังจากทำแบบประเมินกลับมายังหน้านี้เพื่อเติมผลลัพธ์และกด submit เพื่อบันทึกข้อมูล</p>

          <div className="flex justify-normal flex-cols md:flex-cols  mb-10">
            <div className="relative ">
              <input 
                type="text" 
                placeholder="personal_type" 
                required 
                className="w-96 h-12 px-4 py-2 bg-transparent border border-white rounded-lg text-white placeholder-white focus:outline-none focus:border-white"
                // onChange={(event) => setpersonaltype(event.target.value)}
              />
              
            </div>
          </div>


          <button /*onClick={addpersonal}*/  className="w-full h-12 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition duration-300">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Personal;
