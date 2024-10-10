import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "../../components/Toolbar/EditorToolbar";

const AddMateri = () => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [showThumbnail, setShowThumbnail] = useState(false);
  // quill
  const [value, setValue] = useState("");
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
    console.log(value);
  };

  const showYoutube = (e) => {
    const url = e.target.value;
    setYoutubeUrl(url);

    const videoId = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (videoId) {
      setShowThumbnail(true);
    } else {
      setShowThumbnail(false);
    }
  };

  return (
    <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 md:ml-64">
          {/* content disini */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <h1 className="text-2xl font-bold">Tambah Materi - (course title)</h1>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-md px-5 py-2.5 focus:outline-none ">
              Simpan
            </button>
          </div>

          <hr className="border border-black my-5" />
          {/* content disini */}
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className=" col-span-2 bg-white p-6 rounded-lg shadow-md">
              <input type="text" className="mt-2 w-full p-2 border border-gray-300 rounded" placeholder="Judul Materi" value={title} onChange={(e) => setTitle(e.target.value)} />

              <h2 className="text-lg font-semibold mt-6">Isi Materi</h2>
              <EditorToolbar />
              <ReactQuill theme="snow" value={state.value} onChange={handleChange} placeholder={"Write something awesome..."} modules={modules} formats={formats} />
            </div>

            {/* Rinformasi materi */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Informasi Materi</h2>

              <div className="mt-6">
                {showThumbnail && youtubeUrl && (
                  <div className="mt-4">
                    <img src={`https://img.youtube.com/vi/${youtubeUrl.split("v=")[1]}/0.jpg`} alt="YouTube Thumbnail" className="w-full h-auto rounded-lg shadow-md" />
                  </div>
                )}
                <label className="block text-md font-medium text-gray-700">URL Video Materi</label>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Contoh: https://www.youtube.com/..." value={youtubeUrl} onChange={showYoutube} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMateri;
