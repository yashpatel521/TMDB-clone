import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeBg from "./Home.jpg";
import { InputGroup, Button } from "react-bootstrap";
import "./SearchContainer.css";

const SearchContainer = () => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");
  const SearchHandler = async (e) => {
    if (search) {
      navigation(`/Search?s=${search}`);
    }
  };
  return (
    <div>
      <div className=" bgContainer">
        <img src={HomeBg} alt="Snow"></img>
        <div className="centered">
          <p className="titlepara">Welcome.</p>
          <p className="subTitlepara">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <InputGroup style={{ padding: "0px 170px" }}>
            <input
              type="search"
              placeholder="Search for a movie, tv show, person......"
              className="form-control rounded-coner"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Button
              className="homeBtn"
              onClick={(e) => {
                SearchHandler();
              }}
            >
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
