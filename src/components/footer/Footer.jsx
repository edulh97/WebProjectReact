import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIcon from "../../../public/marker-icon.png";
import "leaflet/dist/leaflet.css";


function Footer() {

  const markers = [
    {
      geocode: [28.1235, -15.4362]
    },
    {
      geocode: [27.997884, -15.416439]
    },
  ];

  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [38, 38]
  });

  return (
    <>
      <div className="footer-container">
        <div className="footer-subscription">
          <h3>Get promotions, private sales and news</h3>
          <form className="subscription-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-navigation">
          <ul className="footer-menu">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/AboutUs">About us</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><a href="/mirss.xml">RSS</a></li>
            <li><a href="https://www.figma.com/community/file/891374608655348853/website-of-architects-free-website">Inspiration</a></li>
          </ul>
        </div>

        <div className='footer-map-container'>
          <p className="visit-us-message">Visit us:</p>
          <MapContainer center={[27.9944, -15.4192]} zoom={13} scrollWheelZoom={false} style={{ height: '200px', width: '300px' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map(marker => (
              <Marker key={marker.geocode.toString()} position={marker.geocode} icon={customIcon} />
            ))}
          </MapContainer>
        </div>

        <div className="footer-social">
          <a href="https://www.youtube.com/watch?v=r7086iAv50Q" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="footer-icons" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="footer-icons" />
          </a>
          <a href="https://www.facebook.com/?locale=es_ES" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="footer-icons" />
          </a>
          <a href="https://github.com/edulh97/React-Project1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="footer-icons" />
          </a>
        </div>
        <div className="footer-rights">
          <p>𒌐 2024 GutsProduction. Todos los derechos reservados <a href="https://shoprenderview.aliexpress.com/credential/showcredential.htm?storeNum=5379102&spm=a2g0o.store_pc_promotion.pcShopHead_442856424.0">Política de Privacidad y Cookies</a> | <a href="https://shoprenderview.aliexpress.com/credential/showcredential.htm?storeNum=5379102&spm=a2g0o.store_pc_promotion.pcShopHead_442856424.0">Condiciones de Venta</a></p>
        </div>
      </div>
    </>
  )
}

export default Footer;