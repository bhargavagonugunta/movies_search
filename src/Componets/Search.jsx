import { useState } from "react";
import Result from "./Result";
import { Link } from "react-router-dom";
import axios from "axios";
import { BackendUrl } from "../Constants";
import { saveAs } from "file-saver";
import { decodeFromBase64, encodeToBase64 } from "pdf-lib";

const Search = () => {
  const [search, setsearch] = useState("");
  const [results, setresults] = useState([]);
  const [file, setfile] = useState(null);
  const [filedata, setfiledata] = useState([]);

  const handleSearch = (e) => {
    setsearch(e);
  };
  async function getSearch() {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=ba9113b9&s=" + search
    );
    const m_data = await response.json();
    setresults(m_data?.Search);
    console.log(m_data);
    //console.log(response);
  }
  const findobj =async ()=>{
    

  }

  const fileup = async (e) => {
    console.log(search);
    if (e) {
      const formData = new FormData();
      formData.append("file", e);

      //  const reader = new FileReader();

      // reader.onload = (event) => {
      //   const fileData = new Uint8Array(event.target.result);
      //   setfiledata(fileData);
      //   console.log(fileData);
      // };

      // reader.readAsArrayBuffer(e);

      // const formData = await encodeToBase64(filedata);
      // console.log(formData);
      axios
        .post(`${BackendUrl}/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("rended response");
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const filefetch = async () => {
    const respon = await axios.post(`${BackendUrl}/download`, {
      search,
    });
    const data = decodeFromBase64(respon.data);
    console.log(data);
    console.log(respon);
    const pdfBlob = new Blob([data], { type: "application/pdf" });
    saveAs(pdfBlob, "temp.pdf");
    console.log(pdfBlob);
    console.log("link click");
  };

  return (
    <>
      <div className="h-[100px] w-[100%]  bg-blue-200 ml-[30px] rounded-lg mt-[100px]">
        <label htmlFor="searchInput" className="mr-6 ml-2">
          Movie Search :
        </label>
        <input
          id="searchInput"
          className="w-[300px] mr-3 mt-[30px] h-8 rounded-lg  bg-slate-200 p-4 "
          type="text"
          placeholder="Movie Name "
          onChange={(e) => handleSearch(e.target.value)}
        />
        <label className="mr-3">Genre :</label>
        <select className=" w-[150px] rounded-lg mr-5 h-7 ">
          <option>All</option>
          <option>Horrer</option>
          <option>Comidy</option>
          <option>Action</option>
          <option>Thriller</option>
        </select>
        <button
          className="bg-yellow-100  rounded-lg w-[100px] justify-end"
          placeholder="SEARCH"
          name="search"
          onClick={getSearch}
        >
          Search
        </button>
      </div>
      <div>
        <input
          type="file"
          className="block w-[300px] text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-200 mt-6 px-5
    "
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
        />
        <button
          className="bg-[#2f2e33] text-white h-10 w-[130px] items-center rounded-lg shadow-md shadow-slate-500 hover:bg-black ml-[300px] "
          onClick={() => fileup(file)}
        >
          Upload
        </button>
        <button
          className="bg-[#2f2e33] mt-8 text-white h-10 w-[130px] items-center rounded-lg shadow-md shadow-slate-500 hover:bg-black ml-[300px] "
          onClick={filefetch}
        >
          Download
        </button>
        <button
          className="bg-[#2f2e33] mt-8 text-white h-10 w-[130px] items-center rounded-lg shadow-md shadow-slate-500 hover:bg-black ml-[300px] "
          onClick={findobj}
        >
          find One
        </button>
      </div>
      {results === undefined ? (
        <div>No Move Found For the {search}</div>
      ) : (
        <div className="flex flex-wrap">
          {results?.map(function (result) {
            return <Result key={result?.index} result={result} />;
          })}
        </div>
      )}
    </>
  );
};

export default Search;
