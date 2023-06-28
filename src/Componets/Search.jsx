import { useState } from "react";
import Result from "./Result";
import { Link } from "react-router-dom";
import axios from "axios";
import { BackendUrl } from "../Constants";
const Search = () => {
  const [search, setsearch] = useState("");
  const [results, setresults] = useState([]);

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
  console.log(search);
  const fileup = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${BackendUrl}/upload`, formData)
      .then((response) => {
        console.log(response.data);
        // Handle successful response
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };
  const filefetch = async () => {
    axios.get(`${BackendUrl}/file`).then((response)=>{
      
    })
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
        <select className=" w-auto rounded-lg mr-5 ">
          <option>All</option>
          <option>Horrer</option>
          <option>Comidy</option>
          <option>Action</option>
          <option>Thriller</option>
        </select>
        <button
          className="bg-yellow-100  rounded-lg w-[100px]"
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
          onChange={(e) => {
            fileup(e);
          }}
        />
        <button onClick={filefetch}>Download</button>
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
