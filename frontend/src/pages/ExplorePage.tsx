import { RestaurantListContainer } from "@/components/expolore-page/All-Restaurants/RestaurantListContainer";
import { NearbyRestaurantListings } from "@/components/expolore-page/NearbyRestaurantListings";
import { Slider } from "@/components/expolore-page/Slider";

export const ExplorePage = () => {
  return (
    <div className="md:container w-[100%] md:w-[75%]">
      <Slider />
      <div className="mt-5">
      <NearbyRestaurantListings />
      </div>
      <div className="mt-4">
        <RestaurantListContainer />
      </div>
    </div>
  );
};
