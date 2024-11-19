import { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
import { X, Heart, MapPin, ChevronLeft } from 'lucide-react';
=======
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860

const Swipe = () => {
  const [profiles] = useState([
    {
      name: 'น้องหงหยกหงไทย',
      age: 99,
<<<<<<< HEAD
      location: 'กรุงเทพมหานคร',
      skills: ['Skill1', 'Skill2', 'Skill3'],
      bio: 'ประวัติการเข้าร่วม',
      imgUrl: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
=======
      skills: ['Skill1', 'Skill2', 'Skill3'],
      bio: 'ประวัติการเข้าร่วม',
      imgUrl: 'https://images.unsplash.com/photo-1730191567375-e82ce67160df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFudW1hbnxlbnwwfHwwfHx8MA%3D%3D',
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
      iconUrl: '/api/placeholder/50/50',
    },
    {
      name: 'John Doe',
      age: 28,
<<<<<<< HEAD
      location: 'Bangkok',
      skills: ['JavaScript', 'React', 'Node.js'],
      bio: 'Experienced developer looking to contribute to hackathons!',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
=======
      skills: ['JhhhhavaScript', 'React', 'Node.js'],
      bio: 'Experienced developer looking to contribute to hackathons!',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1676111258345-d37b0aa20c72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFudW1hbnxlbnwwfHwwfHx8MA%3D%3D',
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
      iconUrl: '/api/placeholder/50/50',
    },
    {
      name: 'Jane Smith',
      age: 25,
<<<<<<< HEAD
      location: 'Chiang Mai',
      skills: ['Python', 'Machine Learning', 'Data Science'],
      bio: 'Data scientist eager to bring AI solutions to life.',
      imgUrl: '/api/placeholder/400/400',
=======
      skills: ['Python', 'Machine Learning', 'Data Science'],
      bio: 'Data scientist eager to bring AI solutions to life.',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1674898511299-bb6d9f586b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFudW1hbnxlbnwwfHwwfHx8MA%3D%3D',
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
      iconUrl: '/api/placeholder/50/50',
    },
  ]);

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [likedProfiles, setLikedProfiles] = useState([]);
  const [rejectedProfiles, setRejectedProfiles] = useState([]);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);

  const currentProfile = profiles[currentProfileIndex];

  const handleDragStart = (e) => {
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
<<<<<<< HEAD
=======
    
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
<<<<<<< HEAD
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
=======

    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
    const delta = {
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    };
<<<<<<< HEAD
=======
    
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
    setDragDelta(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
<<<<<<< HEAD
    const threshold = window.innerWidth * 0.3;
=======

    const threshold = window.innerWidth * 0.3;
    
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
    if (dragDelta.x > threshold) {
      handleLike();
    } else if (dragDelta.x < -threshold) {
      handleReject();
    } else {
      setDragDelta({ x: 0, y: 0 });
    }
<<<<<<< HEAD
=======
    
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
    setIsDragging(false);
  };

  const showNextProfile = () => {
    setDragDelta({ x: 0, y: 0 });
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    }
  };

  const handleLike = () => {
<<<<<<< HEAD
    setLikedProfiles([...likedProfiles, currentProfile]);
=======
    const likedProfile = profiles[currentProfileIndex];
    setLikedProfiles([...likedProfiles, likedProfile]);
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
    setTimeout(showNextProfile, 300);
  };

  const handleReject = () => {
<<<<<<< HEAD
    setRejectedProfiles([...rejectedProfiles, currentProfile]);
=======
    const rejectedProfile = profiles[currentProfileIndex];
    setRejectedProfiles([...rejectedProfiles, rejectedProfile]);
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
    setTimeout(showNextProfile, 300);
  };

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      const dragMoveHandler = (e) => handleDragMove(e);
      const dragEndHandler = () => handleDragEnd();
      
      card.addEventListener('touchstart', handleDragStart);
      card.addEventListener('touchmove', dragMoveHandler);
      card.addEventListener('touchend', dragEndHandler);
      
      return () => {
        card.removeEventListener('touchstart', handleDragStart);
        card.removeEventListener('touchmove', dragMoveHandler);
        card.removeEventListener('touchend', dragEndHandler);
      };
    }
  }, [isDragging, dragStart]);

  const rotation = (dragDelta.x / window.innerWidth) * 45;
  const opacity = Math.max(1 - Math.abs(dragDelta.x) / (window.innerWidth / 2), 0);
  const scale = Math.max(1 - Math.abs(dragDelta.x) / (window.innerWidth * 2), 0.9);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button className="p-2">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-semibold">Find Connections</h1>
          <div className="w-8" /> {/* Spacer for alignment */}
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 mt-4">
=======
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex flex-col items-center w-full max-w-4xl p-4">
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
        {currentProfile ? (
          <>
            <div 
              ref={cardRef}
<<<<<<< HEAD
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
=======
              className="relative w-full aspect-[3/4] max-w-2xl rounded-3xl shadow-2xl transition-transform"
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
              style={{
                transform: `translate(${dragDelta.x}px, ${dragDelta.y}px) rotate(${rotation}deg) scale(${scale})`,
                opacity: opacity,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
            >
<<<<<<< HEAD
              {/* Profile Image */}
              <div className="relative h-96">
                <img
                  src={currentProfile.imgUrl}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-semibold">{currentProfile.name}</h2>
                  <span className="text-gray-600">{currentProfile.age}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{currentProfile.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {currentProfile.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600">{currentProfile.bio}</p>
              </div>

              {/* Like/Nope Indicators */}
              {dragDelta.x !== 0 && (
                <>
                  <div 
                    className="absolute top-6 right-6 bg-green-500 text-white px-6 py-2 rounded-lg transform rotate-12 font-semibold"
=======
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60 rounded-3xl z-10" />
              
              <img
                src={currentProfile.imgUrl}
                alt="profile background"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
              
              {dragDelta.x !== 0 && (
                <>
                  <div 
                    className="absolute top-8 right-8 transform rotate-12 border-4 border-green-500 text-green-500 px-4 py-2 rounded-lg z-20"
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
                    style={{ opacity: dragDelta.x > 0 ? dragDelta.x / 200 : 0 }}
                  >
                    LIKE
                  </div>
                  <div 
<<<<<<< HEAD
                    className="absolute top-6 left-6 bg-red-500 text-white px-6 py-2 rounded-lg transform -rotate-12 font-semibold"
=======
                    className="absolute top-8 left-8 transform -rotate-12 border-4 border-red-500 text-red-500 px-4 py-2 rounded-lg z-20"
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
                    style={{ opacity: dragDelta.x < 0 ? -dragDelta.x / 200 : 0 }}
                  >
                    NOPE
                  </div>
                </>
              )}
<<<<<<< HEAD
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center mt-6 gap-6">
              <button
                onClick={handleReject}
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition-colors"
              >
                <X className="text-red-500" size={24} />
              </button>
              <button
                onClick={handleLike}
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
              >
                <Heart className="text-green-500" size={24} />
=======
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <div className="flex items-end mb-4">
                  <h1 className="text-4xl font-bold mr-4">{currentProfile.name}</h1>
                  <h2 className="text-2xl">{currentProfile.age}</h2>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProfile.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-white/90">{currentProfile.bio}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-8">
              <button
                onClick={handleReject}
                className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
              >
                ✕
              </button>
              <button
                onClick={handleLike}
                className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300"
              >
                ❤️
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
              </button>
            </div>
          </>
        ) : (
<<<<<<< HEAD
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-3">No more profiles!</h2>
            <p className="text-gray-600">You ve seen all available profiles.</p>
=======
          <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No more profiles!</h2>
            <p className="text-gray-600">You&apos;ve seen all available profiles.</p>
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
          </div>
        )}
      </div>
    </div>
  );
};

export default Swipe;