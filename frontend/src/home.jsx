import { useEffect } from 'react';

function Swipe() {
  useEffect(() => {
    console.log('Hello World');
  });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-bluee">
        {/* Column layout to stack white box and buttons */}
        <div className="flex flex-col items-center">
          {/* White box (Profile content) */}
          <div className="bg-gray-100 p-10 rounded-3xl shadow-lg" style={{ width: '70vw', height: '60vh', marginTop: '-10vh' }}>
            <div className="flex h-full">
              {/* Profile Image Section */}
              <div className="w-1/3 p-4">
                <img
                  src="https://via.placeholder.com/400x500"
                  alt="profile pic"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              {/* Text and Details Section */}
              <div className="w-2/3 p-4 overflow-y-auto">
                <div className="flex items-center mb-4">
                  <h1 className="text-3xl font-bold mr-2">น้องหงหยกหงไทย</h1>
                  <h2 className="text-xl">99</h2>
                  {/* Icon placeholder */}
                  <img src="https://via.placeholder.com/50x50" alt="animal" className="ml-auto" />
                </div>
                <p className="text-lg mb-2">Skill1, Skill2, Skill3</p>
                <p className="text-lg mb-2">ประวัติการเข้าร่วม</p>
                <p className="text-lg mb-2">ประวัติการเข้าร่วม</p>
              </div>
            </div>
          </div>

          {/* Circular Buttons Section */}
          <div className="flex justify-center mt-6 space-x-20">
            <button
              className="w-20 h-20 bg-darkbluee rounded-full shadow-lg flex items-center justify-center text-3xl text-white hover:bg-gray-400 hover:text-darkbluee"
            >
              <i className="fas fa-times"></i>
            </button>
            <button
            className="w-20 h-20 bg-red-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-white hover:text-red-500 text-3xl"
            >
               <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Swipe;
