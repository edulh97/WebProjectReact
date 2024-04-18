import React from 'react';
import Footer from "../../components/footer/Footer";
import HeaderImage from "../../components/header-image/HeaderImage";
import Header from "../../components/header/Header";
import houses from "../../services/houses/houses.js";
import House from '../../components/house/House.jsx';
import './Home.css';
import Luxury from '../../components/luxury/Luxury.jsx';

function Home() {
  return (
    <>
      <Header />
      <HeaderImage />
      <Luxury />
      <div className="house-gallery">
        {houses.map((house, index) => (
          <House key={index} house={house} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;