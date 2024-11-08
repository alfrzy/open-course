import { useSelector } from "react-redux";
import { useFetchPurchasesByUserId } from "../../Data/dataPurchase";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import { useNavigate } from "react-router-dom";

const Pembelian = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.user?.id);  // Ambil userId dari objek user
  const { dataPurchase, loading, error } = useFetchPurchasesByUserId(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <DashboardNavbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-semibold mb-4">Pembelian</h1>
        {dataPurchase.map((purchase, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-md flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                <img
                  src={purchase.image_url || '/path/to/image-placeholder.png'}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{purchase.invoice_number}</p>
                <p className="text-sm text-gray-500">
                  Batas terakhir: {new Date().toLocaleDateString()}
                </p>
                <p className="text-lg font-semibold">{purchase.Course.name}</p>
                <p className="text-sm">{purchase.course_category}</p>
                <p className="text-sm text-gray-700 font-bold">
                  Rp.{purchase.Course.price.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={() => navigate(`/invoice/${purchase.id}`)} // Navigasi ke halaman invoice
              >
                Lihat Tagihan
              </button>
              {purchase.is_verification && (
                <div className="flex items-center text-green-600 font-semibold">
                  <span className="mr-1">✔️</span> Terverifikasi
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pembelian;
