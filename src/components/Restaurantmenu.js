import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatergory from "./ResCatergory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  const fileteredData =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories = fileteredData.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      {categories.map((catergory, index) => (
        <RestaurantCatergory
          key={catergory?.card?.card.name}
          data={catergory?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
