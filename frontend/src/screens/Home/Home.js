import React from "react";
import TabsViews from "../../components/Tabs/TabsViews";
import SearchContainer from "../../components/HomeSearch/SearchContainer";

const Home = () => {
  const movieTab = {
    Streaming: "movie/now_playing",
    "On TV": "tv/on_the_air",
    "For Rent": "discover/movie",
    "In Theaters": "movie/popular",
  };

  const freeToWatch = {
    Movies: "trending/movie/week",
    TV: "trending/tv/week",
  };
  const trending = {
    Today: "trending/all/day",
    "This Week": "trending/all/week",
  };
  return (
    <div style={{ marginTop: "70px" }}>
      {/* Img container for home page */}
      <SearchContainer />
      <TabsViews title="What's Popular" routes={movieTab} />
      <TabsViews title="Free To Watch" routes={freeToWatch} />
      <TabsViews title="Trending" routes={trending} />
    </div>
  );
};

export default Home;
