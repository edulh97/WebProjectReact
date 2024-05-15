import Confirmation from "../../components/confirmation/Confirmation";
import Footer from "../../components/footer/Footer";
import HeaderImage from "../../components/header-image/HeaderImage";
import Header from "../../components/header/Header";
import './contact.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIcon from "../../images/marker-icon.png";


function Contact() {
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
      <div className="contact-style">
        <Header />
        <HeaderImage />
        <Confirmation />
      </div>

        <Footer />

    </>
  );

}










export default Contact;