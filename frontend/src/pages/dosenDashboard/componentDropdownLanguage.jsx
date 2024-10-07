import React from "react";
import { useState } from "react";

const ComponentDropdownLanguage = ({languages}) => {
  
    const [selectedLanguage, setSelectedLanguage] = useState('Indonesia');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    // Fungsi untuk mengubah bahasa
    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
      setIsDropdownOpen(false);
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen); 
    };
  
    return (
      <div className="relative inline-block text-left">
        {/* Button Dropdown */}
        <button
          onClick={toggleDropdown}
          id="dropdownDefaultButton"
          className="text-black bg-white hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          {selectedLanguage} 
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
  
        {/* Dropdown menu */}
        {isDropdownOpen && ( 
          <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
            <ul className="py-2 te  xt-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              {languages.map((language) => (
                <li key={language}>
                  <button onClick={() => handleLanguageChange(language)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {language}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  

  export default ComponentDropdownLanguage