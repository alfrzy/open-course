import React, { useState, useEffect } from "react";
import axios from "axios";

const ComponentCheckboxTag = ({ onTagClick }) => {
  const [kategori, setKategori] = useState([]);

  useEffect(() => {
    const fetchKategori = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/kategori/getKategori");
        const kategoriData = response.data.data || [];
        setKategori(kategoriData);
      } catch (error) {
        console.error("Error fetching Kategori:", error);
      }
    };

    fetchKategori();
  }, []);

  const handleCheckboxChange = (item) => {
    onTagClick(item.id);
  };

  return (
    <div>
      {kategori.map((item, index) => (
        <div className="flex items-center mb-4" key={index}>
          <input
            id={`checkbox-${index}`}
            type="checkbox"
            value={item.id}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => handleCheckboxChange(item)}
          />
          <label htmlFor={`checkbox-${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <h1 className="text-[16px]">{item.title}</h1>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ComponentCheckboxTag;
