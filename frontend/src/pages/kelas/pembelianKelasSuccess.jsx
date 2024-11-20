import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ComponentButton from "../../components/Button/ComponentButton";
import Navbar from "../../components/Navbar/Navbar";
import { useFetchPurchases } from "../../Data/dataPurchase";
import { useNavigate } from "react-router-dom";


const PembelianKelasSukses = () => {
  const { id } = useParams();
  const [purchaseData, setPurchaseData] = useState(null);

  const navigate = useNavigate();


  // Fetch purchases data
  const {
    dataPurchase,
    loading: purchaseLoading,
    error: purchaseError,
  } = useFetchPurchases();

  useEffect(() => {
    // based id params
    const selectedPurchase = dataPurchase.find(
      (purchase) => purchase.id === parseInt(id)
    );
    setPurchaseData(selectedPurchase);
  }, [dataPurchase, id]);

  // Check
  if (purchaseLoading) return <div>Loading...</div>;
  if (purchaseError) return <div>Error: {purchaseError}</div>;
  if (!purchaseData) return <div>Data pembelian tidak ditemukan</div>;

  const totalHarga = purchaseData.total;
  const invoiceNumber = purchaseData.invoice_number;
  const courseName = purchaseData.Course.name;

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <Navbar />
      <div className="container mx-auto py-10">
        {/* Lebar kotak diperbesar */}
        <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-4">
            Checkout
          </h1>
          <p>Anda berhasil melakukan Pemesanan Kelas</p>
          <p className="font-semibold">{courseName}</p>
          <p className="text-gray-700">
            Seharga Rp.{totalHarga.toLocaleString()}
          </p>

          <div className="my-6">
            <p className="text-gray-600">No Invoice</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
              #{invoiceNumber}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <ComponentButton
              text={"Lihat Invoice"}
              color={"bg-gray-500"}
              onClick={() => {
                console.log("klik");
                
                navigate(`/invoice/${id}`)
              }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PembelianKelasSukses;
