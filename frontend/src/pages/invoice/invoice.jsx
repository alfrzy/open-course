import React from "react";
import { CgDanger } from "react-icons/cg";
import { FaCopy } from "react-icons/fa";
import { useFetchPurchases } from "../../Data/dataPurchase";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  const { dataPurchase, loading, error } = useFetchPurchases();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!dataPurchase || dataPurchase.length === 0)
    return <div>Pembelian tidak ditemukan</div>;

  const purchase = dataPurchase.find((pur) => pur.id === parseInt(id));

  if (!purchase) return <div>Pembelian tidak ditemukan</div>;

  return (
    <>
      <section className="bg-gray-100">
        <section className="p-10 md:p-14 font-poppins md:w-[80%] md:mx-auto  ">
          <section className=" md:flex md:justify-between md:flex-row-reverse">
            <div className="md:flex md:justify-end">
              <div className="bg-orange-100 border-[3px] border-solid border-orange-300 text-center md:flex md:items-center md:px-3">
                <div className="flex justify-center md:mr-6">
                  <CgDanger className="text-black w-10 h-10" />
                </div>
                <h1 className="font-bold md:mr-6">Tanggal Pembelian</h1>
                <h1 className="text-gray-800">
                  {new Date(purchase.created_at).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h1>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-xl font-bold md:text-3xl">PEMBELIAN</h1>
              <h1 className="text-md font-bold">#{purchase.invoice_number}</h1>
            </div>
          </section>

          <div className="mt-10">
            <h1 className="font-bold">Kepada</h1>
            <h1>{purchase.UserPurchase?.full_name || "Nama tidak tersedia"}</h1>
            <h1>{purchase.UserPurchase?.gmail || "Email tidak tersedia"}</h1>
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-xl md:text-3xl">Ringkasan</h1>
          </div>

          <div className="mt-2">
            <div className="bg-green-300 w-full h-[2px]"></div>
          </div>

          <div className="md:p-2">
            {purchase.Course ? (
              <TextBetween
                title={purchase.Course.name}
                price={`Rp. ${(purchase.Course.price || 0).toLocaleString()}`}
              />
            ) : (
              <p>Tidak ada item dalam pembelian ini.</p>
            )}
          </div>

          <div className="mt-2">
            <div className="bg-green-300 w-full h-[2px]"></div>
          </div>

          <div className="md:flex md:justify-end">
            <div className="mt-5 md:w-[30%]">
              <TextBetween
                title="Subtotal"
                price={`Rp. ${(purchase.subtotal || 0).toLocaleString()}`}
              />
              <TextBetween title="Diskon" price={`Rp. 0`} />
              <TextBetween
                title="Kode Unik"
                price={
                  purchase.total ? purchase.total.toString().slice(-3) : "000"
                }
              />

              <TextBetween
                title="Total"
                price={`Rp. ${(purchase.total || 0).toLocaleString()}`}
              />

              <div
                className="mt-2 flex gap-3 cursor-pointer md:justify-end"
                onClick={() =>
                  navigator.clipboard.writeText(purchase.total || 0)
                }
              >
                <FaCopy className="w-5 h-5 text-blue-500" />
                <h1>Copy Total</h1>
              </div>

              <div className="mt-5">
                <a href="">
                  <button className="w-full py-2 bg-blue-700 rounded-lg hover:bg-blue-500 transition-all duration-300">
                    <h1 className="text-white font-bold">
                      Konfirmasi Pembayaran
                    </h1>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

const TextBetween = ({ title, price }) => {
  return (
    <div className="md:flex md:justify-between">
      <h1>{title}</h1>
      <h1 className="font-bold">{price}</h1>
    </div>
  );
};

export default Purchase;
