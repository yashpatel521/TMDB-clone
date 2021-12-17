import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeBg from "./Home.jpg";
import { InputGroup, Button, Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router";
import CardCarosoul from "../../components/CardCarosoul/CardCarosoul";
import Loading from "../../components/Loading/Loading";
import { moviesAPIsCall } from "../../constants/MoviesConstant";

const Home = ({}) => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");
  const [onTv, setOntv] = useState();

  useEffect(() => {
    setOntv(moviesAPIsCall("movie/now_playing"));
  }, []);
  const SearchHandler = async (e) => {
    if (search) {
      navigation(`/Search?s=${search}`);
    }
  };

  console.log(onTv);
  return (
    <div style={{ marginTop: "70px" }}>
      {/* Img container for home page */}
      <div className=" bgContainer">
        <img src={HomeBg} alt="Snow"></img>
        <div className="centered">
          <p className="titlepara">Welcome.</p>
          <p className="subTitlepara">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <InputGroup style={{ padding: "0px 227px" }}>
            <input
              type="search"
              placeholder="Search"
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
      {/* tab view for movies  */}
      <div className="TabsContainer">
        <div className="TitleContainer">
          <p>What's Popular</p>
        </div>
        <Tabs
          defaultActiveKey="streaming"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {/* <Tab eventKey="streaming" title="Streaming" key="streaming">
            {true ? <Loading /> : <CardCarosoul data={onTv} />}
          </Tab>
          <Tab eventKey="ontv" title="On TV" key="ontv">
            <CardCarosoul data={onTv} />
          </Tab>
          <Tab eventKey="rent" title="For Rent" key="rent">
            <CardCarosoul data={onTv} />
          </Tab>
          <Tab eventKey="theaters" title="In theaters" key="theaters">
            <CardCarosoul data={onTv} />
          </Tab> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
