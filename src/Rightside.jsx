import { useState } from 'react';

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Main Content */}
      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Toggle Sidebar
        </button>
        <p>Your main content goes here.</p>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`} // Hide sidebar on larger screens
      >
        <div className="p-4">
          <h2 className="text-xl">Sidebar</h2>
          <ul>
            <li><a href="#home" className="block py-2">Home</a></li>
            <li><a href="#about" className="block py-2">About</a></li>
            <li><a href="#contact" className="block py-2">Contact</a></li>
          </ul>
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 text-white"
          >
            X
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity ${
          isOpen ? 'block' : 'hidden'
        } md:hidden`}
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default RightSidebar;


