import { useState } from 'react';
import Dropdown from './Dropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
  };

  return (
    <header className="p-1 relative">
      <div className="flex flex-col items-center">
        {/* Dropdown for smaller screens */}
        <div className="m-1">
          <Dropdown />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={toggleMenu} // This is where toggleMenu is being used
          className="md:hidden flex items-center justify-center p-2 border-2 border-white rounded-md focus:outline-none mt-4 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Dropdown Menu (only visible when hamburger menu is toggled) */}
        {isMenuOpen && (
          <div className="md:hidden mt-1 flex flex-col space-y-4">
            <a href="#" className="flex items-center px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
              <img src="/image/rep.png" alt="Repositories" className="w-6 h-6 mr-2" />
              Repositories
            </a>
            <a href="#" className="flex items-center px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
              <img src="/image/AI Code.png" alt="AI Code Review" className="w-4 h-4 mr-2" />
              AI Code Review
            </a>
            <a href="#" className="flex items-center px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
              <img src="/image/cloud.png" alt="Cloud Security" className="w-4 h-4 mr-2" />
              Cloud Security
            </a>
            <a href="#" className="flex items-center px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
              <img src="/image/use.png" alt="How to Use" className="w-4 h-4 mr-2" />
              How to Use
            </a>
            <a href="#" className="flex items-center px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
              <img src="/image/settings.png" alt="Settings" className="w-4 h-4 mr-2" />
              Settings
            </a>
            <a href="#" className="flex items-center px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
              <img src="/image/support.png" alt="Support" className="w-4 h-4 mr-2" />
              Support
            </a>
            <a href="#" className="flex items-center px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
              <img src="image/logout.png" alt="Logout" className="w-4 h-4 mr-2" />
              Logout
            </a>
          </div>
        )}
      </div>

      {/* Navbar Links for larger screens (Vertical) */}
      <nav className="hidden md:flex flex-col space-y-1 mt-2 flex-grow">
        <a href="#" className="flex items-center m-1 px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
          <img src="/image/rep.png" alt="Repositories" className="w-6 h-6 mr-2" />
          Repositories
        </a>
        <a href="#" className="flex items-center m-1 px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
          <img src="/image/AI Code.png" alt="AI Code Review" className="w-4 h-4 mr-2" />
          AI Code Review
        </a>
        <a href="#" className="flex items-center m-1 px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
          <img src="/image/cloud.png" alt="Cloud Security" className="w-4 h-4 mr-2" />
          Cloud Security
        </a>
        <a href="#" className="flex items-center m-1 px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
          <img src="/image/use.png" alt="How to Use" className="w-4 h-4 mr-2" />
          How to Use
        </a>
        <a href="#" className="flex items-center m-1 px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
          <img src="/image/settings.png" alt="Settings" className="w-4 h-4 mr-2" />
          Settings
        </a>
      </nav>

      {/* Push Support and Logout to the bottom for larger screens */}
      <div className="md:flex flex-col mt-40">
        <a href="#" className="flex items-center bottom-0 m-1 px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
          <img src="/support.png" alt="Support" className="w-5 h-5 mr-2" />
          Support
        </a>
        <a href="#" className="flex items-center m-1 px-4 py-2 font-bold hover:bg-blue-600 rounded-md hover:text-white">
          <img src="/image/logout.png" alt="Logout" className="w-5 h-5 mr-2" />
          Logout
        </a>
      </div>
    </header>
  );
};

export default Header;
