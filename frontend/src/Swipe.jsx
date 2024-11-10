import { useState, useEffect } from 'react';
import './Swipe.css'; // Make sure to create this CSS file for animations

function Swipe() {
  const [profiles] = useState([
    {
      name: 'น้องหงหยกหงไทย',
      age: 99,
      skills: ['Skill1', 'Skill2', 'Skill3'],
      bio: 'ประวัติการเข้าร่วม',
      imgUrl: 'https://via.placeholder.com/400x500',
      iconUrl: 'https://via.placeholder.com/50x50',
    },
    {
      name: 'John Doe',
      age: 28,
      skills: ['JavaScript', 'React', 'Node.js'],
      bio: 'Experienced developer looking to contribute to hackathons!',
      imgUrl: 'https://via.placeholder.com/400x500',
      iconUrl: 'https://via.placeholder.com/50x50',
    },
    {
      name: 'Jane Smith',
      age: 25,
      skills: ['Python', 'Machine Learning', 'Data Science'],
      bio: 'Data scientist eager to bring AI solutions to life.',
      imgUrl: 'https://via.placeholder.com/400x500',
      iconUrl: 'https://via.placeholder.com/50x50',
    },
    // Add more profiles as needed
  ]);
  
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [likedProfiles, setLikedProfiles] = useState([]);
  const [rejectedProfiles, setRejectedProfiles] = useState([]);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const currentProfile = profiles[currentProfileIndex];

  useEffect(() => {
    console.log('Profile loaded:', profiles[currentProfileIndex]);
  }, [currentProfileIndex, profiles]);

  const showNextProfile = () => {
    setSwipeDirection(null); // Reset the swipe direction
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      console.log('No more profiles to show!');
    }
  };

  const handleLike = () => {
    const likedProfile = profiles[currentProfileIndex];
    setLikedProfiles([...likedProfiles, likedProfile]);
    console.log('Liked:', likedProfile.name);
    setSwipeDirection('right');
    setTimeout(showNextProfile, 500); // Delay to match animation duration
  };

  const handleReject = () => {
    const rejectedProfile = profiles[currentProfileIndex];
    setRejectedProfiles([...rejectedProfiles, rejectedProfile]);
    console.log('Rejected:', rejectedProfile.name);
    setSwipeDirection('left');
    setTimeout(showNextProfile, 500); // Delay to match animation duration
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-bluee">
        <div className="flex flex-col items-center">
          {currentProfile ? (
            <>
              {/* Profile Card */}
              <div
                className={`bg-gray-100 p-10 rounded-3xl shadow-lg swipe-card ${swipeDirection ? `swipe-${swipeDirection}` : ''}`}
                style={{ width: '70vw', height: '60vh', marginTop: '-10vh' }}
              >
                <div className="flex h-full">
                  <div className="w-1/3 p-4">
                    <img
                      src={currentProfile.imgUrl}
                      alt="profile pic"
                      className="rounded-lg object-cover h-full w-full"
                    />
                  </div>
                  <div className="w-2/3 p-4 overflow-y-auto">
                    <div className="flex items-center mb-4">
                      <h1 className="text-3xl font-bold mr-2">{currentProfile.name}</h1>
                      <h2 className="text-xl">{currentProfile.age}</h2>
                      <img src={currentProfile.iconUrl} alt="animal" className="ml-auto" />
                    </div>
                    <p className="text-lg mb-2">{currentProfile.skills.join(', ')}</p>
                    <p className="text-lg mb-2">{currentProfile.bio}</p>
                  </div>
                </div>
              </div>

              {/* Like & Reject Buttons */}
              <div className="flex justify-center mt-6 space-x-20">
                <button
                  onClick={handleReject}
                  className="w-20 h-20 bg-darkbluee rounded-full shadow-lg flex items-center justify-center text-3xl text-white hover:bg-gray-400 hover:text-darkbluee"
                >
                  <i className="fas fa-times"></i>
                </button>
                <button
                  onClick={handleLike}
                  className="w-20 h-20 bg-red-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-white hover:text-red-500 text-3xl"
                >
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </>
          ) : (
            <p className="text-2xl font-bold text-white mt-6">No more profiles to show!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Swipe;
