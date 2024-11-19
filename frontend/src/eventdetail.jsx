const EventDetail = () => {
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-12 lg:p-24 text-white">
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-12">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Product"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">Hackathon</h2>
            <p className="text-lg italic mb-6">Motto of this hackathon</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <p className="text-lg">ประเภทการแข่งขัน:</p>
                <p className="font-semibold text-xl">👫 Team</p>
              </div>
              <div>
                <p className="text-lg mb-2">คุณสมบัติ:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ นักศึกษามหาวิทยาลัย</li>
                  <li>✅ อายุ 18-25 ปี</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* Details Section */}
        <div className="px-8 py-16 lg:px-24 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">รายละเอียดงาน</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            repudiandae explicabo necessitatibus. Fugit vitae officia aut
            voluptas, sed et facilis iusto ex iure consectetur sapiente.
            Repudiandae doloribus quidem ipsam nesciunt!
          </p>
        </div>
  
        {/* Reviews Section */}
        <div className="bg-gray-100 px-8 py-16 lg:px-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">รีวิว</h2>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-white rounded-lg p-6 shadow-lg flex flex-col space-y-2"
              >
                <h3 className="text-xl font-semibold text-gray-700">Review {i + 1}</h3>
                <p className="text-gray-600">This is a review content.</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Teams Section */}
        <div id="teamlist" className="px-8 py-16 lg:px-24 bg-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ทีมที่เปิดรับสมาชิก
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 9 }, (_, i) => (
                <div
                    key={i}
                    className="relative bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition"
                >
                    {/* Available spots badge */}
                    <div className="absolute top-4 left-4 bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-full shadow-md">
                    <span>👥 {i + 1}/4 members</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mt-8">Team {i + 1}</h3>
                    <p className="text-gray-600">Details about team {i + 1}.</p>
                </div>
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default EventDetail;
  