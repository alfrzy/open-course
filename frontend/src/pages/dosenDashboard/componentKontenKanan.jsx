import React, { useState } from "react";
import ComponentDropdownLanguage from "./componentDropdownLanguage";
import ComponentCheckboxTag from "./componentCheckboxTag";

const KontenKanan = ({ languages, Tags, handleTagClick, selectedTags }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  return (
    <>
      <section className="hidden lg:block lg:w-1/5 lg:ml-4 border-[1px] border-solid border-gray-400">
        <div className="bg-gray-400 py-2 flex items-center justify-center">
          <h1 className="font-bold">Informasi Kelas</h1>
        </div>

        <HeaderGray title={"Durasi Kelas"} />

        <section className="px-2">
          <InputField id="lamakelas" label="Durasi (minggu)" placeholder="6" />
          <InputField id="jamperminggu" label="Jam per Minggu" placeholder="6" />
        </section>

        <HeaderGray title="Harga Kelas" />
        <section className="px-2">
          <InputField id="harga" label="Harga Kelas" placeholder="200.000" />
        </section>

        <HeaderGray title="Bahasa Materi" />
        <section className="px-2">
          <DropdownSection title="Materi" languages={languages} />
          <DropdownSection title="Transkrip Video" languages={languages} />
        </section>

        <HeaderGray title="Kategori" />
        <section className="px-2 my-2">
          <ComponentCheckboxTag Tags={Tags} onTagClick={handleTagClick} />
          <TagDisplay selectedTags={selectedTags} onRemoveTag={handleTagClick} />
        </section>

        <HeaderGray title="Gambar Cover" />
        <section className="p-2">
          <CoverImage isDeleted={isDeleted} onDelete={handleDelete} />
        </section>
      </section>
    </>
  );
};

const HeaderGray = ({ title }) => (
  <div className="bg-gray-300 py-2 px-2 flex justify-start items-center">
    <h1 className="font-bold">{title}</h1>
  </div>
);

const InputField = ({ id, label, placeholder }) => (
  <div className="my-2">
    <label htmlFor={id} className="block font-bold text-sm mb-1">
      {label}
    </label>
    <input type="text" id={id} className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder={placeholder} />
  </div>
);

const DropdownSection = ({ title, languages }) => (
  <div className="flex flex-col my-2">
    <label htmlFor={title.toLowerCase()}>
      <h1 className="font-bold text-sm">{title}</h1>
    </label>
    <ComponentDropdownLanguage languages={languages} />
  </div>
);

const TagDisplay = ({ selectedTags, onRemoveTag }) => (
  <div className="my-4">
    {selectedTags.map((tag, index) => (
      <span key={index} className="inline-block bg-gray-500 text-white rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
        {tag}
        <button onClick={() => onRemoveTag(tag)} className="ml-1 text-gray-200">
          ✕
        </button>
      </span>
    ))}
  </div>
);

const CoverImage = ({ isDeleted, onDelete }) => (
  <div>
    <div className="w-full h-32 border border-gray-300 bg-gray-300">{!isDeleted && <img src="https://picsum.photos/200/300" alt="Cover" className="w-full h-full" />}</div>
    <div className="flex justify-between mt-2">
      <button className="bg-red-600 w-[50%] py-1 hover:bg-red-700 text-white font-bold" onClick={onDelete}>
        Hapus
      </button>
      <button className="bg-green-600 w-[50%] py-1 hover:bg-green-700 text-white font-bold">Simpan</button>
    </div>
  </div>
);

export default KontenKanan;
