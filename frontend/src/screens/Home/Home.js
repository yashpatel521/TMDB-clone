import React from "react";
import TabsViews from "../../components/Tabs/TabsViews";
import SearchContainer from "../../components/HomeSearch/SearchContainer";
import "./Home.css";
const Home = () => {
  const movieTab = {
    Streaming: {
      key: "streaming",
      url: "discover/movie",
      type: "with_watch_monetization_types=flatrate",
    },
    "On TV": {
      key: "OnTV",
      url: "tv/on_the_air",
    },
    "For Rent": {
      key: "ForRent",
      url: "discover/movie",
      type: "with_watch_monetization_types=rent",
    },
    "In Theaters": {
      key: "InTheaters",
      url: "discover/movie",
      type: "with_release_type=3|2",
    },
  };

  const freeToWatch = {
    Movies: {
      key: "movies",
      url: "trending/movie/week",
    },
    TV: {
      key: "tv",
      url: "trending/tv/week",
    },
  };
  const trending = {
    Today: {
      key: "today",
      url: "trending/all/day",
    },
    "This Week": {
      key: "thisWeek",
      url: "trending/all/week",
    },
  };
  return (
    <div style={{ marginTop: "70px" }}>
      {/* Img container for home page */}
      <SearchContainer />
      <TabsViews title="What's Popular" routes={movieTab} />
      <TabsViews title="Free To Watch" routes={freeToWatch} />
      <TabsViews className="trendingBg" title="Trending" routes={trending} />
    </div>
  );
};

export default Home;
