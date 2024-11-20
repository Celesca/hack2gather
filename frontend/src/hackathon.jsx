/*import Axios from 'axios'*/
const Hackathon = () => {
  const [hackathonID, ] = useState([])
  
  const getHackathon = () => {
    Axios.get('http://localhost:3307/{hackathonID}').then((response) =>{
      setHackathonlist(response.data)
      
    })
  }
  useEffect(() => {
    if (hackathonID) {  // ตรวจสอบว่า hackathonID มีค่า
      getHackathon();
    }
  }, [hackathonID]);


  return (
    <div>
      {/* หัวรอใส่รูป */}
      <div className="bg-gray-700 h-60 flex items-center justify-center pt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">
            ยินดีต้อนรับสู่ eiei
          </h1>
          <p className="mt-2 text-gray-300">
            พบกับกิจกรรมมากมาย
          </p>
        </div>
      </div>

      {/* เนื้อหา */}
      <div className="container mx-auto py-6">
        <h2 className="text-2xl font-semibold text-white mb-4">
          กิจกรรมแนะนำ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hackathonlist.map((hackathon, index) => (
              <div
                key={HackathonID}
                className="bg-gray-800 rounded shadow overflow-hidden"
              >
                <img
                  src={`https://via.placeholder.com/300?text=${hackathon.img}}`}
                  alt={`กิจกรรม ${hackathon.img}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">
                     {Name}
                  </h3>
                  <p className="text-sm text-gray-400">รายละเอียด...</p>
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathon;