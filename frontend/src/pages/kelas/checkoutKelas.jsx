import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; 
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import ComponentButton from "../../components/Button/ComponentButton";
import { useFetchCourses } from "../../Data/DataCourse";
import { useFetchPurchases, savePurchase } from "../../Data/dataPurchase";
import { saveUserCourse } from "../../Data/dataUserCourse";
import { useSelector } from "react-redux";

const generateUniqueCode = () => {
  return Math.floor(100 + Math.random() * 900);
};

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [uniqueCode, setUniqueCode] = useState(generateUniqueCode);

  // Fetch course data based on ID
  const {
    dataCourse,
    loading: courseLoading,
    error: courseError,
  } = useFetchCourses(null, null, id);

  // Fetch purchases data
  const {
    dataPurchase,
    loading: purchaseLoading,
    error: purchaseError,
  } = useFetchPurchases();

  // Get user_id from Redux
  const loggedInUserId = useSelector((state) => state.auth.user?.id);

  useEffect(() => {
    setUniqueCode(generateUniqueCode());
  }, []);

  const handleCheckout = async (e) => {
    e.preventDefault();
    // tanggal terbaru
    const enrollmentDate = new Date();
    // enrollment_date + duration
    const dueDate = new Date(
      enrollmentDate.getTime() + kelas.duration * 60 * 60 * 1000
    );

    // last id + 1
    let latestId = 0;
    dataPurchase.forEach((purchase) => {
      if (purchase.id > latestId) {
        latestId = purchase.id;
      }
    });
    const nextId = latestId + 1;

    // Generate invoice number using the next ID
    const invoiceNumber = `INV-${new Date().getTime()}${nextId}`;

    try {
      //  savePurchase
      const postResponse = await savePurchase({
        user_id: loggedInUserId,
        course_id: id,
        invoice_number: invoiceNumber,
        total: totalHarga,
      });

      if (postResponse.status === 201) {
        // save usercourse
        await saveUserCourse({
          course_id: id,
          user_id: loggedInUserId,
          is_finish: false,
          enrollment_date: enrollmentDate,
          due_date: dueDate,
        });
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Pendaftaran kursus berhasil!",
        }).then(() => {
          navigate(`/checkout-kelas-sukses/${nextId}`);
        });
      }
    }  catch (error) {
      console.error("Error during checkout:", error);
  
      if (error.message.includes("User sudah terdaftar di kelas ini")) {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Anda sudah terdaftar di kursus ini.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Anda Sudah Terdaftar.",
        });
      }
    }
  };

  // Check i
  if (courseLoading || purchaseLoading) return <div>Loading...</div>;
  if (courseError) return <div>Error: {courseError}</div>;
  if (purchaseError) return <div>Error: {purchaseError}</div>;

  const kelas = dataCourse[0];

  const totalHarga = kelas.price + uniqueCode;

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <Navbar />
      {/* Main Container */}
      <div className="container mx-auto py-10  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:flex md:justify-center">
          {/* Keranjang Section */}
          <div className="bg-white p-6 rounded shadow-md md:w-[50%]">
            <h2 className="text-xl sm:text-2xl text-blue-500 font-bold">
              Keranjang Kamu
            </h2>
            <div className="mt-4">
              <div className="flex items-center">
                <img
                  src={"https://picsum.photos/seed/picsum/200/300"}
                  alt={kelas.name}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{kelas.name}</h3>
                  <p className="text-gray-600">
                    Rp.{kelas.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">
                  Kode Kupon (optional)
                </label>
                <div className="flex mt-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Kode Kupon"
                    className="block w-full p-2 border rounded mr-2"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Terapkan
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Ringkasan</h3>
              <div className="mt-2">
                <div className="flex justify-between">
                  <p>{kelas.name}</p>
                  <p>Rp. {kelas.price.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                  <p>Kode Unik</p>
                  <p>{uniqueCode}</p>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <p>Total</p>
                  <p>Rp. {totalHarga.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <form onSubmit={handleCheckout}>
                <ComponentButton
                  text={"Beli Sekarang"}
                  color={"bg-blue-600"}
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
