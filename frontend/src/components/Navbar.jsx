import { useState } from 'react';
import { Search, Menu, X, Bell } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-blue-700 p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto">
        {/* Main navbar content */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-white text-3xl font-bold tracking-wider cursor-pointer hover:opacity-90 flex items-center">
              <span className="bg-white text-purple-700 px-2 py-1 rounded-lg mr-2">H2G</span>
              Hack2gather
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ค้นหากิจกรรม..."
                className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white hover:text-purple-200 transition duration-300 font-medium">
              หน้าแรก
            </a>
            <a href="/register" className="text-white hover:text-purple-200 transition duration-300 font-medium">
              สมัครสมาชิก
            </a>
            <a href="/login" className="text-white hover:text-purple-200 transition duration-300 font-medium">
              เข้าสู่ระบบ
            </a>
            <a href="/profile" className="text-white hover:text-purple-200 transition duration-300 font-medium">
              โปรไฟล์
            </a>
            <a href="/EventDetail" className="text-white hover:text-purple-200 transition duration-300 font-medium">
              กิจกกรรม hackathon
            </a>
            <a href="/hackathon" className="text-white hover:text-purple-200 transition duration-300 font-medium">
              รวม hackathon
            </a>
            <a href="/Personal" className="text-white hover:text-purple-200 transition duration-300 font-medium">
              personal Type
            </a>
            <a href="/swipe" className="text-white hover:text-purple-200 transition duration-300 font-medium">
              จับคู่
            </a>
            {/* Notification Bell */}
            <button className="p-2 hover:bg-white/10 rounded-full transition duration-300">
              <Bell className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search - Only visible on mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="ค้นหากิจกรรม..."
              className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
            <div className="flex flex-col space-y-2 p-4">
              <a href="/" className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition duration-300">
                หน้าแรก
              </a>
              <a href="/register" className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition duration-300">
                สมัครสมาชิก
              </a>
              <a href="/login" className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition duration-300">
                เข้าสู่ระบบ
              </a>
              <a href="/profile" className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition duration-300">
                โปรไฟล์
              </a>
              <a href="/EventDetail" className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition duration-300">
              กิจกกรรม hackathon
              </a>
              <a href="/swipe" className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition duration-300">
                จับคู่
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;