import axios from "axios";
import { useState, useEffect } from "react";

const SearchUserComponent = ({ onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUsers] = useState([]);
  
  const fetchUsers = async (term) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/user?search=${term}`);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchUsers(searchTerm);
    } else {
      setUsers([]); // Clear results if search term is empty
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Cari Anggota"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {user.map((user) => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.full_name} - {user.gmail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUserComponent;