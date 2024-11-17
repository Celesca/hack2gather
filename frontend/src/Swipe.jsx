import { useState, useEffect, useRef } from 'react';

const Swipe = () => {
  const [profiles] = useState([
    {
      name: 'น้องหงหยกหงไทย',
      age: 99,
      skills: ['Skill1', 'Skill2', 'Skill3'],
      bio: 'ประวัติการเข้าร่วม',
      imgUrl: 'https://images.unsplash.com/photo-1730191567375-e82ce67160df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFudW1hbnxlbnwwfHwwfHx8MA%3D%3D',
      iconUrl: '/api/placeholder/50/50',
    },
    {
      name: 'John Doe',
      age: 28,
      skills: ['JhhhhavaScript', 'React', 'Node.js'],
      bio: 'Experienced developer looking to contribute to hackathons!',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1676111258345-d37b0aa20c72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFudW1hbnxlbnwwfHwwfHx8MA%3D%3D',
      iconUrl: '/api/placeholder/50/50',
    },
    {
      name: 'Jane Smith',
      age: 25,
      skills: ['Python', 'Machine Learning', 'Data Science'],
      bio: 'Data scientist eager to bring AI solutions to life.',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1674898511299-bb6d9f586b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFudW1hbnxlbnwwfHwwfHx8MA%3D%3D',
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
    const likedProfile = profiles[currentProfileIndex];
    setLikedProfiles([...likedProfiles, likedProfile]);
    setTimeout(showNextProfile, 300);
  };

  const handleReject = () => {
    const rejectedProfile = profiles[currentProfileIndex];
    setRejectedProfiles([...rejectedProfiles, rejectedProfile]);
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex flex-col items-center w-full max-w-4xl p-4">
        {currentProfile ? (
          <>
            <div 
              ref={cardRef}
              className="relative w-full aspect-[3/4] max-w-2xl rounded-3xl shadow-2xl transition-transform"
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
                    style={{ opacity: dragDelta.x > 0 ? dragDelta.x / 200 : 0 }}
                  >
                    LIKE
                  </div>
                  <div 
                    className="absolute top-8 left-8 transform -rotate-12 border-4 border-red-500 text-red-500 px-4 py-2 rounded-lg z-20"
                    style={{ opacity: dragDelta.x < 0 ? -dragDelta.x / 200 : 0 }}
                  >
                    NOPE
                  </div>
                </>
              )}
              
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
              </button>
            </div>
          </>
        ) : (
          <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No more profiles!</h2>
            <p className="text-gray-600">You&apos;ve seen all available profiles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swipe;