import React from "react";
import { useState } from "react";

const ComponentDropdownInstructor = ({ instructors, onAddInstructor }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
  
    return (
      <div className="relative">
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center inline-flex items-center border border-gray-300 rounded-lg"
          type="button"
        >
          Pilih Instruktur
          <svg
            className={`w-2.5 h-2.5 ms-3 transform transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="py-1 text-sm text-gray-700">
              {instructors.map((instructor, index) => (
                <li key={index} className="hover:bg-gray-100">
                  <div className="flex justify-between items-center p-2">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                        src={instructor.imageUrl}
                        alt={instructor.name}
                      />
                      <div className="ml-2">
                        <h1 className="font-bold">{instructor.name}</h1>
                        <h1>{instructor.title}</h1>
                      </div>
                    </div>
                    <button
                      className="ml-4 px-2 py-1 border-2 border-solid border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 rounded-md "
                      onClick={() => {
                        onAddInstructor(instructor);
                        setIsDropdownOpen(false);
                      }}
                    >
                      Tambahkan Instuktur
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default ComponentDropdownInstructor;
  