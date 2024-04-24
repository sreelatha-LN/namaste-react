import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [fiteredRestaurants, setfiteredRestaurants] = useState([]);
  const { setUserInfo , loggedInUser} = useContext(UserContext);
  const [searchText, setsearchText] = useState("");
  console.log(listOfRestaurants, "listOfRestaurants");

  useEffect(() => {
    console.log("useEfect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json.data, "json.data");
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfiteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>you are offline !!!</h1>;

  const RestaurantCardPromotedLabel = withPromotedLabel(RestaurantCard);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredReastaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfiteredRestaurants(filteredReastaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4  flex items-center">
          <button
            className="px-4 py-2 bg-green-50"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (data) => data.info.avgRating > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
        <div className="m-4 p-4  flex items-center">
          <label>UserName : </label>
          <input className="border border-black p-2" onChange={(e)=>setUserInfo(e.target.value)}   value={loggedInUser}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {fiteredRestaurants.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            {restaurants.info ? (
              <RestaurantCardPromotedLabel resData={restaurants} />
            ) : (
              <RestaurantCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
