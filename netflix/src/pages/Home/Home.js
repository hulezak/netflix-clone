import React from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Banner from "../../Components/Banner/banner";
import RowList from "./../../Components/Rows/RowList/RowList";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
};

export default Home;
