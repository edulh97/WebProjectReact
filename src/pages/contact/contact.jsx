import Community from "../../components/comunity/Comunity";
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
      <Community/>
      <Footer />

    </>
  );

}










export default Contact;