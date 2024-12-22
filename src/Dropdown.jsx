import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-blue-600 text-white rounded-md w-60"  // Same width as dropdown
      >
        Email
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">  {/* Same width as button */}
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-center"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-center"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-center"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

// Export the Dropdown component
export default Dropdown;

