import React from 'react';
import Footer from "../../components/footer/Footer";
import HeaderImage from "../../components/header-image/HeaderImage";
import Header from "../../components/header/Header";
import houses from "../../services/houses/houses.js";
import './Home.css';
import Luxury from '../../components/luxury/Luxury.jsx';

function Home() {
  return (
    <>
      <Header />
      <HeaderImage />
      <div className="house-gallery">
        {houses.map((house, index) => (
          <div className="home-house">
            <div className='section'>
              <p className='house-title'>PROJECT</p>
              <p className='house-name'>{house.name}</p>
            </div>
            <div className='aside'>
              <img src={`${house.src}`} alt="fotodeunCasoplon" className='house-image' />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;