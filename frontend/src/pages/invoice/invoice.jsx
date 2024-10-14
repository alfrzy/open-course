import React from "react";
import { CgDanger } from "react-icons/cg";
import { FaCopy } from "react-icons/fa";

const Invoice = () => {
  return (
    <>
      <section className="p-10 md:p-14 font-poppins">
        <section className=" md:flex md:justify-between md:flex-row-reverse">
          {/* bg orange*/}
          <div className="md:flex md:justify-end">
            <div className="bg-orange-100 border-[3px] border-solid border-orange-300 text-center md:flex md:items-center md:px-3">
              <div className="flex justify-center md:mr-6">
                <CgDanger className="text-black w-10 h-10" />
              </div>
              <h1 className="font-bold md:mr-6">Tanggal Invoice</h1>
              <h1 className="text-gray-800">14/06/2020</h1>
            </div>
          </div>

          {/* text invoice dan id */}
          <div className="mt-10">
            <h1 className="text-xl font-bold md:text-3xl">INVOICE</h1>
            <h1 className="text-md font-bold">#abhbavd</h1>
          </div>
        </section>

        {/* kepada */}
        <div className="mt-10">
          <h1 className="font-bold">Kepada</h1>
          <h1>Ahmad Fauza Aulia</h1>
          <h1>fauzaalia@gmail.com</h1>
        </div>

        {/* ringkasan */}
        <div className="mt-10">
          <h1 className="font-bold text-xl md:text-3xl">Ringkasan</h1>
        </div>

        {/* line */}
        <div className="mt-2">
          <div className="bg-green-300 w-full h-[2px]"></div>
        </div>

        {/* text */}
        <div className="md:p-2">
          <TextBetween title="Manajemen Keuangan Pribadi" price="Rp. 235.000" />
          <TextBetween title="Manajemen Keuangan Pribadi" price="Rp. 235.000" />
        </div>

        {/* line */}
        <div className="mt-2">
          <div className="bg-green-300 w-full h-[2px]"></div>
        </div>

        {/* subtotal */}
        <div className="md:flex md:justify-end">
          <div className="mt-5  md:w-[30%]">
            {/* subtotal */}
            <TextBetween title="Subtotal" price="Rp. 470.000" />

            {/* Diskon */}
            <TextBetween title="Diskon" price="Rp. 0" />

            {/* Kode Unik */}
            <TextBetween title="Kode unik" price="266" />

            {/* Total */}
            <TextBetween title="Total" price="Rp. 470.226" />

            {/* Copy Total */}
            <div className="mt-2 flex gap-3 cursor-pointer md:justify-end ">
              <FaCopy className="w-5 h-5 text-blue-500" />
              <h1>Copy Total</h1>
            </div>

            {/* Button Konfirmasi */}
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

export default Invoice;
