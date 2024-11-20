// Data/DataPurchase.js
import { useEffect, useState } from "react";
import axios from "axios";

const dataPurchaseApiUrl = `${import.meta.env.VITE_API_BASE_URL}/v1/purchase`;

// get
const useFetchPurchases = () => {
  const [dataPurchase, setDataPurchase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get(dataPurchaseApiUrl);
        if (response.data.error) {
          throw new Error(response.data.message);
        }
        setDataPurchase(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  return { dataPurchase, loading, error };
};

// post 
const savePurchase = async ({ user_id, course_id, invoice_number, total }) => {
  try {
    const response = await axios.post(`${dataPurchaseApiUrl}/save`, {
      user_id,
      course_id,
      invoice_number,
      total
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// get purchases by user_id
const useFetchPurchasesByUserId = (userId) => {
  const [dataPurchase, setDataPurchase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchases = async () => {
      setLoading(true); // Set loading true sebelum memulai fetch
      try {
        const response = await axios.get(`${dataPurchaseApiUrl}/user/${userId}`);
        if (response.data.error) {
          throw new Error(response.data.message);
        }
        setDataPurchase(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading false setelah selesai
      }
    };

    if (userId) { // Pastikan userId ada
      fetchPurchases();
    } else {
      setLoading(false); // Set loading false jika userId tidak ada
    }
  }, [userId]); // Menjalankan ulang ketika userId berubah

  return { dataPurchase, loading, error };
};


export { useFetchPurchases, useFetchPurchasesByUserId, savePurchase };
