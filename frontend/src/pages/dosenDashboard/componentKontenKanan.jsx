import React from "react";
import ComponentDropdownLanguage from "./componentDropdownLanguage";
import ComponentCheckboxTag from "./componentCheckboxTag";
import { useState } from "react";

const KontenKanan = ({ languages, Tags, handleTagClick, selectedTags }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  return (
    <>
      <section className="hidden lg:block lg:w-1/5 lg:ml-4 border-[1px] border-solid border-gray-400">
        {/* Informasi kelas */}
        <div className="bg-gray-400 py-2 flex items-center justify-center">
          <h1 className="font-bold">Informasi Kelas</h1>
        </div>

        {/* Durasi kelas */}
        <HeaderGray title={"Durasi Kelas"} />

        <section className="px-2">
          {/* Lama kelas */}
          <InputField id={"lamakelas"} label={"Durasi (minggu) "} placeholder={"6"} />

          {/* Lama <Kelas></Kelas> */}
          <InputField id={"lamakelas"} label={"Lama Kelas (jam/minggu)"} placeholder={"6"} />
        </section>

        {/* Harga kelas */}
        <HeaderGray title={"Harga kelas"} />

        <section className="px-2">
          {/* Harga */}
          <InputField id={"harga"} label={"Harga Kelas"} placeholder={"200.000"} />
        </section>

        {/* Bahasa materi */}
        <HeaderGray title={"Bahasa Materi"} />

        <section className="px-2">
          {/* Materi */}
          <div className="flex flex-col my-2">
            <label htmlFor="materi">
              <h1 className="font-bold text-sm">Materi</h1>
            </label>
            <ComponentDropdownLanguage languages={languages} />
          </div>

          {/* Transkrip video */}
          <div className="flex flex-col my-2">
            <label htmlFor="transkrip">
              <h1 className="font-bold text-sm">Transkrip Video</h1>
            </label>
            <ComponentDropdownLanguage languages={languages} />
          </div>
        </section>

        {/* Kategori */}
        <HeaderGray title={"Kategori"} />

        <section className="px-2 my-2">
          <ComponentCheckboxTag Tags={Tags} onTagClick={handleTagClick} />

          {/* tag kotak */}
          <div className="my-4">
            {selectedTags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-500 text-white rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
                {tag}
                <button onClick={() => handleTagClick(tag)} className="ml-1 text-gray-200"></button>
              </span>
            ))}
          </div>
        </section>

        {/* Gambar cover */}
        <HeaderGray title={"Gambar Cover"} />
        <section className="p-2">
          <div className="w-full h-32 border border-gray-300 bg-gray-300">{!isDeleted && <img src="https://picsum.photos/200/300" alt="" className="w-full h-full" />}</div>
          <div className="flex justify-between">
            <button className="bg-red-600 w-[50%] py-1 hover:bg-red-700 text-white font-bold" onClick={handleDelete}>
              Hapus
            </button>
            <button className="bg-green-600 w-[50%] py-1 hover:bg-green-700 text-white font-bold">Simpan</button>
          </div>
        </section>
      </section>
    </>
  );
};

export default KontenKanan;

const HeaderGray = ({ title }) => {
  return (
    <div className="bg-gray-300 py-2 px-2 flex justify-start items-center">
      <h1 className="font-bold">{title}</h1>
    </div>
  );
};

const InputField = ({ label, placeholder, id }) => {
  return (
    <div className="my-2">
      <label htmlFor={id}>
        <h1 className="font-bold text-sm">{label}</h1>
      </label>
      <input type="text" id={id} className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder={placeholder} />
    </div>
  );
};
