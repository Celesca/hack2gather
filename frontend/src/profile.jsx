const Profile = () => {
  // Example user data (can be fetched dynamically via API)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate developer with a love for creating beautiful and functional web applications.",
    profileImage: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <>
      <div className="text-center p-5 font-sans bg-gray-100 rounded-lg max-w-md mx-auto mt-12 shadow-md">
        <img src={user.profileImage} alt={`${user.name}'s Profile`} className="w-36 h-36 rounded-full mb-5" />
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-500 mb-2">{user.email}</p>
        <p className="text-base">{user.bio}</p>
      </div>
    </>
  );
};

export default Profile;