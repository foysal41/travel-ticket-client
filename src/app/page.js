import Image from "next/image";
import HeroSection from "./components/homePage/HeroSection";
import AdvertisementSection from "./components/homePage/AdvertisementSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <AdvertisementSection></AdvertisementSection>
    </div>
  );
}
