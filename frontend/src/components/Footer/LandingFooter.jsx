import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaGoogle, FaRss } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const LandingFooter = () => {
  return (
    <footer className="bg-blue-700 text-white font-poppins md:px-10">
      <div className="container mx-auto py-8 px-5">
        <div className="flex flex-col md:flex-row justify-between">
          {/* left */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg">FE Open Course</h3>
            <p className="mt-4 mb-2">Informasi Lebih Lanjut:</p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaGoogle />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaRss />
              </a>
            </div>
          </div>

          {/* right */}
          <div>
            <h3 className="font-bold text-lg">Kontak Kami:</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <FiMapPin className="mr-2" />
                Jl. Raya Kaligawe Km.4 Semarang 50112
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" />
                (024) 6583584 ext 537
              </li>
              <li className="flex items-center">
                <BsWhatsapp className="mr-2" />
                081329262505
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2" />
                fe@opencourse.ac.id
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-white" />

        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>copyright@2020</p>
          <p>
            Dibuat penuh dengan <span className="text-red-500">❤</span> oleh Azuralabs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
