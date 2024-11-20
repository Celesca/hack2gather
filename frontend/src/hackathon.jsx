
const Hackathon = () => {
  return (
    <div>
      {/* หัวรอใส่รูป */}
      <div className="bg-gray-700 h-40 flex items-center justify-center mt-20">
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
          {Array(8)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded shadow overflow-hidden"
              >
                <img
                  src={`https://via.placeholder.com/300?text=+${index + 1}`}
                  alt={`สินค้า ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">
                     {index + 1}
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