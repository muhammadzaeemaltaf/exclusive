import React from "react";
import Banner from "./Banner";
import ProductSection from "../ProductSection";
import CategoriesSection from "../CategoriesSection";
import BannerSection from "../BannerSection";
import ExploreSection from "../ExploreSection";
import NewArrival from "../NewArrival";
import Section from "../Section";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <ProductSection
        badgeTitle="Today's"
        heading="Flash Sales"
        slider={true}
        timer={true}
        showBtn={true}
        showDiscount={true}
        showDiscountBagde={true}
      />
      <CategoriesSection />
      <ProductSection
        badgeTitle="This Month"
        heading="Best Selling Products"
        slider={false}
        timer={false}
        showDiscount={true}
      />
      <BannerSection />
      <ExploreSection />
      <NewArrival />
      <Section />
    </div>
  );
};

export default LandingPage;
