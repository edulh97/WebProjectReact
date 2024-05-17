import CreateCommunityHouse from "../../components/comunity/createCommunityHouse/CreateCommunityHouse";
import ReadCommunityHouses from "../../components/comunity/readCommunityHouses/ReadCommunityHouses";
import UpdateCommunityHouse from "../../components/comunity/update-community-house/UpdateCommunityHouse";
import Confirmation from "../../components/confirmation/Confirmation";
import Footer from "../../components/footer/Footer";
import HeaderImage from "../../components/header-image/HeaderImage";
import Header from "../../components/header/Header";
import './contact.css';

function Contact() {

  return (
    <>
      <div className="contact-style">
        <Header />
        <HeaderImage />
        <Confirmation />
      </div>
      <ReadCommunityHouses />

      <Footer />

    </>
  );

}










export default Contact;