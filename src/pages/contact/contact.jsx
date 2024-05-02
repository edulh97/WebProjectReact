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
        <div className="contact-row">
          <section>
            <Confirmation />
          </section>
          <aside>
            <p>You can also visit us!</p>
            <MapContainer center={[27.9944, -15.4192]} zoom={13} scrollWheelZoom={false} style={{ height: '160px', width: '290px' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {markers.map(marker => (
                <Marker key={marker.geocode.toString()} position={marker.geocode} icon={customIcon} />
              ))}
            </MapContainer>
          </aside>
        </div>
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </>
  );

}










export default Contact;