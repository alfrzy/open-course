import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const ListPurchase = () => {
  const Data = [
    {
      invoiceId: "FEOC10421",
      dueDate: "21/06/2020",
      courseTitle: "Manajemen Keuangan Pribadi ",
      courseTitle2: "Manajemen Keuangan Pribadi 2",
      amount: "470.266,00",
      status: "unverified",
    },
    {
      invoiceId: "FEOC10421",
      dueDate: "21/06/2020",
      courseTitle: "Manajemen Keuangan Pribadi ",
      courseTitle2: "Manajemen Keuangan Pribadi 2",
      amount: "470.266,00",
      status: "verified",
    },
    {
      invoiceId: "FEOC10421",
      dueDate: "21/06/2020",
      courseTitle: "Manajemen Keuangan Pribadi ",
      courseTitle2: "Manajemen Keuangan Pribadi 2",
      amount: "470.266,00",
      status: "verified",
    },
  ];
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 p-7 font-poppins">
        <div className="container mx-auto py-5 px-5 md:px-10">
          <h1 className="font-bold pb-5 text-4xl">Pembelian</h1>
          <hr className="border mb-5 border-gray-400" />
          {Data.map((item, index) => (
            <div key={index} className="border p-4 rounded bg-white flex  justify-between  mb-4">
              <div className="flex items-center">
                <div className="w-24 h-24  rounded-md flex flex-col items-center justify-center">
                  <p className="font-bold text-sm">#{item.invoiceId}</p>
                  <img src="https://via.placeholder.com/60" alt="invoice logo" className="mt-2 w-20" />
                </div>
                <div className="ml-4 text-xs md:text-lg  ">
                  <div className="">
                    <p className="text-gray-500 ">
                      <span className="font-semibold text-black">Batas terakhir: </span> {item.dueDate}
                    </p>
                  </div>
                  <p className="text-gray-700 font-medium">{item.courseTitle}</p>
                  <p className="text-gray-700 font-medium">{item.courseTitle2}</p>
                  <p className="text-red-500 font-semibold">Rp. {item.amount}</p>
                </div>
              </div>
              <div className="flex text-right items-center">
                <button className="bg-blue-500 text-white text-xs md:text-lg px-2 py-2 md:px-4 md:py-2 rounded shadow-md hover:bg-blue-600 transition duration-300">Lihat Tagihan</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListPurchase;
