import { useState, useEffect } from "react";
import Header from "./Header";
import Dropdown from "./Dropdown";

function App() {
  const repositories = [
    {
      name: "Design System",
      visibility: "Public",
      language: "React",
      size: "7320KB",
      updated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Public",
      language: "Javascript",
      size: "5817KB",
      updated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      language: "Python",
      size: "4521KB",
      updated: "5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Private",
      language: "Swift",
      size: "3096KB",
      updated: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Public",
      language: "Java",
      size: "6210KB",
      updated: "6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      language: "HTML/CSS",
      size: "1876KB",
      updated: "4 days ago",
    },
    {
      name: "social-network",
      visibility: "Private",
      language: "PHP",
      size: "5432KB",
      updated: "7 days ago",
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown automatically when the screen size exceeds the 'md' breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDropdownOpen(false); // Close dropdown when screen size is medium or larger
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the initial screen size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-1/5 flex flex-col items-start p-4 bg-gray-50 md:min-h-screen transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center md:justify-start justify-center mt-5">
          <img
            src="/src/image/logo.png"
            alt="Logo"
            className="w-10 h-10 object-cover mr-2"
          />
          <p className="text-xl font-bold hover:text-blue-500 transition-colors duration-300">
            CodeAnt AI
          </p>
        </div>

        {/* Sidebar Links */}
        <div className="mt-10 hidden md:block">
          <Header />
        </div>

        {/* Sidebar Toggle for Mobile */}
        <div className="md:hidden mt-4">
          <button
            onClick={toggleSidebar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-4/5 p-4 bg-white rounded-lg shadow-lg border border-gray-300">
        {/* Mobile Dropdown */}
        <div className="md:hidden flex justify-between items-center mb-4">
          {/* Left Side - Code Text */}
          <div className="flex items-center">
            <img
              src="/src/image/logo.png"
              alt="Logo"
              className="w-10 h-10 object-cover mr-2"
            />
            <p className="text-xl font-bold hover:text-blue-500 transition-colors duration-300">
              CodeAnt AI
            </p>
          </div>

          {/* Right Side - Open/Close Navbar Button */}
          <div className="flex items-center">
            <button
              onClick={toggleDropdown}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              {isDropdownOpen ? "Close Navbar" : "Open Navbar"}
            </button>
          </div>
        </div>

        {/* Dropdown - Now it will push content down */}
        {isDropdownOpen && (
          <div className="w-full bg-white shadow-lg z-20 mb-4">
            {/* Ensure that the dropdown button and content are aligned and have proper width */}
            <div className="w-full">
              <Dropdown />
              {[ 
                { name: "Repositories", icon: "/src/image/rep.png" },
                { name: "AI Code Review", icon: "/src/image/AI Code.png" },
                { name: "Cloud Security", icon: "/src/image/cloud.png" },
                { name: "How to use", icon: "/src/image/use.png" },
                { name: "Settings", icon: "/src/image/settings.png" },
                { name: "Support", icon: "/src/image/support.png" },
                { name: "Logout", icon: "/src/image/logout.png" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-4 py-2 font-bold rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="relative p-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
            <div>
              <h1 className="text-2xl font-bold hover:text-blue-500 transition-colors duration-300">
                Repositories
              </h1>
              <p className="text-sm text-gray-600 mt-1">33 total repositories</p>
            </div>
            <div className="flex space-x-2">
              {/* Refresh Button with Icon */}
              <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center">
                <img
                  src="/src/image/ref.png"
                  alt="Refresh"
                  className="w-4 h-4 mr-2"
                />
                Refresh All
              </button>
              {/* Add Button with Icon */}
              <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center">
                <img
                  src="/src/image/ad.png"
                  alt="Add"
                  className="w-4 h-4 mr-2"
                />
                Add Repositories
              </button>
            </div>
          </div>

          {/* Search Bar - Aligned with the repositories */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Repositories List */}
          {repositories.map((repo, index) => (
            <div
              key={index}
              className=" p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-slate-300 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <h2 className="text-lg font-semibold transition-all duration-300">
                  {repo.name}
                </h2>
                <button
                  className={`mt-2 sm:mt-0 px-2 py-1 ${
                    repo.visibility === "Public"
                      ? "text-cyan-400"
                      : "text-red-400"
                  } font-bold border border-gray-300 text-xs rounded-full`}
                >
                  {repo.visibility}
                </button>
              </div>
              <div className="flex flex-wrap text-xs text-gray-600 mt-1 space-x-4">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {repo.language}
                </p>
                <p className="flex items-center">
                  <img
                    src="src/image/book.png"
                    alt="Book Icon"
                    className="w-4 h-4 mr-2"
                  />
                  {repo.size}
                </p>
                <p>{repo.updated}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
