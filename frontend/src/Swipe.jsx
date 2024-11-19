import { useState, useEffect, useRef, useCallback } from 'react';

const Swipe = () => {
  const [profiles] = useState([
    {
      name: 'น้องหงหยกหงไทย',
      age: 99,
      skills: ['skill1', 'skill2', 'skill3'],
      bio: 'ประวัติการเข้าร่วม',
      imgUrl: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
    },
    // Add more profiles as needed
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

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return;

    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

    const delta = {
      x: clientX - dragStart.x,
      y: clientY - dragStart.y,
    };

    setDragDelta(delta);
  }, [isDragging, dragStart]);

  const handleDragEnd = useCallback(() => {
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
  }, [isDragging, dragDelta.x]);

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
  }, [isDragging, dragStart, handleDragMove, handleDragEnd]);

  const rotation = (dragDelta.x / window.innerWidth) * 45;
  const opacity = Math.max(1 - Math.abs(dragDelta.x) / (window.innerWidth / 2), 0);
  const scale = Math.max(1 - Math.abs(dragDelta.x) / (window.innerWidth * 2), 0.9);

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100 bg-gray-100">
      <div className="flex items-center bg-red-100 w-full max-w-3xl p-6">
        {currentProfile ? (
          <div
            ref={cardRef}
            className="relative w-full bg-white rounded-xl shadow-lg p-6"
            style={{
              transform: `translate(${dragDelta.x}px, ${dragDelta.y}px) rotate(${rotation}deg) scale(${scale})`,
              opacity: opacity,
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            <div className="flex flex-col items-center">
              <img
                src={currentProfile.imgUrl}
                alt={currentProfile.name}
                className="w-96 h-96 rounded-lg object-cover mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-900">{currentProfile.name}</h1>
              <span className="text-lg text-gray-600">{currentProfile.age} years old</span>
              <p className="text-gray-600 mt-2 text-center">{currentProfile.bio}</p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                {currentProfile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">No more profiles!</h2>
            <p className="text-gray-600">You&apos;ve seen all available profiles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swipe;
