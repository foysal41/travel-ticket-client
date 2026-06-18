import Image from "next/image";
import HeroSection from "./components/homePage/HeroSection";
import AdvertisementSection from "./components/homePage/AdvertisementSection";
import LatestTicketsSection from "./components/homePage/LatestTicketsSection";
import PopularRoutes from "./components/homePage/PopularRoutes";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <AdvertisementSection></AdvertisementSection>
      <LatestTicketsSection></LatestTicketsSection>
      <PopularRoutes></PopularRoutes>
    </div>
  );
}
