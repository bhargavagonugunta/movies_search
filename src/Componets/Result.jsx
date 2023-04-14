import Search from "./Search";

const Result = (props) => {
  console.log("Props are", props.result);
  const result = props.result;
  return (
    <>
      <div className="m-4 flex bg-purple-200 pr-3 flex-wrap  rounded-lg ">
        <img className="w-[200px] rounded-lg" src={result?.Poster} />
        <div className="ml-6">
          <h3 className="mb-10 mt-2"> Name: {result?.Title}</h3>
          <p className="mb-10 mt-2" >Type:{result?.Type}</p>
          <p>Year Of Relese:{result?.Year}</p>
          <p>{result?.imdbId}</p>
        </div>
      </div>
    </>
  );
};
export default Result;
