import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Result from "./Result";
const Search = () => {
  const [search, setsearch] = useState("");
  const [results, setresults] = useState([]);
  const handleSearch = (e) => {
    setsearch(e);
  };
  async function getSearch() {
    const response = await axios.get("http://localhost:3001/search", {
      params: {
        name: search,
      },
    });
    const m_data = response.data.Search;

    setresults(m_data);
  }
  console.log(results);
  return (
    <>
      <div className="h-[200px] w-[100%]  bg-blue-200 ml-[30px] rounded-lg mt-[100px]">
        <label htmlFor="searchInput" className="mr-6 ml-2">
          Movie Search :
        </label>
        <input
          id="searchInput"
          className="w-[300px] mr-3 mt-[30px] h-8 rounded-lg  bg-slate-200 "
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
      <div className="flex flex-wrap">
        {results?.map(function (result) {
            return <Result key={result?.index} result={result} />;
        })}
      </div>
    </>
  );
};
export default Search;
