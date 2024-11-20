import { useState, useEffect, useRef } from 'react';
import { X, Heart, MapPin, ChevronLeft } from 'lucide-react';

const Swipe = () => {
  const [profiles] = useState([
    {
      name: 'น้องหงหยกหงไทย',
      age: 99,
      location: 'กรุงเทพมหานคร',
      skills: ['Skill1', 'Skill2', 'Skill3'],
      bio: 'ประวัติการเข้าร่วม',
      imgUrl: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
      iconUrl: '/api/placeholder/50/50',
    },
    {
      name: 'John Doe',
      age: 28,
      location: 'Bangkok',
      skills: ['JavaScript', 'React', 'Node.js'],
      bio: 'Experienced developer looking to contribute to hackathons!',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
      iconUrl: '/api/placeholder/50/50',
    },
    {
      name: 'Jane Smith',
      age: 25,
      location: 'Chiang Mai',
      skills: ['Python', 'Machine Learning', 'Data Science'],
      bio: 'Data scientist eager to bring AI solutions to life.',
      imgUrl: '/api/placeholder/400/400',
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
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    const delta = {
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    };
    setDragDelta(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    const threshold = window.innerWidth * 0.3;
    if (dragDelta.x > threshold) {
      handleLike();
    } else if (dragDelta.x < -threshold) {
      handleReject();
    } else {
      setDragDelta({ x: 0, y: 0 });
    }
    setIsDragging(false);
  };

  const showNextProfile = () => {
    setDragDelta({ x: 0, y: 0 });
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    }
  };

  const handleLike = () => {
    setLikedProfiles([...likedProfiles, currentProfile]);
    setTimeout(showNextProfile, 300);
  };

  const handleReject = () => {
    setRejectedProfiles([...rejectedProfiles, currentProfile]);
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
        {currentProfile ? (
          <>
            <div 
              ref={cardRef}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
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
                    style={{ opacity: dragDelta.x > 0 ? dragDelta.x / 200 : 0 }}
                  >
                    LIKE
                  </div>
                  <div 
                    className="absolute top-6 left-6 bg-red-500 text-white px-6 py-2 rounded-lg transform -rotate-12 font-semibold"
                    style={{ opacity: dragDelta.x < 0 ? -dragDelta.x / 200 : 0 }}
                  >
                    NOPE
                  </div>
                </>
              )}
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
              </button>
            </div>
          </>
        ) : (
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-3">No more profiles!</h2>
            <p className="text-gray-600">You ve seen all available profiles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swipe; 