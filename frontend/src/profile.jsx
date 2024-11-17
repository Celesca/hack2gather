const Profile = () => {
  // Example user data (can be fetched dynamically via API)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate developer with a love for creating beautiful and functional web applications.",
    profileImage: "https://via.placeholder.com/150", // Placeholder image
    location: "San Francisco, CA",
    jobTitle: "Senior Software Engineer",
    company: "Tech Corp",
    connections: 500,
    skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
  };

  return (
    <>
      <div className="text-center p-5 font-sans bg-gray-100 rounded-lg max-w-md mx-auto mt-12 shadow-md">
        <img src={user.profileImage} alt={`${user.name}'s Profile`} className="w-36 h-36 rounded-full mb-5" />
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-500 mb-2">{user.email}</p>
        <p className="text-base">{user.bio}</p>
        <p className="text-gray-600 mt-4">{user.location}</p>
        <p className="text-gray-600">{user.jobTitle} at {user.company}</p>
        <p className="text-gray-600 mt-2">{user.connections} connections</p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {user.skills.map((skill, index) => (
              <li key={index} className="text-gray-700">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;