import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  //   eslint-disable-next-line
  const [search, setSearch] = useSearchParams();
  const searchParm = search.get("s") || "";
  return (
    <div>
      <h1>{searchParm}</h1>
    </div>
  );
};

export default Search;
