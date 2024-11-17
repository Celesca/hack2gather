import Navbar from "./components/Navbar";

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
    <Navbar />
    <div style={styles.container}>
      <img src={user.profileImage} alt={`${user.name}'s Profile`} style={styles.profileImage} />
      <h1 style={styles.name}>{user.name}</h1>
      <p style={styles.email}>{user.email}</p>
      <p style={styles.bio}>{user.bio}</p>
    </div>
    </>
  );
};

// Inline styles for demonstration purposes
const styles = {
  container: "text-center p-5 font-sans bg-gray-100 rounded-lg max-w-md mx-auto mt-12 shadow-md",
  profileImage: "w-36 h-36 rounded-full mb-5",
  name: "text-2xl font-bold",
  email: "text-gray-500 mb-2",
  bio: "text-base",
};

export default Profile;