const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">MyApp</div>
                <div className="space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">About</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                </div>
                <a href="/profile">
                    <img className="w-10 h-10 rounded-full" src="path/to/profile-image.jpg" alt="Profile" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;