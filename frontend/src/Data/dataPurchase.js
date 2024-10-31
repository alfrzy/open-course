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

export { useFetchPurchases, savePurchase };
